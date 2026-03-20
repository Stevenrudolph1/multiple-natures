# TAG ARCHITECTURE CANON V1

**Status:** CANONICAL — Tier 1  
**Version:** 1.0  
**Date:** 2025-12-24  
**Author:** Chief Architect  
**Approved By:** Steven Rudolph (Founder)  

---

## 1. Purpose

This document defines the canonical architecture for Xavigate's tag system. Tags are the primary mechanism for access control, content visibility, and user segmentation.

**This canon exists because:** The tag system grew organically without governance, causing P0 bugs including race conditions, orphaned references, and dual-source-of-truth inconsistencies. This canon prevents future drift.

---

## 2. Canonical Source of Truth

### 2.1 THE RULE

**`meta.user_tags` (junction table) is the ONLY canonical source for user tag assignments.**

All access checks, tag queries, and tag mutations MUST use this table.

### 2.2 Deprecated Sources (DO NOT USE)

| Source | Status | Notes |
|--------|--------|-------|
| `core.users.tags` (array) | DEPRECATED | Maintained by trigger for backward compat only |
| `core.users.access_tags` (array) | DEPRECATED | Legacy column, do not read |
| `core.users.view_tags` (array) | DEPRECATED | Maintained by trigger for backward compat only |

**New code MUST NOT read from array columns.** They exist only for legacy frontend compatibility and will be removed in Phase 3.

---

## 3. Schema Definition

### 3.1 Junction Table: `meta.user_tags`

```sql
CREATE TABLE meta.user_tags (
    user_id       UUID NOT NULL REFERENCES core.users(id) ON DELETE CASCADE,
    tag_name      VARCHAR(100) NOT NULL REFERENCES core.tags(name) ON DELETE CASCADE ON UPDATE CASCADE,
    tag_type      VARCHAR(20) NOT NULL DEFAULT 'access',
    assigned_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    assigned_by   UUID REFERENCES core.users(id) ON DELETE SET NULL,
    
    PRIMARY KEY (user_id, tag_name, tag_type)
);
```

### 3.2 Tag Definition Table: `core.tags`

```sql
CREATE TABLE core.tags (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name          VARCHAR(100) UNIQUE NOT NULL,
    description   TEXT,
    category      VARCHAR(50),
    parent_tag_id UUID REFERENCES core.tags(id) ON DELETE SET NULL,
    created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3.3 Constraints

| Constraint | Purpose |
|------------|---------|
| FK `user_id → core.users(id)` | User deletion cascades to tag assignments |
| FK `tag_name → core.tags(name)` | Cannot assign non-existent tag |
| CASCADE DELETE on tag | Tag deletion removes all user assignments |
| CASCADE UPDATE on tag | Tag rename updates all user assignments |
| PK `(user_id, tag_name, tag_type)` | Prevents duplicate assignments |

---

## 4. Tag Types

### 4.1 Access Tags (`tag_type = 'access'`)

Control feature and content access.

| Tag Pattern | Purpose | Examples |
|-------------|---------|----------|
| `access_admin` | Admin panel access | `access_admin`, `access_super_admin` |
| `access_xaviguide` | Practitioner features | `access_xaviguide` |
| `access_journeys` | Journey participation | `access_journeys` |
| `access_<course>` | Course-specific access | `access_the_four_cups`, `access_tiger_test` |
| `access_<feature>` | Feature flags | `access_audio`, `access_insights_hub` |

### 4.2 View Tags (`tag_type = 'view'`)

Control content visibility (what user sees in listings).

| Tag Pattern | Purpose |
|-------------|---------|
| `view_<content>` | Content appears in user's catalog |

### 4.3 Naming Conventions

**REQUIRED:**
- Lowercase with underscores: `access_my_feature`
- Prefix indicates type: `access_`, `view_`
- No spaces, no special characters
- Max 100 characters

**FORBIDDEN:**
- CamelCase: ❌ `accessMyFeature`
- Spaces: ❌ `access my feature`
- No prefix: ❌ `admin` (use `access_admin`)

---

## 5. Layer Ownership

### 5.1 Responsibility Matrix

| Operation | Owner Layer | Notes |
|-----------|-------------|-------|
| Tag CRUD (create tag definitions) | Identity Layer | Only Identity creates/deletes tags |
| Tag Assignment (assign to user) | Identity Layer | Only Identity assigns tags |
| Tag Access Check | Context Layer | Context validates, Navigation uses result |
| Tag Hierarchy Expansion | Identity Layer | Called by Context when needed |
| Tag-based Content Gating | Learning Layer | Reads from Context, doesn't query directly |

### 5.2 Layer Boundaries (ENFORCED)

**Identity Layer MAY:**
- Create, update, delete tag definitions in `core.tags`
- Assign, remove tags in `meta.user_tags`
- Expand tag hierarchies

**Context Layer MAY:**
- Query user tags for access validation
- Cache tag results for session duration
- Provide tag info to Navigation

**Context Layer MAY NOT:**
- Create or delete tags
- Assign tags to users
- Modify `meta.user_tags` directly

**Navigation Layer MAY:**
- Receive "user has access" boolean from Context
- Route based on access result

**Navigation Layer MAY NOT:**
- Query tags directly
- Make access control decisions (Context decides)

---

## 6. Canonical Service Module

### 6.1 Location

```
backend/api/shared/tag_service.py
```

**This is the ONLY module that should query `meta.user_tags`.**

### 6.2 Core Functions

```python
# Query functions
get_user_tags(user_id: UUID, tag_type: str, db: AsyncSession) -> Set[str]
get_all_user_tags(user_id: UUID, db: AsyncSession) -> Set[str]
user_has_tag(user_id: UUID, tag_name: str, db: AsyncSession) -> bool
user_has_any_tag(user_id: UUID, tag_names: List[str], db: AsyncSession) -> bool
user_has_all_tags(user_id: UUID, tag_names: List[str], db: AsyncSession) -> bool

# Convenience functions (backward compatible)
has_admin_access(user: User, db: AsyncSession) -> bool
has_super_admin_access(user: User, db: AsyncSession) -> bool
has_practitioner_access(user: User, db: AsyncSession) -> bool
has_journey_access(user: User, db: AsyncSession) -> bool

# Mutation functions (atomic)
add_user_tag(user_id: UUID, tag_name: str, tag_type: str, assigned_by: UUID, db: AsyncSession) -> bool
remove_user_tag(user_id: UUID, tag_name: str, tag_type: str, db: AsyncSession) -> bool
set_user_tags(user_id: UUID, tag_names: List[str], tag_type: str, assigned_by: UUID, db: AsyncSession) -> bool
```

### 6.3 Usage Pattern

```python
from api.shared.tag_service import has_practitioner_access, add_user_tag

# Access check
if has_practitioner_access(current_user, db):
    # User has access
    pass

# Tag assignment (atomic)
async with db.begin():
    success = await add_user_tag(
        user_id=target_user.id,
        tag_name='access_author',
        tag_type='access',
        assigned_by=current_user.id,
        db=db
    )
```

---

## 7. Tag Hierarchy

### 7.1 Parent-Child Relationships

Tags can have parent tags via `core.tags.parent_tag_id`.

**Example:**
```
access_admin (parent)
├── access_super_admin (child)
└── access_content_admin (child)
```

### 7.2 Expansion Rules

When checking access, child tags DO NOT automatically grant parent permissions.

**Explicit is better than implicit.** If a user needs `access_admin`, assign `access_admin`.

### 7.3 Canonical Expansion Function

```python
async def expand_tags_with_hierarchy(tag_names: List[str], db: AsyncSession) -> Set[str]:
    """Returns tag names plus all ancestor tags."""
    # Implementation in tag_service.py
```

---

## 8. Backward Compatibility

### 8.1 Array Sync Triggers

Database triggers automatically sync `meta.user_tags` → array columns:

| Trigger | Event | Action |
|---------|-------|--------|
| `trigger_sync_tags_after_insert` | INSERT on `meta.user_tags` | Rebuild array |
| `trigger_sync_tags_after_update` | UPDATE on `meta.user_tags` | Rebuild array |
| `trigger_sync_tags_after_delete` | DELETE on `meta.user_tags` | Rebuild array |

### 8.2 What This Means

- **Frontend** can continue reading `user.tags` array (for now)
- **Backend** MUST use `tag_service.py` for all operations
- **Arrays** are derived data, not source of truth

### 8.3 Deprecation Timeline

| Phase | Status | Array Columns |
|-------|--------|---------------|
| Phase 1 | ✅ COMPLETE | Arrays synced via triggers |
| Phase 2 | PLANNED | Refactor all callsites to `tag_service.py` |
| Phase 3 | FUTURE | Arrays become read-only computed columns |
| Phase 4 | FUTURE | Arrays removed |

---

## 9. Invariants (MUST BE TRUE)

### 9.1 Data Integrity

1. **FK Enforced:** Cannot assign tag that doesn't exist in `core.tags`
2. **Cascade Cleanup:** Deleting tag removes all user assignments
3. **No Orphans:** Every `tag_name` in `meta.user_tags` exists in `core.tags`
4. **Single Source:** All access checks query `meta.user_tags`

### 9.2 Operational

5. **Atomic Mutations:** Tag changes wrapped in transactions
6. **Audit Trail:** `assigned_at` and `assigned_by` recorded
7. **Layer Ownership:** Only Identity Layer mutates tags
8. **Sync Guaranteed:** Triggers keep arrays in sync (Phase 1-3)

### 9.3 Verification Queries

```sql
-- Invariant 1: No orphaned tags
SELECT COUNT(*) FROM meta.user_tags 
WHERE tag_name NOT IN (SELECT name FROM core.tags);
-- Expected: 0

-- Invariant 4: Array sync
SELECT COUNT(*) FROM core.users u
WHERE u.tags IS DISTINCT FROM (
    SELECT ARRAY_AGG(DISTINCT tag_name ORDER BY tag_name)
    FROM meta.user_tags
    WHERE user_id = u.id AND tag_type = 'access'
);
-- Expected: 0
```

---

## 10. Anti-Patterns (FORBIDDEN)

### 10.1 DO NOT

❌ **Query array columns in new code**
```python
# WRONG
user.tags  # Don't read this
```

❌ **Mutate arrays directly**
```python
# WRONG
user.tags.append('new_tag')
db.commit()
```

❌ **Bypass tag_service.py**
```python
# WRONG
db.execute("INSERT INTO meta.user_tags ...")
```

❌ **Check tags in Navigation layer**
```python
# WRONG - Navigation shouldn't query tags
if user_has_tag(user, 'access_admin'):  # in navigation code
```

### 10.2 DO

✅ **Use tag_service.py**
```python
from api.shared.tag_service import user_has_tag, add_user_tag
```

✅ **Use transactions for mutations**
```python
async with db.begin():
    await add_user_tag(...)
```

✅ **Let Context layer handle access checks**
```python
# Context layer provides access info to Navigation
```

---

## 11. Migration History

| Migration | Date | Description |
|-----------|------|-------------|
| `20251224_01` | 2025-12-24 | Create `meta.user_tags` junction table |
| `20251224_02` | 2025-12-24 | Migrate array data to junction table |
| `20251224_03` | 2025-12-24 | Create orphaned tags discovered in arrays |
| `20251224_04` | 2025-12-24 | Add FK constraint with CASCADE |
| `20251224_05` | 2025-12-24 | Add bidirectional sync triggers |

---

## 12. Related Canon

- `PRACTITIONER_JOURNEY_API_CONTRACT_V1.md` — Uses `access_xaviguide` tag
- `FRAMEWORK_PLUGIN_CONTRACT_V1.md` — Plugin visibility rules
- `ACCESS_CONTROL_CANON_V1.md` — Full access model (PLANNED)
- `COURSE_VISIBILITY_CANON_V1.md` — Course gating (PLANNED)

---

## 13. Amendment Process

This is a Tier-1 canonical document. Amendments require:

1. Written proposal with architectural justification
2. Impact analysis on dependent systems
3. CAO review and approval
4. Migration plan for existing data
5. Update to ARCHITECTURE_INDEX.md

---

## 14. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-24 | Initial canon based on P0 fix implementation |

---

**END OF CANON**

# MN Project — Canonical Governance

This repository contains the canonical governance documents for all Multiple Natures work, including theory, tools, training, and licensing.

---

## Purpose

These documents establish:
1. What Multiple Natures is and is not
2. How MN tools (including the MNTEST) may be used
3. The philosophical and operational boundaries for all MN work
4. The framework for licensing MN-inspired tools and programs

---

## Document Index

| File | Type | Purpose |
|------|------|---------|
| MN-GOV-00-foundations.md | Philosophy | Core MN theory and philosophical grounding |
| MN-GOV-01-orientation.md | Governance | Constraints on MN work and representation |
| MN-GOV-10-mntest-specifications.md | Technical | MNTEST design, validity, and usage boundaries |
| MN-GOV-11-mntest-governance.md | Governance | Who may use MNTEST and under what conditions |
| MN-GOV-20-licensing-framework.md | Governance | How others may create MN-inspired tools |

---

## Naming Conventions

### File Names

- Format: `MN-GOV-XX-name.md`
- Prefix: `MN-GOV-` for all MN governance documents
- Number: Two digits, zero-padded (00, 01, 02...)
- Name: Lowercase, hyphenated, descriptive
- Extension: `.md` (Markdown)

### Numbering

| Range | Purpose |
|-------|---------|
| 00 | Foundations (MN theory and philosophy) |
| 01-09 | Root governance (orientation, constraints, boundaries) |
| 10-19 | MNTEST specifications and governance |
| 20-29 | Licensing and IP framework |
| 30-39 | Training and certification (reserved for future) |
| 40-49 | Quality standards and compliance (reserved for future) |

### Metadata

Every document includes a metadata table:

| Field | Value |
|-------|-------|
| Status | Draft / Active / Deprecated |
| Version | X.Y |
| Created | YYYY-MM-DD |
| Last Modified | YYYY-MM-DD |
| Author | Name |

---

## Governance Hierarchy

```
Root Governance (Projects/governance/)
    │
    ├──> MN Project Governance (this folder)
    │       │
    │       ├──> MN-GOV-00 (Foundations) — MN theory
    │       ├──> MN-GOV-01 (Orientation) — Constraints on all MN work
    │       ├──> MN-GOV-10/11 (MNTEST) — Test specifications
    │       └──> MN-GOV-20 (Licensing) — IP and derivative works
    │
    └──> Other Project Governance (future)
```

**Inheritance:** MN Project governance inherits from root governance (GOV-00 through GOV-04). It may extend, specify, and apply—but may not override.

---

## Relationship to Root Governance

This governance **inherits** from:
- `/Projects/governance/GOV-00-foundations.md` (Philosophical foundation)
- `/Projects/governance/GOV-01-orientation.md` (Root governance principles)
- `/Projects/governance/GOV-02-decision-posture.md` (How decisions are made)
- `/Projects/governance/GOV-03-constraints-boundaries.md` (Non-negotiable constraints)
- `/Projects/governance/GOV-04-scope-exclusions.md` (What governance does not cover)

**Inheritance means:** Where root governance speaks, MN governance follows. Where root governance is silent, MN governance has jurisdiction within its domain.

---

## Change Process

Per root governance (GOV-01):

1. Change requires evidence from use, not argument from preference
2. Governance may change when lived experience reveals inaccuracy
3. Governance does not change because someone disagrees or finds it inconvenient

---

## Reference Documents

In addition to these governance documents, the following canonical documents inform MN work:
- `00_LENSES_MN_LENS_CANON.md` — How MN as a lens may and may not be used
- MN Terminology Skill — Proper terminology, capitalization, and philosophical alignment

---

*This governance applies for as long as the MN work continues. Anyone may exit the work and its governance at any time.*

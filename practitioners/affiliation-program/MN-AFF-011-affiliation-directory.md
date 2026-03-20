# OFFICIAL AFFILIATION DIRECTORY

---

**Document ID:** MN-AFF-011

**Title:** Official Affiliation Directory

**Type:** Public-Facing / Specification

**Version:** 1.1

**Status:** Draft

**Effective Date:** 2025-01-29

**Last Updated:** 2025-01-29

**Owner:** Steven Rudolph

**Supersedes:** None

**Related Documents:** MN-AFF-006, MN-AFF-007, MN-AFF-009

---

## Purpose

This document specifies the **Official MN Affiliation Directory** — a public, searchable listing of all currently affiliated practitioners.

The directory exists to:

- Allow public verification of MN practitioner status
- Provide visibility for affiliated practitioners
- Maintain transparency and trust in the MN ecosystem

---

## Core Function

**One-click verification.**

Anyone can check whether a practitioner is currently affiliated with Multiple Natures.

---

## PART A — PUBLIC DISPLAY

### What the Public Sees

| Field | Displayed | Notes |
|-------|-----------|-------|
| Name | Yes | Professional name as submitted |
| Country | Yes | Required for all listings |
| City / Region | If provided | Optional |
| Website | If provided | Clickable link |
| Status | Implied | Only active affiliates appear |

### What the Public Does NOT See

| Field | Displayed | Reason |
|-------|-----------|--------|
| Email address | No | Privacy |
| Affiliation start date | No | Not relevant to verification |
| Affiliation expiry date | No | Internal only |
| Payment history | No | Confidential |
| Certification history | No | Separate from affiliation |
| MNTEST usage | No | Confidential |

### Directory Listing Example

```
┌─────────────────────────────────────────┐
│ Maria Santos                            │
│ São Paulo, Brazil                       │
│ www.mariasantos.com                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ David Chen                              │
│ Singapore                               │
│ www.davidchen.sg                        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Sarah Thompson                          │
│ London, United Kingdom                  │
│ (no website provided)                   │
└─────────────────────────────────────────┘
```

---

## PART B — SEARCH & FILTER

### Search Functionality

Users can search by:

| Search Type | Example |
|-------------|---------|
| Name | "Sarah" or "Thompson" |
| Country | "United Kingdom" |
| City / Region | "London" |

### Filter Options

| Filter | Options |
|--------|---------|
| Country | Dropdown of all countries with affiliates |
| Region | If applicable, based on country selection |

### Sort Options

| Sort | Default |
|------|---------|
| Alphabetical (A-Z) | Yes (default) |
| Alphabetical (Z-A) | Optional |
| Country | Optional |

---

## PART C — LISTING LIFECYCLE

### When a Listing Appears

A practitioner appears in the directory when:

1. Application is submitted
2. Terms & Conditions are accepted
3. Payment is confirmed
4. Affiliation is activated

**Timing:** Within 24 hours of activation (typically immediate)

### When a Listing Is Updated

A practitioner's listing is updated when:

- They update their profile information
- They renew their affiliation (no visible change, just extended)

**Timing:** Within 24 hours of change (typically immediate)

### When a Listing Is Removed

A practitioner is removed from the directory when:

| Event | Removal Timing |
|-------|----------------|
| Affiliation lapses (non-renewal) | Immediate at expiry |
| Affiliation is revoked | Immediate upon revocation |
| Practitioner requests removal | Within 24 hours |
| Practitioner requests early termination | Immediate |

### No "Lapsed" Status Displayed

Lapsed practitioners are **removed**, not marked as lapsed.

The directory shows only currently active affiliates.

**Note:** Removal from the directory does not affect certification. Certification is a permanent historical record that is NEVER revoked. Directory listing reflects current affiliation status only.

---

## PART D — PRACTITIONER CONTROLS

### What Practitioners Can Edit

| Field | Editable | Notes |
|-------|----------|-------|
| Professional name | Yes | Subject to verification for major changes |
| City / Region | Yes | |
| Website | Yes | |
| Country | Yes | Requires verification |

### What Practitioners Cannot Edit

| Field | Editable | Reason |
|-------|----------|--------|
| Affiliation status | No | System-controlled |
| Affiliation dates | No | System-controlled |
| Visibility (opt-out) | No | Listing is part of affiliation |

### Directory Listing Is Mandatory

Affiliation includes directory listing. There is no option to be affiliated but hidden.

Rationale: The directory exists for public verification. Hidden affiliates would undermine this purpose.

---

## PART E — VERIFICATION BADGE (OPTIONAL FEATURE)

### Purpose

A verification badge allows practitioners to display their status on their own website.

### How It Works

1. Affiliated practitioner receives embed code
2. Code displays a small badge/widget on their site
3. Badge links back to their directory listing
4. Badge auto-updates if affiliation lapses (disappears or shows inactive)

### Badge Display

```
┌──────────────────────────┐
│  ✓ MN Affiliated         │
│  Verify at mn.org/dir    │
└──────────────────────────┘
```

### Badge Rules

- Only available to active affiliates
- Auto-disables on lapse or revocation
- Cannot be modified or restyled
- Links to official directory

**Note:** This is an optional future feature. Core directory functionality does not depend on it.

---

## PART F — DATA MANAGEMENT

### Data Source

Directory data is populated from the affiliation database.

| Data Point | Source |
|------------|--------|
| Name | Application form |
| Country | Application form |
| City / Region | Application form (optional) |
| Website | Application form (optional) |
| Status | Payment + affiliation system |

### Data Accuracy

- Practitioners are responsible for keeping their information current
- MNI may request verification for significant changes
- False or misleading information may be grounds for revocation

### Data Privacy

- Only fields marked "Displayed: Yes" appear publicly
- Email addresses are never displayed
- Full privacy policy applies (link to privacy policy)

---

## PART G — TECHNICAL SPECIFICATIONS

### URL Structure

```
Primary: https://[domain]/directory
Individual: https://[domain]/directory/[practitioner-slug]
```

### Page Load

- Directory loads all active affiliates
- Search/filter operates client-side for small lists
- Pagination if list exceeds 100 entries

### Mobile Responsive

- Directory must function on mobile devices
- Search and filter must be accessible on mobile

### Accessibility

- Directory must meet WCAG 2.1 AA standards
- Screen reader compatible
- Keyboard navigable

---

## PART H — DIRECTORY POLICIES

### No Ranking

Practitioners are not ranked by:

- Seniority
- Certification level
- MNTEST usage
- Revenue
- Any other metric

Default sort is alphabetical. This is neutral and non-hierarchical.

### No Endorsement Implied

Listing in the directory:

- Confirms active affiliation status
- Does NOT imply endorsement of services
- Does NOT guarantee quality or outcomes
- Does NOT indicate any ranking or preference

### No Paid Placement

There is no option to:

- Pay for higher placement
- Pay for featured listing
- Pay for enhanced display

All listings are equal.

---

## PART I — DIRECTORY DISCLAIMER

The following disclaimer appears on the directory page:

> **Disclaimer**
>
> This directory lists practitioners who are currently affiliated with Multiple Natures International. Affiliation confirms active status and permission to use the MN name. It does not constitute endorsement, certification of competence, or guarantee of outcomes. You are responsible for evaluating any practitioner's suitability for your needs.

---

## SUMMARY

| Question | Answer |
|----------|--------|
| Who appears? | Currently affiliated practitioners only |
| What's shown? | Name, country, city (optional), website (optional) |
| What's hidden? | Email, dates, payment, certification, usage |
| Can practitioners opt out? | No — listing is part of affiliation |
| Are lapsed practitioners shown? | No — they are removed |
| Is there ranking? | No — alphabetical only |
| Is there paid placement? | No |

---

## DOCUMENT CONTROL

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2025-01-29 | Initial draft |
| 1.1 | 2025-01-30 | Added note clarifying directory removal doesn't affect certification |

---

**END OF DOCUMENT**

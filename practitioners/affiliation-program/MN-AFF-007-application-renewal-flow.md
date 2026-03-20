# AFFILIATION APPLICATION & RENEWAL FLOW

---

**Document ID:** MN-AFF-007

**Title:** Affiliation Application & Renewal Flow

**Type:** Operational / Process

**Version:** 1.0

**Status:** Draft

**Effective Date:** 2025-01-29

**Last Updated:** 2025-01-29

**Owner:** Steven Rudolph

**Supersedes:** None

**Related Documents:** MN-AFF-004, MN-AFF-006, MN-AFF-011

---

## Purpose

This document defines the **step-by-step process** for:

- New affiliation applications
- Annual renewals
- Lapse handling
- Reinstatement

This is an internal operations document. Practitioners see the public-facing policy (MN-AFF-009), not this flow.

---

## PART A — NEW APPLICATION

### Stage 1: Application Submission

| Step | Action | Owner |
|------|--------|-------|
| 1.1 | Practitioner accesses application form | Practitioner |
| 1.2 | Practitioner completes required fields (see below) | Practitioner |
| 1.3 | Practitioner reviews and accepts Terms & Conditions (MN-AFF-006) | Practitioner |
| 1.4 | Application submitted | System |

### Required Application Fields

| Field | Required | Notes |
|-------|----------|-------|
| Full legal name | Yes | As it will appear in directory |
| Professional name (if different) | Optional | For directory listing |
| Email address | Yes | Primary contact; used for notices |
| Country | Yes | For directory filtering |
| City / Region | Optional | For directory display |
| Website | Optional | May be linked in directory |
| Certification status | Yes | Certified (year) / Not certified |
| Affiliation term selected | Yes | 1-year / 2-year / 3-year |

### Stage 2: Payment

| Step | Action | Owner |
|------|--------|-------|
| 2.1 | System displays fee based on term selected | System |
| 2.2 | Practitioner completes payment | Practitioner |
| 2.3 | Payment confirmed | Payment processor |
| 2.4 | Receipt issued | System |

### Stage 3: Activation

| Step | Action | Owner |
|------|--------|-------|
| 3.1 | Affiliation record created | System |
| 3.2 | Affiliation start date = payment confirmation date | System |
| 3.3 | Affiliation end date = start date + term length | System |
| 3.4 | Confirmation email sent to practitioner | System |
| 3.5 | Practitioner added to Affiliation Directory (MN-AFF-011) | System |
| 3.6 | MNTEST eligibility activated | System |

### Activation Confirmation Email — Contents

- Welcome message
- Affiliation start and end dates
- Link to Affiliation Directory listing
- Link to MNTEST credit purchase
- Link to Terms & Conditions
- Reminder of renewal date

---

## PART B — RENEWAL

### Renewal Timeline

| Timing | Action |
|--------|--------|
| 60 days before expiry | First renewal reminder sent |
| 30 days before expiry | Second renewal reminder sent |
| 7 days before expiry | Final renewal reminder sent |
| Expiry date | Affiliation lapses if not renewed |

### Renewal Process

| Step | Action | Owner |
|------|--------|-------|
| R.1 | Practitioner receives renewal reminder | System |
| R.2 | Practitioner accesses renewal page | Practitioner |
| R.3 | Practitioner confirms details (update if needed) | Practitioner |
| R.4 | Practitioner selects renewal term | Practitioner |
| R.5 | Practitioner completes payment | Practitioner |
| R.6 | Payment confirmed | Payment processor |
| R.7 | Affiliation end date extended | System |
| R.8 | Renewal confirmation email sent | System |
| R.9 | Directory listing remains active | System |

### Renewal Notes

- No auto-renewal; explicit action required
- Renewal can be completed up to 60 days before expiry
- Early renewal extends from current end date (no lost time)
- Late renewal after lapse = reinstatement process (see Part D)

---

## PART C — LAPSE

### Lapse Trigger

Affiliation lapses automatically at 11:59 PM (UTC) on the expiry date if not renewed.

### Lapse Actions (Automatic)

| Step | Action | Timing |
|------|--------|--------|
| L.1 | Affiliation status set to "Lapsed" | Expiry date |
| L.2 | Directory listing removed | Expiry date |
| L.3 | MNTEST access suspended | Expiry date |
| L.4 | Lapse notification email sent | Expiry date |
| L.5 | Unused MNTEST credits flagged for forfeiture | Expiry date |
| L.6 | Credits forfeited | 30 days after lapse |

### Lapse Notification Email — Contents

- Confirmation that affiliation has lapsed
- Summary of what this means (naming rights suspended, directory removed)
- Reminder: may still reference past training factually
- Link to reinstatement process
- Note: MNTEST credits forfeited in 30 days if not reinstated

### Grace Period

There is **no grace period** for lapse.

- Lapse is immediate upon expiry
- Directory removal is immediate
- MNTEST suspension is immediate
- Only credit forfeiture has a 30-day delay (to allow reinstatement)

---

## PART D — REINSTATEMENT

### Reinstatement Eligibility

A lapsed practitioner may reinstate if:

- Affiliation was not revoked (revocation = 12-month ban)
- Lapse occurred due to non-renewal (not misconduct)

### Reinstatement Process

| Step | Action | Owner |
|------|--------|-------|
| D.1 | Practitioner requests reinstatement | Practitioner |
| D.2 | System verifies eligibility | System |
| D.3 | Practitioner completes full affiliation fee (no pro-rating) | Practitioner |
| D.4 | Payment confirmed | Payment processor |
| D.5 | Affiliation reactivated | System |
| D.6 | Directory listing restored | System |
| D.7 | MNTEST access restored | System |
| D.8 | Reinstatement confirmation email sent | System |

### Reinstatement Notes

- Full fee required (no discount for prior affiliation)
- New affiliation period starts from reinstatement date
- If reinstated within 30 days of lapse: unused credits restored
- If reinstated after 30 days: credits were forfeited, not restored

---

## PART E — DATA & RECORDS

### Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| Application data | Duration of affiliation + 7 years |
| Payment records | 7 years |
| Affiliation history | Indefinite |
| Lapse/reinstatement records | Indefinite |
| Revocation records | Indefinite |

### Directory Data

The Affiliation Directory (MN-AFF-011) displays:

| Field | Displayed |
|-------|-----------|
| Name | Yes |
| Country | Yes |
| City/Region | If provided |
| Website | If provided |
| Status | Active / (removed if lapsed) |
| Affiliation expiry | No (internal only) |

Lapsed practitioners are **removed** from the directory, not marked as lapsed.

---

## PART F — EDGE CASES

### Practitioner Requests Early Termination

- No refunds for unused portion of term
- Affiliation may be terminated early upon written request
- Directory listing removed upon termination
- MNTEST credits forfeited
- May reapply at any time (no waiting period)

### Practitioner Disputes Lapse

- Lapse is automatic and system-driven
- If practitioner claims payment was made, verify with payment processor
- If payment confirmed, restore affiliation immediately
- If no payment found, direct to reinstatement process

### Practitioner Dies or Becomes Incapacitated

- Affiliation terminates upon notification
- No refund required
- Directory listing removed
- No action needed on MNTEST credits

### Practitioner Changes Name or Contact Info

- Practitioner may update via account settings
- Directory updates within 24 hours
- Name changes require verification (to prevent fraud)

---

## PROCESS SUMMARY

```
NEW APPLICATION
  └─> Submit form
      └─> Accept T&Cs
          └─> Pay fee
              └─> Activated
                  └─> Listed in directory
                      └─> MNTEST eligible

RENEWAL (before expiry)
  └─> Receive reminders (60/30/7 days)
      └─> Access renewal page
          └─> Pay fee
              └─> Extended
                  └─> Stay listed

LAPSE (at expiry)
  └─> Status = Lapsed
      └─> Removed from directory
          └─> MNTEST suspended
              └─> Credits forfeited (30 days)

REINSTATEMENT (after lapse)
  └─> Request reinstatement
      └─> Pay full fee
          └─> Reactivated
              └─> Relisted
                  └─> MNTEST restored
```

---

## DOCUMENT CONTROL

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2025-01-29 | Initial draft |

---

**END OF DOCUMENT**

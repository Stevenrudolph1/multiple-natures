# Onboarding Assistant Flow
<!--
DOCUMENT NAME: Onboarding Assistant Flow
VERSION: 1.0
AUTHOR: Steven Rudolph
DATE: April 30, 2025
DESCRIPTION:
This document defines the onboarding flow for new users entering the Xavigate system. The onboarding assistant is designed to gather foundational diagnostic data in a fast, intuitive, and low-friction manner. It collects key parameters that enable the system to establish an initial alignment profile, estimate the user’s quadrant, and begin adaptive session support. The onboarding assistant also introduces the alignment journey and primes the user for reflection and reassessment.

INTENDED USE:
- First-time user flow (diagnostic + contextual primer)
- Input to persistent memory
- Foundation for AI interaction personalization
- Optional hook for practitioner review or dashboard setup
-->

# Xavigate Onboarding Assistant

## Goals of the Onboarding Flow

- Rapidly gather meaningful alignment data without overwhelming the user  
- Estimate initial quadrant and set a baseline AX/AQ score  
- Build emotional trust and set expectations for ongoing evaluation  
- Establish persistent memory fields for personalization  
- Introduce the concept that alignment is dynamic, not fixed  

---

## Tone and Voice Guidelines

- Use warm, non-clinical language  
- Avoid corporate jargon or overexplanation  
- Normalize self-exploration and confusion  
- Reassure that misalignment is common and repairable  
- Build rapport: “We’re here to help you figure out what fits — not judge you for what doesn’t.”

---

## Onboarding Assistant Sections

### 1. Welcome + Framing (Context Setting)

- Short explanation of what Xavigate is:  
  *“Xavigate helps you understand where you’re aligned, where you’re off, and what you can do about it. Alignment isn’t just a state — it’s a skill. And this is your first step in learning it.”*

- Explain that alignment evolves:  
  *“You may feel one way today, and another next week. That’s okay. What matters is learning how to read the signals and make adjustments that work for you.”*

---

### 2. Emotional and Situational Snapshot

- **How are you feeling today?**  
  (open text + optional tags: calm, exhausted, numb, hopeful, lost)

- **What’s been weighing on you most lately?**  
  (career / relationships / energy / purpose / money / unsure)

- **What gives you energy lately, even a little?**  
  (freeform)

- **Is there something in your life that feels “off” — even if you don’t know why?**  
  (yes / no / maybe + explanation)

---

### 3. Trait Signals (if MN profile not loaded)

- **Which of these describe you best?**  
  (checkboxes — Entertaining, Healing, Leading, Providing, etc. + “Not sure”)

- **Which of those are being used in your current life/work situation?**  
  (multi-select)

- **Which feel underused or stifled?**  
  (multi-select)

---

### 4. Environmental Fit Check

- **Do you feel like your current environment supports you being yourself?**  
  (Yes / Sometimes / No)

- **What gets in the way of that?**  
  (rigid structure / lack of safety / unclear expectations / financial pressure / external control)

---

### 5. Initial Alignment Estimation

System uses input to estimate:
- TAS (based on trait usage/suppression)  
- SAS (based on environment and mood cues)  
- AX = average of TAS + SAS  
- Quadrant = based on AX + TAS/SAS balance  
- AQ = default set to 40–60 range (unless patterns show clear strength or suppression)

Values are written to persistent memory.

---

### 6. Closing the Onboarding Session

- Reassure them:  
  *“There’s no ‘perfect answer’ — just patterns to explore. We’ll keep learning with you.”*

- Introduce ongoing reassessment:  
  *“Each time you come back, we’ll check in again. Because alignment changes. And that’s part of the process.”*

- Optional micro-prompt:  
  *“If you could shift one thing this week to feel 2% more like yourself, what would it be?”*

Store this as their first micro-alignment intention.

---

## Notes for Engineering and AI Teams

- Output from onboarding populates:  
  - user_id, baseline AX/AQ, estimated quadrant  
  - initial TAS/SAS  
  - dominant traits (if MN not loaded)  
  - emotional state tags  
  - persistent memory scaffold

- Onboarding responses remain editable or overrideable by future reassessments  
- System should flag responses that are low-clarity for future probing  
- Trust-building tone is more important than diagnostic precision on day one


## ## Examples

### Burnt-Out Provider

**User Responses**

- **How are you feeling today?**  
  "Tired. Disconnected. Just doing what needs to be done."

- **What’s been weighing on you most?**  
  "Too much responsibility — everyone needs something from me."

- **What gives you energy lately, even a little?**  
  "Helping someone one-on-one, but I barely have time for that anymore."

- **Do you feel like your current environment supports you being yourself?**  
  "Not really. It’s all about tasks and numbers. I’m not sure anyone sees me."

- **Which traits describe you best?**  
  Providing, Healing, Organizing

- **Which are being used now?**  
  Organizing (mostly)

- **Which feel underused?**  
  Providing, Healing

**System Interpretation**

- **TAS (Trait Alignment Score):** 4  
  Core traits are identified but underutilized. Energy low. Survival mode.

- **SAS (Situational Alignment Score):** 3  
  Environment lacks emotional resonance. User feels unseen, boxed in.

- **AX (Alignment Index):** 35  
  Significant misalignment. Trait suppression and situational friction.

- **AQ (Alignment Quotient):** 48  
  Some awareness, but lacking strategy or reflection. Burnout behaviors present.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `suppressed_traits = [Providing, Healing]`  
- `emotional_flatline_detected = true`  
- `burnout_risk_flag = true`  
- `overcompensation_detected = true` (Organizing in overdrive)  
- Recommend recovery-focused sessions. Reconnection with core traits and permission to re-feel.

### Unaware Misfit

**User Responses**

- **How are you feeling today?**  
  "Pretty good, actually. Things are stable. No big complaints."

- **What’s been weighing on you most?**  
  "Nothing major, maybe just feeling a bit bored sometimes."

- **What gives you energy lately, even a little?**  
  "Running errands, getting stuff done."

- **Do you feel like your current environment supports you being yourself?**  
  "Yeah, I’d say so. I know what’s expected of me."

- **Which traits describe you best?**  
  Creative, Entertaining, Strategic

- **Which are being used now?**  
  Strategic

- **Which feel underused?**  
  Creative, Entertaining

**System Interpretation**

- **TAS (Trait Alignment Score):** 3  
  Creative/expressive traits are underused. User unaware of suppression.

- **SAS (Situational Alignment Score):** 7  
  Reports high stability, structure, and role clarity. Environment is enabling — but too narrow.

- **AX (Alignment Index):** 50  
  User is functioning well in external terms but disconnected from deeper alignment.

- **AQ (Alignment Quotient):** 42  
  Low reflection depth. High stability masks early-stage disengagement.

- **Quadrant:** Quadrant II – Misfit Success

**Flags and Notes**

- `trait_suppression_blindspot = true`  
- `stability_masking_disengagement = true`  
- `early_drift_signal = boredom`  
- Recommend early reflection work on neglected traits. Begin drawing connections between energy dips and unrealized self.

### Awakening Creative

**User Responses**

- **How are you feeling today?**  
  "Restless. Like I need to change something, but I don’t know what."

- **What’s been weighing on you most?**  
  "I feel like I’m stuck in routines that don’t inspire me."

- **What gives you energy lately, even a little?**  
  "Doodling, writing lyrics. I haven’t shown anyone, though."

- **Do you feel like your current environment supports you being yourself?**  
  "I mean, it’s safe. But it’s... dull. Not really my people."

- **Which traits describe you best?**  
  Creative, Entertaining, Independent

- **Which are being used now?**  
  Independent (barely)

- **Which feel underused?**  
  Creative, Entertaining

**System Interpretation**

- **TAS (Trait Alignment Score):** 4  
  Creative spark is active internally, but not externally expressed. Traits are awakening but unclaimed.

- **SAS (Situational Alignment Score):** 5  
  Environment is neutral: safe but uninspiring. No active suppression, but no invitations to grow.

- **AX (Alignment Index):** 45  
  Low-moderate alignment. User feels trapped between the familiar and the possible.

- **AQ (Alignment Quotient):** 38  
  User is early in their awareness journey. Showing curiosity, but lacks scaffolding and confidence.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `latent_trait_emergence = [Creative]`  
- `environmental_passivity_detected = true`  
- `identity_threshold_state = true`  
- Recommend sessions that increase confidence in trait expression, explore safe risks, and reflect on suppressed desire. High potential for transformation with small interventions.

### High-Functioning Masker

**User Responses**

- **How are you feeling today?**  
  "Busy. Productive. Honestly, I don’t have time to think about how I feel."

- **What’s been weighing on you most?**  
  "Just keeping up. Everyone expects a lot from me."

- **What gives you energy lately, even a little?**  
  "Crushing deadlines. Checking boxes. I know that sounds bad."

- **Do you feel like your current environment supports you being yourself?**  
  "It’s high-performance. There’s no room for softness or slowness."

- **Which traits describe you best?**  
  Strategic, Leading, Creative

- **Which are being used now?**  
  Strategic, Leading

- **Which feel underused?**  
  Creative

**System Interpretation**

- **TAS (Trait Alignment Score):** 6  
  Traits are being expressed, but in narrow, performance-oriented ways. Creative trait muted.

- **SAS (Situational Alignment Score):** 4  
  Environment rewards output but penalizes vulnerability. Little space for full self-expression.

- **AX (Alignment Index):** 50  
  Energetically fragmented. Functioning on surface, misaligned underneath.

- **AQ (Alignment Quotient):** 60  
  High self-regulation, but avoids emotional reflection. Capable of change once self-permission is granted.

- **Quadrant:** Quadrant II – Misfit Success

**Flags and Notes**

- `emotional_disconnection_flag = true`  
- `creative_trait_suppression = true`  
- `achievement_masking_misalignment = true`  
- Recommend using humor or metaphor to bypass resistance. Invite exploration of what feels “missing” beyond performance. High AQ allows deep work once engaged.

### Flow-State Builder

**User Responses**

- **How are you feeling today?**  
  "Grounded. Things are clicking lately."

- **What’s been weighing on you most?**  
  "Honestly, I’m more focused on what's opening up than what’s heavy."

- **What gives you energy lately, even a little?**  
  "Collaborating on creative projects, mentoring junior team members."

- **Do you feel like your current environment supports you being yourself?**  
  "Completely. I’m surrounded by people who get how I work best."

- **Which traits describe you best?**  
  Creative, Providing, Strategic

- **Which are being used now?**  
  All of them — regularly and intentionally

- **Which feel underused?**  
  None at the moment

**System Interpretation**

- **TAS (Trait Alignment Score):** 9  
  Traits are actively expressed, energized, and evolving. High authenticity.

- **SAS (Situational Alignment Score):** 9  
  Environment is nurturing, spacious, and aligned with user’s rhythm and contribution style.

- **AX (Alignment Index):** 90  
  Strong alignment state. High presence, flow, and capacity to guide others.

- **AQ (Alignment Quotient):** 82  
  Clear awareness of what works, paired with adaptive learning. High potential for mentoring, system building, or modeling alignment for others.

- **Quadrant:** Quadrant I – Peak Performance

**Flags and Notes**

- `alignment_scaling_candidate = true`  
- `mentor_path_ready = true`  
- Recommend exploring stretch roles, meaning-based contribution, or alignment teaching. This user is a field builder — not just an individual achiever.

### High-AQ, Low-AX Oscillator

**User Responses**

- **How are you feeling today?**  
  "Better than last week, but I’m worried it won’t last."

- **What’s been weighing on you most?**  
  "It’s like I keep finding clarity, but I fall back into the same patterns."

- **What gives you energy lately, even a little?**  
  "When I journal or help someone else figure out their stuff."

- **Do you feel like your current environment supports you being yourself?**  
  "It depends on the day. Sometimes yes, sometimes it collapses."

- **Which traits describe you best?**  
  Healing, Providing, Strategic

- **Which are being used now?**  
  Healing and Strategic — inconsistently

- **Which feel underused?**  
  Providing — “I want to give more, but I’m scared I’ll burn out again.”

**System Interpretation**

- **TAS (Trait Alignment Score):** 6  
  Traits are partially expressed but fluctuate with emotional resilience.

- **SAS (Situational Alignment Score):** 4  
  Environment is unstable; sometimes allows alignment, sometimes constrains it.

- **AX (Alignment Index):** 50  
  Reflects midpoint between flow and collapse. Could shift quickly either way.

- **AQ (Alignment Quotient):** 78  
  High self-awareness, depth of reflection, strong realignment attempts — but recurring instability.

- **ASS (Alignment Stability Score):** 42  
  Marked AX volatility over time. Gains not sustained consistently.

- **Quadrant:** Quadrant II – Misfit Success (with QIII dips)

**Flags and Notes**

- `alignment_volatility_flag = true`  
- `self_doubt_loop_detected = true`  
- `coaching_ready_flag = true` (can name patterns, open to work)  
- Recommend focusing on building energetic consistency. Use reflection-to-action bridging. Emphasize that relapsing doesn’t invalidate growth.

### Disconnected Intellectual

**User Responses**

- **How are you feeling today?**  
  "Fine, I guess. I’ve been thinking about a lot of things lately."

- **What’s been weighing on you most?**  
  "Questions about purpose, direction… but it’s hard to say exactly what’s wrong."

- **What gives you energy lately, even a little?**  
  "Reading philosophy. Trying to connect ideas that don’t seem to connect."

- **Do you feel like your current environment supports you being yourself?**  
  "It’s intellectually challenging, but emotionally flat."

- **Which traits describe you best?**  
  Logical, Creative, Healing

- **Which are being used now?**  
  Logical

- **Which feel underused?**  
  Creative, Healing

**System Interpretation**

- **TAS (Trait Alignment Score):** 4  
  Logical trait active, but overused. Creative and Healing traits underutilized or abstracted.

- **SAS (Situational Alignment Score):** 5  
  Environment is intellectually rich but emotionally barren. Traits supported unevenly.

- **AX (Alignment Index):** 45  
  Intellectual engagement masking deeper misalignment. Functional but unfulfilled.

- **AQ (Alignment Quotient):** 58  
  Analytical, curious, and reflective — but emotionally disconnected. Can name misalignment conceptually but struggles to feel it.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `emotional_disconnection_flag = true`  
- `intellectual_masking_detected = true`  
- `high_cognitive_engagement, low_embodiment`  
- Recommend grounding practices, reflection through metaphor/art, and exploring neglected traits experientially. This user needs reconnection, not just ideas.

### Suppressed Artist in Corporate Armor

**User Responses**

- **How are you feeling today?**  
  "Efficient. Busy. Not much time to think about anything else."

- **What’s been weighing on you most?**  
  "Deadlines. Deliverables. Feeling like I can’t afford to slow down."

- **What gives you energy lately, even a little?**  
  "Sketching during meetings. Even if it’s just doodles, it calms me."

- **Do you feel like your current environment supports you being yourself?**  
  "It’s professional. Efficient. Doesn’t have space for personal expression."

- **Which traits describe you best?**  
  Creative, Independent, Entertaining

- **Which are being used now?**  
  Independent (mostly in task ownership)

- **Which feel underused?**  
  Creative, Entertaining

**System Interpretation**

- **TAS (Trait Alignment Score):** 3  
  Core expressive traits are barely acknowledged. User is defaulting to functional identity, not authentic self.

- **SAS (Situational Alignment Score):** 4  
  Environment demands efficiency and conformity. No room for imaginative or playful energy.

- **AX (Alignment Index):** 35  
  User is in quiet misalignment. Looks fine on surface, internally starved.

- **AQ (Alignment Quotient):** 52  
  Moderate insight. Can name internal signals but hasn’t made them actionable. Self-editing is strong.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `creative_trait_neglect = true`  
- `emotional_flatlining = emerging`  
- `internal_conflict_masked_by_professionalism = true`  
- Recommend encouraging micro-creative expression, trait permission work, and environments where levity or play is safe. This user needs to rediscover joy through creative flow, not performance.

### Early-Stage Explorer

**User Responses**

- **How are you feeling today?**  
  "Curious. A little overwhelmed, but kind of excited too."

- **What’s been weighing on you most?**  
  "I feel like I’m starting over. Everything I was doing stopped making sense."

- **What gives you energy lately, even a little?**  
  "Trying new things, even if they don’t lead anywhere right away."

- **Do you feel like your current environment supports you being yourself?**  
  "It’s flexible, but I don’t know how to use that yet. I don’t want to waste it."

- **Which traits describe you best?**  
  Discovery, Creative, Logical

- **Which are being used now?**  
  Discovery (emerging), Logical

- **Which feel underused?**  
  Creative

**System Interpretation**

- **TAS (Trait Alignment Score):** 5  
  Early engagement with Discovery trait. Creative energy present but unsure of outlet.

- **SAS (Situational Alignment Score):** 6  
  Environment is open, but lacks structure or feedback. Feels overwhelming without guidance.

- **AX (Alignment Index):** 55  
  Transitional phase. Misalignment fading, but integration not yet achieved.

- **AQ (Alignment Quotient):** 50  
  High curiosity, low clarity. Shows openness to feedback and adaptation, but needs scaffolding.

- **Quadrant:** Quadrant II → trending toward Quadrant I

**Flags and Notes**

- `identity_transition_state = true`  
- `alignment_emergence_signal = curiosity`  
- `creative_trait_activation_pending = true`  
- Recommend gentle structure, experimentation zones, and validation of non-linear paths. Encourage building a feedback loop to help the user test and iterate safely.

### Lone Wolf Rebel

**User Responses**

- **How are you feeling today?**  
  "Fine. I like having space. I don’t trust systems much."

- **What’s been weighing on you most?**  
  "People trying to box me in. I shut down when that happens."

- **What gives you energy lately, even a little?**  
  "Making stuff on my own time. No pressure, no eyes on me."

- **Do you feel like your current environment supports you being yourself?**  
  "Nope. That’s why I avoid it as much as I can."

- **Which traits describe you best?**  
  Independent, Creative, Logical

- **Which are being used now?**  
  Independent

- **Which feel underused?**  
  Creative

**System Interpretation**

- **TAS (Trait Alignment Score):** 4  
  Strong inner energy, but creative trait is underutilized due to lack of trust and expression.

- **SAS (Situational Alignment Score):** 3  
  Environment is misaligned, restrictive, and triggering resistance. User withdraws as protective strategy.

- **AX (Alignment Index):** 35  
  Disengaged from surroundings, relying on autonomy to cope. Low situational nourishment.

- **AQ (Alignment Quotient):** 55  
  High pattern recognition, strong self-protection instinct. Moderate reflectiveness but avoids vulnerability.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `authority_rejection_pattern = strong`  
- `solitary_alignment_preference = adaptive, not optimal`  
- `trust_deficit_with_systems = active`  
- Recommend gentle, non-directive prompts. Allow user to define space, timing, and intention. Focus on safe creative re-engagement without pressure or intrusion.

### Stuck Achiever

**User Responses**

- **How are you feeling today?**  
  "Busy. Productive. Honestly, I don’t stop to ask how I’m doing."

- **What’s been weighing on you most?**  
  "Feeling like I’ve done everything I was supposed to do — but I’m still not satisfied."

- **What gives you energy lately, even a little?**  
  "I don’t know. That’s what’s bothering me."

- **Do you feel like your current environment supports you being yourself?**  
  "It supports my success. Whether that’s my self — I’m not sure."

- **Which traits describe you best?**  
  Logical, Strategic, Providing

- **Which are being used now?**  
  Logical, Strategic

- **Which feel underused?**  
  Providing

**System Interpretation**

- **TAS (Trait Alignment Score):** 5  
  Traits are expressed in achievement-oriented ways. Relational/providing energy suppressed.

- **SAS (Situational Alignment Score):** 5  
  System rewards performance, not presence. No overt constraints, but no space for wholeness either.

- **AX (Alignment Index):** 50  
  Solid external structure, internal drift. User functions well but feels disconnection.

- **AQ (Alignment Quotient):** 60  
  High capacity, goal-driven, but underdeveloped self-reflection. Ready for recalibration if prompted well.

- **Quadrant:** Quadrant II – Misfit Success

**Flags and Notes**

- `emotional_underinvestment = true`  
- `success_masking_disengagement = moderate`  
- `relational_trait_suppression = emerging`  
- Recommend inviting deeper inquiry into value and meaning. Normalize existential discontent as a signal of readiness for conscious transition.

### Over-Adaptive Pleaser

**User Responses**

- **How are you feeling today?**  
  "Okay I guess. Just trying to keep everything running smoothly."

- **What’s been weighing on you most?**  
  "Saying yes to everything and everyone — even when I’m tired."

- **What gives you energy lately, even a little?**  
  "When someone appreciates something I’ve done. I just want to be helpful."

- **Do you feel like your current environment supports you being yourself?**  
  "I don’t know. I think I’ve forgotten what ‘being myself’ means."

- **Which traits describe you best?**  
  Providing, Healing, Interpersonal

- **Which are being used now?**  
  Providing (overused), Interpersonal

- **Which feel underused?**  
  Healing

**System Interpretation**

- **TAS (Trait Alignment Score):** 4  
  Providing Nature is active but overextended. Healing MI is present but buried under others’ needs.

- **SAS (Situational Alignment Score):** 4  
  Environment rewards compliance and harmony, but does not support personal boundaries or recovery.

- **AX (Alignment Index):** 40  
  User is energetically stretched. Giving without replenishment. Misalignment masked by service.

- **AQ (Alignment Quotient):** 54  
  High empathy, high adaptability, low boundary-setting capacity. Reflective but avoids prioritizing self.

- **Quadrant:** Quadrant III – Struggle Zone

**Flags and Notes**

- `overfunctioning_providing_nature = true`  
- `empathic_misalignment = high`  
- `self-worth_linked_to_external_validation = moderate`  
- Recommend supporting this user in shifting from reactive caregiving to conscious healing. Invite them to explore their Healing Nature not as a role, but as a source of self-connection.

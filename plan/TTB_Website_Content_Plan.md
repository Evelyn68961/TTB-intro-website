# TTB Intro Website — Content Plan

> **Design principle:** Short. Punchy. Visual. Every section earns its place.
> If a reader can't grasp the point in 10 seconds, rewrite it.

---

## Page 1: Home

**Goal:** Hook in 5 seconds. Route visitors to the right page.

**Content:**

- **Tagline:** "How long until treatment actually helps?"
- **One-liner:** Clinical trials tell us IF a treatment works. TTB tells us WHEN.
- **3 cards linking to:**
  - What is TTB? → for clinicians and researchers new to the concept
  - How it works → for those who want the methodology overview
  - Try it yourself → interactive calculator
- **Bottom:** "Published TTB studies" link + "About" link

**Tone:** Clean, modern, no jargon upfront. Think Apple product page, not textbook.

---

## Page 2: What is TTB?

**Goal:** A clinician with zero stats background should walk away understanding the concept.

### Section 2.1 — The Problem (keep it SHORT)

The punchline: Traditional meta-analysis answers "does it work?" but NOT "how long until it works?"

- One example, one visual. Don't need 4 problems.
- **Use:** An 85-year-old patient scenario (from your slide 10). Life expectancy 2 years, statin HR = 0.70. Will they benefit?
- **Kill:** The entire SR/MA/NMA background section (slides 3–9). Readers either already know it or don't need it to understand TTB. This is the #1 sleepiness risk.

### Section 2.2 — What TTB Actually Is (the core concept)

- **ARR = vertical gap between survival curves.** One diagram. Label it clearly.
- **TTB = the time when that gap becomes meaningful.** Annotate: "At 12 months, the gap reaches 1% → 1 in 100 patients benefit."
- **Interactive element idea:** A single animated/static graphic showing curves diverging over time with a threshold line. The moment the curve crosses the threshold = TTB. Done.

### Section 2.3 — TTB vs NNT

- Quick comparison table (3 rows max):

| | NNT | TTB |
|---|---|---|
| Question | How many to treat? | How long to treat? |
| Time dimension | None (fixed at trial end) | Yes (continuous) |
| Clinical use | Resource allocation | Treatment initiation/duration decisions |

### Section 2.4 — When TTB Matters Most

Three scenarios, one sentence each. No elaboration needed:

1. **Delayed benefit:** Preventive meds in elderly patients — is there enough time?
2. **Expensive treatments:** High-cost drugs — what's the minimum duration for payoff?
3. **Benefit vs harm:** Anticoagulants — harm may emerge before benefit

**What to CUT from current "What is TTB" page:**
- Remove all SR/MA/NMA educational content (slides 3–9)
- Remove lengthy clinical scenarios — one scenario is enough
- Remove glossary tooltips for basic terms (HR, CI) — readers who need this page probably already know these
- Remove the mathematical formula block — keep it conceptual

---

## Page 3: How It Works (Light Methodology)

**Goal:** Researcher-level overview. Show the pipeline, not the plumbing.

### Section 3.1 — The 3-Step Pipeline

Visual: horizontal flow diagram (can be SVG or simple graphic)

```
Published KM curve → Reconstruct patient data → Fit Weibull model → Calculate TTB
```

Each step gets ONE paragraph max:

1. **Reconstruct IPD:** Published KM curves contain aggregate data. Algorithms (Guyot et al. 2012) can reverse-engineer individual patient-level data from these curves + number-at-risk tables.

2. **Fit Weibull model:** The Weibull distribution replaces the jagged KM staircase with a smooth curve. Two parameters: scale (where events happen) and shape (how risk changes over time). This allows precise measurement of the gap between curves at any time point.

3. **Calculate TTB:** For each time point, compute ARR = S_treatment(t) − S_control(t). TTB is the first time ARR crosses a clinically meaningful threshold (e.g., 1% = 1 event prevented per 100 treated).

### Section 3.2 — Why Bayesian?

One paragraph only:

- Frequentist gives you ONE best curve → ONE TTB value → no uncertainty.
- Bayesian gives you THOUSANDS of plausible curves → a DISTRIBUTION of TTB values → built-in credible intervals.
- Visual: side-by-side — single curve pair vs spaghetti plot of thousands. (Use a generic conceptual diagram, not your actual results.)

### Section 3.3 — Pooling Across Trials (concept only)

Two approaches exist (one sentence each):

- **Two-stage:** Analyze each trial separately, then pool TTB estimates via random-effects meta-analysis. Gives heterogeneity metrics (I², τ²).
- **One-stage:** Combine all patient data into one dataset, fit one model. Gives a population-level estimate.

**What to KEEP SECRET:**
- ❌ IPD quality thresholds (MAE ≤ 0.02, RMSE ≤ 0.05, etc.)
- ❌ Weibull diagnostic criteria (shape similarity gauge, % cutoffs)
- ❌ Truncation methodology
- ❌ MCMC configuration (chains, iterations, subsamples)
- ❌ Valid samples concept and reliability threshold
- ❌ Forest plot CI override technique
- ❌ Any specific implementation code

---

## Page 4: Interactive Demo (TTB Calculator)

**Goal:** Let visitors play with TTB themselves. Shows your React skills without exposing Shiny app.

### What it does:

- User adjusts: **HR** (slider 0.5–1.0), **baseline risk at 5 years** (slider 1%–30%), **shape parameter** (slider 0.8–1.5)
- Real-time output:
  - Two Weibull survival curves (treatment vs control)
  - ARR curve over time
  - TTB marked at multiple thresholds (0.5%, 1%, 2%) with annotations
  - NNT at each threshold displayed alongside

### What it does NOT do:

- No Bayesian/MCMC (too heavy for browser)
- No IPD reconstruction
- No meta-analysis
- Uses simple closed-form Weibull math: S(t) = exp(-(t/λ)^φ)

### Technical notes:

- Built with React + Recharts (or D3)
- Weibull parameters derived from user inputs (HR → scale ratio, baseline risk → control scale)
- All computation client-side, no server needed

### Educational annotations on the demo:

- Label the gap between curves as "ARR"
- Explain threshold crossing: "At this point, 1 in 100 patients has benefited"
- Show how changing HR affects TTB dramatically

---

## Page 5: Published Examples

**Goal:** Show TTB is a real, published methodology — not just your project. Builds credibility without revealing your results.

### Format: Card layout, one card per study

Each card shows:
- Drug class / intervention
- Outcome
- Key TTB finding (one number)
- Citation
- Link to paper

### Studies to include:

| Study | Intervention | Outcome | Key TTB Finding | Citation |
|-------|-------------|---------|-----------------|----------|
| Lee et al. 2021 | Statins (primary prevention) | MACE | ~2.5 years at ARR 1% | JAMA Intern Med |
| Deardorff et al. 2021 | Bisphosphonates | Nonvertebral fracture | 12.4 months at ARR 1% | JAMA Intern Med |
| Lee et al. 2022 | Intensive BP lowering | Stroke | 1.7 years at ARR 0.5% | J Am Geriatr Soc |
| Inoue et al. 2023 | SGLT2 inhibitors | HF hospitalization/CV death | ~5 months at ARR 2% | JAMA Netw Open |
| Zhou et al. 2025 | Intensive lipid-lowering (PCSK9i) | MACE | 17.7 months at ARR 1% | J Clin Lipidol |
| Zhou et al. 2025 | Intensive lipid-lowering (ezetimibe) | MACE | 47.3 months at ARR 1% | J Clin Lipidol |

**Note:** Verify exact numbers from the papers before publishing. The above are from your slides and project notes — cross-check against originals.

### What NOT to include:

- ❌ Your GLP-1 RA results (until paper is published)
- ❌ Any unpublished TTB analyses

---

## Page 6: FAQ

**Goal:** Address common objections and misunderstandings concisely.

### Format: Accordion/expandable Q&A. Max 8 questions.

**Concept:**
1. **"How is TTB different from NNT?"** — NNT is static (how many to treat at one time point). TTB is dynamic (how long to treat for a meaningful effect). They're complementary: TTB gives the NNT at every time point.
2. **"Can TTB tell me when to start or stop a medication?"** — TTB provides evidence-based timeframes. Combined with life expectancy estimates, it helps inform initiation, continuation, or deprescribing conversations. It's a tool for shared decision-making, not a directive.

**Methodology:**
3. **"Why not just look at when the survival curves visually separate?"** — Visual separation is subjective and imprecise. TTB uses parametric models to quantify the gap and provide uncertainty estimates (credible intervals).
4. **"Does TTB work for any trial?"** — TTB requires that the treatment arm shows benefit (HR < 1). Neutral trials (HR ≈ 1) don't produce meaningful TTB because the curves don't separate.
5. **"Why Weibull and not Cox?"** — Cox is non-parametric (no smooth curve beyond observed data). Weibull provides a smooth, continuous function that allows ARR calculation at any time point, including beyond trial follow-up (with appropriate caution).

**Interpretation:**
6. **"What ARR threshold should I use?"** — There's no universal answer. Common thresholds: 0.5% (1 in 200), 1% (1 in 100), 2% (1 in 50). Choice depends on disease severity, treatment cost/burden, and patient preference.
7. **"Is TTB only for elderly patients?"** — No. TTB is useful whenever treatment duration matters: expensive medications, competing risks, preventive therapies, or any situation where benefit takes time to accrue.

**Practical:**
8. **"Where can I learn more?"** — Link to key references (Lee 2021, Deardorff 2021, Yourman 2017 framework paper).

---

## Page 7: About Me

**Goal:** Concise professional profile. Shows competence, invites contact.

### Content:

- **Name + Title + Affiliation** (current department)
- **Research interests:** 2–3 sentences. Evidence-based prescribing, Bayesian survival analysis, time-to-benefit methodology, cardiovascular outcomes research.
- **Technical skills showcase:**
  - Statistical: Bayesian modeling (brms/Stan), survival analysis, meta-analysis
  - Programming: R (Shiny, ggplot2, tidyverse), JavaScript/React, Python
  - Tools: Git, Notion, DigitizeIt
- **What I built:** "I developed a complete TTB analysis pipeline — from KM curve digitization through Bayesian Weibull modeling to meta-analysis — implemented as an interactive R Shiny application." (No details, no screenshots.)
- **Publications / Preprints:** Add when available
- **Contact:** Email, ORCID, GitHub (public repo link)

---

## What to DELETE from existing site content

Based on the "too wordy / sleepy" feedback:

1. **Kill the SR/MA/NMA primer.** Your audience either knows this or doesn't need it for TTB. If they need it, link to a textbook.
2. **Kill multi-paragraph clinical scenarios.** One scenario per concept, max 2 sentences.
3. **Kill the glossary tooltips** for basic stats terms. Keep only for TTB-specific terms (ARR, TTB, CrI).
4. **Kill the detailed "Applications" page** (statins with specific sub-components). Replace with the cleaner "Published Examples" card layout.
5. **Kill any section that starts with "Systematic Review and Meta-Analysis is..."** — this is a TTB website, not a stats textbook.

---

## Summary: Page Priority & Effort

| Page | Priority | Effort | Status |
|------|----------|--------|--------|
| Home | High | Low | Needs rewrite |
| What is TTB? | High | Medium | Exists but needs heavy trim |
| How It Works | Medium | Medium | New — write from scratch |
| Interactive Demo | High | High | New — React component |
| Published Examples | Medium | Low | New — card layout |
| FAQ | Low | Low | New — accordion |
| About Me | Medium | Low | New — simple profile |

**Suggested build order:**
1. What is TTB? (trim existing → quick win)
2. Home (rewrite hero + navigation)
3. Interactive Demo (biggest effort, biggest impact)
4. Published Examples (quick content page)
5. How It Works (write methodology overview)
6. FAQ (straightforward)
7. About Me (last, easiest)

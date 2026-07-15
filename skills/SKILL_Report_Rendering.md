---
name: Agentic Commerce Readiness Report — HTML Rendering
version: 1.3 (June 2026)
purpose: Render a completed scoring dataset into the standardised HTML report
description: |
  Use this skill when the scoring phase from one of the three sector skills
  (B2B / D2C / FS) is complete and the result needs to be rendered as a
  single-file, presentation-grade HTML report.
when_to_use: |
  After completing scoring with SKILL_B2B_Industrial.md, SKILL_D2C_Consumer.md,
  or SKILL_FS_Financial_Services.md. Input is a structured dataset of scores,
  ratings, verdicts, quick wins, and competitive risks. Output is one .html file
  with embedded CSS, ready to share with the client.
when_not_to_use: |
  Do not use for PowerPoint output (use pptx skill), Word documents (use docx
  skill), or interactive dashboards.
companion_files: |
  report_template.html              — the boilerplate, single source of truth
  assets/accenture_song_logo.png    — transparent Accenture Song word-mark
  assets/logo_datauri.txt           — pre-encoded Base64 data URI of the logo
changelog: |
  v1.3 (June 2026): Added Section 0 — three binding protocols (Evidence
  Verification, Real GEO Engine Analysis, Template Integrity) that gate every
  report. Added a per-cell matrix-completeness rule and an automated „Unverified"
  audit gate to the assembly process and quality checklist, so benchmark columns
  receive the same artefact-level verification as the focus player.
  v1.2 (May 2026): Two-line title (line 1 = player/domain, line 2 = sector
  descriptor); Accenture Song logo embedded top-right via Base64 data URI;
  per-column overall maturity scores in the scorecard column header AND
  per-pillar scores in every pillar row; Quick Wins restructured into three
  horizon blocks (Week / Quarter / 2–3 Months); Commercial Upside section
  added between Quick Wins and Competitive Risks; optional Transaction-Rail-Note
  for B2B-Industrial; GEO Evidence Block component in scorecard section.
  Visual system is the existing Accenture-themed template (Inter typography,
  purple #a100ff accent, black score block on white).
---

# Agentic Commerce Readiness — Report Rendering

This skill is the layer that translates a completed scoring dataset into the standardised HTML report. The canonical implementation lives in `report_template.html` (next to this file). The skill explains what each component does, when it appears, how to populate it, and which v1.2 features extend the original template.

## 0 · Binding Protocols (read before anything else)

These three protocols are not guidance — they are gates. A report that violates any of them is not deliverable, regardless of how polished the HTML looks. They exist because the failure modes they prevent are invisible in the finished file: a plausible-looking scorecard can be built on unread artefacts, an unverified GEO claim reads exactly like a verified one, and an invented CSS class renders fine until it doesn't. The protocols force the verification to happen before the polish hides the gap.

### 0.1 Evidence Verification

Every scored cell requires reading the live artefact — robots.txt, llms.txt, plan/pricing pages, API docs, registry entries (UCP adopter list, ACP merchant registry, GSMA/CAMARA portal, TM Forum certification registry). The rule is per cell, not per player: the verification path applies identically to the focus player and to every benchmark column. A benchmark does not get a softer standard because it received less research attention.

Ratings map to evidence, not impression:
- **Confirmed / Strong** — the artefact was read and the capability is present.
- **Partial** — read and present but gated, limited, or incomplete.
- **Missing** — the artefact was read and the capability is confirmed *absent*. Verified absence is „Missing", and it always carries a context line.
- **Unverified** — used *only* when retrieval was genuinely impossible (login wall, no public artefact, registry not queryable). It carries a reason line stating why. „Unverified" is never a shortcut for „I did not check." A benchmark left at „Unverified" out of convenience is a hole in the matrix, not a rating.

### 0.2 Real GEO Engine Analysis

The GEO section is built on actual live retrieval, never on a proxy or an assumption. It requires a per-engine presence matrix (ChatGPT Search, Perplexity, Google AI Overviews, Gemini) and a dated table of real buyer queries run via live web retrieval. Queries are short and natural — five words or fewer — to reflect how buyers actually phrase them, not how a marketer would. „Not cited" is a finding and gets recorded as such; it is never a placeholder. Never label this section a proxy, and never assert „weak AI visibility" without the query evidence that demonstrates it. The evidence is the argument.

### 0.3 Template Integrity

Use only CSS classes that exist in the template. Before writing any body HTML, extract the class inventory:

```bash
grep -oE '\.[a-zA-Z][a-zA-Z0-9_-]+\s*[{,]' report_template.html | sort -u
```

Never invent class names. Any genuine extension is defined explicitly in a `<style>` block prepended to `</head>`, not improvised inline. All div / p / section tags must be balanced before the file is written. A mandatory automated QA gate (bash structural checks plus Python pixel-sampling of the rendered output) runs before delivery — see Sections 6 and 7.

---



## 1 · Visual System (Accenture Song theme)

The visual system is **already implemented in `report_template.html`**. Do not redesign it per report. Key tokens:

| Token            | Value     | Role                                                                 |
|------------------|-----------|----------------------------------------------------------------------|
| `--accent`       | `#a100ff` | Accenture Song purple — eyebrow, accent borders, score-label         |
| `--accent-soft`  | `#f3e8ff` | Light purple — weight-tag ×3 background, strong-rating pills         |
| `--text`         | `#0a0a0a` | Body ink, score block background                                     |
| `--text-mid`     | `#525252` | Verdict body, criterion descriptions                                 |
| `--text-light`   | `#8a8a8a` | Meta lines, footer                                                   |
| `--bg`           | `#ffffff` | Page background                                                      |
| `--surface-2`    | `#fafafa` | Callout backgrounds, geo-evidence block, upside cards                |
| `--border`       | `#d9d9d9` | Hairlines                                                            |
| `--bench-1..4`   | various   | Per-column accent strips on table header                             |
| Typography       | Inter     | All weights; no second display font                                  |

**Do not change** the palette per report. New benchmark column colours can be added to `--bench-5` and beyond; existing tokens stay.

## 2 · Brand Asset — Accenture Song Logo

The Accenture Song word-mark sits in the top-right of the header. Asset shipped alongside this skill: `assets/accenture_song_logo.png` (transparent PNG, 600 × 74 px, ~28 KB). The logo is **embedded as a Base64 data URI inside the `<img src="...">`** so the report stays a single self-contained file.

### Two ways to embed the logo

**Option A — use the pre-encoded data URI:**

```bash
cat assets/logo_datauri.txt
```

This file contains the full `data:image/png;base64,...` string ready to paste into the `src=` attribute of the `<img class="brand-logo">` tag.

**Option B — encode on the fly:**

```bash
python3 -c "import base64; print('data:image/png;base64,' + base64.b64encode(open('assets/accenture_song_logo.png','rb').read()).decode())"
```

Either way, the result is ~38 KB of Base64. The rendered logo is set to **140 px wide** on desktop, positioned via flex.

## 3 · Input Data Model

Expect the following structured input (as YAML, JSON, or a filled markdown brief). v1.2 fields are flagged.

```yaml
report:
  sector: B2B_Industrial | D2C_Consumer | FS_Financial_Services
  focus_player:
    name: string                      # e.g. "ABB"
    domain: string                    # e.g. "abb.com" — line 1 of two-line title
    descriptor: string                # e.g. "Industrial Automation, Electrification & Robotics" — line 2
  benchmarks:
    - name: string
      sub_label: string               # optional, e.g. "Industry Mall"
  date: string                        # e.g. "May 2026"
  weighting_note: string
  pov_callout: { framing: string }
  transaction_rail_note:              # v1.2, mandatory for B2B-Industrial
    body: string
  notes:
    - { title: string, body: string }
  score:                              # focus player's overall score (mirrors column 1 in scorecard)
    weighted_value: number            # 0.0 – 10.0
    denom_label: string               # e.g. "/ 10 weighted"
    label: string                     # e.g. "Moderate-low readiness"
    verdict: string                   # 3–6 sentence paragraph
  column_scores:                      # v1.2: overall per-column maturity score
    - { column: focus | bench1 | bench2 | bench3, score: number, label: string }
  pillars:
    - id: 1 | 2 | 3 | 4
      name: string
      description: string
      pillar_scores:                  # v1.2: per-column pillar score
        - { column: focus | bench1 | bench2 | bench3, score: number }
      criteria:
        - { name: string, weight: 1|2|3, description: string, check: string,
            ratings: [{ rating: confirmed|strong|partial|unverified|missing, label: string }, ...] }
  geo_evidence:                       # v1.2, mandatory for B2B-Industrial
    stand_date: string
    platforms_tested: string
    queries: [{ query, focus_player_position, top_competitors_cited, notes }]
    summary: string
  quick_wins:                         # v1.2: horizon-tagged
    - { title, detail, horizon: week|quarter|months, horizon_label, effort, impact,
        compliance_risk: low|mid|high }   # compliance_risk only on FS reports
  commercial_upside:                  # v1.2: three sector-specific sub-blocks
    sub_blocks:                       # ordered; sector skill defines names
      - { eyebrow, headline, body, sources }
  competitive_risks: [{ title, body }]
  methodology: { scoring, sourcing, disclaimer }
```

If any required field is missing, ask rather than invent.

## 4 · Component Library — what changed in v1.2

`report_template.html` already implements the v1.0 components (header, score banner, callouts, scorecard, quick wins, risks, methodology, footer). v1.2 extends or modifies them as follows.

### 4.1 Header — two-line title with logo (UPDATED)

The original header had a single `<h1>` like `<em>{{domain}}</em> — {{descriptor}}`. In v1.2 this becomes a flex layout with the title block on the left (eyebrow, line 1, line 2, meta) and the Accenture Song logo on the right.

**Template change:**

```html
<header class="report-header">
  <div class="report-header-text">
    <div class="report-eyebrow">{{Sector}} Agentic Commerce Readiness Report</div>
    <h1 class="report-title">
      <span class="title-line-1"><em>{{focus_player.domain}}</em></span>
      <span class="title-line-2">{{focus_player.descriptor}}</span>
    </h1>
    <div class="report-meta">
      <span>{{Date}}</span>
      <span>{{Methodology shorthand}}</span>
      <span>Benchmark: {{benchmark1}} · {{benchmark2}} · {{benchmark3}}</span>
      <span>Consulting PoV — Agentic Commerce</span>
    </div>
  </div>
  <div class="report-header-brand">
    <img src="{{LOGO_DATA_URI}}" alt="Accenture Song" class="brand-logo">
  </div>
</header>
```

**CSS additions** (merged into the existing `<style>` block):

```css
.report-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 40px;
  margin-bottom: 56px;
  border-bottom: 2px solid var(--text);
}
.report-header-text { flex: 1; min-width: 0; }
.report-header-brand { flex: 0 0 auto; padding-top: 8px; }
.brand-logo { width: 140px; height: auto; display: block; }

.report-title {
  display: flex; flex-direction: column; gap: 10px;
  margin: 0 0 24px 0;
  letter-spacing: -.05em;
  line-height: .95;
}
.title-line-1 {
  font-size: clamp(52px, 7vw, 88px);
  font-weight: 800;
  color: var(--text);
}
.title-line-1 em {
  font-style: normal;
  color: var(--accent);
}
.title-line-2 {
  font-size: clamp(20px, 2.3vw, 30px);
  font-weight: 500;
  letter-spacing: -.02em;
  color: var(--text-mid);
  line-height: 1.15;
}

@media (max-width: 720px) {
  .report-header { flex-direction: column-reverse; align-items: flex-start; }
  .report-header-brand { align-self: flex-end; }
}
```

The `<em>` on line 1 keeps the existing template convention: `font-style: normal; color: var(--accent);` — the player domain is set in Accenture purple, not actual italic. Line 2 sits below in softer ink and medium weight, clearly subordinate but unmistakable.

### 4.2 Score banner (structure unchanged, verdict guidance updated)

The score banner stays as in the template — black left column with the focus player's overall score, white right column with the verdict.

**Updated verdict-writing rule:** because the scorecard now exposes per-column scores, the verdict **should reference at least one benchmark by its score** (e.g. „Schneider Electric leads at 7.4, ABB sits at 4.1"). This is what makes the v1.2 score visibility pay off in the narrative.

### 4.3 Callouts — weight-note, PoV, Transaction-Rail-Note, split-note

The original template has `.weight-note`, `.pov-callout`, `.split-note` — all three styled identically with a purple left border on light surface. v1.2 adds `.rail-note` for the B2B-Industrial ACP/UCP reframe, visually distinct (uses `--warning` so it doesn't compete with the PoV callout):

```css
.rail-note {
  padding: 20px 24px;
  margin-bottom: 32px;
  border-left: 4px solid var(--warning);
  background: #fdf6ec;
  color: var(--text-mid);
}
.rail-note strong { color: var(--warning); }
```

```html
<div class="rail-note">
  <strong>On transaction rails:</strong> {{transaction_rail_note.body}}
</div>
```

### 4.4 Section numbering

Section order in v1.2:

| #  | Section                                  |
|----|------------------------------------------|
| 01 | Full criterion assessment                |
| 02 | Priority quick wins (horizon-structured) |
| 03 | Commercial upside framing **(NEW)**      |
| 04 | Key competitive risks                    |
| 05 | Rating key & methodology                 |

The original template's „04 — Reference" becomes „05 — Reference" — Commercial Upside (Section 03) shifts the rest by one.

### 4.5 Scorecard — per-column overall score + per-pillar score (UPDATED)

The biggest v1.2 change. Two new score chips appear in the criterion table:

**(a) Column-header overall score** — one chip per benchmark, inside the column header cell next to the player name. Tells the reader at a glance who is leading overall.

**(b) Pillar-row per-column score** — instead of `<tr class="pillar-row"><td colspan="5">…`, the pillar header is now a five-cell row: pillar name + description on the left, four per-column score chips on the right.

**Updated HTML:**

```html
<thead>
  <tr class="col-header">
    <td>Criterion</td>
    <td class="col-b1">
      <span class="co-name">{{focus_player.name}}</span>
      <span class="co-sub">{{focus_player.sub_label}}</span>
      <span class="col-score {{score_class}}">{{column_scores.focus.score}}<span class="cs-denom">/10</span></span>
    </td>
    <td class="col-b2">
      <span class="co-name">{{benchmark1}}</span>
      <span class="co-sub">{{sub_label}}</span>
      <span class="col-score {{score_class}}">{{column_scores.bench1.score}}<span class="cs-denom">/10</span></span>
    </td>
    <!-- bench2, bench3 same pattern -->
  </tr>
</thead>

<tbody class="p1">
  <tr class="pillar-row">
    <td>
      <div class="pillar-name">1 · {{pillars[0].name}}</div>
      <div class="pillar-desc">{{pillars[0].description}}</div>
    </td>
    <td><span class="pillar-score {{score_class}}">{{pillar_scores.focus}}</span></td>
    <td><span class="pillar-score {{score_class}}">{{pillar_scores.bench1}}</span></td>
    <td><span class="pillar-score {{score_class}}">{{pillar_scores.bench2}}</span></td>
    <td><span class="pillar-score {{score_class}}">{{pillar_scores.bench3}}</span></td>
  </tr>
  <!-- crit-rows below, unchanged -->
</tbody>
```

The `colspan="5"` on the pillar row is **removed** in v1.2 — the pillar row is now a real five-cell row.

**CSS additions:**

```css
/* Column header score chip — sits in the dark header cell */
.col-score {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -.01em;
  line-height: 1;
}
.cs-denom {
  font-size: 9px;
  opacity: .65;
  letter-spacing: .08em;
  margin-left: 3px;
  font-weight: 700;
}

/* Pillar row per-column score chip — centred */
.pillar-row td:not(:first-child) {
  text-align: center;
  vertical-align: middle;
}
.pillar-score {
  display: inline-block;
  padding: 8px 14px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.02em;
  line-height: 1;
}

/* Score-pill colour classes — apply to both .col-score and .pillar-score */
.s-strong { background: #dcfce7; color: #166534; }   /* ≥ 7.5 */
.s-mid    { background: #fef3c7; color: #92400e; }   /* 5.0–7.4 */
.s-low    { background: #ffe4d6; color: #9a3412; }   /* 2.5–4.9 */
.s-poor   { background: #fee2e2; color: #991b1b; }   /* < 2.5 */
```

The pillar-row chip (18 px) is intentionally larger than the column-header chip (14 px). The larger chip is the per-pillar story — that's where the differentiation between benchmarks gets interesting. The smaller header chip is the at-a-glance summary.

**Score computation rule** (the renderer must produce reproducible numbers):

```
pillar_score(column, pillar) = ( Σ (weight × rating_value) for criteria in pillar )
                              / ( Σ (weight × 100%) for criteria in pillar )
                              × 10

rating_value:  Confirmed = 100%   Strong = 100%   Partial = 50%
               Unverified = 25%   Missing = 0%
```

Column-aggregate (header chip) score = weighted sum across pillars using the pillar weights from the sector skill (×3 / ×3 / ×3 / ×1–2), normalised to 0–10. **The focus player's column-aggregate score must equal the banner score** — divergence means one is wrong.

### 4.6 GEO Evidence Block (NEW v1.2 — required for B2B-Industrial)

A new component, inserted at the end of Section 01 (after the scorecard, before the Section 02 label). Documents the actual buyer queries that justify the GEO-presence rating.

```html
<div class="geo-evidence">
  <div class="geo-header">
    <h3>GEO evidence — buyer queries tested</h3>
    <div class="geo-meta">
      <span>Stand: {{geo_evidence.stand_date}}</span>
      <span>Platforms: {{geo_evidence.platforms_tested}}</span>
    </div>
  </div>

  <table class="geo-table">
    <thead>
      <tr>
        <th style="width:38%">Query</th>
        <th style="width:22%">Focus player position</th>
        <th style="width:25%">Top competitors cited</th>
        <th style="width:15%">Citation quality</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="geo-query">"{{query}}"</td>
        <td>{{focus_player_position}}</td>
        <td>{{top_competitors_cited}}</td>
        <td>{{notes}}</td>
      </tr>
      <!-- minimum 5 rows for B2B-Industrial, 8 for D2C and FS -->
    </tbody>
  </table>

  <p class="geo-summary"><strong>Gap diagnosis:</strong> {{geo_evidence.summary}}</p>
</div>
```

```css
.geo-evidence {
  margin: 40px 0 56px;
  padding: 32px;
  background: var(--surface-2);
  border-left: 4px solid var(--accent);
}
.geo-header {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
}
.geo-header h3 { font-size: 18px; font-weight: 800; }
.geo-meta { display: flex; gap: 16px; font-size: 11px;
  font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  color: var(--text-light); }
.geo-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.geo-table th { text-align: left; padding: 12px 14px;
  background: var(--bg); font-size: 10px; font-weight: 700;
  letter-spacing: .08em; text-transform: uppercase; color: var(--text-mid);
  border-bottom: 1px solid var(--border); }
.geo-table td { padding: 14px; border-bottom: 1px solid #ececec;
  vertical-align: top; }
.geo-query { font-family: ui-monospace, monospace; font-size: 12px; color: var(--text); }
.geo-summary { margin-top: 20px; padding-top: 16px;
  border-top: 1px solid var(--border); font-size: 14px; color: var(--text-mid); }
.geo-summary strong { color: var(--text); font-weight: 700; }
```

### 4.7 Quick Wins — three horizon blocks (UPDATED)

The flat Quick-Wins table becomes three sequential tables, each with its own header strip. Horizons: Week / Quarter / 2–3 Months. Numbering resets per horizon.

```html
<div class="section-label">02 — Priority quick wins</div>
<h2>Where to act, by horizon</h2>

<p class="qw-intro">{{Optional 1–2 sentence framing}}</p>

<div class="horizon-block">
  <div class="horizon-header">
    <span class="horizon-tag h-week">Do this week</span>
    <h3>Hours to days — no engineering backlog conflict</h3>
  </div>
  <table class="qw-table">
    <thead>
      <tr>
        <th style="width:40px">#</th>
        <th>Action</th>
        <th style="width:160px">Effort</th>
        <th style="width:100px">Impact</th>
        <!-- FS only: -->
        <th style="width:140px">Compliance risk</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="qw-num">1</div></td>
        <td class="qw-action">
          <strong>{{title}}</strong>
          <p>{{detail — 3–6 sentences, with a peer reference}}</p>
        </td>
        <td><span class="effort-tag effort-low">{{horizon_label}}</span></td>
        <td><span class="impact-tag impact-high">{{impact}}</span></td>
        <td><span class="cr-tag cr-low">Low</span></td>  <!-- FS only -->
      </tr>
    </tbody>
  </table>
</div>

<!-- Repeat for horizon-quarter and horizon-months -->
```

```css
.horizon-block { margin-bottom: 48px; }
.horizon-header {
  display: flex; align-items: baseline; gap: 18px;
  margin-bottom: 16px; padding-bottom: 12px;
  border-bottom: 2px solid var(--text);
}
.horizon-header h3 {
  font-size: 20px; font-weight: 800; color: var(--text);
  letter-spacing: -.02em;
}
.horizon-tag {
  display: inline-block;
  padding: 6px 14px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .12em; text-transform: uppercase;
}
.h-week    { background: var(--accent-soft); color: var(--accent); }
.h-quarter { background: #efefef; color: var(--text-mid); }
.h-months  { background: #f6eadb; color: var(--warning); }

/* Compliance-risk pills — FS only */
.cr-tag {
  display: inline-flex; padding: 6px 10px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .08em; text-transform: uppercase;
}
.cr-low  { background: #dcfce7; color: #166534; }
.cr-mid  { background: #fef3c7; color: #92400e; }
.cr-high { background: #fee2e2; color: #991b1b; }

.qw-intro {
  margin-bottom: 32px; max-width: 760px;
  color: var(--text-mid); font-size: 14px;
}
```

**Sort within each horizon** by impact descending, then by effort ascending. Numbering resets to 1 in each horizon. Total entries 6–9 across all three horizons, minimum one per horizon.

### 4.8 Commercial Upside — Section 03 (NEW)

A three-card grid between Quick Wins and Competitive Risks. Sector-specific sub-block names (see Section 5).

```html
<div class="section-label">03 — Commercial upside framing</div>
<h2>What fixing this unlocks</h2>

<p class="upside-intro">{{Optional 1–2 sentence framing}}</p>

<div class="upside-grid">
  <div class="upside-card">
    <div class="upside-eyebrow">{{sub_blocks[0].eyebrow}}</div>
    <h3 class="upside-headline">{{sub_blocks[0].headline}}</h3>
    <p class="upside-body">{{sub_blocks[0].body}}</p>
    <p class="upside-source"><strong>Source:</strong> {{sub_blocks[0].sources}}</p>
  </div>
  <!-- Two more cards -->
</div>
```

```css
.upside-intro {
  margin-bottom: 32px; max-width: 760px;
  color: var(--text-mid); font-size: 14px;
}
.upside-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}
.upside-card {
  padding: 32px 28px;
  background: var(--surface-2);
  border-top: 4px solid var(--accent);
}
.upside-card:nth-child(2) { border-top-color: var(--text); }
.upside-card:nth-child(3) { border-top-color: var(--text-mid); }
.upside-eyebrow {
  font-size: 10px; font-weight: 800;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 14px;
}
.upside-headline {
  font-size: 20px; font-weight: 800;
  letter-spacing: -.02em; line-height: 1.25;
  color: var(--text);
  margin: 0 0 16px 0;
}
.upside-body {
  font-size: 13px; line-height: 1.7;
  color: var(--text-mid);
  margin-bottom: 16px;
}
.upside-source {
  font-size: 10px;
  letter-spacing: .04em;
  color: var(--text-light);
  padding-top: 14px;
  border-top: 1px solid var(--border);
}
.upside-source strong { color: var(--text-mid); font-weight: 700; }

@media (max-width: 900px) {
  .upside-grid { grid-template-columns: 1fr; }
}
```

**Tone rules for Commercial Upside:**
- Always attribute the source with date.
- Always range, not point estimate. „3x–5x range, 4,6x mid-point" not „4,6x lift".
- Player-contextualised, not industry-average. Reorder sub-blocks if a different lever is dominant for the player.

### 4.9 Methodology — score legend addition

Methodology gets a small block explaining the v1.2 score chips:

```html
<div class="score-legend">
  <p><strong>Score chips:</strong> Each benchmark column carries an overall maturity score (0–10) in its header, and a per-pillar score in each pillar row. Colours:
    <span class="col-score s-strong">7.5+</span> strong &nbsp;
    <span class="col-score s-mid">5.0–7.4</span> mid &nbsp;
    <span class="col-score s-low">2.5–4.9</span> low &nbsp;
    <span class="col-score s-poor">&lt;2.5</span> poor.
  </p>
</div>
```

## 5 · Sector-Specific Variations

The visual system is identical across sectors. Content varies:

| Element                       | B2B Industrial                                      | D2C Consumer                                          | FS Financial Services                                 |
|-------------------------------|-----------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Eyebrow                       | „B2B Agentic Commerce Readiness Report"             | „D2C Agentic Commerce Readiness Report"               | „FS Agentic Commerce Readiness Report"                |
| Title line 1                  | `<em>{domain}</em>` in accent purple                | `<em>{domain}</em>` in accent purple                  | `<em>{institution} ({domain})</em>` in accent purple  |
| Title line 2 examples         | „Industrial Automation, Electrification & Robotics" | „Sport Performance & Lifestyle D2C"                   | „European Universal Bank — Retail & Corporate"        |
| Transaction-Rail-Note         | **Mandatory** — ACP/UCP reframe                     | Not used                                              | Optional — Hybrid contexts only                       |
| Pillar 3 label                | „Agentic Transaction Protocols"                     | „Agentic Checkout & Payment Protocols"                | „Agentic Identity, KYC & Consent"                    |
| Pillar 4 label                | „B2B Trust & Identity"                              | „Customer Trust, Identity & Consent"                  | „Compliance & Regulatory Trust"                       |
| GEO Evidence Block            | **Mandatory**, ≥ 5 queries                          | Recommended, ≥ 8 buyer queries                        | Recommended, ≥ 8 advisor-style queries                |
| Quick Wins compliance column  | —                                                   | —                                                     | **Mandatory** (Low/Mid/High per entry)                |
| Commercial Upside sub-blocks  | Conversion / Cost-to-Serve / Wallet-Share Defense   | Conversion / AOV-Lift / Repeat-Purchase               | Onboarding-Friction / Cross-Sell / Wallet-Share Def.  |
| Optional sub-score in banner  | —                                                   | Mobile-readiness sub-score                            | Regulatory-readiness sub-score                        |
| Methodology disclaimer focus  | „Verify CDN/WAF rules, robots.txt overrides"        | „Verify payment processor relationships, mobile SSR"  | „Verify with Compliance, Legal, and IT Security"     |

## 6 · Quality Checklist (run before delivery)

1. **Score consistency.** Focus player's column-header score equals the banner score. Pillar scores per column equal the weighted sum within that pillar — recompute at least one pillar score manually per column.
2. **No invented sources.** Every „Confirmed" rating is backed by a check the reader could re-run.
3. **Every „Missing" has a context line.** Never a bare „Missing" pill.
3a. **Every „Unverified" has a reason line.** „Unverified" is only legitimate when the artefact was genuinely unretrievable — login wall, no public artefact, registry not queryable. State that reason explicitly per cell. If no reason holds, the cell is either „Missing" (absence was confirmed) or unchecked (go back and read the artefact). „Unverified" is never a shortcut for a benchmark that simply got less research depth than the focus player.
4. **Verdict references specific scores.** The verdict names at least one benchmark by its column score („Schneider Electric leads at 7.4, ABB sits at 4.1").
5. **Quick Wins reference benchmarks.** At least four entries explicitly mention a peer who has already made the move.
6. **Quick Wins horizon distribution.** Each of the three horizons has at least one entry. No horizon block is empty.
7. **Risks are specific.** Every risk names competitor + move + implication.
8. **GEO evidence is real.** Actual queries, actual results. „Not cited" is a finding, not a placeholder.
9. **Commercial Upside is attributed.** All three sub-blocks cite source + date.
10. **Methodology box is filled.** Scoring formula, sources, disclaimer all present.
11. **Logo renders correctly.** Open the file in a browser; the Accenture Song mark sits cleanly top-right on white background, no broken `<img>` placeholder, no white box artefact.
12. **Title is two lines.** Line 1 = player/domain, line 2 = sector descriptor. Both visible. Line 1's `<em>` styled in `--accent` (Accenture purple).
13. **Single file.** Renders in a browser with no external dependencies beyond Google Fonts (Inter).
14. **Print-friendly.** The `@media print` rule produces a clean PDF (test by printing to PDF from Chrome).
15. **Footer is filled.** No leftover `{{...}}` markers anywhere.

## 7 · Assembly Process

1. Copy `report_template.html` to `{{focus_player}}_Agentic_Commerce_Readiness_Report_{{Month}}_{{Year}}.html`.
2. Encode the logo (`cat assets/logo_datauri.txt` or the Python one-liner from Section 2). Paste the result as the `src=` value of `<img class="brand-logo">`. Verify it renders.
3. Fill the header — two-line title (line 1 = domain, line 2 = sector descriptor) — and footer first.
4. Fill the scorecard with all criterion ratings. **The verification path is per cell, not per player.** Every criterion × every benchmark column goes through the same live artefact reading (robots.txt, llms.txt, plan pages, registry lookups) as the focus player before any rating is set. Do not let benchmark columns collapse into „Unverified" just because they received less research attention — that is the most common way the matrix degrades. If a benchmark cell is genuinely unretrievable, it gets a reason line per checklist 3a; otherwise it is „Confirmed/Strong", „Partial", or „Missing" like any focus-player cell.
5. Compute per-pillar scores per column using the formula in Section 4.5. Compute column-aggregate scores. Fill into the column-header chips and pillar-row chips. Apply the correct `.s-strong / .s-mid / .s-low / .s-poor` class based on the value, not the column. Verify focus player's column score equals the banner score.
6. Fill GEO evidence block during scorecard work — the queries used for Criterion 1.5 populate this block. Do not run them twice.
7. Write the score banner verdict last — synthesise across the scorecard, reference at least one benchmark by its column score.
8. Quick Wins next (horizon-tagged), then Commercial Upside (three sub-blocks), then Competitive Risks, then Methodology.
9. Run the quality checklist (Section 6) before sharing.
10. **Run the Unverified audit gate.** Before delivery, run an inline check that counts every „unverified" rating in the file and lists it with its column and criterion, so no cell hides in the aggregate. Pattern:

    ```bash
    python3 <<'EOF'
    import re
    html = open("REPORT.html", encoding="utf-8").read()
    # adjust the pattern to how ratings are tagged in the template (class or data-attr)
    cells = re.findall(r'(unverified)', html, flags=re.IGNORECASE)
    print(f"Unverified cells: {len(cells)}")
    EOF
    ```

    For each one, answer explicitly: was the artefact retrieval actually attempted? If not, the gate fails — go back and read it. The count in the output is the part that is hard to overlook; treat a non-zero count as a prompt to justify each cell, not as an acceptable resting state. (This gate reduces, but does not eliminate, the asymmetry — a count can still be nodded through. The numeric list is the safeguard.)

## 8 · File Output

- **Filename:** `{Player}_Agentic_Commerce_Readiness_Report_{Month}{Year}.html`
- **Encoding:** UTF-8, `<meta charset="UTF-8">`
- **No external JS.** No tracking, no analytics.
- **One embedded image** (the Accenture Song logo, as Base64 data URI). No other images.
- **Single file, self-contained.** All CSS inline in `<style>` block. Only external resource is the Google Fonts stylesheet (Inter).

## 9 · Common Pitfalls

- **Inventing scores.** „Unverified" ≠ „Missing". Use the right rating. And the reverse failure: do not default to „Unverified" to avoid reading an artefact. „Unverified" means *unretrievable*, not *unchecked*. A benchmark left at „Unverified" out of convenience is a hole in the matrix, not a rating.
- **Over-rating a focus player.** If the scorecard reads like internal marketing, the report has failed. Bias toward conservative ratings; let the verdict do the framing.
- **Generic Quick Wins.** Effort timeline + concrete scope + named peer reference, every time. „Improve digital presence" is not a Quick Win.
- **Mixing horizons.** A robots.txt fix is not a Quarter project. A SSR migration is not a Week fix. The horizon block IS the trustworthiness of the recommendation — get it wrong and the CIO discounts the whole report.
- **Asserting GEO presence without evidence.** Never write „the focus player has weak AI visibility" without the evidence block showing actual queries and citation results. The evidence is the argument.
- **Unsourced commercial-upside numbers.** „4,6x conversion lift" without a named source and date is the fastest way to lose CFO trust. Always source, always date, always range.
- **Score chip colour mismatch.** Score colour is determined by the value, not the column. A 7.6 in the focus column is green, just as a 7.6 in any other column. Do not colour-code by column.
- **Per-pillar scores that contradict the scorecard.** If Schneider's Pillar 1 score reads 6.5 but its four Pillar 1 criteria are mostly „Partial", the score is wrong. Recompute.
- **Decorative emojis or icons.** No icons. Pillar accents and rating/score pills do all visual signalling.
- **Inconsistent column order.** Focus player is always column 1. Benchmarks follow in header-meta order. No reordering between sections.
- **Logo on a white box.** If the logo appears in a visible white rectangle on the report background, the alpha channel was lost during embedding — re-encode from the source PNG, do not strip the alpha by accident.
- **Pillar row collapsed to colspan.** v1.2 explicitly removes `colspan="5"` from the pillar row. If you copy a v1.0 snippet by accident, the per-pillar score chips will not have cells to live in — verify the pillar row has five `<td>` elements, not one with colspan.

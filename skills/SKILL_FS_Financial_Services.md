---
name: Financial Services Agentic Commerce Readiness
version: 1.2 (May 2026)
sector: Banks, Insurers, Asset Managers, Brokerage
description: |
  Use this skill when assessing the agentic-readiness of a regulated financial
  institution against direct peers and challengers. Triggers: retail/corporate
  banking, life/non-life insurance, asset/wealth management, broker-dealers,
  payment institutions. "Transaction" can mean account opening, advisory,
  contract conclusion, payment initiation, claims handling. Examples:
  Allianz, Deutsche Bank, ING, Commerzbank, ERGO, AXA, BBVA, JPMorgan, DBS,
  N26, Revolut, Wise.
when_not_to_use: |
  Do not use for industrial B2B (use SKILL_B2B_Industrial.md) or D2C consumer
  brands (use SKILL_D2C_Consumer.md). For FinTechs that are strictly payment-
  rails (Stripe, Adyen) ohne consumer/SME facing product: assess as B2B
  infrastructure player, not as FS-end-customer player.
changelog: |
  v1.2 (May 2026): Aligned with Render-Skill v1.2 — two-line header
  convention; Accenture Song logo embedded top-right; per-column maturity
  scores and per-pillar scores per benchmark; Quick Wins restructured into
  three horizon classes (Week / Quarter / 2–3 Months) with mandatory
  Compliance-Risk column on each entry; Commercial Upside Framing section
  added (FS-specific levers: Onboarding-Friction Reduction / Cross-Sell
  Uplift / Wallet-Share Defense); GEO Evidence block recommended
  (advisor-style queries). Optional Transaction-Rail-Note for
  KYC/payment-rail framing where relevant.
---

# Financial Services — Agentic Commerce Readiness

## 1 · PoV Framing

> **Agentic Commerce in Financial Services heißt nicht „Produkt im Webshop kaufen",
> sondern Beratung, KYC, Onboarding und Vertragsabschluss agent-mediated.**
> Wer keine agent-ready Identity-, Consent- und Compliance-Schicht baut,
> wird im Open-Finance-Stack zur reinen Bilanz-Backend-Funktion —
> während Distribution, Beratung und Customer-Interface von Aggregatoren
> und AI-Advisors übernommen werden.

Die Kernaussage im FS-Report ist: **Agentic FS ist eine Verteilungs-Schlacht, keine Produkt-Schlacht**. Banken und Versicherer haben Produktdaten, Bilanzen und Lizenzen — was sie zunehmend nicht haben, ist der direkte Customer-Touchpoint. AI-Advisors (Cleo, Brighty, Daffy), agent-mediated Aggregatoren (Tink, FinAPI, finleap connect), und vor allem die Kombination aus BigTech-Wallets + LLM-Interface (Apple Intelligence + Apple Pay; ChatGPT + agentic Stripe) bauen sich zwischen das Institut und seinen Kunden. Die Bank, die in dieser Welt agentisch nicht antritt, wird Pricing-Komponente eines fremden Customer-Erlebnisses.

## 2 · Note on Transaction Rails (Optional)

Anders als im B2B-Industrial-Skill ist die Transaktions-Rail-Frage in FS **kontextabhängig**:

- **PSD2-Payment-Initiation** und **PSD3-Vorbereitung** sind die Standard-Rails für agent-mediated Payments im Banking-Kontext.
- **EUDI-Wallet + Verifiable Credentials** ist die Identity- und Onboarding-Rail.
- **ACP/UCP** sind in FS *teilweise relevant* — überall dort, wo Karten-Payments oder One-Shot-Käufe (z. B. Reiseversicherung, Tagesgeld-Eröffnung mit sofortiger Card-Funding) im Spiel sind. Nicht relevant für Beratungsabschluss oder Kontoeröffnung mit SEPA.

Wenn ein Report in einem Hybrid-Kontext liegt (z. B. Versicherer mit Sofort-Reiseversicherung-Check-out), ist eine kurze Transaction-Rail-Note im Header sinnvoll, die klärt: welche Rail für welchen Produkt-Touchpoint. Wenn der Player primär klassisches Beratungsgeschäft betreibt: Note entfällt.

## 3 · Säulen-Gewichtung

| Säule                                          | Gewicht | Begründung                                                                                          |
|------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| 1 · AI Discoverability & Product Comparability | **×2**  | Wichtig, aber regulatorisch eingeschränkt (Beratung nur durch lizenzierte Stellen)                  |
| 2 · Open Banking / Open Finance APIs           | **×3**  | PSD2/PSD3 + FAPI 2.0 + Open Insurance sind die strukturelle Grundlage für jeden agentic flow        |
| 3 · Agentic Identity, KYC & Consent            | **×3**  | EUDI-Wallet, Verifiable Credentials und agent-delegated SCA sind das eigentliche Differenzierungsfeld |
| 4 · Compliance & Regulatory Trust              | **×3**  | EU AI Act, MiFID, IDD, DORA — Compliance ist nicht „Hygienefaktor" sondern Lizenz zum Agentic-Spielen |

## 4 · Kriterien-Katalog

### Säule 1 — AI Discoverability & Product Comparability

| Nr. | Kriterium                                                            | Gewicht | Check                                                                       |
|-----|----------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 1.1 | GEO presence in AI-Beratungs-Surfaces                                | ×3      | **Empfohlene Evidenz: 8+ Queries gegen Perplexity Finance, ChatGPT, Claude für „beste Tagesgeldzinsen / Lebensversicherung / Hausratversicherung". Siehe GEO Evidence Protocol unten.** |
| 1.2 | Structured Product Disclosure (PRIIPs KID, MiFID Cost Disclosure)    | ×3      | KIDs als strukturiertes XBRL / JSON, nicht nur PDF                          |
| 1.3 | llms.txt mit Konditionen, Gebühren-Schedules, Disclosures            | ×2      | /llms.txt vorhanden; Verweise auf Konditions-Index, AGBs, Datenschutz       |
| 1.4 | AI-readable Konditions- und Produktseiten (kein JS-Wall)             | ×2      | curl auf Konditions-PDPs; Zinssätze und Gebühren im initialen HTML         |
| 1.5 | Schema.org FinancialProduct / LoanOrCredit / InsurancePolicy         | ×1      | Strukturierte Markup auf Produkt-Pages (Coverage 2026 noch limitiert, aber lohnt sich) |
| 1.6 | Vergleichs-/Aggregator-Listings (Check24, Verivox, Finanzfluss)      | ×1      | Präsenz und Datenqualität in relevanten Vergleichs-Tools                    |
| 1.7 | robots.txt für AI-Crawler-Policy                                     | ×2      | GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended explizit erlaubt        |

#### GEO Evidence Protocol (empfohlen für FS)

FS-Käufer-Queries sind Beratungs-Queries, nicht Produkt-Queries — und sie sind regulatorisch sensibler, weil AI-Antworten als „Anlage-/Versicherungsberatung" missverstanden werden können. Empfehlung: **8+ konkrete Verbraucher-Queries**, formuliert wie ein normaler Bankkunde sie tatsächlich stellt:

- *„welche Bank bietet aktuell die besten Tagesgeldzinsen für deutsche Kunden"*
- *„welche Hausratversicherung lohnt sich für ein Reihenhaus in NRW mit 200qm"*
- *„wie eröffne ich ein Geschäftskonto mit Sofort-Verfügbarkeit für ein Startup"*
- *„welche ETF-Anlage passt zu mir wenn ich 35 bin und 100 Euro pro Monat sparen möchte"*

Pro Query dokumentieren: ob der Focus-Player überhaupt erscheint, welche Wettbewerber/Aggregatoren (Check24, Verivox) zitiert werden, welche AI-Advisors (Cleo, Finanzfluss, Daffy) als unabhängige Quellen referenziert werden. Plattformen: ChatGPT, Perplexity, Claude, Google Gemini, Apple Intelligence. Mindestens drei abdecken. Stand-Datum dokumentieren.

**Wichtig:** Der GEO-Evidenz-Block ist im FS-Report eine *Diagnose-Funktion*, kein Optimierungs-Imperativ. „Die Bank erscheint nicht bei Tagesgeld-Queries" ist eine Sichtbarkeits-Information, keine Aufforderung, die AI-Antworten zu beeinflussen — die regulatorischen Implikationen einer aktiven AI-Vorschlagsoptimierung in FS müssen vor jeder Maßnahme mit Compliance geklärt werden.

### Säule 2 — Open Banking / Open Finance APIs

| Nr. | Kriterium                                                       | Gewicht | Check                                                                       |
|-----|-----------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 2.1 | PSD2 AISP/PISP/CBPII Endpoints (RTS-konform)                    | ×3      | Berlin Group / STET / UK OB Standard; produktive Endpoints; SLA-Reporting   |
| 2.2 | PSD3 / PSR Preparedness (geplante Q4 2026 Umsetzung)            | ×3      | Roadmap publiziert; Sandbox für PSD3-Features aktiv                         |
| 2.3 | FAPI 2.0 Compliance                                             | ×2      | FAPI 2.0 Security Profile bestätigt; conformance tested                     |
| 2.4 | Public Developer Portal mit Sandbox                             | ×3      | developer.[bank].com mit OpenAPI, Sandbox-Auth, Test-Accounts               |
| 2.5 | Open Insurance Initiative API Readiness                         | ×2      | Open Insurance Initiative Listing; ACORD-Standard-Support                   |
| 2.6 | Payment Initiation via Agents                                   | ×3      | Programmatic PSD2 Payment Initiation; FAPI 2.0 + RAR (RFC 9396) Scopes      |
| 2.7 | Account Information für Agents (mit user-delegierter Auth)      | ×2      | AIS-Endpoints für historische Daten und Real-time-Balances                 |
| 2.8 | BIAN / Open Banking Standard Adoption                           | ×1      | BIAN Service Domain Mapping; sauberere API-Strukturierung als Indikator     |

### Säule 3 — Agentic Identity, KYC & Consent

| Nr. | Kriterium                                                       | Gewicht | Check                                                                       |
|-----|-----------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 3.1 | eIDAS 2.0 / EUDI Wallet Acceptance (ab Q4 2026 EU-weit Pflicht) | ×3      | EUDI-Wallet als Auth/KYC akzeptiert; Demo oder Pilot dokumentiert            |
| 3.2 | Verifiable Credentials (W3C VC) für KYC-Reuse                   | ×2      | VC-Format akzeptiert; SDK / API für VC-Verification                          |
| 3.3 | Agent Attestation / Delegated Consent (RFC 9396 RAR)            | ×3      | Rich Authorization Requests dokumentiert; Agent-Scoped Tokens                |
| 3.4 | Strong Customer Authentication via Passkeys + Biometrics        | ×2      | FIDO2/Passkey-Support für SCA; Biometric-Fallback                           |
| 3.5 | Qualifizierte Elektronische Signatur (QES) für Vertragsabschluss| ×2      | QES-Integration (Sign-me, DocuSign EU Advanced, Adobe Sign with EUDI)        |
| 3.6 | KYC-Reuse-Framework (eKYC-Netzwerke, e.g. yes.com, Verimi)      | ×1      | Anbindung an deutsche/europäische eKYC-Netzwerke                            |
| 3.7 | DSAs (Decentralised Self-Sovereign Identity) Roadmap            | ×1      | Strategischer Stance zu SSI; Pilot-Beteiligung in EBSI o. ä.                |

### Säule 4 — Compliance & Regulatory Trust

| Nr. | Kriterium                                                            | Gewicht | Check                                                                       |
|-----|----------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 4.1 | EU AI Act Compliance Disclosure (Art. 13 Transparenz)                | ×3      | Public Statement zu High-Risk-AI-Systemen; Modell-Inventar publiziert      |
| 4.2 | BaFin / EBA Guidelines on AI in Financial Services Adherence         | ×3      | Statement zu BaFin „Big Data and Artificial Intelligence" Principles 2024/25 |
| 4.3 | MiFID II Cost & Charges Disclosure als strukturierte Daten           | ×2      | XBRL / JSON-Disclosure neben PDF                                            |
| 4.4 | IDD (Insurance Distribution Directive) Digital Advice Trail          | ×2      | Audit Trail für agent-mediated Beratung; Suitability Test dokumentierbar    |
| 4.5 | GDPR Article 22 (automated decision-making) Handling                 | ×3      | Transparente Information zu automatisierten Entscheidungen; Opt-out-Mechanik|
| 4.6 | DORA (Digital Operational Resilience Act) Compliance                 | ×2      | DORA-Reporting-Framework; ICT-Risk-Management-Disclosure                    |
| 4.7 | Audit Trail für agentic Recommendations (Versicherungs- und Anlageberatung) | ×3 | Vollständige Reproduzierbarkeit jeder agent-mediated Empfehlung; CIO-Sign-off |
| 4.8 | Independent Model Risk Management (MRM) für Agentic Systems          | ×2      | Internes MRM-Framework dokumentiert; LLM-/Agent-Audits jährlich             |

## 5 · Scoring Output Schema (NEW v1.2)

Wie in B2B und D2C liefert das Scoring **aggregierte Scores pro Wettbewerber und pro Säule** — auszuweisen in der Spalten-Headerzeile (Gesamt-Maturity-Score pro Wettbewerber) und in jeder Pillar-Headerzeile (Pillar-Score pro Wettbewerber). Berechnungsregel: identisch mit B2B-Skill, Section 5.

**Regulatory-Readiness-Sub-Note (FS-spezifisch):** Im Score-Banner wird zusätzlich zur Gesamt-Score-Zahl eine kleine **Regulatory-Readiness-Sub-Note** ausgewiesen, die ausschließlich die Säule 4 (Compliance & Regulatory Trust) aggregiert reflektiert. Hintergrund: Bei FS ist Compliance-Score auch ohne Tech-Modernisierung ein eigenständig relevantes Signal. Wenn Säule-4-Score signifikant höher liegt als Gesamtschnitt, ist das Institut „compliance-ready, technisch noch nicht" — eine andere Lage als „compliance-Lücken, technisch reif". Beide Diagnosen führen zu unterschiedlichen Empfehlungen.

## 6 · Quick Wins — Horizon-strukturiert mit Compliance-Risk-Spalte

In FS bekommt jeder Quick Win zusätzlich zu Effort/Impact eine **Compliance-Risk-Klassifikation** (Low / Mid / High). Kein Tech-Quick-Win ohne Compliance-Sign-off-Schritt — diese Spalte macht das visuell sichtbar.

### Horizon 1 — Do this week (Hours to days)

- **llms.txt mit Konditions-, Gebühren-, Disclosure-Index** — Tage. Compliance-Risk: Low. Niedrigster Effort, hoher Sichtbarkeits-Boost.
- **robots.txt + Applebot-Extended Audit** — Tage. Compliance-Risk: Low. Sicherstellen, dass AI-Crawler zugelassen sind, wo es sinnvoll ist.
- **AI Act Modell-Inventar publizieren (öffentliche Version)** — 4–7 Tage. Compliance-Risk: Mid (Disclosure-Wortwahl mit Legal abstimmen). Compliance-Erfordernis ohnehin; gleichzeitig Vertrauens-Signal an Geschäftskunden.

### Horizon 2 — Do this quarter (4–12 weeks)

- **PRIIPs KID / MiFID Cost-Disclosure als strukturierte Daten** — 4–8 Wochen. Compliance-Risk: Low. Liefert sofort Citation-Tauglichkeit in AI-Beratungs-Tools und ist regulatorisch unproblematisch (KID-Inhalt ist bereits Pflicht-Disclosure, nur Format wird geändert).
- **Public Developer Portal mit PSD2-Sandbox** — wenn noch nicht vorhanden: ≥12 Wochen (Horizon-3-Kandidat). Wenn vorhanden: Doku + Sandbox-UX verbessern, 4–8 Wochen, Compliance-Risk: Low.
- **EUDI-Wallet-Acceptance-Pilot starten** — 8–12 Wochen Pilot-Setup. Compliance-Risk: Mid (Legal-Review zu eIDAS-2.0-Konformität). EU-weit ab Q4 2026 Pflicht; Frühadopter haben deutlichen Wettbewerbsvorteil bei Onboarding-Friction.
- **Agent Attestation / Delegated Consent (RFC 9396 RAR)** — 8–12 Wochen. Compliance-Risk: Mid. Voraussetzung für PSD3-konforme agent-mediated Payments.

### Horizon 3 — Build over 2–3 months (Engineering project)

- **Public Developer Portal mit PSD2/PSD3-Sandbox (Neubau)** — 12–20 Wochen. Compliance-Risk: Mid (RTS-Konformität).
- **Verifiable Credentials für KYC-Reuse (B2B/Firmenkundengeschäft)** — 12–24 Wochen. Compliance-Risk: High (GwG-konforme Wiederverwendung). Größter Hebel im KMU- und Firmenkundenbereich.
- **EUDI-Wallet-Production-Acceptance (post-Pilot)** — 16–24 Wochen. Compliance-Risk: Mid–High.
- **Audit Trail Framework für agentic Recommendations** — 12–20 Wochen. Compliance-Risk: High (MiFID/IDD Reproduzierbarkeits-Pflicht). Voraussetzung dafür, dass agent-mediated Beratung überhaupt geprüft werden kann.

**Im Report:** Jeder Quick-Win-Eintrag bekommt zusätzlich zu den Effort/Impact-Tags eine Compliance-Risk-Pille (Low/Mid/High). Render-Skill v1.2 unterstützt diese vierte Spalte in der Quick-Win-Tabelle des FS-Reports.

## 7 · Competitive Risks — Pattern-Template

- **BBVA × ChatGPT / OpenAI Integration** (Spanien live seit Q1 2026). Setzt Standard für „bank-grade GenAI in Customer-Touchpoint" — andere europäische Häuser müssen reagieren.
- **N26 / Revolut / Wise als digital-native agentic-ready Challenger.** Niedrigere Onboarding-Friction, kürzere Approval-Zyklen, schnellere API-Iteration.
- **EUDI-Wallet-Frontrunner** unter den Sparkassen / Volksbanken (DZ Bank Pilot Q3 2025) — Genossenschafts-Sektor könnte hier Großbanken überholen.
- **Open-Finance-Aggregatoren** als Aggregations-Schicht (FinAPI, Tink, finleap connect). Wenn die Bank API-zugänglich ist aber nicht über eigene agentic Surface verfügt, wird sie zum Datenlieferanten degradiert.
- **AI-Advisors (Cleo, Brighty, Daffy, ToDoBank-Style-Tools)** absorbieren Beratungs-Touchpoint im Massenmarkt. Banken ohne eigene Conversational-Layer verlieren Cross-Sell-Möglichkeit.
- **BigTech in Finance.** Apple Pay Wallet, Google Wallet Object API, Amazon Lending — agent-mediated Layer in Finance, ohne dass das Institut Vertragspartner des Endkunden bleibt.

## 8 · Commercial Upside Framing

FS-spezifische Hebel-Klassen (Render-Skill Section 4.8 referenziert diese Reihenfolge im FS-Kontext):

### 8.1 Reduced Onboarding-Friction (KYC + Account Opening)

Klassische Onboarding-Strecken im deutschen Banking liegen bei **15–25 Minuten** für Privat-Konten und **5–14 Tagen** für SME-Konten (Postident, Video-Ident, Dokumenten-Upload, Compliance-Review). EUDI-Wallet + Verifiable Credentials reduziert das auf **<3 Minuten** (Privat) bzw. **<24h** (SME) — bei agent-mediated Onboarding-Initiation sogar noch weniger. Quelle und Datum sind player-spezifisch zu attribuieren.

Hebel: Drop-off-Rate sinkt typisch um **30–45 %** in den Onboarding-Strecken, in denen EUDI live ist. Im FS-Wettbewerb der nächste 24 Monate ist Onboarding-Friction der primäre Akquise-Hebel — Challenger-Banken (N26, Revolut) wurden auf genau diesem Hebel groß.

### 8.2 Cross-Sell Uplift via agent-mediated Beratung

Wenn der Kunde sein Banking-Interface über einen KI-Advisor erreicht (sei es eine Bank-eigene Conversational Layer oder ein Drittanbieter wie Cleo), entstehen **Cross-Sell-Opportunities, die im klassischen Online-Banking strukturell nicht zugänglich sind** — proaktive Vorschläge bei Cash-Flow-Pattern („Du hast jeden Monat 800€ über, willst Du das in einen ETF-Sparplan?"), bei Lebensereignissen, bei Kreditkarten-Konditionen. Pilot-Daten aus BBVA × ChatGPT zeigen Cross-Sell-Akzeptanzraten **2,5x bis 4x** über klassischen Inbox-Banner-Cross-Sells.

**Wichtig (regulatorisch):** Die Empfehlungen müssen MiFID-/IDD-konform geloggt und reproduzierbar sein — siehe Säule 4 Kriterium 4.7. Ohne Audit-Trail kein Cross-Sell-Hebel.

### 8.3 Defended Wallet-Share gegen BigTech und Aggregatoren

Der oft realistischere Framing-Punkt: nicht „neue Kunden gewinnen", sondern „verhindern, dass Apple Pay / Google Wallet / Amazon Lending sich zwischen Dich und Deinen Kunden schiebt". Wer früh agentic Identity- und Consent-Frameworks anbietet (EUDI, VCs, RAR-Scopes), bleibt **Direkter Vertragspartner** statt zur Pricing-Komponente eines fremden Wallets zu werden.

Wallet-Share-Defense ist im FS-Verdict oft die wichtigste Aussage, weil sie die strategische Existenzfrage adressiert. Wenn der Player ein traditionelles Universalbank-Modell betreibt: Wallet-Share-Defense als ersten Sub-Block. Wenn der Player eine schnell wachsende Digital-Bank ist: Onboarding-Friction zuerst.

Im Report-Output: drei kompakte Sub-Blöcke. Reihenfolge nach Player-Profil anpassen.

## 9 · Wettbewerber-Auswahl-Heuristik

- **Direct Domestic Peer** — gleiche Lizenzklasse, gleicher Markt, gleiche Kundengruppe (z. B. Commerzbank → Deutsche Bank, UniCredit DE, Aareal Bank)
- **Digital-native Challenger** — N26, Revolut, Wise, Monzo, Solarisbank
- **Global Best-Practice** — BBVA (Europa/LatAm), DBS (Asien), JPMorgan (US)
- **Adjacent Disruptor** — BigTech (Apple Pay, Google Wallet, Amazon Lending), AI-Advisor (Cleo, Brighty), API-Aggregator (Tink, Plaid)
- **Optional bei Versicherung:** InsurTechs (Lemonade, Wefox, Clark) als adjacent disruptors

## 10 · Quellen-Raster

- Page Source der Konditions-, Tarif- und Produkt-Detailseiten
- /robots.txt + /llms.txt + /sitemap.xml + /.well-known/openid-configuration
- Developer Portal / Open Banking Sandbox (Berlin Group API Doku, STET, UK OB)
- FAPI 2.0 Conformance Listing (OpenID Foundation)
- EUDI-Wallet Reference Implementations und Pilot-Listings (EU Commission)
- BaFin AI-Disclosure-Statements
- EBA Guidelines Adherence Statements
- ABI Research / Capgemini „World FinTech / Retail Banking Report" Series
- Open Insurance Initiative Member Listing
- Industry Coverage: Sibos, Money 20/20, Insurance Connect, EBA Day
- yes.com / Verimi / Sign-me Integration Lists
- AI Advisor Coverage: TechCrunch, Finextra, The Banker, Versicherungsmonitor
- Country-Regulator-Veröffentlichungen (BaFin, FMA Österreich, FINMA Schweiz)
- **GEO-Evidence: konkrete Beratungs-Queries gegen ChatGPT, Perplexity, Claude — mit Stand-Datum**

## 11 · Output-Struktur (HTML-Report)

Der Report folgt der Struktur des Render-Skills v1.2:

1. **Header** mit zwei-zeiliger Title-Struktur (Zeile 1: institution.domain; Zeile 2: sector descriptor mit Lizenzklasse), Accenture Song Logo oben rechts
2. **Score-Banner** mit Focus-Player Gesamt-Score + **Regulatory-Readiness-Sub-Note**; Lead-Sentence + Verdict (Verdict muss mindestens einen Wettbewerber bei Score-Name referenzieren)
3. **Weight-Note**
4. **PoV-Callout** (Verteilungs-Schlacht, nicht Produkt-Schlacht)
5. **Optional: Transaction-Rail-Note** (nur wenn Hybrid-Kontext relevant — siehe Section 2)
6. **Optional: Note on License / Regulator** (Lizenzklasse, primärer Regulator, Bilanzsumme — wichtig bei nicht-deutschen Peers)
7. **Section 01: Criterion-by-Criterion Scorecard** — **mit Gesamt-Maturity-Score pro Wettbewerber in der Spalten-Headerzeile UND Pillar-Score pro Wettbewerber in jeder Pillar-Headerzeile** — plus optionaler GEO-Evidence-Block
8. **Section 02: Priority Quick Wins** — Horizon-strukturiert (Week / Quarter / 2–3 Months) **mit zusätzlicher Compliance-Risk-Spalte**
9. **Section 03: Commercial Upside Framing** — Onboarding-Friction / Cross-Sell Uplift / Wallet-Share Defense
10. **Section 04: Key Competitive Risks** — mit getrennten Blöcken für „BigTech Disruption" und „Aggregator Layer"
11. **Section 05: Rating Key & Methodology** — inkl. Score-Chip-Erklärung, Verweis auf Regulator-spezifische Frameworks (BaFin, EBA, EU AI Act, DORA, MiFID, IDD, PSD2/3), und einer Methodology-Box zur Abgrenzung „Was ist agentic-FS *nicht*" (kein Roboadvising-Replacement, kein vollautomatisches Kredit-Approval ohne menschlichen Sign-off — vgl. GDPR Art. 22)
12. **Footer**

**Sektor-spezifische Title-Line-2-Beispiele:**
- Deutsche Bank → „European Universal Bank — Retail & Corporate"
- Allianz → „Global Insurance & Asset Management"
- N26 → „Digital Direct Bank — Pan-European Retail"
- ING → „European Direct Bank — Retail & Wholesale"
- ERGO → „Composite Insurance — DACH Retail & SME"

## 12 · Tone & Caveats

- FS-Tonalität ist die zurückhaltendste der drei Sektoren — Compliance-Sensitivität, regulatorische Sprachpräzision, kein „we should do X tomorrow"-Framing.
- Empfehlungen immer **mit Compliance-Sign-off-Schritt** versehen — kein Tech-Quick-Win ohne Reg/Legal-Validierung. Die Compliance-Risk-Spalte in der Quick-Win-Tabelle macht das visuell sichtbar.
- **Wichtig:** PSD3, EUDI und EU AI Act sind Stand Mai 2026 alle noch in Umsetzungs-Übergangsphasen. Aussagen mit Datum und Quelle versehen. Was im Mai-Bericht „nicht verifizierbar" ist, kann im Oktober-Bericht „Confirmed" sein — und umgekehrt.
- **Regulator-Diskretion:** Reports nie ohne expliziten Hinweis veröffentlichen, dass „interne Verifizierung mit Compliance, Legal und IT-Security vor jeder Maßnahme erfolgen muss".
- Bei B2C-Retail-Banking ist Sprache zugänglicher; bei Wholesale/Corporate/Asset Management eher formaler. Tonalität mit Customer-Segment-Spiegelung wählen.
- **Per-Column Scores im Verdict nutzen:** Der Score-Banner-Verdict referenziert mindestens einen Wettbewerber konkret mit Score, idealerweise mit getrennter Aussage zu Säule 2 (Open-Banking-Reife) und Säule 4 (Compliance-Readiness) — Spreizung zwischen Tech und Compliance ist im FS-Kontext oft die strategisch wichtigste Information.
- Disclaimer am Ende: Report basiert auf öffentlichen Signalen; interne Verifizierung mit Compliance, Legal und IT-Security vor jeder Maßnahme erforderlich.

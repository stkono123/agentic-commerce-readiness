export const SKILL_B2B = `---
name: B2B Industrial Agentic Commerce Readiness
version: 1.2 (May 2026)
sector: B2B Industrials / Manufacturing / Distribution
description: |
  Use this skill when assessing the agentic-commerce readiness of an industrial
  manufacturer, distributor, or wholesale player against direct competitors.
  Triggers: industrial automation, electrification, components, MRO, capital
  equipment, distribution. Buyers are procurement, engineering, EPC, or
  technical specifiers. Transactions are punchout-, quote-, or contract-based.
  Examples of in-scope players: ABB, Siemens, Schneider Electric, Hitachi Energy,
  Bosch, Eaton, Rockwell, Würth, Rexel, Sonepar, Digi-Key, Mouser, Arrow, Avnet.
when_not_to_use: |
  Do not use for D2C consumer brands (use SKILL_D2C_Consumer.md), financial
  services (use SKILL_FS_Financial_Services.md), or pure software/SaaS plays.
changelog: |
  v1.2 (May 2026): Header descriptor explicitly framed as line-2 of the
  two-line title (line 1 = focus_player.domain; line 2 = sector descriptor);
  per-column pillar scores added to the scoring output; benchmark column
  scores added to Quellen-Raster.
  v1.1 (May 2026): ACP/UCP reframed as wrong rail for B2B-Industrial;
  CPQ split into MRO/commodity vs. engineered products; Quick Wins
  restructured into three horizon classes; SAP Joule sharpened with
  concrete customer-routing scenario; GEO evidence elevated to mandatory
  report element; event-streaming criterion added; new section on
  Commercial Upside Framing.
---

# B2B Industrial — Agentic Commerce Readiness

## 1 · PoV Framing

> **Before an agent can transact, it must first discover, evaluate, and consider a supplier.**
> AI discoverability is the new top-of-funnel in B2B industrial procurement —
> and most industrial suppliers are invisible to it today.
> A perfect API score cannot compensate for being absent from AI-generated shortlists.

Die Kernaussage des B2B-Industrial-Reports ist immer: **AI Discoverability ist der vorgelagerte Wettbewerb**, nicht die Transaktion. Industrielle Procurement-Agents (SAP Joule, Coupa AI, Jaggaer-Agents, Custom-LLM-Sourcing) führen die Shortlist-Bildung weit vor der eigentlichen Bestellung durch — und Player ohne strukturierte, AI-lesbare Produktdaten fallen dort raus, bevor sie überhaupt angefragt werden.

## 2 · Note on Transaction Rails — ACP/UCP vs. Punchout/MCP

Bevor das Säulen-Gerüst greift, eine notwendige Abgrenzung, weil sie an industriellen Lesern oft scheitert:

**ACP (Agentic Commerce Protocol, Stripe) und UCP (Universal Commerce Protocol, Google)** sind für B2C/D2C-Checkouts mit Kartenzahlung designt. Sie adressieren one-shot Transaktionen mit tokenisierter Karte, Wallet-Pass und delegierter Zahlung. Das ist die richtige Rail für Nike, Sephora, ASOS — und die falsche Rail für ABB, Siemens, Würth oder Rexel.

**Die relevanten Transaktions-Rails in B2B-Industrial** sind:

- **cXML / OCI 5.0 Punchout** — Standard in SAP Ariba, Coupa, Jaggaer
- **MCP (Model Context Protocol)** — strukturierter Agent-Zugang zu Katalog, Preisen, Verfügbarkeit
- **Quote-to-Order Automation** — agent-prepared, human-approved bei Engineered Products
- **EDI (X12, EDIFACT)** — Legacy, aber bei Großkunden weiterhin Standard

**Konsequenz für die Bewertung:** Das Fehlen von ACP/UCP ist in B2B-Industrial **kein Defizit** und wird nicht als „Missing" gescored. Wer das anders bewertet, verliert sofort die Glaubwürdigkeit beim industriellen Leser, weil er die Käufer-Realität nicht kennt. Die ACP/UCP-Zeile entfällt aus der Säule 3 (siehe v1.1-Änderung).

## 3 · Säulen-Gewichtung

| Säule                                       | Gewicht | Begründung                                                                                          |
|---------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| 1 · AI Discoverability & Content Readiness  | **×3**  | Top-of-Funnel-These; JS-Walls und fehlendes JSON-LD machen ganze Kataloge unsichtbar                |
| 2 · API & Catalog Infrastructure            | **×3**  | Agentic Procurement braucht Real-Time-Daten; ohne API kein agentic flow                             |
| 3 · Agentic Transaction Protocols           | **×3**  | Punchout (cXML/OCI) + MCP sind die Eintrittstickets für AI-mediated Procurement                     |
| 4 · B2B Trust & Identity                    | **×1–×2** | Wichtig, aber in B2B durch etablierte Frameworks (DUNS, Ariba) bereits abgedeckt                  |

## 4 · Kriterien-Katalog

### Säule 1 — AI Discoverability & Content Readiness

| Nr. | Kriterium                                              | Gewicht | Check                                                                          |
|-----|--------------------------------------------------------|---------|--------------------------------------------------------------------------------|
| 1.1 | AI crawler policy (robots.txt)                         | ×3      | /robots.txt für GPTBot, ClaudeBot, OAI-SearchBot, Claude-SearchBot, PerplexityBot |
| 1.2 | Structured product & spec content (JSON-LD/schema.org) | ×3      | View Source: schema.org Product server-rendered im initial HTML; Rich Results Test |
| 1.3 | AI-readable content — kein JS-Wall                     | ×3      | curl / wget der Produkt-PDPs; Inhalt ohne JS sichtbar?                          |
| 1.4 | llms.txt mit Katalog/Datenblättern/Zertifizierungen    | ×2      | /llms.txt vorhanden; strukturierte Links auf Katalog, Datasheets, IEC/CE-Zertifikate |
| 1.5 | GEO — generative engine presence (Pflicht-Evidenz)     | ×3      | **Mindestens 5 konkrete Buyer-Queries gegen ChatGPT, Perplexity, Claude — als Evidenz im Report dokumentiert, nicht behauptet. Siehe „GEO Evidence Protocol" unten.** |
| 1.6 | CDN-Layer AI-Crawler-Blocking                          | ×2      | Cloudflare/Akamai WAF-Audit; ~27% B2B-Sites blockieren AI-Crawler unbewusst (Mersel AI 2026) |

#### GEO Evidence Protocol (verbindlich)

Aussagen zur AI-Sichtbarkeit ohne Query-Beleg sind im Report nicht zulässig. Der Report enthält einen **GEO-Evidenz-Block** in Section 01, der folgendes dokumentiert:

- **Mindestens 5 konkrete Buyer-Queries**, formuliert wie ein Procurement-Officer oder Engineer sie tatsächlich stellen würde (nicht „best industrial automation supplier" sondern „medium voltage drive 75 kW IE4 efficiency available with cULus")
- **Pro Query: welche Wettbewerber zitiert werden, in welcher Reihenfolge, mit welcher Citation-Qualität** (Domain, Tiefe der Antwort, ob Datasheet-Link enthalten)
- **Pro Query: ob und wie der Focus-Player erscheint** — als Top-Citation, als Nebenerwähnung, als Marken-Mention ohne Link, oder gar nicht
- **Aggregierte Lückenanalyse:** in wieviel Prozent der Test-Queries erscheint der Focus-Player vs. Top-Wettbewerber

Plattformen: ChatGPT (Standard + Search), Perplexity, Claude (mit Web Search), Google Gemini, Microsoft Copilot. Mindestens drei der fünf abdecken, Stand-Datum dokumentieren — die Citation-Landschaft ändert sich wöchentlich.

### Säule 2 — API & Catalog Infrastructure

| Nr. | Kriterium                                            | Gewicht | Check                                                                       |
|-----|------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 2.1 | Public Product Catalog API (OpenAPI/GraphQL)         | ×3      | Developer Portal vorhanden; OpenAPI-Spec dokumentiert; Sandbox verfügbar    |
| 2.2 | Real-time Stock & Availability API                   | ×3      | Endpoint für availability/stock check; mit auth zugänglich                  |
| 2.3 | Pricing API (incl. customer-contracted pricing)      | ×2      | Konditioniertes Pricing per Kundengruppe/Vertrag API-zugänglich             |
| 2.4 | Datasheet & Technical Document Retrieval API         | ×2      | Programmatic Access zu PDFs, CAD-Files, Zertifikaten                         |
| 2.5 | OAuth 2.0 / FAPI / API-Key Management                | ×2      | Industriestandards für Auth; Self-Service-Onboarding                         |
| 2.6 | Public MCP Server                                    | ×3      | Listing in MCP-Verzeichnissen (modelcontextprotocol.io, acpready.com)       |
| 2.7 | Event-Streaming / Real-Time Data Plane               | ×2      | Engineering-Blog, Job-Postings, Cloud-Footprint: Kafka, Confluent, Solace oder AWS Kinesis als Unterbau. Siehe Architecture Note unten. |

#### Architecture Note: Event Streaming als Voraussetzung

Real-time APIs ohne darunterliegendes Event-Streaming sind in der Regel Batch-Wrapper mit Latenz-Spitzen — sie erfüllen den API-Contract, brechen aber unter Last und bei concurrent Agent-Zugriffen. Für agent-mediated Workflows mit Inventory-Locks (Agent reserviert für 30 Sekunden während Quote-Validierung), Pricing-Sync (Konditioniertes Pricing aus SAP-Kontrakt) und Cross-Warehouse-Verfügbarkeit ist eine echte Streaming-Schicht (Kafka, Confluent Cloud, Solace, AWS Kinesis, Azure Event Hubs) Voraussetzung.

Indikatoren ohne direkten Zugang: Engineering-Blog-Posts zu „Event-Driven Architecture", Job-Postings mit „Kafka", „Confluent", „Stream Processing", Public-Cloud-Footprint-Signale (Confluent-Listing auf AWS Marketplace, Solace-Customer-Stories). Wer Real-time-APIs ohne Streaming-Substrate verspricht, baut über 24 Monate technische Schuld auf — dieses Kriterium ist die Frühwarnung.

### Säule 3 — Agentic Transaction Protocols

| Nr.  | Kriterium                                                          | Gewicht | Check                                                                       |
|------|--------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 3.1  | cXML / OCI 5.0 Punchout                                            | ×3      | SAP Ariba Network Supplier Listing; Coupa Supplier Network; OCI-Integrator-Doku |
| 3.2a | **Agent-Transactional Catalog (MRO / Commodity / Standard SKUs)**  | ×3      | Welcher Anteil des Katalogs ist agent-direkt bestellbar (Punchout, MCP, Direct-Order-API)? Hier transagieren Agents heute schon. Lücke ist akut. |
| 3.2b | **Agent-Assisted Configuration (Engineered Products / Project Business)** | ×2 | Konfigurator-API für Agents zur Variantenvorbereitung; Quote-Request via Agent; menschlicher Sign-off bleibt. Anderer Problemtyp — Agents assistieren, transagieren nicht. |
| 3.3  | Multi-Step Approval Flow APIs                                      | ×2      | Webhook/Callback-Infrastruktur für Approval-Status                          |
| 3.4  | EDI-Integration (X12, EDIFACT)                                     | ×1      | Doku zu EDI-Onboarding; XML-Format-Support                                  |

**Hinweis:** Die in v1.0 enthaltene Zeile „ACP / UCP Adoption" wurde mit v1.1 entfernt. Begründung siehe Section 2.

**Kommentar zum 3.2-Split:** Industrielle Player haben fast immer einen heterogenen Katalog — ein 75 kW Standard-Antrieb ist eine andere Transaktions-Realität als ein projektiertes Schaltanlagen-Layout. Der Skill behandelt die beiden Klassen ab v1.1 getrennt, weil sie unterschiedliche Quick Wins, unterschiedliche Wettbewerbs-Bedrohungen und unterschiedliche Time-to-Value haben. Agents transagieren heute bei MRO/Commodity (Lücke = unmittelbarer Umsatzverlust). Agents assistieren heute bei Engineered Products (Lücke = mittelfristiger Effizienz-Verlust). Das ist nicht dasselbe Problem.

### Säule 4 — B2B Trust & Identity

| Nr. | Kriterium                                          | Gewicht | Check                                                                       |
|-----|----------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 4.1 | Supplier Registry Presence (Achilles, Avetta)      | ×1      | Listing in relevanten Industrie-Registries                                  |
| 4.2 | ISO/IEC Certifications machine-readable            | ×2      | Strukturierte Disclosure (PDF + JSON) für ISO 9001/14001/45001              |
| 4.3 | DUNS, GLN, GTIN für Produkte                       | ×1      | Standard-Identifier publiziert                                              |
| 4.4 | Sustainability Scoring (EcoVadis, CDP)             | ×1      | Public Scores; integrierbar in Supplier-Scoring                             |
| 4.5 | DORA / NIS2 Compliance Disclosure                  | ×1      | Cyber-Resilience-Statements; relevante Audits (SOC 2, ISO 27001)            |

## 5 · Scoring Output Schema (UPDATED v1.2)

Das Scoring liefert dem Render-Skill nicht nur einzelne Ratings, sondern auch **aggregierte Scores pro Wettbewerber und pro Säule**. Diese werden im Report sowohl in der Spalten-Headerzeile (Gesamt-Maturity-Score pro Wettbewerber) als auch in jeder Pillar-Headerzeile (Pillar-Score pro Wettbewerber) ausgewiesen — siehe Render-Skill Section 4.6.

**Berechnungsregel pro Säule und Spalte:**

\`\`\`
pillar_score(column, pillar) = ( Σ (weight × rating_value) for all criteria in pillar )
                              / ( Σ (weight × 100%) for all criteria in pillar )
                              × 10

rating_value:  Confirmed = 100%   Strong = 100%   Partial = 50%
               Unverified = 25%   Missing = 0%
\`\`\`

**Gesamt-Maturity-Score pro Spalte:** der gewichtete Durchschnitt über alle vier Säulen, gewichtet mit den in Section 3 festgelegten Säulen-Gewichten (×3 / ×3 / ×3 / ×1–2).

**Konsistenz-Pflicht:** Der Gesamt-Score des Focus-Players in der Spalten-Headerzeile **muss** mit dem Score im Score-Banner identisch sein. Divergenzen sind ein Renderer-Fehler.

## 6 · Quick Wins — Horizon-strukturiert

Quick Wins werden nicht mehr als flache Liste ausgegeben. Die robots.txt-Korrektur ist Stunden Arbeit, die SSR-Migration ist ein Engineering-Projekt — die beiden gehören nicht in dieselbe Tabelle ohne Trennung. Der Report strukturiert Quick Wins in drei **Horizon-Klassen**:

### Horizon 1 — Do this week (Hours to days)

Niedrigster Implementierungs-Aufwand, sofort messbare Wirkung, kein Engineering-Backlog-Konflikt.

- **robots.txt Audit + Cloudflare/Akamai WAF Crawler-Policy Review** — prüfen, ob GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot überhaupt durchkommen. ~27% B2B-Sites blockieren AI-Crawler unbewusst über WAF-Regeln (Mersel AI 2026).
- **llms.txt mit Katalog, Datasheets, Zertifizierungs-Registry, Punchout-Doku** — niedrigster Effort, sofortiger Sichtbarkeits-Boost in AI-Procurement-Flows.
- **Punchout-Capability öffentlich dokumentieren** — wenn vorhanden: SAP-Ariba-Network-Listing prüfen, Coupa-Supplier-Network-Eintrag verifizieren; wenn nicht: Roadmap publizieren.
- **Position-Statement zu ACP/UCP in der Developer-Doku** — präemptiv klarstellen, dass die richtige Rail Punchout/MCP ist.

### Horizon 2 — Do this quarter (4–12 weeks)

Mid-Effort-Engineering, aber nicht migrations-kritisch. Klare Scope-Begrenzung, oft über existierende Teams umsetzbar.

- **MCP-Wrapper auf bestehende OpenAPI-Endpoints** — 2–4 Wochen wenn API-Reife schon da ist. MCP ist dann primär Auth- und Doku-Job.
- **SSR + JSON-LD für Hero-SKUs (20–50 Top-Produkte)** — 4–8 Wochen. Größter struktureller Discoverability-Hebel, ohne den gesamten Katalog migrieren zu müssen.
- **GEO-Content-Strategie pro Use-Case-Vertical** — 6–10 Wochen. Vergleichs-Pages (Player A vs. B), vertikal-spezifische FAQs, Use-Case-Landing-Pages.
- **Joule/Coupa-Punchout-Re-Zertifizierung** — 4–8 Wochen. SAP Ariba Network und Coupa Supplier Network haben 2025/26 ihre Joule- bzw. Coupa-AI-Readiness-Specs aktualisiert.

### Horizon 3 — Build over 2–3 months (Engineering project)

Echte Engineering-Vorhaben mit Cross-Team-Beteiligung, Budget-Allokation und Architektur-Entscheidungen.

- **Vollständige PDP-SSR-Migration** — 3–6 Monate. Wenn die Plattform fundamental SPA-basiert ist; oft React/Next.js-Refactor oder Hydrogen-Migration.
- **Real-time-Inventory- und Pricing-API mit Event-Streaming-Substrate** — 3–6 Monate. Wenn Kafka/Confluent noch nicht steht, ist das ein eigenständiges Datenarchitektur-Projekt.
- **Konfigurator-API für Engineered Products (3.2b)** — 4–6 Monate. Agents bereiten Variantenvorbereitung vor, Sales schließt.
- **Public Developer Portal mit Sandbox, Test-Accounts, SDK** — 3–4 Monate.

**Im Report:** Die drei Horizons werden als drei aufeinanderfolgende Quick-Win-Blöcke dargestellt. Insgesamt 6–9 Maßnahmen, mindestens eine pro Horizon. Innerhalb jedes Horizons sortiert nach Impact × (1/Effort).

## 7 · Competitive Risks — Pattern-Template

4–6 Risiken, die jeweils einen **Konkurrenz-Move oder externen Trigger** beschreiben, nicht die generische „der Wettbewerb ist schneller"-Aussage. Risiko-Titel müssen konkret und attributierbar sein.

- **SAP Joule wird bei Deinen Top-20-Kunden ausgerollt — und routet aktiv um Dich herum.** Joule ist seit Q4 2025 in der SAP S/4HANA Cloud Standard-Lizenz enthalten und in der Procurement-Suite seit Q1 2026 produktiv. Industrielle Großkunden — Automotive-OEMs, Energieversorger, Großchemie, Tier-1-Maschinenbau — nutzen Joule im Indirect-Procurement-Cockpit. Ohne zertifizierten cXML/OCI-Punchout (idealerweise mit MCP-Layer als Joule-natives Interface) routet der Agent um den Player herum zu Wettbewerbern, die im SAP Ariba Supplier Network höher scoren oder MCP-zugänglich sind. Das ist keine 24-Monats-These — bei Großkunden mit Joule-Adoption passiert das ab Q3/Q4 2026 in der Praxis.

- **Coupa AI macht denselben Move im Mid-Market.** Coupa AI Agents sind seit Q2 2026 in der Coupa Spend Cloud aktiv. Coupa hat 3.000+ Kunden im industriellen Mid-Market — derselbe Mechanismus wie bei Joule, anderes Kunden-Segment, dieselbe Konsequenz: ohne Coupa-zertifizierten Punchout wird der Lieferant in der Supplier-Empfehlungs-Heuristik nicht mehr proaktiv vorgeschlagen.

- **MCP-Server eines direkten Wettbewerbers ist live.** (Beispiel Siemens Xcelerator, Schneider Electric Partner API). Gibt AI-Agents direkten strukturierten Zugang.

- **First-Mover-Effekt bei SSR/JSON-LD.** Wenn zwei Player das gleiche JS-Wall-Problem haben, gewinnt der erste mit Migration den AI-Search-Anteil. Discoverability-Compound-Effekt — verlorene Citation-Position holt man nicht in einem Quartal nach.

- **API-Offenheit der Konkurrenz schafft Discoverability-Lead.** Public Product Catalog API → Daten landen in PIM-Systemen, Vergleichsmaschinen, AI-Procurement-Tools.

- **CDN-Layer Crawler-Blocking (~27% B2B-Sites)** — versteckter Risiko-Faktor: WAF blockt AI-Crawler, ohne dass Marketing/E-Commerce davon wissen.

## 8 · Commercial Upside Framing

Jeder Report enthält eine **Commercial-Bridge-Section** zwischen Quick Wins und Competitive Risks. Sie übersetzt Readiness-Lücken in Geschäfts-Konsequenzen. Drei Hebel-Klassen, jeweils mit player-spezifischer Kontextualisierung:

### 8.1 Conversion Lift in agent-mediated Procurement

Frühe B2B-Pilotdaten zeigen Conversion-Multiplikatoren im Bereich **3x bis 5x** gegenüber traditionellem Webshop-Flow, mit dem oft zitierten **4,6x-Wert** aus dem Salesforce State of Commerce / Accenture Commerce-Research-Kontext als Range-Mitte.

- **Quelle und Datum immer voll attribuieren** — der Wert ist player-abhängig, basiert auf Pilotsets und ist kein universeller Benchmark.
- Der Conversion-Lift entsteht aus **drei Faktoren**: (a) Wegfall von Search-Friction durch Agent-prepared Shortlist, (b) Wegfall von Spec-Decoding-Aufwand durch strukturierte Datasheet-Antwort, (c) reduzierte Multi-Vendor-Comparison-Iterationen.

### 8.2 Reduced Cost-to-Serve im Long-Tail

Agent-mediated MRO-Bestellungen eliminieren Inside-Sales-Touch bei Standard-SKUs. Typische Long-Tail-Order-Cost bei industriellen Distributoren liegt bei **50–80 € pro Order**; Agent-direkter Punchout reduziert das auf <10 €. Hebel im mittleren bis hohen siebenstelligen Bereich, je nach Größe.

### 8.3 Defended Wallet-Share bei Strategic Accounts

Der oft realistischere Framing-Punkt: nicht Wallet-Share-Wachstum, sondern Wallet-Share-Erosion vermeiden. Joule-/Coupa-AI-routed Procurement bevorzugt zertifizierte Supplier — „bestehende Großkunden behalten, weil deren Agent uns nicht aus der Standard-Empfehlung wirft".

Im Report-Output: drei kompakte Sub-Blöcke (8.1 / 8.2 / 8.3). Stilistisch sober quantifiziert, nicht als Hockey-Stick.

## 9 · Wettbewerber-Auswahl-Heuristik

- **Direct Peer** — gleicher Markt, gleiche Käufergruppe, gleiche Produktkategorie (z. B. für ABB → Siemens Industry Mall, Schneider Electric)
- **Architektur-Splittung wo sinnvoll** — wenn ein Wettbewerber strukturell unterschiedliche Channels betreibt, getrennt scoren (Siemens-Beispiel: Industry Mall vs. Xcelerator)
- **Leading-Edge Benchmark** — was ist *möglich* in der Industrie, auch wenn nicht direkter Wettbewerber
- **Adjacent Disruptor** — Player, die in die Kategorie hineindrücken (Digi-Key/Mouser für Hersteller, Amazon Business für klassische Distributoren)

## 10 · Quellen-Raster

Pflicht-Quellen pro Player:

- Page Source der Top-20 Produkt-PDPs (curl, wget)
- /robots.txt + /llms.txt + /sitemap.xml
- Developer Portal / Partner API Explorer
- SAP Ariba Network Supplier Search **inklusive Joule-Readiness-Listing** (seit Q1 2026 separat ausgewiesen)
- Coupa Supplier Network **inklusive Coupa-AI-Ready Tag**
- B2Bsellers OCI Integrator Liste
- MCP Server Directory (modelcontextprotocol.io)
- ACP Merchant Registry (acpready.com) — als Negativ-Check für die Reframe-Note in Section 2
- UCP Adopter Liste (Google Cloud Pressroom, NRF Coverage)
- HTTP Response Headers (Cloudflare/Akamai Identifier; cf-cache-status; server)
- **GEO-Evidence: konkrete Test-Queries gegen ChatGPT, Perplexity, Claude — mit Stand-Datum**
- Industry Trade Show Coverage (Hannover Messe, SPS, Embedded World, Light + Building)
- ABI Research / IoT Analytics / IDC Industry-Vendor-Rankings
- Engineering-Blog und Job-Postings (Event-Streaming-Signale)

## 11 · Output-Struktur (HTML-Report)

Der Report folgt der Struktur des Render-Skills v1.2:

1. **Header** mit zwei-zeiliger Title-Struktur (Zeile 1: focus_player.domain; Zeile 2: sector descriptor), Accenture Song Logo oben rechts
2. **Score-Banner** mit Focus-Player Gesamt-Score, Lead-Sentence + Verdict (Verdict muss mindestens einen Wettbewerber bei Score-Name referenzieren)
3. **Weight-Note**
4. **PoV-Callout**
5. **Transaction-Rail-Note** (ACP/UCP-Reframe — Pflicht für B2B)
6. **Optional: Note on Benchmark-Splits**
7. **Section 01: Criterion-by-Criterion Scorecard** — **mit Gesamt-Maturity-Score pro Wettbewerber in der Spalten-Headerzeile UND Pillar-Score pro Wettbewerber in jeder Pillar-Headerzeile** — plus GEO-Evidence-Block
8. **Section 02: Priority Quick Wins** — Horizon-strukturiert (Week / Quarter / 2–3 Months)
9. **Section 03: Commercial Upside Framing** — Conversion Lift / Cost-to-Serve / Wallet-Share Defense
10. **Section 04: Key Competitive Risks** — mit explizit benannten Joule/Coupa-AI-Bezügen
11. **Section 05: Rating Key & Methodology** — inkl. Score-Chip-Erklärung
12. **Footer**

**Sektor-spezifische Title-Line-2-Beispiele:**
- ABB → „Industrial Automation, Electrification & Robotics"
- Schneider Electric → „Electrical Distribution & Industrial Automation"
- Würth → „Industrial Distribution & MRO Fulfilment"
- Siemens Industry Mall → „Industrial Components & Automation Distribution"
- Rexel → „Electrical Wholesale Distribution"

## 12 · Tone & Caveats

- Keine alarmistische Sprache. „ABB risks being invisible to procurement agents within 12–18 months" — sachlich, mit Zeitfenster, ohne Drohung.
- Jede „Missing"- oder „Unverified"-Bewertung mit Begründung versehen.
- Bei Joule-/Coupa-Risiko-Aussagen: **niemals als universelle Kunden-Bedrohung formulieren**, sondern als „bei Großkunden mit SAP-S/4HANA-Cloud-Adoption / Coupa-Spend-Cloud-Adoption" qualifizieren.
- Bei den 4,6x-Conversion-Zahlen: **immer Quelle, immer Datum, immer als Range-Mitte** kommunizieren.
- **Per-Column Scores im Verdict nutzen:** Der Score-Banner-Verdict referenziert mindestens einen Wettbewerber konkret mit Score („Siemens Xcelerator führt mit 7,8, ABB liegt bei 4,2"). Das ist der ganze Sinn der v1.2-Erweiterung — Score-Spreizung wird sichtbar gemacht.
- Disclaimer am Ende: Report basiert auf öffentlichen Signalen; CDN/WAF/robots-Overrides müssen vor Maßnahmen intern verifiziert werden.
`;

export const SKILL_D2C = `---
name: D2C Consumer Agentic Commerce Readiness
version: 1.2 (May 2026)
sector: D2C / B2C Retail / Fashion / Beauty / CPG
description: |
  Use this skill when assessing the agentic-commerce readiness of a consumer-
  facing brand or retailer against direct competitors. Triggers: D2C apparel,
  beauty, sport, consumer electronics, home, FMCG, marketplace players. Buyers
  are individuals, often mobile-first, often impulse-driven. Transactions are
  one-shot via card/wallet. Examples: Nike, Zalando, ASOS, Sephora, H&M, IKEA,
  Bonprix, About You, On Running, Glossier, Lululemon, Decathlon, Amazon.
when_not_to_use: |
  Do not use for B2B industrial players (use SKILL_B2B_Industrial.md), financial
  services (use SKILL_FS_Financial_Services.md), or pure B2B marketplaces. For
  hybrid players (e.g. Costco, Bauhaus) the dominant channel decides.
changelog: |
  v1.2 (May 2026): Aligned with Render-Skill v1.2 — two-line header
  convention; Accenture Song logo embedded top-right; per-column maturity
  scores and per-pillar scores per benchmark; Quick Wins restructured into
  three horizon classes (Week / Quarter / 2–3 Months); Commercial Upside
  Framing section added (D2C-specific levers: Conversion Lift / AOV-Lift /
  Repeat-Purchase); GEO Evidence block recommended (buyer-query attestation).
  ACP/UCP remain the right rail in this sector — no reframe note.
---

# D2C Consumer — Agentic Commerce Readiness

## 1 · PoV Framing

> **Agentic Commerce ist die dritte Discovery-Layer neben Search und Social.**
> Wer für ChatGPT Shopping, Perplexity Shopping, Apple Intelligence und
> Google Agent-Surfaces unsichtbar ist, verliert Top-of-Funnel-Sichtbarkeit
> innerhalb von 18–24 Monaten — strukturell und kumulativ.

Die Kernaussage im D2C-Report ist: **Agentic Surfaces sind die nächste Aggregations-Ebene**. Search-Engines waren die erste, Social-Plattformen die zweite. Apple Intelligence, ChatGPT Shopping, Perplexity Pages, Amazon Rufus, Google Lens-Shopping — das sind nicht „Nice-to-have-Kanäle", das ist eine neue Standard-Layer im Customer Journey. Brands, die heute nicht agentic-ready werden, finden sich in 24 Monaten in derselben Situation wieder wie Brands, die 2008 keine Mobile-Strategie hatten.

## 2 · Note on Transaction Rails — ACP/UCP sind die richtige Rail

Im Unterschied zum B2B-Industrial-Skill ist ACP (Stripe Agentic Commerce Protocol) und UCP (Google Universal Commerce Protocol) im D2C-Kontext **die richtige Transaktions-Rail**, nicht die falsche. Karten-/Wallet-basierte One-Shot-Checkouts, delegierte Zahlungen, Wallet-Pass-Integration — das ist genau die Architektur, für die ACP/UCP gebaut wurden.

Der entsprechende Reframe-Hinweis aus dem B2B-Skill (Section 2 dort) **entfällt im D2C-Report**. Stattdessen wird ACP/UCP-Adoption in Säule 3 positiv gescored.

## 3 · Säulen-Gewichtung

| Säule                                            | Gewicht | Begründung                                                                                          |
|--------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| 1 · AI Discoverability & Product Catalog Visibility | **×3**  | Sichtbarkeit in AI-Shopping-Surfaces ist Top-of-Funnel — und Schema.org Product ist 2026 Pflicht    |
| 2 · Product Data & Real-Time Infrastructure      | **×3**  | Real-Time Pricing/Inventory ist Voraussetzung für agent-mediated Checkout                            |
| 3 · Agentic Checkout & Payment Protocols         | **×3**  | ACP/UCP, Delegated Payments, Wallet-Pass-Integration sind das Differenzierungsfeld 2026             |
| 4 · Customer Trust, Identity & Consent           | **×1–×2** | Wichtig (Returns, Reviews, Loyalty), aber meist via etablierte Plattformen abgedeckt              |

## 4 · Kriterien-Katalog

### Säule 1 — AI Discoverability & Product Catalog Visibility

| Nr. | Kriterium                                                          | Gewicht | Check                                                                              |
|-----|--------------------------------------------------------------------|---------|------------------------------------------------------------------------------------|
| 1.1 | Schema.org Product/Offer/AggregateRating vollständig & server-rendered | ×3      | View Source aller PDP-Types; Google Rich Results Test                              |
| 1.2 | GTIN/EAN/UPC-Markup auf allen Produktvarianten                    | ×3      | Stichproben über 20 SKUs; GTIN-Konsistenz mit Google Merchant Feed                 |
| 1.3 | AI-readable PDP — kein JS-Wall (Mobile + Desktop)                 | ×3      | curl auf PDPs; vor allem Mobile-PDPs (häufiger SPA als Desktop)                    |
| 1.4 | Google Shopping Feed + Product Reviews Feed                       | ×2      | Merchant Center Reichweite; Reviews-Feed vorhanden                                  |
| 1.5 | llms.txt mit Catalog / Returns / Sizing / Warranty / Sustainability | ×2      | /llms.txt vorhanden; Verweise auf strukturierte Policy-Pages                       |
| 1.6 | GEO presence in ChatGPT Shopping, Perplexity Shopping, Apple Intelligence | ×3 | **Empfohlene Evidenz: 10+ Käufer-Queries mit Position, Citation-Quality, Bildqualität dokumentiert. Siehe GEO Evidence Protocol unten.** |
| 1.7 | Social-Commerce Product-Tagging (Instagram, TikTok, Pinterest)     | ×1      | Product-Tags auf organischen Posts; Tiktok Shop Listing                            |
| 1.8 | robots.txt für AI-Crawler-Policy                                   | ×2      | GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Applebot-Extended explizit erlaubt|

#### GEO Evidence Protocol (empfohlen für D2C)

Im D2C-Kontext sind Käufer-Queries lexikalisch und kontextuell anders als in B2B-Procurement. Empfehlung: **mindestens 8–10 konkrete Käufer-Queries**, formuliert wie ein Endkunde sie auf der Couch tippen würde, nicht wie ein Procurement-Officer:

- *„best running shoes for marathon training under 200 euros"*
- *„red lipstick that lasts all day, vegan and cruelty-free"*
- *„recommend me a sofa, modern style, can fit in a small apartment"*

Pro Query dokumentieren: Position des Focus-Players (Top-Citation / Nebenerwähnung / Marken-Mention / nicht erscheinend), Top-3-Wettbewerber in der Antwort, Bild-/Preis-/Link-Qualität der Citation. Plattformen: ChatGPT Shopping, Perplexity Shopping, Apple Intelligence (US-Locale), Google Shopping Lens, Amazon Rufus. Mindestens drei Plattformen, Stand-Datum dokumentieren.

### Säule 2 — Product Data & Real-Time Infrastructure

| Nr. | Kriterium                                                | Gewicht | Check                                                                       |
|-----|----------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 2.1 | Real-time Inventory API (public oder via partner)        | ×3      | Endpoint für Stock-Check; in <500ms verfügbar                               |
| 2.2 | Real-time Pricing API (incl. promotions, regional pricing) | ×3      | Pricing-Endpoint; promotion-aware                                            |
| 2.3 | Variant-Daten machine-readable (Size, Color, Material)   | ×2      | Strukturierte Variant-Spec im PDP-JSON-LD oder API                          |
| 2.4 | High-res Product Imagery via API/CDN                     | ×1      | Image-CDN mit konsistenter URL-Struktur; ImageObject in Schema             |
| 2.5 | Return Policy in machine-readable Form (MerchantReturnPolicy schema) | ×2      | schema.org MerchantReturnPolicy implementiert                              |
| 2.6 | Sizing/Fit-Daten strukturiert (für Apparel)              | ×1      | Größentabellen als strukturierte Daten, nicht nur als Image                |

### Säule 3 — Agentic Checkout & Payment Protocols

| Nr. | Kriterium                                                   | Gewicht | Check                                                                       |
|-----|-------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 3.1 | ACP (Agentic Commerce Protocol) Merchant-Listing            | ×3      | acpready.com Merchant Registry; Stripe ACP-Integration confirmed            |
| 3.2 | UCP (Universal Commerce Protocol) Adoption                  | ×3      | Google UCP Adopter Liste; Channel-Listing                                   |
| 3.3 | Delegated Payments / Tokenized Payment für Agents           | ×2      | Stripe Delegated Payments oder Adyen Agent-Mode; Tokenization-Support       |
| 3.4 | Apple/Google Wallet Pass für Loyalty & Receipts             | ×1      | PassKit / Google Wallet Object API integriert                              |
| 3.5 | Shop Pay / Klarna / PayPal Agent-Integration                | ×2      | Express-Checkout-Buttons agent-callable; Klarna „Pay later via agent"      |
| 3.6 | Buy with Prime via Agents (US-relevant)                     | ×1      | Amazon Buy with Prime / Amazon Pay agentic integration confirmed            |
| 3.7 | Returns/Refunds API für Agents                              | ×2      | Programmatic Returns Initiation; ohne Login möglich (mit Agent-Token)      |

### Säule 4 — Customer Trust, Identity & Consent

| Nr. | Kriterium                                                   | Gewicht | Check                                                                       |
|-----|-------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| 4.1 | SSO via Apple, Google, Passkeys                             | ×2      | Login-Options auf Checkout-Page; Passkey-Support                            |
| 4.2 | Reviews-Aggregation (Trustpilot, Bazaarvoice, Yotpo)        | ×1      | Reviews öffentlich crawlable; Strukturierte AggregateRating-Daten           |
| 4.3 | Loyalty Program API (für Agent-Delegation)                  | ×1      | Loyalty-Points programmatic abfragbar                                       |
| 4.4 | Privacy/Consent Framework für Agents (TCF, GDPR)            | ×2      | Klar dokumentierte Agent-Datenflüsse; expliziter Consent-Layer für Agents   |
| 4.5 | Authenticity Markers (Brand Verification, Marketplace Trust) | ×1      | Verified Merchant Badge auf Plattformen; Counterfeit-Protection-Policy     |

## 5 · Scoring Output Schema (NEW v1.2)

Wie im B2B-Skill liefert das Scoring **aggregierte Scores pro Wettbewerber und pro Säule**. Diese werden im Report in der Spalten-Headerzeile (Gesamt-Maturity-Score pro Wettbewerber) und in jeder Pillar-Headerzeile (Pillar-Score pro Wettbewerber) ausgewiesen. Berechnungsregel und Konsistenz-Pflicht: identisch mit B2B-Skill Section 5 — siehe dort.

**Mobile-Sub-Score (D2C-spezifisch):** Optional kann im Score-Banner ein zweiter kleiner Mobile-Sub-Score ausgewiesen werden, der nur die mobile-relevanten Kriterien gewichtet aggregiert (1.3 Mobile-PDP, 1.7 Social-Commerce, 3.4 Wallet-Pass, 3.5 Wallet-Checkout-Buttons, 4.1 Passkeys). Dieser zweite Score zeigt, wo die Mobile-Reife im Verhältnis zur Desktop-Reife liegt — bei vielen D2C-Brands ist Mobile signifikant schwächer. Wenn Mobile-Sub-Score und Gesamt-Score um mehr als 1,5 Punkte auseinanderliegen, ist das ein Hinweis-Block im Verdict wert.

## 6 · Quick Wins — Horizon-strukturiert

### Horizon 1 — Do this week (Hours to days)

- **llms.txt mit Returns / Sizing / Warranty / Sustainability** — niedrigster Effort, sofortige Wirkung auf Citation-Quality.
- **robots.txt + Applebot-Extended Audit** — Apple-spezifischer Crawler muss separat zugelassen werden; einzeilige Korrektur, oft übersehen.
- **MerchantReturnPolicy + ShippingDetails Schema** — Tage. Sofortige Rich-Result-Sichtbarkeit in Google + agentic surfaces.
- **acpready.com Merchant Registry Check + Eintrag** — bei Stripe-PSPs primär Konfiguration, keine Engineering-Arbeit.

### Horizon 2 — Do this quarter (4–12 weeks)

- **Vollständige schema.org Product Markup auf allen PDPs** — 2–4 Wochen. AggregateRating, Brand, GTIN, Offer mit Availability/PriceSpecification ergänzen, falls unvollständig.
- **Real-time Inventory & Pricing API public oder partner** — 4–12 Wochen. Voraussetzung für agent-mediated Checkout.
- **GEO Content Strategy per Category** — 1–2 Monate. Comparison-Pages, vertikale FAQs, Use-Case-Pages.
- **ACP / UCP Onboarding** — 4–8 Wochen wenn Stripe oder Adyen als PSP genutzt wird.
- **Apple Intelligence Optimierung (Applebot-Extended + schema completeness)** — 4–6 Wochen.

### Horizon 3 — Build over 2–3 months (Engineering project)

- **Mobile-PDP JS-Wall-Fix / SSR-Migration** — 4–8 Wochen Mindesteinsatz, oft 2–3 Monate. Häufiger als gedacht; viele Brands haben SSR auf Desktop aber nicht Mobile.
- **Returns/Refunds API für Agents** — 3–4 Monate. Programmatic Returns Initiation ohne Login (mit Agent-Token).
- **Delegated Payment Infrastructure (Stripe Delegated Payments / Adyen Agent-Mode)** — 3–6 Monate.
- **Wallet-Pass-Integration für Loyalty + Receipts** — 3–4 Monate.

## 7 · Competitive Risks — Pattern-Template

- **Direkter Wettbewerber ist ACP/UCP Early Adopter.** — z. B. wenn Nike ACP launched, ist On Running auf Sicht der nächsten 12 Monate strategisch herausgefordert.
- **Marketplace-Aggregator nimmt Brand-Traffic ab.** — Zalando/Amazon/Otto/About You als „Discovery-Layer", die zunehmend Brand-Suche absorbieren.
- **Apple Intelligence Shopping bevorzugt schema-vollständige Brands.** — Apple-spezifischer Crawler (Applebot-Extended) muss separat zugelassen werden; Lücke wirkt sofort.
- **TikTok Shop / Instagram Checkout als Plattform-Lock-in.** — Brands, die Vertical-Channel-Lock-in akzeptieren, verlieren mittelfristig Datenhoheit.
- **„Headless"-Wettbewerber mit besserer agentic Performance.** — Shopify-native Brands mit Hydrogen/Remix sind technisch im Vorteil gegenüber Legacy-Platforms.
- **AI-native Vergleichs-Tools (Daydream, Perplexity Shopping).** — formen die Shortlist außerhalb der Brand-Domain.

## 8 · Commercial Upside Framing

Drei sektor-spezifische Hebel-Klassen (Render-Skill Section 4.8 referenziert diese Reihenfolge im D2C-Kontext):

### 8.1 Conversion Lift in Agent-mediated Shopping

Bei D2C zeigen frühe Pilot-Daten Conversion-Multiplikatoren im Bereich **2x bis 4x** in agent-präsentierten Shortlists gegenüber Standard-Search-Discovery, getrieben durch (a) Wegfall des Tab-Hopping (Agent stellt 3 Optionen vor, statt der User öffnet 10), (b) reduzierte Decision-Fatigue, (c) integrierte Pre-Filter nach Größe/Stil/Preis. Quelle und Datum sind player-spezifisch zu attribuieren.

### 8.2 AOV-Lift durch Agent-mediated Bundling

Agents schlagen kontextuelle Komplements vor („wenn Du diese Laufschuhe kaufst, brauchst Du auch Socken für Marathon-Training") — Cross-Sell-Quote in frühen Pilots liegt **15–30 % über klassischem PDP-Cross-Sell**. Wirkung am stärksten in Apparel, Beauty, Sport, weniger ausgeprägt in Single-Item-Categories (Möbel, Hausgeräte).

### 8.3 Repeat-Purchase via Wallet-Pass + Agent-Memory

Agent-mediated Reorders (Beauty-Replenishment, Sport-Verbrauchsmaterialien, FMCG-Subscription-Adjacent) bauen auf Wallet-Pass und Agent-Memory auf. Wer früh Wallet-Pass + Loyalty-API + Reorder-Flow agent-zugänglich macht, baut **kundenspezifische Re-Discovery-Pfade**, die durch das Wallet-Ökosystem (Apple Wallet / Google Wallet) gestützt werden. Mittelfristig der größte Wallet-Share-Hebel.

Im Report-Output: drei kompakte Sub-Blöcke. Wenn der Player primär in Single-Item-Categories operiert (Möbel, Hausgeräte), wird AOV-Lift abgeschwächt und Repeat-Purchase entsprechend stärker betont — oder die Sub-Block-Reihenfolge umgedreht.

## 9 · Wettbewerber-Auswahl-Heuristik

- **Direct Brand Competitor** — gleiche Käufergruppe, gleiches Preissegment (Nike → adidas, On Running, HOKA)
- **Marketplace-Aggregator als Layer** — wenn Brand: dann auch ein Aggregator (Zalando, Amazon Fashion, Otto)
- **Leading-Edge Best-Practice Brand** — typisch Shopify-native (Allbirds, Glossier) oder global-führender D2C (Nike SNKRS, Sephora)
- **Adjacent Disruptor** — Resale (Vinted, Vestiaire), Subscription (Stitch Fix), Rental (Rent the Runway)

## 10 · Quellen-Raster

- Page Source der Top-20 PDPs auf Desktop *und* Mobile
- /robots.txt + /llms.txt + /sitemap.xml + /well-known/agentic-commerce
- Google Rich Results Test auf 20 SKUs
- Google Merchant Center Sichtbarkeit (via Brand-Search in Shopping-Tab)
- acpready.com Merchant Registry
- UCP Adopter Liste (Google Cloud, NRF 2026 Coverage)
- TikTok Shop Listing, Instagram Shop Listing
- Apple Intelligence Shopping-Demos (verfügbar in iOS 18.5+; Demo-Queries im US-Locale)
- ChatGPT Shopping Surface; Perplexity Shopping
- **GEO-Evidence: konkrete Test-Queries pro Plattform mit Stand-Datum**
- Trustpilot/Bazaarvoice Brand-Score
- AppStore/PlayStore Brand-App-Listings + Wallet-Integration
- Industry Coverage: NRF Big Show, Shoptalk, Web Summit, dmexco

## 11 · Output-Struktur (HTML-Report)

Der Report folgt der Struktur des Render-Skills v1.2:

1. **Header** mit zwei-zeiliger Title-Struktur (Zeile 1: brand.domain; Zeile 2: sector descriptor), Accenture Song Logo oben rechts
2. **Score-Banner** mit Focus-Player Gesamt-Score + **optionalem Mobile-Sub-Score**; Lead-Sentence + Verdict (Verdict muss mindestens einen Wettbewerber bei Score-Name referenzieren)
3. **Weight-Note**
4. **PoV-Callout**
5. *(Transaction-Rail-Note entfällt im D2C — ACP/UCP sind die richtige Rail)*
6. **Optional: Note on PDP-Type-Splits** (Default-PDP vs. Sale-PDP vs. Bundle-PDP — viele Brands haben unterschiedliche Templates mit unterschiedlicher Schema.org-Coverage)
7. **Section 01: Criterion-by-Criterion Scorecard** — **mit Gesamt-Maturity-Score pro Wettbewerber in der Spalten-Headerzeile UND Pillar-Score pro Wettbewerber in jeder Pillar-Headerzeile** — plus optionaler GEO-Evidence-Block
8. **Section 02: Priority Quick Wins** — Horizon-strukturiert (Week / Quarter / 2–3 Months)
9. **Section 03: Commercial Upside Framing** — Conversion Lift / AOV-Lift / Repeat-Purchase
10. **Section 04: Key Competitive Risks** — inkl. Plattform-Lock-in-Risiko-Block (TikTok Shop, Amazon, Wallet-Garden)
11. **Section 05: Rating Key & Methodology** — inkl. Score-Chip-Erklärung
12. **Footer**

**Sektor-spezifische Title-Line-2-Beispiele:**
- Nike → „Sport Performance & Lifestyle D2C"
- Zalando → „European Fashion Marketplace"
- Sephora → „Beauty Retail — Omnichannel"
- IKEA → „Home Furnishing — Global D2C"
- On Running → „Performance Running — Premium D2C"

## 12 · Tone & Caveats

- D2C-Tonalität ist etwas direkter als B2B, weniger Defensiv-Framing, mehr „Where the consumer goes next".
- **Wichtig:** Bei D2C-Reports höhere Sorgfalt bei der ACP/UCP-Bewertung — der Standard verändert sich noch monatlich (Stand Mai 2026). Aussagen mit Datum versehen.
- Mobile-PDP-JS-Walls werden oft übersehen, weil Performance-Teams primär auf Desktop optimieren. Mobile-curl-Test ist Pflicht. Wenn Mobile-Sub-Score signifikant niedriger als Desktop-Score ist, im Verdict explizit thematisieren.
- Datenschutz-/GDPR-Hinweise bei D2C besonders relevant, weil agentic Surfaces personenbezogene Daten verarbeiten können.
- **Per-Column Scores im Verdict nutzen:** Der Score-Banner-Verdict referenziert mindestens einen Wettbewerber konkret mit Score („Zalando führt bei Discoverability mit 7,4, die Brand-Domain liegt bei 4,1") — Score-Spreizung sichtbar machen.
- Disclaimer am Ende: Report basiert auf öffentlichen Signalen; Mobile-Rendering und Payment-Processor-Beziehungen müssen intern verifiziert werden.
`;

export const SKILL_FS = `---
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
`;

export const SKILL_RENDER = `---
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

This skill is the layer that translates a completed scoring dataset into the standardised HTML report. The canonical implementation lives in \`report_template.html\` (next to this file). The skill explains what each component does, when it appears, how to populate it, and which v1.2 features extend the original template.

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

\`\`\`bash
grep -oE '\.[a-zA-Z][a-zA-Z0-9_-]+\s*[{,]' report_template.html | sort -u
\`\`\`

Never invent class names. Any genuine extension is defined explicitly in a \`<style>\` block prepended to \`</head>\`, not improvised inline. All div / p / section tags must be balanced before the file is written. A mandatory automated QA gate (bash structural checks plus Python pixel-sampling of the rendered output) runs before delivery — see Sections 6 and 7.

---



## 1 · Visual System (Accenture Song theme)

The visual system is **already implemented in \`report_template.html\`**. Do not redesign it per report. Key tokens:

| Token            | Value     | Role                                                                 |
|------------------|-----------|----------------------------------------------------------------------|
| \`--accent\`       | \`#a100ff\` | Accenture Song purple — eyebrow, accent borders, score-label         |
| \`--accent-soft\`  | \`#f3e8ff\` | Light purple — weight-tag ×3 background, strong-rating pills         |
| \`--text\`         | \`#0a0a0a\` | Body ink, score block background                                     |
| \`--text-mid\`     | \`#525252\` | Verdict body, criterion descriptions                                 |
| \`--text-light\`   | \`#8a8a8a\` | Meta lines, footer                                                   |
| \`--bg\`           | \`#ffffff\` | Page background                                                      |
| \`--surface-2\`    | \`#fafafa\` | Callout backgrounds, geo-evidence block, upside cards                |
| \`--border\`       | \`#d9d9d9\` | Hairlines                                                            |
| \`--bench-1..4\`   | various   | Per-column accent strips on table header                             |
| Typography       | Inter     | All weights; no second display font                                  |

**Do not change** the palette per report. New benchmark column colours can be added to \`--bench-5\` and beyond; existing tokens stay.

## 2 · Brand Asset — Accenture Song Logo

The Accenture Song word-mark sits in the top-right of the header. Asset shipped alongside this skill: \`assets/accenture_song_logo.png\` (transparent PNG, 600 × 74 px, ~28 KB). The logo is **embedded as a Base64 data URI inside the \`<img src="...">\`** so the report stays a single self-contained file.

### Two ways to embed the logo

**Option A — use the pre-encoded data URI:**

\`\`\`bash
cat assets/logo_datauri.txt
\`\`\`

This file contains the full \`data:image/png;base64,...\` string ready to paste into the \`src=\` attribute of the \`<img class="brand-logo">\` tag.

**Option B — encode on the fly:**

\`\`\`bash
python3 -c "import base64; print('data:image/png;base64,' + base64.b64encode(open('assets/accenture_song_logo.png','rb').read()).decode())"
\`\`\`

Either way, the result is ~38 KB of Base64. The rendered logo is set to **140 px wide** on desktop, positioned via flex.

## 3 · Input Data Model

Expect the following structured input (as YAML, JSON, or a filled markdown brief). v1.2 fields are flagged.

\`\`\`yaml
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
\`\`\`

If any required field is missing, ask rather than invent.

## 4 · Component Library — what changed in v1.2

\`report_template.html\` already implements the v1.0 components (header, score banner, callouts, scorecard, quick wins, risks, methodology, footer). v1.2 extends or modifies them as follows.

### 4.1 Header — two-line title with logo (UPDATED)

The original header had a single \`<h1>\` like \`<em>{{domain}}</em> — {{descriptor}}\`. In v1.2 this becomes a flex layout with the title block on the left (eyebrow, line 1, line 2, meta) and the Accenture Song logo on the right.

**Template change:**

\`\`\`html
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
\`\`\`

**CSS additions** (merged into the existing \`<style>\` block):

\`\`\`css
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
\`\`\`

The \`<em>\` on line 1 keeps the existing template convention: \`font-style: normal; color: var(--accent);\` — the player domain is set in Accenture purple, not actual italic. Line 2 sits below in softer ink and medium weight, clearly subordinate but unmistakable.

### 4.2 Score banner (structure unchanged, verdict guidance updated)

The score banner stays as in the template — black left column with the focus player's overall score, white right column with the verdict.

**Updated verdict-writing rule:** because the scorecard now exposes per-column scores, the verdict **should reference at least one benchmark by its score** (e.g. „Schneider Electric leads at 7.4, ABB sits at 4.1"). This is what makes the v1.2 score visibility pay off in the narrative.

### 4.3 Callouts — weight-note, PoV, Transaction-Rail-Note, split-note

The original template has \`.weight-note\`, \`.pov-callout\`, \`.split-note\` — all three styled identically with a purple left border on light surface. v1.2 adds \`.rail-note\` for the B2B-Industrial ACP/UCP reframe, visually distinct (uses \`--warning\` so it doesn't compete with the PoV callout):

\`\`\`css
.rail-note {
  padding: 20px 24px;
  margin-bottom: 32px;
  border-left: 4px solid var(--warning);
  background: #fdf6ec;
  color: var(--text-mid);
}
.rail-note strong { color: var(--warning); }
\`\`\`

\`\`\`html
<div class="rail-note">
  <strong>On transaction rails:</strong> {{transaction_rail_note.body}}
</div>
\`\`\`

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

**(b) Pillar-row per-column score** — instead of \`<tr class="pillar-row"><td colspan="5">…\`, the pillar header is now a five-cell row: pillar name + description on the left, four per-column score chips on the right.

**Updated HTML:**

\`\`\`html
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
\`\`\`

The \`colspan="5"\` on the pillar row is **removed** in v1.2 — the pillar row is now a real five-cell row.

**CSS additions:**

\`\`\`css
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
\`\`\`

The pillar-row chip (18 px) is intentionally larger than the column-header chip (14 px). The larger chip is the per-pillar story — that's where the differentiation between benchmarks gets interesting. The smaller header chip is the at-a-glance summary.

**Score computation rule** (the renderer must produce reproducible numbers):

\`\`\`
pillar_score(column, pillar) = ( Σ (weight × rating_value) for criteria in pillar )
                              / ( Σ (weight × 100%) for criteria in pillar )
                              × 10

rating_value:  Confirmed = 100%   Strong = 100%   Partial = 50%
               Unverified = 25%   Missing = 0%
\`\`\`

Column-aggregate (header chip) score = weighted sum across pillars using the pillar weights from the sector skill (×3 / ×3 / ×3 / ×1–2), normalised to 0–10. **The focus player's column-aggregate score must equal the banner score** — divergence means one is wrong.

### 4.6 GEO Evidence Block (NEW v1.2 — required for B2B-Industrial)

A new component, inserted at the end of Section 01 (after the scorecard, before the Section 02 label). Documents the actual buyer queries that justify the GEO-presence rating.

\`\`\`html
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
\`\`\`

\`\`\`css
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
\`\`\`

### 4.7 Quick Wins — three horizon blocks (UPDATED)

The flat Quick-Wins table becomes three sequential tables, each with its own header strip. Horizons: Week / Quarter / 2–3 Months. Numbering resets per horizon.

\`\`\`html
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
\`\`\`

\`\`\`css
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
\`\`\`

**Sort within each horizon** by impact descending, then by effort ascending. Numbering resets to 1 in each horizon. Total entries 6–9 across all three horizons, minimum one per horizon.

### 4.8 Commercial Upside — Section 03 (NEW)

A three-card grid between Quick Wins and Competitive Risks. Sector-specific sub-block names (see Section 5).

\`\`\`html
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
\`\`\`

\`\`\`css
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
\`\`\`

**Tone rules for Commercial Upside:**
- Always attribute the source with date.
- Always range, not point estimate. „3x–5x range, 4,6x mid-point" not „4,6x lift".
- Player-contextualised, not industry-average. Reorder sub-blocks if a different lever is dominant for the player.

### 4.9 Methodology — score legend addition

Methodology gets a small block explaining the v1.2 score chips:

\`\`\`html
<div class="score-legend">
  <p><strong>Score chips:</strong> Each benchmark column carries an overall maturity score (0–10) in its header, and a per-pillar score in each pillar row. Colours:
    <span class="col-score s-strong">7.5+</span> strong &nbsp;
    <span class="col-score s-mid">5.0–7.4</span> mid &nbsp;
    <span class="col-score s-low">2.5–4.9</span> low &nbsp;
    <span class="col-score s-poor">&lt;2.5</span> poor.
  </p>
</div>
\`\`\`

## 5 · Sector-Specific Variations

The visual system is identical across sectors. Content varies:

| Element                       | B2B Industrial                                      | D2C Consumer                                          | FS Financial Services                                 |
|-------------------------------|-----------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Eyebrow                       | „B2B Agentic Commerce Readiness Report"             | „D2C Agentic Commerce Readiness Report"               | „FS Agentic Commerce Readiness Report"                |
| Title line 1                  | \`<em>{domain}</em>\` in accent purple                | \`<em>{domain}</em>\` in accent purple                  | \`<em>{institution} ({domain})</em>\` in accent purple  |
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
11. **Logo renders correctly.** Open the file in a browser; the Accenture Song mark sits cleanly top-right on white background, no broken \`<img>\` placeholder, no white box artefact.
12. **Title is two lines.** Line 1 = player/domain, line 2 = sector descriptor. Both visible. Line 1's \`<em>\` styled in \`--accent\` (Accenture purple).
13. **Single file.** Renders in a browser with no external dependencies beyond Google Fonts (Inter).
14. **Print-friendly.** The \`@media print\` rule produces a clean PDF (test by printing to PDF from Chrome).
15. **Footer is filled.** No leftover \`{{...}}\` markers anywhere.

## 7 · Assembly Process

1. Copy \`report_template.html\` to \`{{focus_player}}_Agentic_Commerce_Readiness_Report_{{Month}}_{{Year}}.html\`.
2. Encode the logo (\`cat assets/logo_datauri.txt\` or the Python one-liner from Section 2). Paste the result as the \`src=\` value of \`<img class="brand-logo">\`. Verify it renders.
3. Fill the header — two-line title (line 1 = domain, line 2 = sector descriptor) — and footer first.
4. Fill the scorecard with all criterion ratings. **The verification path is per cell, not per player.** Every criterion × every benchmark column goes through the same live artefact reading (robots.txt, llms.txt, plan pages, registry lookups) as the focus player before any rating is set. Do not let benchmark columns collapse into „Unverified" just because they received less research attention — that is the most common way the matrix degrades. If a benchmark cell is genuinely unretrievable, it gets a reason line per checklist 3a; otherwise it is „Confirmed/Strong", „Partial", or „Missing" like any focus-player cell.
5. Compute per-pillar scores per column using the formula in Section 4.5. Compute column-aggregate scores. Fill into the column-header chips and pillar-row chips. Apply the correct \`.s-strong / .s-mid / .s-low / .s-poor\` class based on the value, not the column. Verify focus player's column score equals the banner score.
6. Fill GEO evidence block during scorecard work — the queries used for Criterion 1.5 populate this block. Do not run them twice.
7. Write the score banner verdict last — synthesise across the scorecard, reference at least one benchmark by its column score.
8. Quick Wins next (horizon-tagged), then Commercial Upside (three sub-blocks), then Competitive Risks, then Methodology.
9. Run the quality checklist (Section 6) before sharing.
10. **Run the Unverified audit gate.** Before delivery, run an inline check that counts every „unverified" rating in the file and lists it with its column and criterion, so no cell hides in the aggregate. Pattern:

    \`\`\`bash
    python3 <<'EOF'
    import re
    html = open("REPORT.html", encoding="utf-8").read()
    # adjust the pattern to how ratings are tagged in the template (class or data-attr)
    cells = re.findall(r'(unverified)', html, flags=re.IGNORECASE)
    print(f"Unverified cells: {len(cells)}")
    EOF
    \`\`\`

    For each one, answer explicitly: was the artefact retrieval actually attempted? If not, the gate fails — go back and read it. The count in the output is the part that is hard to overlook; treat a non-zero count as a prompt to justify each cell, not as an acceptable resting state. (This gate reduces, but does not eliminate, the asymmetry — a count can still be nodded through. The numeric list is the safeguard.)

## 8 · File Output

- **Filename:** \`{Player}_Agentic_Commerce_Readiness_Report_{Month}{Year}.html\`
- **Encoding:** UTF-8, \`<meta charset="UTF-8">\`
- **No external JS.** No tracking, no analytics.
- **One embedded image** (the Accenture Song logo, as Base64 data URI). No other images.
- **Single file, self-contained.** All CSS inline in \`<style>\` block. Only external resource is the Google Fonts stylesheet (Inter).

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
- **Pillar row collapsed to colspan.** v1.2 explicitly removes \`colspan="5"\` from the pillar row. If you copy a v1.0 snippet by accident, the per-pillar score chips will not have cells to live in — verify the pillar row has five \`<td>\` elements, not one with colspan.
`;

export const REPORT_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{Sector}} Agentic Commerce Readiness Report · {{Date}}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {

  /* Core palette */
  --bg: #ffffff;
  --surface: #f5f5f5;
  --surface-2: #fafafa;

  --text: #0a0a0a;
  --text-mid: #525252;
  --text-light: #8a8a8a;

  --border: #d9d9d9;

  /* Accent */
  --accent: #a100ff;
  --accent-soft: #f3e8ff;

  --success: #0f766e;
  --warning: #b45309;
  --danger: #b91c1c;

  --bench-1: #a100ff;
  --bench-2: #000000;
  --bench-3: #666666;
  --bench-4: #bdbdbd;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 14px;
  line-height: 1.6;

  -webkit-font-smoothing: antialiased;
}

.page {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px 56px 120px;
}

/* ───────────────────────── HEADER (v1.2 — two-line + logo) ───── */

.report-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  padding-bottom: 40px;
  margin-bottom: 56px;

  border-bottom: 2px solid var(--text);
}

.report-header-text {
  flex: 1;
  min-width: 0;
}

.report-header-brand {
  flex: 0 0 auto;
  padding-top: 8px;
}

.brand-logo {
  width: 140px;
  height: auto;
  display: block;
}

.report-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;

  color: var(--accent);

  margin-bottom: 18px;
}

.report-title {
  display: flex;
  flex-direction: column;
  gap: 10px;

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

.report-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;

  color: var(--text-light);
}

.report-meta span {
  padding-right: 14px;
  border-right: 1px solid var(--border);
}

.report-meta span:last-child {
  border-right: none;
}

/* ───────────────────────── SCORE HERO ───────────────────────── */

.score-banner {
  display: grid;
  grid-template-columns: 240px 1fr;

  margin-bottom: 20px;

  border: 2px solid var(--text);
}

.score-left {
  background: var(--text);
  color: white;

  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.score-number {
  font-size: 84px;
  line-height: .9;
  font-weight: 800;
  letter-spacing: -.05em;
}

.score-denom {
  margin-top: 10px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;

  opacity: .7;
}

.score-label {
  margin-top: 24px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;

  color: var(--accent);
}

.score-right {
  padding: 40px;
  background: white;
}

.score-verdict {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-mid);
}

.score-verdict strong {
  color: var(--text);
  font-weight: 700;
}

/* ───────────────────────── CALLOUTS ───────────────────────── */

.weight-note,
.pov-callout,
.split-note {
  padding: 20px 24px;
  margin-bottom: 32px;

  border-left: 4px solid var(--accent);

  background: var(--surface-2);

  color: var(--text-mid);

  border-radius: 0;
}

.pov-callout strong,
.split-note strong {
  color: var(--text);
}

/* v1.2 — Transaction-Rail-Note (B2B only) */
.rail-note {
  padding: 20px 24px;
  margin-bottom: 32px;

  border-left: 4px solid var(--warning);
  background: #fdf6ec;

  color: var(--text-mid);
}

.rail-note strong {
  color: var(--warning);
}

/* ───────────────────────── SECTIONS ───────────────────────── */

.section-label {
  margin-top: 88px;
  margin-bottom: 10px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;

  color: var(--accent);
}

h2 {
  font-size: 40px;
  line-height: 1;
  letter-spacing: -.04em;
  font-weight: 800;

  margin-bottom: 36px;
}

h3 {
  font-size: 16px;
  font-weight: 700;
}

/* ───────────────────────── TABLES ───────────────────────── */

.table-wrap {
  overflow: hidden;
  border: 1px solid var(--border);
}

.criteria-table,
.qw-table,
.risk-table {
  width: 100%;
  border-collapse: collapse;
}

.col-header {
  background: var(--text);
}

.col-header td {
  padding: 18px 20px;

  color: white;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;

  vertical-align: top;
}

.co-name {
  display: block;

  font-size: 13px;
  font-weight: 800;

  margin-bottom: 2px;
}

.co-sub {
  font-size: 10px;
  opacity: .7;
}

.col-b1 { border-top: 4px solid var(--bench-1); }
.col-b2 { border-top: 4px solid var(--bench-2); }
.col-b3 { border-top: 4px solid var(--bench-3); }
.col-b4 { border-top: 4px solid var(--bench-4); }

/* v1.2 — Column header overall score chip */
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

/* Pillars */

.pillar-row td {
  padding: 22px 20px;

  background: #fafafa;

  border-top: 2px solid var(--text);
  border-bottom: 1px solid var(--border);

  vertical-align: middle;
}

.pillar-row td:not(:first-child) {
  text-align: center;
}

.pillar-name {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -.03em;
}

.pillar-desc {
  margin-top: 6px;

  font-size: 13px;
  color: var(--text-mid);
}

/* v1.2 — Per-pillar per-column score chip */
.pillar-score {
  display: inline-block;
  padding: 8px 14px;

  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.02em;
  line-height: 1;
}

/* v1.2 — Score-pill colour classes (apply to both .col-score and .pillar-score) */
.s-strong { background: #dcfce7; color: #166534; }   /* ≥ 7.5 */
.s-mid    { background: #fef3c7; color: #92400e; }   /* 5.0–7.4 */
.s-low    { background: #ffe4d6; color: #9a3412; }   /* 2.5–4.9 */
.s-poor   { background: #fee2e2; color: #991b1b; }   /* < 2.5 */

/* Criteria */

.crit-row td {
  padding: 18px 20px;
  border-bottom: 1px solid #ececec;
  vertical-align: top;
}

.crit-row:nth-child(even) td {
  background: #fcfcfc;
}

.crit-name {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 6px;

  font-size: 15px;
  font-weight: 700;
}

.crit-desc {
  color: var(--text-mid);
  line-height: 1.6;
}

.crit-check {
  margin-top: 8px;

  font-size: 11px;
  color: var(--text-light);
}

/* ───────────────────────── TAGS ───────────────────────── */

.weight-tag,
.rating,
.effort-tag,
.impact-tag,
.cr-tag,
.horizon-tag {

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;

  border-radius: 0;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: .08em;
  text-transform: uppercase;
}

.w3 { background: var(--accent-soft); color: var(--accent); }
.w2 { background: #efefef; color: var(--text-mid); }
.w1 { background: #f6eadb; color: var(--warning); }

/* Ratings */
.r-confirmed  { background: #dcfce7; color: #166534; }
.r-strong     { background: var(--accent-soft); color: var(--accent); }
.r-partial    { background: #fef3c7; color: #92400e; }
.r-unverified { background: #efefef; color: #666; }
.r-missing    { background: #fee2e2; color: #991b1b; }

/* Effort & Impact */
.effort-low      { background: #dcfce7; color: #166534; }
.effort-low-mid  { background: #fef3c7; color: #92400e; }
.effort-mid      { background: #f6eadb; color: var(--warning); }
.effort-high     { background: #fee2e2; color: #991b1b; }

.impact-high     { background: var(--accent-soft); color: var(--accent); }
.impact-mid      { background: #efefef; color: var(--text-mid); }
.impact-low      { background: #f5f5f5; color: var(--text-light); }

/* v1.2 — Compliance-risk pills (FS only) */
.cr-low  { background: #dcfce7; color: #166534; }
.cr-mid  { background: #fef3c7; color: #92400e; }
.cr-high { background: #fee2e2; color: #991b1b; }

/* ───────────────────────── GEO EVIDENCE (v1.2) ─────────────── */

.geo-evidence {
  margin: 40px 0 56px;
  padding: 32px;

  background: var(--surface-2);
  border-left: 4px solid var(--accent);
}

.geo-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.geo-header h3 {
  font-size: 18px;
  font-weight: 800;
}

.geo-meta {
  display: flex;
  gap: 16px;

  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;

  color: var(--text-light);
}

.geo-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.geo-table th {
  text-align: left;
  padding: 12px 14px;

  background: var(--bg);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;

  color: var(--text-mid);
  border-bottom: 1px solid var(--border);
}

.geo-table td {
  padding: 14px;
  border-bottom: 1px solid #ececec;
  vertical-align: top;
}

.geo-query {
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 12px;
  color: var(--text);
}

.geo-summary {
  margin-top: 20px;
  padding-top: 16px;

  border-top: 1px solid var(--border);

  font-size: 14px;
  color: var(--text-mid);
}

.geo-summary strong {
  color: var(--text);
  font-weight: 700;
}

/* ───────────────────────── QUICK WINS (v1.2 — horizon blocks) ─ */

.qw-intro {
  margin-bottom: 32px;
  max-width: 760px;

  color: var(--text-mid);
  font-size: 14px;
}

.horizon-block {
  margin-bottom: 48px;
}

.horizon-header {
  display: flex;
  align-items: baseline;
  gap: 18px;

  margin-bottom: 16px;
  padding-bottom: 12px;

  border-bottom: 2px solid var(--text);
}

.horizon-header h3 {
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -.02em;
}

.h-week    { background: var(--accent-soft); color: var(--accent); }
.h-quarter { background: #efefef; color: var(--text-mid); }
.h-months  { background: #f6eadb; color: var(--warning); }

.qw-table th {
  padding: 18px 20px;

  background: #111;
  color: white;

  text-align: left;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.qw-table td {
  padding: 22px 20px;
  border-bottom: 1px solid #ececec;
}

.qw-num {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -.04em;

  color: var(--accent);
}

.qw-action strong {
  display: block;

  margin-bottom: 6px;

  font-size: 15px;
  font-weight: 700;
}

.qw-action p {
  color: var(--text-mid);
}

/* ───────────────────────── COMMERCIAL UPSIDE (v1.2) ─────────── */

.upside-intro {
  margin-bottom: 32px;
  max-width: 760px;

  color: var(--text-mid);
  font-size: 14px;
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
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;

  color: var(--text-light);
  margin-bottom: 14px;
}

.upside-headline {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -.02em;
  line-height: 1.25;

  color: var(--text);
  margin: 0 0 16px 0;
}

.upside-body {
  font-size: 13px;
  line-height: 1.7;

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

.upside-source strong {
  color: var(--text-mid);
  font-weight: 700;
}

/* ───────────────────────── RISKS ───────────────────────── */

.risk-title {
  font-size: 15px;
  font-weight: 700;

  color: var(--text);
}

.risk-body {
  color: var(--text-mid);
  line-height: 1.7;
}

/* ───────────────────────── LEGENDS ───────────────────────── */

.rating-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 32px;
}

.rl-item {
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 12px;
  color: var(--text-mid);
}

/* v1.2 — Score legend block */
.score-legend {
  padding: 18px 20px;
  margin-bottom: 32px;

  background: var(--surface-2);
  border-left: 4px solid var(--accent);

  font-size: 13px;
  color: var(--text-mid);
}

.score-legend strong {
  color: var(--text);
}

.score-legend .col-score {
  margin: 0 2px;
}

/* ───────────────────────── METHODOLOGY ───────────────────────── */

.methodology {
  max-width: 980px;

  font-size: 14px;
  line-height: 1.8;

  color: var(--text-mid);
}

.methodology p + p {
  margin-top: 16px;
}

/* ───────────────────────── FOOTER ───────────────────────── */

.report-footer {
  margin-top: 96px;
  padding-top: 24px;

  border-top: 1px solid var(--border);

  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;

  color: var(--text-light);
}

/* ───────────────────────── RESPONSIVE ───────────────────────── */

@media (max-width: 900px) {

  .page {
    padding: 32px 20px 80px;
  }

  .score-banner {
    grid-template-columns: 1fr;
  }

  .upside-grid {
    grid-template-columns: 1fr;
  }

  .title-line-1 {
    font-size: 44px;
  }

  h2 {
    font-size: 32px;
  }

  .criteria-table {
    font-size: 12px;
  }
}

@media (max-width: 720px) {
  .report-header {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .report-header-brand {
    align-self: flex-end;
  }
}

@media print {
  body { background: white; }
  .page { max-width: none; padding: 0; }
}
</style>
</head>
<body>
<div class="page">

  <!-- ══ HEADER (v1.2 — two-line title + Accenture Song logo) ══════ -->
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
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABKCAYAAABn5yplAABwUUlEQVR42u19d3iUVfb/ufe+7/SZ9B5SaIHQCShFDEoVVBCNDVdX177u+lv7NmK2qLv73VVXXXWLvWfFCiKoEHoLnQAhAQKkkTqZPu977/39MfcNQ0wykwIqO+d53geFZOa8995zzueUew5A/xICAKmPD4YIRShCEYpQhLqwMwUFBaQX9qI3vxOhCPUJEEUoQhGKUIQi9EOwVwQAVO0vJEmCl156yfrRRx8lq6o3nnMS1dR0Sh8bG+vXYdlpd7U0TZs2o+GJJ55oxBhzznnwZ2EAYADAI0sboe8twOKcI4QQX7BgwYCak8cf8/sVBBj16PMR51SSJMlgsvx3/fr1XxUUACkuBhrZoghFKEIR+p8nAhCwB5xzeerUCy9qamia7fP7pvr9ylBVpYmcM4QQAs45aH8KENZGCKnW6XT7TEbz2tSEhK++Xr/+IKX0W58doQh97wAWBMKu6tjRo3954mTVE5SyXn+Q1WpdXV1TdyljTPMuIhShCEUoQv/bNooXPvBA/Icrlt/e3NJ8k9+vjKCUAmOsHVAFsBdnQSALAQDW/h0hAIwJYEwUs9m80RZl/eeePfvfRwhRAbIi0awIfS8BFsYYs9SU5PUOR9uFQQe2J8Q550iv1/vyp1+aU1xcXC34ixz4CEUoQhH63yMMAEySJBg5cvi9DacafuPxuFOEA88QQgxOp/q6s2c8+OGcSwAAhBAwmYw7MtIzf7tp69blnHMU9PMRilC/HOA+UWFhQAguueSSgT6fd4IAVjroeXG7jBACSqn54P798+B0vj1CEYpQhCL0v0UEANhDDz2UnJmZvuxE1fEXHA5HCmNcRQgxhBAWdgMBAOWcU845ZQHijDEm/k6FQPqPC3snIYQ4QohSSqnD4Rx/uKJ8WW7usL8LgMU5j9QmR6h/qD8OkgQA6tDBg3/R2NTwN8aYKv6uN0SBcxITE/tl1YmTcyNpwghFqNdyTXokdxGvPULfL8efXXfdwqGbN21b1tpqHwwAKkKIBNksyjknAAAIISAEAwACSZLaBUClFDjngTQiY9oBp1rqUHwO45xzjDGJjYn94s2337l6ypQpXvFvEZmI0HcOsDAmmKUmJ69zONou6mV6UCPOGENGo9F9TcGVQ1544ZUaiKQJIxShCEXofwlc8cWLFyevLVmzyW5vzcQYBzvtXKuvkmUZDAbDHp1ev9FqteylVD2anT3EZZAkSinFBysqjAaDPMBubx3k9yoTfH7fhYqi2Cil0NFOcc4VhJAcHRP72dGjxxYKEBapyYrQdwewCgsLcVFREVu4cO6gjRu2lfl8PlkUG/b6cznnqiRJUlZG1u2lu3a9Ah2u5UYoQhHqVp55Tk5OKsbwIHDO4XRdSYefRJxxjoxGI508eeqTL774YkvEmYnQ9+D8Ys45Gpidsaa5uWUqQigYXDHGGDbo9WCNino9PT31pTVr1m9BCIU8sxhjuOnqq9O27997VWtL8wMejyebMU5FVEyzPX5CiC45JeXPBw4celREyCK3CyP03QAscfDV3GFDf1FXX9/X9KBGFACIxWr9pLq6dmHkkEcoQj3y/llUlGk8QVJpSEFjDMxmM0y7ePrg999/vxJO9wWKUIS+CyIAQEcMz3m4rq7uzyqlCkJI1sAV5xybzZbqwUMG3bp+/aZVjLFgOwQAwAsKCto/rLi4GPLz81FJSQmIc81EYCD6rbfe/GtrS9NtqkqDQRZnjFGj0SgNzx02ac2a9VsKCgpIcXFxxP5E6DsBWJgQwtJTU9a32lun9jE9GORIcGQwGNrmzb9k8KuvFjdEPOsIRSh8gBUdbR4NHJcKmenyZhVjDJlMJjV/+qXD33///WMRgBWh7/js8lvuvSVp5dIvDrlcLgvGGInzyzjnyGK11s2aNSf/tddeOyxAFevheW1vVEoIgeE5Q/5SU1v7EKVngCzKOScWs+Wrmrr6WZzziExEqE+HuldUWFiIAYBdc80Vg7w+70Q4fUujO+QUrhBQVVVtO3YcmAMAKD8/P3KbMEIRCt9H6dHIKsZY5NZUhL5Tys/PxwDAt6/e/BOfz2fDGGstGIBzDpIk0aysgTe+9tprh/Py8mQIlI30FPhw8XuYUiodOHT44ZiYmM8FuNKiVAQAmM/vmzl16tSpAMAKCiK32SN0jgFWUVERBgDYv798gaIoOhG96lZR6/X68NwMhLiqqtDW1nY1QoiXlJREolcRilCEInSeUklJCeWcE4fTeT2lanDkVUUI4Shb1McbNmxYAwBSaWmp0sevY4WFhYxSiqZMnfhTvV7vEJEqLuwPU1UV6uurf4IQguLiyP5E6BwDLABghBBwOhyLxMiBbsEVIcSZkZn5UpAn0e2Pc87B4/Zeet999yVAIGwb8bIjFKEIReg8I5EN4ddff9Ugr9c7DAC1txnhnGNJliA1PfV1CGQz+uU7i4qKGACQN98sPm6xWt4U6UgtioU55+Byumdv2LDBKP4+Yn8idG4AlpYevGHRosEej+cCkfrrKozKOOeg1xuO/uhHt/xRp9N5RUqiO5CFEEJUUfy2zZs3zwYANH369O8yTBs8vV0S74qDnvZ/Ez+HvwcC2SOeC78HE+YLCwtxCJ4lAJDy89vX+fuu9Lrbg+C/xxFVdF4RKigoIAUAJD8/v9/393yTkzVr1mAAgIMHK3IZY1IQ0OEAgBEgd3pswg4A4CUlJf1WcF5QUMABAKWlpbwmSRLTGo2K9WKqqqT+8pe/HCF+Fp/t8yLOyhlPfn6+JFKUGL7/+g539R4FBQVE4IbvwzsgTYby8zuu9/fDHkoAAGNHj34wNiaKR9ksSnSUlXfxKDHRVj548MDnCCGQnpa6Nspm4dFRVrWb3+HRUVYlOsrKBg3M+q9o/XCuARbqyvgFGttJQAgBQiTAuMu9kM5x/r5LnjHGp3mWJG12V1d7ey4PV3BH5k54Ju1PF0TEGn9vlI9QJN9iOPhdOjkz/TG5AAMAmEzyGCFDrBv5YjarmScnJSizZs3K7ovDFaHuZe/7Iifi+d4ZaWHkYGJe3s/jzrQn1GY18/S01Ort27ebgta5P/cMcc6l1JTEYxazkdusZm6zmrnVYuLRUVY+atSoe4Nt3rnYz1C293um71Av3oOICTDnmkgv9rFPMt3bQ8MwxtDS2rxANG3rcnE551iWdZAQE/d5RcURFGWzfO52u6YxxkKlCTHnHDkczuk/v/nm6Gdff70Vzs1tQq3LLwUAFWMMv//9ownffLNxREN90yif3zvU4/UkmM3mWMWnSDq9TnW73W2SJDXpDYYqi8V8KCUlfe9HH310GCGkivx98GeeLeWrhbhVQgjccccdiWVle8e0ttpHeTzuwYpfSTAYjdGqqhCdrFOdDmeLzmBo0enkozaTpSxz0KCypUuXViqKonayDmebZyZJMvz0J7dlbdu7d3RbW+sIl8uRjYHEyzo5ilIGhGC/2+M6ZbPZ6jCWDiUnJ+578MFH98+dO9dVXMyDBahP/MqyDISQkBcyEEKgqiqoqvqts1NUVEQBEPz7T09Z312+PK+xtXliW2vrEEmSkzHGZoQR9/v9zTpZPi7rdXtTUtK3fPPNNwdVVaVBaxNWAS9CCPR6PXDOwev1cqPRCDk5g/nRI1Vhv/O8efP42rXrwOv1cIPB8K3Pp5SConRd9qLT6QBjHNaa+f1+CLpe32MK1HF2rwYQQsA4B7/PF9Zn9gP/5NuyVzbI7Xak6iQ5Iyku4ZuPli3brfUN7IucyLIMd911S/aOHWWj29pac10ORzbGZ8iJz+1xNdgstjpZ0h1KSI5vl5Og9/tetb4JdFEA8Pg8Md/eAQ6SJLG8vLyzofc5ABCMsZqTM3g5IVIB51wBQBIAVzHGMuI8/iwYeS7km0mSBHfeeWfy7t2lg4GiQSdrq+OirFFxOp1E6k7VNyclJbdJEq7MyBhY8cEHHxwLsinaZ/VrM9TOZAEhBIqigCgF6tROSpIEN954Y9rhwweG+b3q4MbGUzGJSSkxrfYWD0Go1WKzHk9LSD788fLlhxHC3qIiHuzQne1bmto6UQ2T3Hjj1YOOHKka4nJ5BrqdzuiEhARbQ0NTm8liajWZLEezs7MPdrCH31prhBDodLpu9URvUDAGADZv3rzMbVs3H/T7/QbR6K2zz2Kcc2wym2t+//s/Drv99tsdc+bMGbGjdNtuv9+PuwNmYiGoJEkkIzPjmp0793yYn58vlZSUqGd5IygAwE9/+tO4detKFtjtrYv8Pv9kVVVjKaXAOQPOAThjgVIBzgEQao9IiOiEKsu6Qwa9flVSSurSrVu3rhOG+GwcKMEzgttuuzW1tHTrotbW1oVejzePUhodmDbPRM/JwDZxzgFjDAgFDgNGGIgk+XU6ucxqi1qVlBT//tq1m0spVc+GELcLJsIYrr3yykG7D5Zd43G5rvT5/eNUVTUyRoFzEIaMtxtUhHCAX+Gxy5J0Qtbrv05PSftw3caNXyKElJ4ClI7rmJWV8STG+ArOmQK8CwcEAQWOpIT4uG+279j1czHSCUFgDAdcccXcCWX7D97udLrmU6qma+fmtE/BASEECGHAGAPGWDWbLZuSkhP/uWPH7rcEmOnWCGr9eWbNmnXNsaMVj6uqqnBAEgbEFaoYHW2OwWEJM8Y8yhZVjhDyc+hQ54hARQjLnPKPjlZV/bYrnrKyMj4lCGVTzhnq0tvjqizLcnJK+pK1a9cu7Ul/IQ2Y3HjjjaN27Nj2tsftBYw71x1ctHkxmYz+uXPnX/n0009XdwZstL/74x//mPDOW29+7nS7TAghjrryxDmnsk4vZWVn/GLlym9WCf61z+RPPPFE3AfvvXetvc1+jcfjHk8pjaaUgizLMHjIkIc2bNj01x7qrzPk5PL58wdXHj5Y4HS5r/AH5MTAKA1Y6lByIktVOr3+m8TExOLNm7etEs07eysnZysjok6YMP5XRyor/0gpVRFCUsAEMGQymhruvPvewUVFRW1ny8net2+frqGhwaSqavtnS5KEGhoafNdee62nv6JlAMAIkWDu3DkjK8sPXuHxeef5fP7RlFJbQFdz4Jy1/0pATyPAGPtlWXfYarGsi0uIXbp+/eZvxMWy/gDMCAD4vn37dDfccO2ytjZHMkIoIMsIVOBITklO+mjTlu2/5ZwFA0T4xV13pX29acP1dnvrVV6Pdwyl1KKNJ9LOJA4YGiCEgE6nO2I0mVZmZGS9sXr16k3CWTlbgL99zSVJgsmTJ045Vd9wg8vlvkRR/EMppfK3eA1ab4PBUGYxW5cNzc5+45MVK8q1UqjCwkJeVFTErr766il79+x62e/3a7MxATinOr1eysjMvnfVqlVrexPBwgDAjhw+dAWl1NCh0+63ABZCCBmNhq/uuOMOBwBIK1asOJCZkV7m9/tHiU3C3XiMnFLKW1vbrkYIfXgWbxO2z7e65ZZbktetK7lv6YfFP/H7fclUpcACoxkYAGKaWkeBokhRjynmNwCAoigIACSfzzfC7XaNsLfZ/19aavL6pOSkv5aW7v6YUhX6qXmdphzpjYsWDdy+Z/f9y5d99iO/3x8T5GloE+cBALVHGsUfnAesEVCuIr+i6Lxe71in0zX21Kn6h7Ky0r9OS0v787r1m1bxgBD0hzJu53nupZeOLj9W+eDqDesKFEUxasoFIUS1zswBflHwFnHOuRY5Ij6fdwByu3/scjp+nJGeunfc6NHP7Ni9+zXxzhL0bAIAAgBoamociBEeESqawTkHWZZqxFpKAOD/2a23Jixfu+YPmzdvu93v82HxGe17cNqhOONdEABIfn/TNKezbVpqatKdQ4cOv3fVqlX7ulM8p06dQgAAbrcjuamxaYSiqmekfbtJW58poIyhpuamnG6jQYzt7i4909jYOIpglNXdkgXWSwajyZQQzH84VFZWhoRsRTU3NY9yu93dvh9jDHwWMwCAMSSqJkTf0tpyQVtbW7efyTkHnU4HtihrLADA/v37CQBQSZIgNzfnnuef//tvvB5PKhXz7xBCnHPuBwDCOXP3Rk4QQnTmzJljKw+XP7hl88ZrFEUx9EZOvF5vJna5b3W0OW4dMCB1z/gxY54u3bXr9V7KydlIEUJJCYDqV+u/DZsRUMZidm/dmgwAbYWFhahIhD/6k0aOHOkHAP/ZdNwJIXzSpAnTa6vrHty+bctlfr+fBO0nF3vOg92FIMdc5/P5RrhczhGNTY13D0hL3X3BBXn/3rJl+z8RQv7+ACkNDQ24ubFpnL2tLS5YFjjnYDQY9gWBYd8bb7xh/tOTf3zkvU8+/pnX64kJiuoy8R6n3yHwb0icxYFOp/Nue2vr3dmZGe+OnzDxseLi4uNnAWS1r/mECWPnNdQ3Pnag7OA0SlVgjLfLEADwM3gNrDcS6z3W4Wgb29Tc+ODgwdmvXnjhlMffeuutU2+//bYeAHxOpzOmqalppN/vb9e9gXpzHUTboqOhl7lFhjEGl8dzdajbg5xzJBEJJcUnfc45R5mZmRJCiOn0+s/FBoYy2IRzjrwe9+wlS5ZEw1m4zSGKQLksy3zcuDH3rfxy+e6W5uZfu93uZFWlFBCiGGOOEMIInVEQRzo8EgQmtRMxrZ1xzlVFUXhra+tFRyorP8rKSv/0tttuyxTgSuojz4xzTkaMGP6r1RvX7zrVcOrnbrc7hlKmaso3aOJ8ZzxLwTyLdwzw7FdQY0PjzLL9ZSuzszLf+NmttyaIvSJ9PPDsjTfeMA8bOvj/duzdva25qflmn89r5Jyr6PQ6kzDWWEIIIYQwAwDV71eova1t1PGTx/+TmTFg/cyZ+ROE0egxvxhjH8aYYYz94s/OHgVjwjDCHgGQ/LNnz56y9MsVW5saG+/0ejwIAtfLO+5BN+cFU0VR1Zbmlml79+7eMHPm9DkAQMVed8MvUTrjt4fv3NV7+jHGjGDsCwFS3OLn1VCfhTHu9RV7hJD2+bSb76EYY4YQ9vLToYAuSVVVjjF2hvG5CsaYEUJUAfqUjz/+2JqdlfFR9cnqfzgdjlQRedHOMRJ7KyGEcU/l5IPnP7AMGzb06T27d25rbm66yefzGXorJ+I8qIqisDZ72+iqE1WvZmcNWDdnzpzxvZWT/qTExAIuDuJxEQjAQWiRUkqlI9XHJwGcLog/G062KHJvf4L+v6/ROXrdddcNyM7Oerf80OHVTc1Nl3s8HtJhP5HQFQQA4cADRJwhrNkUbR8dTseYyorK5zIGpG2dOvXCWUFtkvrELybE1UGW/RgThgn2MEYRAPjmzp077te/fmxTTW3tEpfLGaO9h+ARdTib2jkkIjLEAED1er2sqbnxho0b1m2bPHnijHB0XU/X/K67bk7Lysosrqw4sqypuWmaoiicc1ARQkyTIcGruESAcMf15hxUj8djaDjVcM/XX63cPmnSpLkVlZU+AMCSJKmd6L0z9ERPDysGAHbFFVdk+Xy+ydB9c1EOAESSpdZJU6d+DQA8KytLBQBITk5cJkkSiN4joaIKVFGUuBUrVlwqwEW/CVhBAZDi4mL64IMPJmZnZy47XlX1nMvlThQHhgctfk8PrRbeF0AAUUVRaVND4xUrvli+Zfr06TMAQNWKO3t6eIqLi+mNN944MDsrc3VtTc0fXS6XFQL1YlyAwL7yDAGeFdbc1Pijj1au2Dx//vw8AXB7LATiPenVV1857re/+eWm+lOnHvR6vboACME8yEigXpxHDSAyVVVVu7118t49+9ePHz/mDoRwb/jV1iHEwzEg0CGE+LRp0y7dt3f3V21t9iyxDz0t/ERCmUoYY9Xtctn27d3/ybRp0y4QYLybd+Bd8dvTdezuQX38/faH8z7NKUU9+a4efHLYn8kYIgCAXn75ZduDD/6/LxoaGhaqqqoIhd3bc3yGYVg4f37eQ0/9YnNtTc3/83g8EpyOVvVVTrAmJ83NLVN379qxYcK4cbfh3slJv1GxKKIcPXpIGcbYK/jVonOgqiq0trTcJ0kSiLE3Z6PAm4s1bn+C/r8vTqU6bcqUBevWrtnWeKr+el8gnURFgEEroKacc8o5R5xzxJiKGVOx9v/CUdCiO5IAAELf2ceUHzq8csSI4X8SEXPet/Xhneo6Dqd13Z7dO9fYW+2jGGMKxljDAJxzzkQpChJ/cs45hTObwmIAkDDGGACpDocjsbLiyLIpU6ZcElrXhZ9uvuiii2Z8/tnKrU0Np65RFIUJABisl9mZa846rrmWBsXiHVWXyzXg6JGKLyZdOPEnAMD8fr+uaz0XKLfojSKGw4cPXqGqqj5Ec1EGAGA2m9c/++yzzQBAtCu2r7zyxnZZlo6Fk3YSTUd5S3Pj1YGmb/3T9S2QpgO6eHFB7gfvv7O+vq5unqqqqlhMqZ+FOICUEVKdTkfSwQP7v7j44osvKykBtaBnB4oAgDpzZv6kNau/3tDS0jyNUno2ecYAoLa1tQ3cuWP7V7NmzbpQCHrY5yYfQCopAXXMmBGzN23csralpXUU41zpAc/BSq/bsyk8JerxePQnjp/459jRo36NMe5TtLA7opS2FRYWph4uP7jU6XQaCSH98V0Sxpi63W59ZUX5Ow8//LC170ozQv1FjCmcEML/8pen3mtqbJzKOdfm5fXLXNexY0fO21K6taTV3jpCgHUIE1T1SE7EGTNUnaj6z7ixox49m3ISzrICAH799Q9qTEbTLgiq8dFSPU6na+KQIYOKgurHpO+5TEgYYzp27Kj7Dx0+9LHT6UwChFTcHqUCDgBUtCySJEkier2eGwyGhrjYuKq4uPhjJpO5Vq/X+2RZxgghiTGGBWDhQfvIfD4frak++ciwoUM+2rhxozHIaeuf0B5CwCmzP/roo1mVFYc+dTqdNowxRQgRAaIwAEiyLBNZlpFerwe9Xg+yLCNZlglCSOKcYwEUecc18nq9+mNHKj5YvHhxOoQxEaZrRz5fA1c3lR868KXD4UgFhNTTkcGA2hbghwSveWxs7PG4uPhjJrO5VqfTe3Q6HQ7imwugxTweDzt65Mi/L7po8gybzXgqHM+zR4IQaC7qCqe5KCeEgNlo/lgcIq04UcrJyfFZLdavtbxzOGnCtjb7pUuWLLH0R5qwsBBwcXExXbRo0bCSNRu+ttvbhqDARvRUaHlvhM7tdsvlB8uKL5s5c1RxmIBFhE/p9OnTLzxQdmiV0+lMPpc8O53O6ANl+z+77bbbMnsgBKQEQB03bvTc6pM1nzmdTgvGmCKAUAaJcs5VzjlnjCHtEQIaakQGwRhzn8+nnqw+8Ye8vDE/AwC1H8PPWl0SWKxW/fvvvfMft9sdhTHpzygAwRirHo9n0EcfffgYhKhVjNC5I5PJ2jRu9OjbWlta5nIOwcOI+7TfAKDmjR07r6a69hOXy20OE/D0i5wcP3HiqfHjx/60v+Wkp847QohHx0a/SQjRIgiavBFKKW04Vb8kJ2fwnzjnOvF+HADI97DXlwQA6vDhOfdXn6x+xuv1UpEa0/ZT67lFzCZzW1x8wltZ2VmLp0y9cMTd9/x08JFjx3OOHK3KeeDBh4ZccunMYUOGDrk8Lj7+b1ar9ZgkESJ+t/3GMcaYUMqU+lP1C2750U0fc85l6L++WSig6yzWD4s/eNXpdJoJISoH0QRWkrDVaj2QEB//TPbAgYtHDh8xadjwEbnDhg/OHTlqzKTBAwdfl5Ka+n9mi2WPJElYYAHWUde5Pe74LVs2/l2UffSY74KCAlJSUqJOmDDuysPlB9/0er24w5pzcaaIwWBoS0hMfCcre9DiCRMDa3702PGhR45W5TzwwENDLp1xUc6w4TkzEhMSiszmAN9ap39CCHg9Hn7o4KG3OccTGePd8tsTpS1mD16T5fN5Jwsz3WV6kDEmybLsGzlmzFfBHklBQQHnnIM1KuZTSZJQGB3aRdM3mvz5559cHPiMPhkbVFQE8EBhYfy2LZs+a2uzJ2OM1TC9Nw4AqggtakoNAqFRUCG8Ij2CMaYer9e8/1DZO6tXrzaE4XHg4uJievtNN2WXlx/8tK2tzdIDj/NbPIvwbThK+AwhcDjaEtas+eY1QiQezoEHAHr1lVeOq6+t+9Dv9+vEge9OgTPhERFCiKTT6ZDZbFHMZrPXZDJxSZLavYoQa40wxsTn86lVx44/mz916kXFxcX9luPnnBOEEJyqr5/T2Ng4N+AocBK03lSsuco5V8U60x6CW8IYY462tp/+5CfXJ4VwLHgnT49eKcQTIWFoMMDoqhNVTyiKyoRz08dIeiBCM3/+/LyaupoPvV4vCVdOAvpekxOzvw9yQo9XVf39kkumTemnNE2vAsIAgBYvvvl1o8FwgnNOgnUTQogoisrq6+ofycxI3zZhwrgfPf/88xaEEBU8a1He77Ths/he9aLJk685VV//jM/nUwPpsNM3yBljWK/Xs9TU1GfmXDZv5NGjx35UWrrrnY8/Xn6gqKioDSHkQwj5H374Ydf7779/bNOmrcsqKo48WPS7P4zOHJB1n9FoqAPOiYhmaesjc86VxqbG2Tk5g/4loun94ZQRAIDaurpFzS3N0zEmnDGGCcYkKjpqe/bAwQtOnKwZc7jy6C+2bSt9Z8369VvWrl17YO3aLQfWrFmzZfO2bR+UlR18uLq6dvzggYNvsFqtdZ0M0JY4B2pvtV918cXTJgEA7WH/SFxcXEyvuuqqMdUnq9/zuN0sKHUp5IUhvV6PUpKTX5h+yYwxFRVHF5eWlr6zfHlna/7JiXXrNn1z6HDl49U1teMHZAwosNmsh4RO5pgQ8Pt9SaWlpU8wznh33RB6CrDgwIH9VyiKokcYqd0cXhboz6Pb8v7771dBUCpQu9o8f/789ZIsNwtB4iEiBkxVVd7a3HpNP8yGwoQQ9vGbr73qcDoH9wBcaaFFSZIkIssyslgsYDQaQZIkTAiWeODQh9PSQKQLXSPvvvPO+6D7AvL2ZnhfrV/7nsvpTBQFdKSnPOt0OmSxWLherwdJkjDGuKvQbZdemb21dfrYsSNvAQDWTQ0ZKi4u5oWFhZZtO0vfc7pcJgEIcQijgWVZRjExMd+kpKbeO2Lk6Em3/PjWYbf95I5h+dOnjsgZPHROSmrqE2azpUILT3fDN8IYY6/XiyqPHX3t05dfNolaj35RuBhjcDgcBkVRggWMCgBLEEISIUQihEgIIUkoRATh35RBgXOvRG3duveGYGXXAexpRkSLCvam0BV18cgAgDhEht2Ks8ura6sf9fl8SSLtEG7aDrqWE+APP/ywdfeune+7XC6DAFch5IThgP6xrUxNS70nICc3Dr/tJ3cMy588dcTQQUPmJielPGk2WyqD5KQ7kAVerxdXVlS+9uqrrxrgu0lJcwDADz/8sCttQPrP9Ho9Yoyd4ZQghDDnnNrt9lFHjxx948knfr9/yJDBL0658MIr77333mRJkrVhzqoAXSwo2i4BgHSWG1zi4uJitmjRooGVRytf8fl8TIArFKzjbFbryZxhuZccOFj+i9dee+0EY4wUnG6+2VEG27v233777Y4du3e/MGPmnImxcfGrxd6eAbIYY0pzU8vNI3Nz74Be1sx2puvsra0mxhjnjDFZlnFqStqfq6pOTt6+ffunoj1OoOt80FSBgoICLbooIYTYlu3b38uffulUi8VyROjCYADNFUWBmpoTP+uhjUcAgFavXm3YuWPb2y6Xy4gJ6QCuODYajKeG5wy/7NDhyvvef//9Y6LdRDAI73TNEUJ01669/33o4ccuSE5JfpsQQhhjFCHMW5qbrYwxEspohkuMEAJ2u/3qUM1FtVBalC1m2fETNQBn1lpxACC/+93vmrMyB6zxejyLxEHojhfCGUcer2fu66+/br755ptd0It+KFp7hLGjRv3k2PFjl4ti9pBrwDlnCCFiMBrtZpPpk6joqK8MBt3B0aPzXEfLy+XmlpYEH1XG21tarnB7PBf5/X4QCBp1cyowpZS1tjY/dP/9t/z72Wdft3fxThgA6OjRI3/TZrdfIBSIFJplDhhjojfo66Kioj+z2azfmM22irG5ua5tu3frGVOS3U7XBc2tLQs9bs84NXDNv3ueEcKqqvL6uvol5eXl7w0dOtTfFc8IIfreu28/2dbWNjQMEMs459hitR7Jysq4b/Pm0i8CPbgOwJo1a4J/7gAArPzggw/+UFRU+Oip+vpCocS6igBihJDqcjkH/eq5Zx8CgN9BP14HDtpjLq79EqPR6DMZTVuwRHbEx8fXE0Joc2NjtE/xj3S7PBf5/d5YxjgP1QNOW3JVpbzN3raQEPIMpbRdIWn1jIToPgDKNwFiXAAhxjkaihF+L4Sh5IwxZDAYaGxczMLa2ppq+HZNJOdcRpjITUFRhv/N8FWg4SpqOHUquQvZZuIcAwSKXLW6DwTQZZQeI4Toxx8v/ZPT6RgUhpxQzjmxWm2VWdmZ923cuHXFyeqaruTky5dffvkPf3/mb4+damj4rZCTrsA3wRirTodzyF/+8qf/BwBPwXfTjJQCANm2bccnOTmD/tBwqvE3iqKoGOPgFCDRHG6nU81wudx3Nzc13n3k2BF7akrSAVkn7TKZzHstFtvB+Pj4ow888EDtjBkzvEz0ESgqOsP2cejnHn8YY1ZauvUlt9tt7bCfjDGGo6KjqxYuXDTjueeeqxQOjAoAtBgAoKhzOQ2qO0b5+fnk7bffPsk5nzt8WM5HdXW184KBFEJI8vv9tP5U3V9vXHTjyneWvnO8lw1uO0QlMOeMM1nWkUEDB/9yW2npUwghFNRySC3ROsYK6lgvnZubq3vnnXeOXHbZzOtKt+/c5PP5cJDNIZxzaGtzzFmyZEl0UVFRa5g2HiOE6H333bvEbm8b8e0158hkNJzKGT5kRknJ+n1izWmIsx285pCfny/df//9bbIs3zRs6GDXyerqOxljtAN47n0ES8zlYTfddFOW1+OZpCmR7lIohBCakZW1HACgsLCw4+YizjmKjoleJrpmh04TImCK35/y8ssvizRhj28TouLiYnb/LfdH19RVP6Gq6unmYN0DFSbLMk5MSvrXzJkXjTx67PgtO3fueXPTpu3bXn755bKVq1fv3r5r11d79+7/c03dqWmDBg+62mq1nuqI0LvyiFVKk77+ett1GvDs5GdYQUFBdsOpU78SPIfySDhjDGRZRknJyf83e/ZlIw8frrxz+/ad75WUlGx/9sUXD2zcuHHX5s3bVuzZV/a7Eydq8rKys35sMBodYcyIxADAvF7PwBtuuOEyAOD5+fmkk5AymzZt2qiWlpZ7hYcVElzFxMbuu+WWWy/asGHLF5SqBILmV2mP+Gzp2muv9ZSVHXx84KAht+p1OtzddXxRv8GbGht/ceedd8ZD/7b6QBpQ0el0KDkl9cWpF1086kR1TX5l5dFfbNmy7amNGzf/5WB5xa+rqk4umDV7zvDUlPS/6nQ6FOx5hlhv5PN5x919991x4jyhIEcFSkpKGhvt9p12u3uX3e4utdvdOznHO3sCEi+/fOF2u929U/v9oGeX3W7f2dLScjz4O/+n84TfdkJYIPPOMABIEiGSLMvYbDaDJEluzrlT9CnqLPVCJ06cOKa1peXucOQEOCdR0dG7rr9h8UXr129eIbxnqbAQcGdyctddd7nLDpYvyR6YfbsuhJwAAFYp5a0tLY889thjMfDdDTimnHNy+PDR3yYkJj6h0+kkoZfUoPOnXafX2hZQj8cTZbe3TmpqbLq7+uTJFyoOH/p6y+aNBxbfeP3B9NSUlYMHZ/3fuHGjr79h0aIhovt2cNq+PwrmCQDQCePGLXQ5XbM6OMKcc86NJpNj3Li8ec8991xlXl6eDABKD2WKl5SUqAUFBQQh5H/l1deusdpsOzukUxHGmHu9XuvWPZueRAjxoqKivu8jB4YQIvHx8a9sKy19ijEmCxAVNggvKyvzA4C8YsXX22OiY94V9pcG6VJGVTXum5Urp4Zp4zEAsFtvvSGzqanxYeGAkiA7yI1GAx+ZO/LakpJN+4LWvEdgs6SkRC0sBKwoCjlYXnFXTEzsGjjdgDt02i8UFQlFv3v37isVRdGLmxzd3B7kyKA3lH3++ef7AQB10kWZAQAfOnT4KkmSfKJ+JWSaUFFV3th4qre3CQkA8BUbl9/r8/kShXDiEECF6XQ6PHjg4J9XVBy58+23PzopDrMEAN9SaKqqki1bti+95NKZMywWc6Nwmroz/qCqKm9tbbmui75gCCHEd+/e+ZjX6zWK9AEKxbPBYGBDhg694eChww+/+eabTZxzqaAASKHgORACBS0EikpLd70+evTYy4wmk1uMMOLdGRhxq/NGhBB01vwVIcSPHTvyW7/fh0M36+dgNJqaLr105uVPPPFErRACqoX5i4qKmPZofy8Aum7r1q2vxcTFvyRAJ+3Gq6Q+ny967do113WVauut2mGMc6PR6B+aM/zqQ4fK7126dOlhVVVPD9wVfzLGyFtvvXXqwKFDD2VkZj5KCCGchxRQBACcUmrbtWvX8C6UTnDrAimAmai5Jy9RUVFhDv596Hvbh/MaYwUdXirS2thqtR1JTEh8PS01/d6cwUNnz5x+6fgJEy/MlXXqII/H/5amqDvKf23NySWKooQKaDLOORgMhlOXXjrzyv/7v/+rC5aToiJg3cnJtm07/hMbE/OvEHKCEULM6/XGfPbJ0usDnvt3lhqmlFJy6NDhX2dmZd5otVjrhQxpQOuMK/9BvQcpAKiUUtXv9zOfz6d3uVyZ9jb7rKbG5gePVx1/95v1a/cnJcbvyskZ8vQFF4y/tGPBfB+AFueck9r6usIOZQPAOWeSJJHU1NSHP/3007K8vDy5tLS01/3gtHrSKVOmeCZMGHuzXq/3BrVoABD1m232tmvnzZs3EvreY4ozxrDZbKm/56f3/UI4Ez2tKdWySIxzjhKTU16SZfmMVk0IIUYp5a3OtgvFe4a+pIcQ37hx+wM+z7fsIyOEkITExL99XVJS0tc1LyoCVlBQAIqiwJDRObcaDHpn0HDwvgEsCDQX5U1NpxaEkR5kGBOw2KzLhLdHvs1sEQMA/N//fnjCYDBuEWsSythgzjlqs9tnL1u2TN/D8DUCAPryyy+b2pxt91JKw7kFxyRJIgmJiUu2bN/+nEDsOEh5dabQaG5uru6tt97al5E58GfCa+Sh3knxKxfefvvtKXDmbTEEAPSuu+5KbLPbbxDAh4RKZep0MkkfkH7vpk1b3oPAbRIUACtAiwTPAMCKi0+/R25urm7VqlUbkhISHgvcmOj+9hFjHPl8vmkrVqwwB3u6ArzRBQsWDPV5vVdxBt3yHFA8BKempfzqlVdeqeqBEPDCQlA553jOnLlLjEZjmxD6LuuxKKXc7XLdHEZksScalel0Ms7Kzrp7w4YNS4Wy1tJsKgCoJeJPsU6YMSbt2rXnzzabbYPoORPqHFPGGLS1tQwC6LQDevtcM2jvotyz95NlmXX8jE6eCH3r7EokKjpqXVp6xuWbNm8ZebjyyI/37N//4oYtW1a9+d57O1euXHmivt51qrS01N3BwcQAQOfPmjXM5/Mt0G43dWe5JVnCSSnJj7322msneiYnhSrnHE/Lv+S3wih0KSciDcpdLs/NgZ5T3+m+U845KS3d9e6cy+aNT01L/4fJZHJ0uDofHIXShqVrjS3bm0UihCjnXFVVlXo8HrmtrW3Mqfq6/3ek8ujX6Wkpu0eOzF1y2223pQZ9Vk8dCi1qf4nX6xnbIRtBAYAYjabtO3bs+icASH0x9MEgCwCkjz5ats9isT0v0lU0OFWpKH5SXn7wHhGQ6EsUixJCUFR01D/uv//+NujDVA9Rg81/c8cdu2VZruv4WWL+8HCRXOIhbLpa+POfR7e2tCxmZ8oQY4xho8lUf8cdd/2ec45LS0vV/lrzLz/58pjFGvWvDmvea4CFAYDNnj073evxTgr1e+LqJsRHx34mEGtXi4QpVcFkNn0mJsDzcPhQFGXAb37zWCCEGGYkQqSx+Cv/+tdcxe9LAwgZvRK1Dpat5eUVv+ecSxDmjTsRBiUbN25832gy7RAKTe3CaHGEkEopNe7ZuXOMWC8UHGVZv75kkd/vt2KMQkWvKEJArFbb8l279v0TArnmsELQZWVlCgCQ3Xv3v2QwGI8CtHsoXfHM/H5/0h/+8IccYTCQAM4YAGDPnl3X+f1+CWFEu/fKgRiNpiOlpbteBYAeCUFRUSBd9vzzzzeYzKbPRX0J7UYBIo/HO+7yyy/PBgAmjFyfDABCQMwW86pt23a8KtbbH+KMsPz8fKCUoqjoqL9LUugSSK0lhOLzJ4soSATdfOfYilNJknBSYuJjtbWnLt69e/eyjIwMjxbd1lLbcGYBbbCDiQEAyo9ULlYUhQTNlOsiIwBEp9Mf2rVr75tCTpTw5aSIAQB65dVX640m03LhHLPu5MTtcY+/6qqrsgM/V/hdRi8pAJBXXnml5sCBgz+dMnXaqKTk5CVWq61Mp9MhAbZIUDPOzm7s4iDgFTSxItAR3el0DKs5ebJo+bLP9o7MHVb4xpdfmqEXUysQQlBbW/NjRfHz0+PJAqNTJEmC5JTUvyKEeH5+fn+uDwMANHLUqKdlWXZ1uDBGGGPgcjqvfuqpp6xaRLOXB57IskyzstKLAQB1Y9PD+jgAwPNuvdUly7pDQX+nBRyAUSVTTKJjXdv0wP589NXKOYqidCyfYIQQZLPZ/hMECHl/rvmwYQNflGVZEWveZ4CFjh6tuJxSagqVHuScY51eX/XGO+/sCEKs3yKtLisra+CXEiE0FKNBIUSw29uuBkBQHOaBKSkp4QghaGhqWKCqlJ8576nTAwWyLENifNISVVU1kMh7Jm+IWyyWd2VZRt2lXhBCEmcMOV2OsR3CokzcVFsUiLihUEKAdDo9HZI9aIkYacB6eOgRQkiJslk/IYRo3mBXPGPGGHI47CMBzhhfQTnnyOf1LWCn5xd2eVAJwWAxm99BCNS8vDwSdN7CevLy8jDnHEdbo78UtXzdvaPKGJVra09eDACwRhi5PlhZRIgENlvM04wxVFBQwMI8ixQA+LBhIzZJkuQTdTQhz5bBZEqKYJvvR+RKlmWSlJD087KD5X9SFCV42sMZqW04XUDNO3HgsNvtujJcOYmyRr2LEKK5ublavVDYcpKbm0s4Y9hms60QcsK7jZhSqjt6tOKigCEr+q7TwxQCqU6ydOnSqoMHy39/4mT1mNwRw6elpab+IcpmW2cwGFt0Oh3GGEsAIHHOibjNi4I6iQdHuto72yOEGeNcdXs8sdU1NY8vufMnW2bMmDERwr+BhwCAvv/++xaPxz2LMY6CIykAQHR6fe0dd9zxKQAg7XJKPxp7/Pnnn9eYzKYV6PQZFHwFHOEPP/hgsnDecS+/A0mSfGTZslXlECgA7/McXcYYAGIntbm4wf+oKGqsqqoydHNJp6QkMEPQ4XItpPRMm64BwszM7Hf6ARB2th6w4ss1hw0G43Y4c817BbAYxpi7XK6rhTLoNj1IMOYGg/6L7OxsL5y+qdGlZ7V8+fJ9er3hgPhcFs7GeD2e+eXlh/RhonIk0iw6n893UdC4jW49RoNef3hraek3IIrje7MJcXEJqxFCJxnjxzmHk509wOEYZewkY8zagWf2yCOPxPi8/olh8EwBABuNpu3frFtXGmrTOyNxCJHFZvkSY3ySMV7VNc/8GGfshMPhsAZFVTAA8GuvvTZLVZXRENDhKFSkMyYu4VMAxIVXziF0qqr9Eb/DYhMSdmBMeHcgPRAJouBoc0wAAOhjHIgDAJZluWXRokWbhNJhPfhdePjhh+sA4KTw1EIqALfbLUOEvmuiCCFiMpmXHjx8+DkRtWTQg3oUEdniV1555UC/ouQGyXuX0QNCJJ6anvQZAHARIe+RnIjfYbFJCTvEDcju5IRTxqBNk5PvR8BU6y2nASO1pGTD+n1lB39bXVt/8bXXXZ8zPHfYpWkpKQ8kJCa9GR0ds8VqtdaLbuJaJ3ENdNFOIlwSRogzxtTm5pYR+/buLpk2bcoCCKN2SQMtzz//zDjF79dqe9udZIQQGHT6lXfffbe7nyMpWiQHMcZQTEzsxyQwfg51CEjwltaWSzo47z1ae4QQEAlXiFY7/dVLEGKiYp0djx/nDHQ6naWxsdEQyqbv3btX5/V5J3ewjwwAkCzLB1esWHFAvHd/34YlVFXBZDZ9LWqnu9xTKZQyKCoqYjfcsCB91cq1U8VV9G7Tg7Iso5TElGWVlcegoKCAhyhGJwghdVjOkOVOl3OkCPPiENE05vcrmbff/uMpALC6oKAAd7eA2vT1mTNnZvn9/swwgCXDCGGDyfSl1t8Dej5tngEArF+/vnQwwOCKED88GADK7A7NQKva1dc1a9bkqqoSHU5BPiEYLFbL56qqovx8wD2tn9DWcNu2nSsGDx48uKKiolt+KwCgubVNWxc1Pz9fKikpYZWV5WNVVZUhkPYg3aRZsCRJbSPGjXAPH56Zqqo6JEn+Hikfn49gvV7PnM4WHcbIBwDd9fBBjHFQFGU4IQSCWx700oshsk6u+MMf/tAKPW8ZgiZNmqSkp6XYvV4vhNOwIfSF1widg+gV1uv1LCt74OPHT5xEBQUFTJujFy6JaC+rqqoaQymVQkRKOOccybJszxk10pOVldYnOXE4miWEsAIAuu7lhIHf5+8POelv0kAjEnofUUrpc8891wAAqwFgNUIIJEmC4uJi63/+85+M+vqaXJfDOc7j807xuD1j/X5/FKUUhC0LXnsUNGrLeLj88H/z8/MvKS4uXg/dtKzQQEtjY/MEUZ/crqu19KDVYl3XT4Ojv0XTpxeykpIinp09aEtNdbWqqqoUtLeIMYYURbkQYwKM9WovOeccoqJsbdXVdaGyBD0j1LnO5JxDY2MjhLLpjz322ECq0nSxl8GgFuv1+h1BndzV/lxzDdeY9cZSjDGoqtplWboUhjLgu3cfvFylqhG678HEITBhumHG7Nlr12/aBKG8eo3RuPjEz5qamh7x+/2hbp0FbhMqCm6ob1yEEFodCpVrCq25uTlHRDi6ReGaUERHR20JeAj5fap7qQDwhfEzZ5BWyNzW1pYrDnS3AItzjgmRISYmajMA8MB0+t53Y62oqPD1hN+gKBb4vb5RjDEIkYZFGGPw+XyWZUs/3dYfoqooir6bfljtf+/3+VJVVcXBdRK9darNJnNT0Gf3SPMghEDW6ahQDpFu6T+A6BUAEKPRUFpSUrJPFA732DPW5IQqvjHhyonX67V+/P6Hpf0hJ6qqyELHdi8nii9NGI7v4wWHjmmqdsDFOeeKorCFCxc6AGC/eIolSYJ77703aeO6dVMbWxoL3C7PlX6/z8Q55x3Wg4hxZtLh8kPvPvbYPaOfeupFe3cyjhACRVFGigzPGQEEjDHYYmL2AQAPI+DQYyoqKuIAAE899dTxS6ZPqwaAzGCABQCgqP6BBw8e0A8dOtTXG10lYItPYKvvfCRRWVkZAgA4efJkNmOMdAxAIITAYDQe6FcwGES5ubkcACAtM6XqZG01KIrSJW7BIZQBwxhzh8NxDVVD3h6kCAGYLOb1AOAUXpJWYNjpI8CRNHPmzF2SJFWLW1Xh3CaENkfbPHGzL6ziPYLQwA5XWbv8UUAIdDrjQQCAxMTEvu4SCvP5lhJGnGYzRiFUqwMAwAhjJSMj9UjwATiXPGsH2+n2ZIR7sCml2OVyGfvhMYgr3N2+E+cciCTFffXVV9ZgY9Jr94u3e0a9LR6NwJYfUAALYww6vXFtV7ejewKuXS7XgO+1nGASu3//fnPf5eScAq4zaq0KCwuxGAAsqaqK/v73v9dv37lzaVVV9Q1Tpk4YnZSY+KJOp0Od9P8Ts0Dd6R8vXfXLEA4uAwDwebzpHdaKAwDChHgHDhx4MqCXi8+GwHMAwMOH5/r0Ov2JoL9r50XxK3FLliyJPl8EUQtAEMQygwIQ7TqVEAJGo6FGC5D0Nz3++OMcAMDvhwZVVT0CF/EeASxRK8BuvrlggNfjnRrq5znnSJIkSE1N+U9RURETzfVoiEcFAPV3v/udMyY6+kORBgkJsACA+Xy+gRMnjpsoImE4lMdYU3MySniMocKhiBBJTUuLaxIhYN4PAhDO8y3y+pXEsHUb520uF20O9mrOMc8cIQwGgy6Vh6i/CjY0GGPeH0+4L6aqquGdd97RRfBChHoKhhFCIMvSwYDi7vVHMYwx6I3G77WcUEqNL771ov6HvGVFRUVM9B5Tg6I6hHNGPv54RWV5xZF7Bw/JmWuxWFo7A1mMUd7S2nrnrbfemgBdN17lkiQBZSy2434KoNp2+eWXOwOG+aw16sWMUfD4vDUdi8aFU2k2Go1xwq6jH7osaja9quqkoRObjhBCkBiX6OynAEmn8ggA0NR0zNNFE+F26jJFqKXWdu3Yd7miKAYIMaIFIUQY41BbXfezIUMG3hpuBRADjjDG3O3xZrVHkEK/IKOU4tbWtqsAYGM4xXux8fExJ0+cCIsnSZJ8Y8Zc6C8u/gwKCwuhqKjoOzlIDfX1iEghl4NzzpDRYPS/9NJLyieffPId2iAGTqfTEN4UmDOiZeeEMMbgdruhv8P0EfqfIIQxBsaoSAvnQ2+vSjDGoLW1Vf99lhOP2w0fvfHReYeT4XQtFeack02bNn05d+7cK3aUblvl83l1wslHATODqaqqUTtLS68EgP8I26R22BPu9/vR4EEDrQ5HW7Cx5xhj5HY7nddee60rYLfOrgNgtVhVj9vT8cxwxhg6efLkeedUZmVlxFceOdLpWviRXz3b3z9t2sWo+uSnyO/3Q49rsEpKShgmBOxtznBmD7Yrjsamhjm90QWahximIsGMMfC43Fdyzn8V1DqiS7RKCOlBlTBnOp2OauHA7wpgiRtm4cJqNTk5+TudFcc5hza7gxOCe5L+Olc1HpoHG2maGaFee64xMTGkP+TE7XJxKXDrK9yzy8+lnHDgzOFwnM/byUA0WV6xYsX6USOG/6W6pvq3lLLg+bScUsrbnPa5CKH/dNfegn8P8v06nU75X5JHp9Pp60pO9aA/61MIPv30G+TxuEHU/nZuwzv7y/b04I9+NMDjcU8JNXuww+u1p/568vSwmDJwm1DxD52Znz8BAgWE/XbNinOQ7Ha7LADWdxZSDTRvD8+zZYzJa9askb7LA48QAovVEja40s4VQufkIeJPcxizLyMUoU5JTIHos5wYTaaeyAk613ICcE7lBOXn50udPXCWI3cFBQUqAOBLZkx5QafTOeHM1kKYc458Hu8o0a+uy/mMXV1WQAhBXl7eOVlHj8cjd8WDTqc77wo+HQ6XHSHUUY445xzq6+utAJ1OvugzaWnWyZMnx+h0OnMnlxu6j2CtWVOEAYDv2bPrCkVRjCJCFK7xPifzq8REdVzbeOoqANgUKk3YeOpUayeb0YUSVXWlpaU6AOiv9GC4m3wGc7HxsWBvtYexFhi8Xq/+X//6V3/2SuopzwghDDabVXE5neEU5iMiSW7O2IlAd45zdpPORQhRIUIR+o4IYwwxMdFqXW1deHJCJDfn51xOnOdQTnjHOY3nirSxbc+/8Fp9emrKNo/Hewmc7uSOOOfAOE/9+c9/HgsADZ3tjyzLPDkxoa1jLRBjDGw2a9QDDzxgWbx4cQvnZy1NyBFC4Pa49Z3xBwBqcnKy63yRH+1m/4DMdPvh8sNn2Cox7gncPs8AgLMz+UK7xXj48OGUzm4xhgRYJSWB5qLNzS1XqaoaVnrwu9BTjDFos7ddwTn/pehp8q00obYZyUlJbceqqkDtvtAdIYQ4Y5R4vd54AKgsKChA/VCz0yulaLVGNdtbW8OKBGGMbBgrcQDQovUJOcc8I84Z+P1qfWfdeTsG5zjnJNpm23/8ZM0FqqoiOHcpkD7vS4S+K5LOh5fAjHGm+JS6cOSEMU5iY6P3HD9xcvL5JieBDgmI33fffdmHDpXl+/1+ypgogkKMS5KEjUbLqmXLllVDb9sLhLsnlHK9XleGMb4kON2HEAK/ohj37Su1CYDVkQ9MKaM6na6h41oF2jeoto8//jgaAFoQOmvvwAghoNfpB7hd7jPsNUIIOIBDp9M1CUD5g9d5WuE6xuiISM/hjvZQUZSRIqDS7+8rgjnIabcP79j77FsHq4vIBVuwYEGKy+mY3M3PfeeKCgC41+vJmTx58hgIDDbtGggSXAXh1XhRzji4XG2DAfoeYhSDSfXl5eUhH4017WoppeoxhELWMyFR9E8qKk5kBSPsPvBMwuF53759uo4HW5alo2HgcQQA4PF6ExRF0UWAzv8O9agUsgM5HA3kfGhtwTkDvdFwIhw5QQjA6/UkKooin29ycu2112IAgNLS0qF79+x5de+evW+U7d/7Wtn+va/t37vv9X17971aW3tyodCJZzszwqOio1u+7TRy0MmyNHToKAsAQGFhYaeOJSb4SIeu3igAkKl84sTRDIAz5sz2JyEA4EuXLjV5vb4BwfpV40Uny3X/+Mc/2s4Xp1JrQzRu3MRKTIhHpLLPmGfocbsnijZOFPo/zcwRQtztc1/KGO2xS0gAgB7cv38eY9Tcw/TgOSWEEKWUSk1NDQsBYIcYonpGQnT69OmspKQEYmJsh45X4ZD9axBCQBkFu73tQgB4uw8hRgkA6OjRo+9ps7c8RilVAXW2jogi4MSgN+7CGF3BGEcaQo+JiSpvOHUKKKWhrBJjjGGXw34BAHx96lSvJ6dLAEDHjRn1eHNL848ZAxUQ75RnYIzExsWtIYT8iFKKtUihyWQ8EKq7raa4GGNp119//QAAOCKibr0uQC8oKCDhgOHExER+FkYnRCg84A4Oh7PXv3/iRG2MiKj3eBjv94U0OTHq5P3hygmlLH3x4sWpAHD8fJITrQVOenp6eWVFuVdVVTmololSRonL4c4FODdDzsUkkW973JTy5uZmpfP9DIwTsprNu1taWkCcT82WMEoZbmtzjgeAtb0cVdMtadmKZ555ZjClapIAGu1jYxAA1sm6g0Fjbn7wuk8bs/f888/XfvLxR2VehPLgzDmTzO/3D8zPnzoBADaHmvbSC0DLnnjiiZi/P/vMTMY4YIxITwAWwxhzp8d1DaUUwskai4PZb8hYaJxwXF3EGAO3y72Qc17U2VR6LST6858vrrzrzt/W+f3+FOhmiCRoNxTdnlmcc9JV6jFclOtytuW3tLSkh/hRwNFEmyyONYQ+duyI/RWHj7g55yaheLoqsESUUmhts8/GmDxRUtLr8RYMY8Ibm5qnt7XZ00OiMZ2MAmcEsAZks9MydlefrKaqqpIQW0xVVZUry8snAsARrS1Ib49MBDT1WtZAr+9buyPOGUCIUT4IIeCMgSzLyT01mFpIHnE67ofe+V6Tk/TMgTura+tYd12gAQAhjKmqKroDB/ZNAIDjnTmRP2A5YQAAH3zwwcn09NQan887MCjdgjjnxO11TRAje84238jn85k60eGIce5rajphF/akw34WspKSIohPStlaXVvLOug9RCkFj8c7C2PydC9H1YQCGxgAWF1dzcXCET8jIIIJAVmvWx9uz7UfEBGEkJozZNAql8uZFzxmT5v2cvJk9W0IoU39DGwJAKjvvPNmgc/njQk1nxF3hs5uuOGGFJ/XN01E40MCHVmWsV6vJ3q9jgT+7O0T+H2MMQ4zFUAAgCuKf+TMmTNHQyBNiL+FXgDIwoX3uE0m03Y4sxdKF2uCmMfrGTZt2uSLhNfX07wGAgD20ksvmdxu9xSEEMcYU4wx6+TxEyIxk8m8VxumrSH0l156vUav1+8WCpiFWgevxzdl2rSLhnWxDqE8IQwA/Oc//1mKqqpjEUKsO54lSWJGo2lXByCLPvzss3JJlg4FK9AuI4WUwqmmhgKEEC8pKem10UQI8UWLrrx49owZV8+adelVXT0zZ85cdNllsy774IMPCERIG/EBe/fu7fXaY4xBr9ejcOSVcQ5up2toGLVHnTp99jbHXGFnf7CGQpOTTz75pFyWpQrhTLLuFAmlFFqaW64XwLJPcrJw4eX5oeRkzsyZi+bNmz2Xc34uSkMIxkTR63XbxPuxYNvk9/nH3HTTTVm90Wk98REwxrytrW1oByDCOeegl3UNX3+9qSnInnxrP1euXHlQp9OXw5mtYDDnHLwe97S7774r+Sy9AyOEgMvpvK5jOyXOOZEkiQ8ckPmN0PHnTYuagoICDgCQmZ7xX0mSeIezSjjj3OV0Lb7qqqsGwulB4f0RveLPLl+ub2psfkTcKO5WF0mdGGq6Z9eu+ZSqIdODPDDqHaWlpz9itZr3MsYxY72fXcUYIzodpg0NzbfU19VeDyHmBgqlQVVVkepqahYCwM7OPLz8/HxUUlICtijbx62trVeECMsDQogrfj+cPFG9BBMyo7i4GPcktJqXlyeVlpYqL7zw3PWKoqR19x6BJSTYYrFsE7xq3j2hlKp6nfwZIWQyC9GzIYDa/XJV1ZElCKEbi4qKpJ54up9//jkBAOWrlStv9/t9lu72nnMuEUJwTExUqXbYRbhfQgipw4YOXu5xe3JDDO8mnHPucbsvnz19es6Xq1cf6kUIGwEAvP7666Zf/fLRZR6Px9J9XQsHs9l8pKCgYMj5DJz8fgV0MglLWXDOsUWnM0NgtEhPb80iIkncarG6GhsbQ/Vtw5xz8Cv+ixljcriRYTFEXL344ikX7tu7/0I4fcPrh0rtcjJk8MDPXS73A+HIidvtvnzGjBlDvvrqq8O9lZOnnnrK8tzfn1nm8XjMYchJBQDkwNktLgcQNUxWq22FvdV+narS9gwbAKiqouh3bN++AACe7WOUu1tn+MUXX4x6vHDJVMYY4NONjThCiMuyvJ8Q4hV7xLraz+E5Qz9yuRy/5Lx9tA7CGKs+n8/yzTdf3QgAfysqKiL9+A4EANjFF1+ct2/v7ikdZIMCADYYDPuWrVy5ByHUp9Ty941EJBZ/vXZtaUpK0ga/3z81yM4ihBH1er3GPTt3PkcImU8pJdD3fnISACgvP/D/nvR43IM6DAsPK4IlZg+2Xa2qaihPkXPOkcFoaNi1a8/f1q/fvGLjxi3LN2/evKK3z9atW5etX795RXJywrOiCV9YTUcppeBwORYGDXM+g0pKSigAwMSJkz6VZZ1doF0e4uBSh8Nx6YjcYfcCgDaBPiQ/+fn5UmlpqfLLX/4yobGh4feqqvJu0BwXXoZ3zLhxawMh5+ks2NsYMWrMB5Ik+UUflm555pwzl9N1w7RpU67tCc95eXlyaWmpct111w1qbGp4SFXV7owYD0Secf2CBVdvF4edBUessgZmvClJEg3lASOEmN/v15UfO/IPWZZBGPmwPY3c3FwZAPjf//70tW6326Ioil9RFNrF41MUVcWIfCXSEBKcZ6QV4I4YMRbJshxOSxKKEMIqhokQmOcmdWJ8cEFBQVdnAauKApzxkwJc8RC6hvp8vqyJ48dfAYEmj3I44IpzLh07euwfIp12PhR6MwCAjMzstzrxvruQE5/hcPmh5yRJ6rWcfPDBu9e53W5zOHJCsLzqHNW6UQCAqVOnrdDpZBfnp/UcQgirlEJLS9NPOeeyiHL3a/RSFM/zl1/+x3V+vy8uCPgDAHBCCNIb9StEdqHbeYRDcoa9rtPpVc5YsH3BlFLeZrc/WFhYaIPu5xr2IiiJ+JEjhwsVxd9RNjghBNmibP/+Idcshnp/SikMGJD5J1mWO0bRCQDQFnvLvJG5uY/C6dRpb84PAgAZAJT8/ItuaGhsfJgFqttD7iPu8N/sxz/+carX65kGodODFGMEer3+a6EsdQUFBaQvj9Zc7vHH/7BLr9Od6MJj6OQdEPd6PCNnz549HLpOE0r//Ne/Gk1m8xs4YA1oiJOLVVWltTU1fx81atSNGGO/+BySH9goIr5HM0ASAOCSkhK1sLAw9t133lzqdrtTxaHvUjAxxlxv0Je88sorJwEAa16G1p/l008/rbRZbV+IQo1QPCOfz8cOHjj4+qRJk+YCgMaz1rSvU55LS0uV+fPnp61bW/KJ1+uxCQcOdWOUucFo+uLRRx91iIPMgxQNXrlyzR6bzfq1aFhIQwHZNrv90szMAX9BGKvivSXNA+zisGMAkMvKyvw33X1TYk11ze8ppRxjLCGESGcPAEiyLEsJSQlfAQQGnZyvNGLEeBchRO1wu6bTM64oCtTW1N7POcdlZWX+oPXVfpd1U7eDOOdgNJsOIYRDeocIIaQoCq+tr/nbI488ki6+TzuHEgBI+af/G5WUlKgbN2405gwZ+H5rq318OBHtHxDAwmvWrNkZFRW1WgOf3TtPQJ1Ox5zs7Mw/IRS+nOQJObnrrrvSamtqf0cpZeHJSfxXgej0Wb91xgGAvPjii3Umk/kjoXtoMCh3ezxDRowY/jPx9/3mGBUWFuKSkhL69NNPR9fV1v1WUZRgZziQoJEk75Ahwz4KBlJd7Cf5/PPPD5nN5o9Q4CXa3wEhxDwed+oHH7z3JEKY5eXl9fkM5+XlyQCgTpo4scDpcF7B+RmywRhj2GgwNF199dy3AnIK52ONKgUAvGXLls/NFvPXHSO7ARuu0Jra6qcmjB/zU4SQotnDMIEWgtONZ5WLL55648GDh97y+XwMY4zCGJz+LYCFSku3zVfU9vQg6iZ8hSRJhujo6E8QQpCQkMCKi4tpX56SkhK1pKQELr30Uq/JZF7ZISffneKmqqLgY0eOXCHACe5UCDhHo0aN/oter3ezM72MruwBVhQF19VWv50zZNDTixcvTkEI0xIxtV0oOc0AqZIksenTp8159ZV/b2htbb0IQuR+xeRvFB0d/UIXHhJijKHM7AFFsk5HOWehwvUIY4y8Xq+hsvLwsmHDhhbef39hNCCkikZ+3+JZlmU2adLEq3bu3L7B5XKOAEAsBM9IlmWUkZH+z4ACLoDOeM4ZNHSJTqcP2YYEIURUVaVNjY0PDRmc/UphYWGs8Da0ixNYHHIi/ls7E8rChQuHrv501TKXy5UWCsgC51gny6cWX3b5lwAAJXD+KRztQseECaNqEYLmMNoAYIQQa2uzj83OyvjkqquuGinLMpdlmcmyzDnn+Iorrhg8d9asa7Zv3y4Hp5uE9w8AAFarZQshBIURccaBix+uzPfefeubadMmX0wk6YzJD0K2VM45uuCCvNnXX3ftxlMNjYsEsD+fvHBEKYXMrIG/0el0nIfuxSLkpOGRnKGD/v3kk0/GdCMn7eC4FEBZtGjRsC+Wf/6Fy+VKEWeim0gMx5Is1y5aVLAKAFBx8dkfLVVQUACccxg1esQzer0egg0XQghTSmljQ8MfL7roogtFZF7uaySroKCAFBUVcZ1Ox1/8xwuvu93udIxxsO6jCCEUFxO7dNmyZcfFuna3FpwxhobmDH9c1umUDs4NoZTRxoaGey+8MG9xaWlp2NmF7jIOCxfOG151oupfqqIwhE7fMuGcM0mScExc3JNFRU83B+Tu/G2FwxhDubmj7jUajW5hR4ObX2O/38+OVR1/PnfYsL9t3LjRCKeHfxMAkDoGeoLkiAOAunHjRmPusKF/LNtf9rbH7UaEEGCMYZPJxFHgzIQFsFig0M8eSA+i7tODAECIJDmmTZu+GgKdeGk/CRvnnEN0VPTHkiShMNOEiDIGHq9nESEEuvAGtYjQicSkpCfFbMJQ3YMRQgj8fj+vq6v7f199tXLfkCFZr0+YMO62yZMnT5k9e/aYqVOnjpk0adLMEcNzHkpNTVqzf//+Fa2trcMEUCEh0DcxGI3bdu/e97nYC7UzhP7112t3RkVHv4QxCaf2AmGMud/nw/V1dY+//96L+wYPyv7nhAnjfjRpUt4F8+cHeL7ooklzRwzP+XVKcsKWisMVS11OV2Z3DdOCebaYLV9u2LBlEwB0dv2VAgBe/tVXW6KibS/jgFFUQxkPxhhtOHXq1v/8++Vdo3JzH73yyitzOOeSJElM/D6VJImVl5fr582bNXbE8JynNm3asM3ldE8Ig2+GCUEJCQmv3F9U1JZ/5jiM84k4AOD777/fKcm6ihBe9xmR69bW1ss3rF+7KyU5YVd2duY3WZkDNqanpezfvGlDWXnl4b/n5eV1mXrPzR21lhDS1iGa2fX3IcTs9rYhB8oOlqQkJa4fljPkTxMmjL83KSn+uokT8x4YPDDruQFpqTuPVFR+abe3jg2KXJ1Pe0YLAMjX33yzKToq+hWMkRSOnFDKaH193U9eeP7ZXaNGjXhk4cLLhooyg2A54atXrzbMmDFj3LBhQ/+8YcO6rXa7fVQ4ckIIQXFxcf9+9NFHHfn552bNhQ4hn376RWmUzfYGxjhYZyARmTdUHj702cVTpkwWIIsHRfB6kuohACAVFxdTzrkuOzvrnYaGU1dyzoMjQJwxhgx6vTd35KjHQ0WCg+3LihUryhISEv5CMCac8/b9xBhjv99PKw5XvDpmzMirEEJ+EUnvSdqKAAApLS1VrpgzZ8TmjVuXu1yuKHRmxoFyziWz2bxnyZLHnwsDGP7g8VVBAeAvvviiPDMr66c6nY6I9B3vEChhtXXVvyi4ZtG23Nycxc+++axNpIPVjoEeAFAxxrSwsDB+4sTxd1x77TWldXV1v1IUhRNCOGMMJEnyjhg58s8YoW6dIylYyd5zzz2pH/73g2niKnS3gogQEKPesOG5556rh/BSeeEKGwMAuPFHP1r/5z892eT3++O6a1EQdPC43+8bN2fOnOHLly8/UFhYiDsp6mOcc7Jnz76nBmZlXt7c3HQhwjhUny8kuuFSr8cT6/N6b25qbL4ZIQSEEBD9nIAxBuKGE8cY81CCzznner0esrMH/SJk9AWA/Oxn9//qr//3pzmtrfbBoa6GtvPMOfV43Gler+eO1paWOwAAjh093s5vEM8sjNYYnDEGRqPRP3TgoPuPVh1H3Sobzsntt9/9yPPPPzvTHgbPCCHCOVBHm2OA2+1+qr6h/g8D0lOPZGamn2hqbGoQkb7U6fkXpSuKmq2qKrBAV/6QRoMxhq1Wa/3CRbP/snvvfnQ+Rq+CAQyllNkstnVOh2NKmJ2Mtfoo4vP5xrSK8UwIIWCUgslsaunO0XrttdcaBg7M/Mrn810VZhoHi6vUSFGUqS6Xc+qpU6eAcw6VFRXAOdPmcHIhG0Qzet0NVv2hUbGQk3vv+9lDT//1L5e02u0Dw5WTtjZHhtvt/lN9Xd0fBgxIPZKZmX4ySE7SbrzxujS153JCzGZr3ezZc5/Zv/8AKik5p3LCGWN4Wv4Fj3yx/JvLnE5XfFBECSOEmNvjSTh4+NA3I0YM/+2+fWXPI4S8HWwAEpeEeEFBAYgJHMFNN6mITMGll06bnJmR/mxbW9tEzvkZ0VHOuSrLspyakvbLpUuX9uRSAQMAsn//gaLsrIy5LS0t4yGo9gchhP1+P66trlk6fHjOkv37DzwhMkXt/AdSsgXB9lDjXwPPMHr06Gu37d7xosfrje2wr5wxBiaTSRkxcvSPr732Wv956Jh0ghmA5gNIa7duf23s2NHZx6uqliiKogqgjrRQFmOcOp3OEV6v960/PfJE9dChg74xGo2bY2wxx2Li450AQGpqTkS7XO4hTqfjwn/966VpPq83QVUpIIQoxhhRSrleryfpA9LvTExMPoQxflTsO+ougoUBAG3dtGm+oiimDoV+nWlVjjGBqJjoz7VBpP3shZMHHnig1WA0ftMhJ98doqCqqpLjx48tFOkS3MVnc4SQOnnqhOssVls9Y0wKU3iIUPaqqqqqoijc4/GAz+cDRVEYY0xFCNFwenhxzhVCiBSfkPDHDRs2bAghwBwA+P333982bPjIa8wWs4tRRnrAMwMAVRSwcrfb3ZFnLbyMQvCsyrJMUlOSHxQ3/roD1bywsJA/+uijjrFj8662WK1OcYuDhuQXY8YYV30+n+RwOIY2NjTOQAhdzxi7rrGxcZrL5c72+/3AOVdDANOAwuGc6vV6nD4g/adFRU83FxQAPp8VjnY5IjE5+V1JkrhIhUO45zuoPQdFCKkIYw7QfWqOcw4ZGQOeFYWm4XrjGAWIcs5VSqnKOaeBP0E7l5osccYoSk5ObpBl2X8+dHMPlpNf/OIXrTnDR1xttphcLEw5waflRHa0OXJOywm9rrGx8SJ3T+WEMWrQ61F2ZvY9Tz8dSCudYzlhBQUF6D//ea8+I3PgzUajEYmb0zzovHCfz2eoran5S8aA9F1jR494aNGiRcNkWQYtGqGVQohIRHv6GWNMN27caJx8wQWXZmcOeHvP7n3r7Xb7RPh26llBAHJsXNx/d+/b/5ceRoA0++KfMnVagdls7mhfEMYYfH4fr6ut/V1aWvKWsWNH3fDvf//bKoC1WlwM34qmACCVc04mX3DBpWmpyZ+eOH7sfbfL3Rm4onq9nqSlpN2xYsWKnXCeNBYNh0oCZQXS7t17CzMyM4v0ep0kUs1qR3uoqip1Op1p9XX1PzpedfyFfWX7lq1fV1Kyfl3JNxWHK5ZWnzzxp5am5kVOhzNBVSkV6wyUUqzX60lmVtavd+3a+2ZDQ0NCKL40T5NjjHlDY8NVopdG94cokLrxZ2RkLd+9ey+Hfg5BirYKKDY2flmb3V4Qqq2CdnhVVQWHw7FQkqQnVVWl3XkZ77yztOqyyy67fPeuHV86nc5YHDqSpXlDUlCn3mCgGo4h45xzFWMsx8fHf3jo0OHfdHXzsRPlQ4qLi3fPnj37qj17dn3qdrkMYfKseYB94pkQIienpLywe2/Z8+EIblFRkcbznrlz516+Z/fOz51OpyUMnjV+NeXaHoIVh0B7Qr03Z5ypEpHkhMTEJ7ZuLf0QAEhx8fmtcETUlpSUlOzOzEhf4ff7L4MOzQdDnG/UQVZCjpYCAFxSsmHtwKzMjxsbGxb24Ps0zx06OZ/B54/rdPq2sePyHl2z+ut/igj7ebNfQk52zZ49+4p9e3d95nS6zP0kJzgsOWGMyrIkJ6Wk/H7D5s0ff1eGWQAKafPmLStyc3PuPFVf/0+/38+DonoIIcQppcxub81xuZx/qa2rfzIxMf6AQa/frTcYymNjY+qPHD5SMyAri9ntdmQ06mOoomS73O7RBdcsyvN5fdkqVUGcoeAyDh6IZIEcH5+w+qOPPlk8cuRIzYnsUc+2goIC8s477xyZP3/+lTt3bP/S6XRGB+0nQggDpZS6nK68E94T7/z2N786MWhg1kajybRVp5MPZ6ZlOECSaHV1tdnv92R43J7xA9JTL/J6vSMURQEIlPMEO/KUMYb0er2UlZn94PYdO14X3/W/NtReZYyRXbv2PH7hhROPVB079ne32x0lMjQ82BaKvWeUMqCUIhAXdoSTGUjhaQ37Al4jMZlMbRnpGXdvK93xLuccy7IcEvdoRpbeeOOCRLfHPVXIKA4RBgWT0bTjiy++OApnNlbrHzRaUsIAgI8cOfJLSSLOMMOcotmme/y8efNyAt5hl+9BCwDIF198sX3iBXkzbDZbJQBIImd+tvLVlDHGCSFyYlLSB4fKK24QnXdZT5TPypUrV40dO3quxWKp45yfC56RJElyakrKi4cOHb5PtIvoEc8rVqwoGZ83cbYtynZCrDMN4zM0BRJ8y0wrdEfh8K3X6eX4hPi/HDhw6Neccwn+R7w5YTRRzrDchwwGvU9Esc5qHQZjDF88/ZKfmi2WesZofyl3JrxynJaecWdidPQmjPF5Vz8XJNurx4wdM8disZzsJzkJS771er0UHxf/1L59ZUu+B3KiAnCprOzgvzKzMn9sMpmo0DlaYTJCCBGMMaOMqV6vR3I6HKOamppuqqup+d2BsgMve3yez45UHl7W2FD/edWxY2+erK7+XVNT4zVOpzNbURUuola8I0CRJElKSEh8/1//eWXeyJEjtTov3pv9LCgoIMuWLds6bPiIfJvNdqSjfRG3NpmqqtTtdg9oaGi47uSJE389dvTYp+s3bVi9fl3J2sqK8i+OHT32cm1t7V0Oh2OEuOVIgzIOnPMAqDAajTwzI+uu7Tt2/E3s4f8auGo/05xzsnnz1jfGT5k4MS4+7hNZljHnnDDGkNgDejqiBdoNWoQxRmeuLUeccyLLMomOjlk+Zeq0C7eWlr47aNAgfRBo6x5g5ecHDNaO7Qcuo5TaIPRwRE4IBoPJ8KnolXU2bvYwAMBvvvlWnclk2RoM7Lp9GYypoqjSwbKyywLeYddKphiAFhQUkE8+Wb7r8isWTImLi/uvHGhKg4Vi6w8lw8WGU8450ev1kJaaWlRRefQ6kXvvqQCrAcDyVcn0S2ZMio+PXyVJksRYO8+sv3hmjDHOGTGZTN7MrMxflB06fK+qqr3x6FQIXGHetGDBokkxsXFLJUkijLHgdeb9uNaMc05MJpM7MyPrp5WVxx4RUcL/JYXDCgoK8IoVK8oGZGTcbjAYsABZ6ln8PvTKK6/UjBg5epHVanOJ1Ijah71VGWNYr9dLqWlpS/bs2fPBifrqhPN4z1QAkL74YtWGK66cMykmJubjDnLC+llOOOecmMwm96DBg+45XHn0l98jOVEBQCot3fX6uPFjp8fERO/DGEsBg9d+cxIhAAkhzLUyCMa5qqqqyjmnfr+fKopCKaWUMaYCoOC0s2az1EDUjxOj0eTJHJD5yNFjx6+/5JJLvEFr1RfQTL755ps9l1+xYHJMTMxSSdgXofOYiKa0l3EwxlRFUajH42Eej4f5/X5KKVUBoCPvTPCOMEaSzWY7NHbUmJnbd+z45/84uAqOqpNlS5cdrqo6uTAjM3tGbEzsJ0aj0ScRInHOCeccC8CFGGOcMQaB88UQ55wgAEmn06Ho6Ji1A7MGLjxRXTN/6dKlBwGAjBs3ThUgOTTAKikJFJI6nY6rKKWq6BWhdvVwzrkkyXTgwCFfAJzV9vuYMYrMJvPHhBAGgZsjaoiHUkpVj8+7QNRusVBCUFgI+KWXXjp19NjxgqyB2debzOY9hBAiEK8m7OEqOC1dSjkHVdssWZaJLcpWMmz4iGl79x94nAaASm8FWBUh6KrjJ6pnD0gbcIfFYq4UPGsjhnrJM1c11G7Q63FcXPyX4/MmTt6xY/czrG+dcCkAkBdeeKGm6viJq9PS026w2aIOSJJExGFHveCZBykaGsi3c6LT6XBCfMKnEy+YdMH2HTv+EWbtV0de1XAehPoGwsXvh/tdrBcKXiot3fXWwEEDf2w0Gt0AXBJpJDUMYNu+vuGsn2ZQVq5cuXHc+AmzrNZAVDioDiLs7xNnWLJYLI7BQ4bctmfPvt9zzrFeb1bCXi8AlRAS5llFavj7cFYbnaoAQF5++Y3q4yeqrxqQNmCxzRZ1UMgJ7j85AaLT6VBCfMIn0y6YPHHz5m0viSjR9ynCqwIA+eKLVRs+XPrJhalpab8yGk01hGDNCUYdHDQciEggov0pHgxntngJ1heSTqdDUdHRH0yZetEFO3bv/otwIvurez0FCNiX4yeqr87IzLjZYjaX48ANQxwki8H8Y4xxezRFvE8w74wxhhFCkk6nb0lMTHzy8aLfT/zy66/XQL+kBdFZ0XWdh14R6+K71P5ae0op3rFjxzfHT1YvnH7JjNHpaQN+Fh8Xv9RqtZSbzSaXLMvcZDIho9GIdDodMxpNjdFRURvj4hP/MDw354Lqmrr8raWln4hs0xn96iilui7teKCbQeAXrrnmmgyf37eAcy4hhAwIIanrB2SdTnds2bJle+H03Lx+p8LCgAIZOmzYCp1OhznnIfhCEkJIDwCS3+edftmMGSMBgIXqeFxUFPCGGGN4+/ad79fU1E1IT02/OSYmdr3BYODCcyKMMQ3xck2wtXCjiFBx8e8YOCeEYElvMPpjY2JXZg7IXFhbe2r6unXrNgZ5IH31jrCiKGjX3r3//tWvfzs2Kzv7p9HRUdtFwadA6UxTRFzw2DXPAIQQIun1endcXPzHY0aPnXf8RM3c5cuX74LTNRm8jwceMUrxnj373/ug+L95A9JSfxxli1pnMBho4Jo6JzzEOgcia+2eBgYASZYlYjabWxLiE98ZM3b09KNVxxd89tln+6EXtSSc8yhxlro7b3qEQOIcovsUSuAQE/DCkb6b7zIghCTGuKU3RioQLt/2+thxeRdYbbalOp0u6HxwJG7BMu18iP8GzhgSUSgJIRTVEyD9+eefb7r2uusvSEpKet5gMLi07wve1w5P+zkMGA6dEhMd/ebUiy6euGnTlleHDRumAwBGKZU1HdTNeskIgQQImQRoCLXfGCGwIQTid7vUe3qxD/qzDCwoBHpk4V17977zQfF/x6cPGHBrlC1qvV6vZ4EUaS/lRJKI2WxuTkxMfHvsuDH5R6uOLyz+9NMy+P4WQ1MAwBMmTHDv21f25NXXFIxOTUv7mc0WtUmv16uSRIhIvZ0RkRDnSQSzOdLOFuecIASSLMvEbLbUJSYmvTI8N+eCEydqrvvoo4/29Ydu7iIbgyileOfOPW8uefx341LT0u6OskVt1+v1CGPUGf+gRVTO5B1JOlnGVqv1aEJ8/JPjxueNOVRe8avbb79da/jcJ2DS0NCAgPN4IQu60/oHJM7B1t+by4FbxXcZgmWXcx5PCEH9tPYMAmPn8Pvvv1++e9++549WHb/6xMna3EVXXzt09JhxI/OnXzr14vxLpowcNSb3x7f+ZGh1bf3UisrK365du2mbqirBUUMm7C8CADhRVRXdoe+WmD6DICoqygkC8UJbW5sxIzPzL6qqKrib3D0L9EmRDAb9JnFr46zdNBHABz7+5JPDF+TlPeBX/Umcc4ZD1N8wxpmk00nmmBhdD8PmXHgQCgC8KUnym1dccfmY8vKDs5xOxzSq0lGKoqRxznWUUsI5B4wxiNlVgBACjLFHlqSTeqNxX7Q1as3AjIwvP1q+/NDRquMApwuIaT8KLgAAue+++5wA8A9Zlv8xefLkcQ0N9Zd5PZ5pPq8vV1GVFACQGWOCZwSUMhCjaYBg7CISqTIaTPtsVtvXg4YOXfXhh0uPHjl67Gzw3L7OU6ZM8QDA65Ikv37FFZePrCg/MNPhcOUrqjpKVZU0zrmBMUa09RVXzbXWGFwipFHW6Y4ZjKbSuLjYkgsvnFzy7LN/rz1ceURzHKCHfDMAgMGDB7+LMTlEAy4L7koOEEIkKipmf/nhil5FIimlkJaW9ozNYsviiHf7XYQQEhMTt6G8/HDIqGxXoOfLL7/cjxC6etasWXm11SeubrW35iuKmkMpjQt4+Rw4DxSZiwa4rTqdfNxoMG2Njo37SLxjOJ49LSgA8vTTTzcjhH62YMGCZw4fPnS9s80xz+f3jaSU2gLA5/T3YYyBEOLQ6eQDtqjoVZkpae8t/+qrfUerigEAyP79+xWEEMTExBzNysx80uv1dtmugQk+9Xq9qtfrmwAAHn/8cd5xxqLWlFWn07WmD8go8ng8BoRQl/qFMWB6vZ6kpKXt2batFKZPn87EzNCzQR3l5DVJkl+7Ys7skRVHK2c5nK6LFVUdLeREH0pOdHrdMb3BVBofE7tmyrRpJX/929/qyg9X9lZOznm6W5w78sILLzQBwPOSJD1/+ezZw6tqT052OJyT/H5llOL3pXMOsaqqGAEAaS10VFUFnU7nRQg16vW6o3qDcXtUlK3kqquuWfurX/2q5RytQ/t+3nXXXW4AeFmW5ZdnzZp+4dHK4zM9HvcUv6oMp6qapKqqiRCCEEKgqirIsuxHCJ2SZV2FyWTcmpSctPpXP7lz3Zybb3aVVxyBIONP+8gfJCQkKFlZWX90uFzRmixoui4+Pm7bvrKDvdE/Xera5JTkYonItZRTFQNgBsAR59hoNtn9fn+4aVpcUFCAuglEtO+raN2EGWNc4Jca8bTT6tWrNbsXDKpop6E+VR2kyZvGK0IIcw7c5/PVaR8UoY6Ry9MtCAIV/xgDpVR//cKFKW7mTzt4sCLKYDBEJSYmGk+erHIYjQZXampGU2JiYs2rr75agzGhgfmt7VFCdJaVGOoYviSEQEVFheHOO+9MIYSnlZcfscVFR8fYYqL0R45U2mNjEzzJycn1cXFxda+//notxpgFXX/HBQUFqJsRKWdlnRHCwBiVFy++OtXhUFKOHj0ayzm1pialWGrqa51OZ5tjzIgxHrvLVTt9+vS6J554olVRVYDTfJMfgMH4rggHKzdJkuDXv/517Lqvv0422GxJra1NRkoBEmNjvV63+9Sw0aPrX3r55QbFr/TWhzrjTEqSBIsXL06urz85oLLyaEJcXHy8qirMbrc3DxkyqCk9Pfv4K6+8UivqOrW97PcbyueDPgqWk7Y2f+qxY5UxnENATmprnU632zFixAiPx+OpmTNnTt1vf/Nbu6KeUQ73Q5UT1Fk0XZIkWLVqleGLL5bGr1hRYkpOjrPGxSXrqNfL9+/bZ596ySWumTNnNtx4442eoPP1XZ2xb+lqjAlQquruuOOOxNLSTdasrKFROh3GVVXHHDk5Ix133XVX/bRp0zyiZ2Ew7/0dbftfkysEAKABtOLiYg7hlcFgjDHLSE9b1mpvmQfQPvSZc86RyWhs+H8PPDRIjJJr/zKpB8+5Hlkh9eLpM3gU6cXevG/7nL/vyJD25ru/M577sM4IAKT8/P7Z7w7rcC7koCffhfv5fKAeyB45R9+HQrwrOks64Jzqld7LCfRJTsQYkPPCqS48fa56siffq3UIngcbrhydA97Ppc3H3XxfOHsJV82fP3L+/Pnz5s2bPfeyy2Zdpj3z58+fU1hYaDhbwOyee+6JSUqMb46yWXh0lJVFR1l5dJRVjbJZeEZ62joRYT9/uiKfK89DHHACpwcoS0EzjPD3TIF1y7M2+Pn7ynNBwZk8A8D3dZ1/8Ge6wyyus7W+SDuL+fn52mBncj4Z/oicfHfroemzwsJCHHyWC38Y66BFts7kPfBOEdnoHAjCiOE5TyYmxPGE+Nj2Jz4uhqckJ/LJkyfOCNI5/fu9I4bdHhcbzaNsVkWAKx4dZVViom186NDBfwj+2QhFKEIRilCEIhShHwRpoOmCCy64NC42mtmsZiXKZqHi8UXZLDRnyOA3RH1UfwEdDABk+/btptSU5Ioom4VFR1mpBrCibBaaEB/L5s6YMTGYxwhFKEIRilCEIhShHwohAIA33vjSnJqSVN0B7LAoq4UmJcb7LrvsslEAAHl5eXI/gCsJYQwjhuf8MybaxqOjrGpQ9EqNsllYRkbaFhJo0RBJD0YoQhGKUIQiFKEfJEkAADlDBj0pAE9wuo7arGaeMSCt7JlnnkkSPy9Dz9PF7eOmMMYwfPiQ3wRSg5bg7+JRNosSHxfDL7ggb4H4vUj0KkIRilCEIhShCP0gCQEAuuWWW5JTkpPsNquZBhWc8+goK42yWXjGgPSy/PwpEzrgquC6Ra1GmQTVMZ6RVrz3lluSBw/Ofj02JopH2SzBkSseHWVVomwWnpWZsVJEr0gwgxGKUIQiFKEIRShCPzQiAEDz8sbec+zosX+oqqoghILTgYxzjnU6nWKLino1LW3AayUlJdswxmpQW6JOsZssSzArP3945Ymq69va7Hd73J7EwEBwFBydYowxbDabmydPuWj80qVLj0PQfOYIwIpQhCIUoQhFKEI/WJBFCKGDBma93dBw6kbGeKcgSzQ0Br1Od0hnMO7QSWR/clLKqZqampr6xka/JElo1KjcxMbGpmS/3z/M6/Xm+TzekYqqSIxRQAhr/a40oowxYjKZaM6wnLklJeu/gg5TESIAK0IRilCEIhShCP1QCQEA4pxLw4cN/aC+vn4BpZSKXlQaIOIa0AIAhBBqn3ggxhIJpIaBMX7G3yGEVPE5Gl7Sxn1JJpPROTwnd/HqtWs/LSgoIB2bc0cAVoQiFKEIRShCEfqhgyzgnKPRI3P/XH/q1IM+nw8AgIpWDcHF7e1zBTnnAbR1GjkBIMTFX2i/c8bvMcYkSZLAYrHuHDY899aVK1fuhi4GbUeuEkYoQhGKUIQiFKEfMokxUojvKzv40LChw2ZbrZZNkiQROD1ongoQxAX2IQihM4rcEUIEnf5/DVSpnHMIpBmRZDabm1OSk39dsnbdlJUrV+4W/a7ULlFfhCIUoQhFKEIRitB5QAQAKCEERo3KXdDa2nq71+O5VFFUE6U0EKXivH3goBiSzpCg0wOcA/PtCSEgSRLodLpdVpvtnblz573z9NNPV2u/Dt3MsowArAhFKEIRilCEInTegawAgCLwox/dlLV3766pjjbHZJ/fN0ZV1GxKaQwAmPx+P+h0OqCUAmMM9Ho9Y4y36vRyjUFnOGTQ6zZkZGes/fzzL3cghHjQ54ccth0BWBGKUIQiFKEIReh8BVocgqJMhBB4d927xpK3S2IOHToUdfDgQWnKlAtiGhsbvBUVh52zZs33WyyWxn/84x+tGugKIkkANx5Z2ghFKEIRilCEIvQ/TYWFhTioiWhPas8JAEi9HUj//wE08dqEvz+FdgAAAABJRU5ErkJggg==" alt="Accenture Song" class="brand-logo">
    </div>
  </header>

  <!-- ══ SCORE BANNER ══════════════════════════════════════════ -->
  <div class="score-banner">
    <div class="score-left">
      <div class="score-number">{{score}}</div>
      <div class="score-denom">{{denom_label}}</div>
      <div class="score-label">{{score_label}}</div>
    </div>
    <div class="score-right">
      <p class="score-verdict">
        <strong>{{lead sentence — single most important finding, referencing at least one benchmark by its column score}}</strong>
        {{2–5 follow-up sentences synthesising the scorecard}}
      </p>
    </div>
  </div>

  <p class="weight-note">{{weighting_note — short paragraph explaining the criteria weights}}</p>

  <!-- ══ PoV CALLOUT ══════════════════════════════════════════ -->
  <div class="pov-callout">
    <strong>PoV framing:</strong> {{pov_callout — sector-specific framing in 1–3 sentences}}
  </div>

  <!-- ══ TRANSACTION-RAIL-NOTE (B2B-Industrial mandatory; FS optional; D2C omit) ══ -->
  <div class="rail-note">
    <strong>On transaction rails:</strong> {{transaction_rail_note — ACP/UCP reframe for B2B-Industrial; payment/identity-rail framing for FS hybrid contexts}}
  </div>

  <!-- ══ OPTIONAL: BENCHMARK STRUCTURAL NOTES (zero or more) ═ -->
  <div class="split-note">
    <strong>{{note title}}:</strong> {{note body — explanation of structural benchmark choices}}
  </div>

  <!-- ══ SECTION 01: CRITERION-BY-CRITERION SCORECARD ═════════ -->
  <div class="section-label">01 — Full criterion assessment</div>
  <h2>Criterion-by-criterion scorecard</h2>

  <div class="table-wrap">
  <table class="criteria-table">
    <colgroup>
      <col style="width:42%">
      <col style="width:14.5%">
      <col style="width:14.5%">
      <col style="width:14.5%">
      <col style="width:14.5%">
    </colgroup>
    <thead>
      <tr class="col-header">
        <td>Criterion</td>
        <td class="col-b1">
          <span class="co-name">{{focus_player.name}}</span>
          <span class="co-sub">{{sub_label}}</span>
          <span class="col-score {{focus_score_class}}">{{focus_column_score}}<span class="cs-denom">/10</span></span>
        </td>
        <td class="col-b2">
          <span class="co-name">{{benchmark1}}</span>
          <span class="co-sub">{{sub_label}}</span>
          <span class="col-score {{bench1_score_class}}">{{bench1_column_score}}<span class="cs-denom">/10</span></span>
        </td>
        <td class="col-b3">
          <span class="co-name">{{benchmark2}}</span>
          <span class="co-sub">{{sub_label}}</span>
          <span class="col-score {{bench2_score_class}}">{{bench2_column_score}}<span class="cs-denom">/10</span></span>
        </td>
        <td class="col-b4">
          <span class="co-name">{{benchmark3}}</span>
          <span class="co-sub">{{sub_label}}</span>
          <span class="col-score {{bench3_score_class}}">{{bench3_column_score}}<span class="cs-denom">/10</span></span>
        </td>
      </tr>
    </thead>

    <!-- ── PILLAR 1 ── -->
    <tbody class="p1">
      <tr class="pillar-row">
        <td>
          <div class="pillar-name">1 · {{pillar_1_name}}</div>
          <div class="pillar-desc">{{pillar_1_description}}</div>
        </td>
        <td><span class="pillar-score {{p1_focus_class}}">{{p1_focus_score}}</span></td>
        <td><span class="pillar-score {{p1_b1_class}}">{{p1_b1_score}}</span></td>
        <td><span class="pillar-score {{p1_b2_class}}">{{p1_b2_score}}</span></td>
        <td><span class="pillar-score {{p1_b3_class}}">{{p1_b3_score}}</span></td>
      </tr>
      <!-- Repeat per criterion in pillar 1 -->
      <tr class="crit-row">
        <td>
          <div class="crit-name">{{criterion_name}} <span class="weight-tag w3">×3</span></div>
          <div class="crit-desc">{{criterion_description}}</div>
          <div class="crit-check">Check: {{check_method}}</div>
        </td>
        <td><span class="rating r-missing">{{rating_label_focus}}</span></td>
        <td><span class="rating r-missing">{{rating_label_b1}}</span></td>
        <td><span class="rating r-confirmed">{{rating_label_b2}}</span></td>
        <td><span class="rating r-partial">{{rating_label_b3}}</span></td>
      </tr>
      <!-- ...more criteria... -->
    </tbody>

    <!-- ── PILLAR 2 ── -->
    <tbody class="p2">
      <tr class="pillar-row">
        <td>
          <div class="pillar-name">2 · {{pillar_2_name}}</div>
          <div class="pillar-desc">{{pillar_2_description}}</div>
        </td>
        <td><span class="pillar-score {{p2_focus_class}}">{{p2_focus_score}}</span></td>
        <td><span class="pillar-score {{p2_b1_class}}">{{p2_b1_score}}</span></td>
        <td><span class="pillar-score {{p2_b2_class}}">{{p2_b2_score}}</span></td>
        <td><span class="pillar-score {{p2_b3_class}}">{{p2_b3_score}}</span></td>
      </tr>
      <!-- ...criteria... -->
    </tbody>

    <!-- ── PILLAR 3 ── -->
    <tbody class="p3">
      <tr class="pillar-row">
        <td>
          <div class="pillar-name">3 · {{pillar_3_name}}</div>
          <div class="pillar-desc">{{pillar_3_description}}</div>
        </td>
        <td><span class="pillar-score {{p3_focus_class}}">{{p3_focus_score}}</span></td>
        <td><span class="pillar-score {{p3_b1_class}}">{{p3_b1_score}}</span></td>
        <td><span class="pillar-score {{p3_b2_class}}">{{p3_b2_score}}</span></td>
        <td><span class="pillar-score {{p3_b3_class}}">{{p3_b3_score}}</span></td>
      </tr>
      <!-- ...criteria... -->
    </tbody>

    <!-- ── PILLAR 4 ── -->
    <tbody class="p4">
      <tr class="pillar-row">
        <td>
          <div class="pillar-name">4 · {{pillar_4_name}}</div>
          <div class="pillar-desc">{{pillar_4_description}}</div>
        </td>
        <td><span class="pillar-score {{p4_focus_class}}">{{p4_focus_score}}</span></td>
        <td><span class="pillar-score {{p4_b1_class}}">{{p4_b1_score}}</span></td>
        <td><span class="pillar-score {{p4_b2_class}}">{{p4_b2_score}}</span></td>
        <td><span class="pillar-score {{p4_b3_class}}">{{p4_b3_score}}</span></td>
      </tr>
      <!-- ...criteria... -->
    </tbody>
  </table>
  </div>

  <!-- ══ GEO EVIDENCE BLOCK (v1.2 — mandatory for B2B-Industrial) ══ -->
  <div class="geo-evidence">
    <div class="geo-header">
      <h3>GEO evidence — buyer queries tested</h3>
      <div class="geo-meta">
        <span>Stand: {{geo_stand_date}}</span>
        <span>Platforms: {{geo_platforms_tested}}</span>
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
        <!-- Repeat for ≥5 queries (B2B) / ≥8 queries (D2C, FS) -->
        <tr>
          <td class="geo-query">"{{geo_query}}"</td>
          <td>{{geo_focus_position}}</td>
          <td>{{geo_top_competitors}}</td>
          <td>{{geo_notes}}</td>
        </tr>
      </tbody>
    </table>

    <p class="geo-summary"><strong>Gap diagnosis:</strong> {{geo_summary}}</p>
  </div>

  <!-- ══ SECTION 02: PRIORITY QUICK WINS (v1.2 — horizon blocks) ══ -->
  <div class="section-label">02 — Priority quick wins</div>
  <h2>Where to act, by horizon</h2>

  <p class="qw-intro">{{Optional 1–2 sentence framing — the horizons separate same-week fixes from quarter-scope engineering from cross-team projects.}}</p>

  <!-- ── HORIZON 1: WEEK ── -->
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
          <!-- FS only: <th style="width:140px">Compliance risk</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="qw-num">1</div></td>
          <td class="qw-action">
            <strong>{{quick_win_title}}</strong>
            <p>{{quick_win_detail — 3–6 sentences with a peer reference}}</p>
          </td>
          <td><span class="effort-tag effort-low">{{horizon_label}}</span></td>
          <td><span class="impact-tag impact-high">{{impact_label}}</span></td>
          <!-- FS only: <td><span class="cr-tag cr-low">Low</span></td> -->
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ── HORIZON 2: QUARTER ── -->
  <div class="horizon-block">
    <div class="horizon-header">
      <span class="horizon-tag h-quarter">Do this quarter</span>
      <h3>4–12 weeks — scoped engineering, single-team delivery</h3>
    </div>
    <table class="qw-table">
      <thead>
        <tr>
          <th style="width:40px">#</th>
          <th>Action</th>
          <th style="width:160px">Effort</th>
          <th style="width:100px">Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="qw-num">1</div></td>
          <td class="qw-action">
            <strong>{{quick_win_title}}</strong>
            <p>{{quick_win_detail}}</p>
          </td>
          <td><span class="effort-tag effort-mid">{{horizon_label}}</span></td>
          <td><span class="impact-tag impact-high">{{impact_label}}</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ── HORIZON 3: MONTHS ── -->
  <div class="horizon-block">
    <div class="horizon-header">
      <span class="horizon-tag h-months">Build over 2–3 months</span>
      <h3>Engineering project — cross-team, budget allocation, architecture</h3>
    </div>
    <table class="qw-table">
      <thead>
        <tr>
          <th style="width:40px">#</th>
          <th>Action</th>
          <th style="width:160px">Effort</th>
          <th style="width:100px">Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="qw-num">1</div></td>
          <td class="qw-action">
            <strong>{{quick_win_title}}</strong>
            <p>{{quick_win_detail}}</p>
          </td>
          <td><span class="effort-tag effort-high">{{horizon_label}}</span></td>
          <td><span class="impact-tag impact-high">{{impact_label}}</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ══ SECTION 03: COMMERCIAL UPSIDE FRAMING (v1.2 — NEW) ═════ -->
  <div class="section-label">03 — Commercial upside framing</div>
  <h2>What fixing this unlocks</h2>

  <p class="upside-intro">{{Optional 1–2 sentence framing — translate readiness gaps into commercial consequence.}}</p>

  <div class="upside-grid">
    <div class="upside-card">
      <div class="upside-eyebrow">{{sub_block_1_eyebrow}}</div>
      <h3 class="upside-headline">{{sub_block_1_headline}}</h3>
      <p class="upside-body">{{sub_block_1_body}}</p>
      <p class="upside-source"><strong>Source:</strong> {{sub_block_1_sources}}</p>
    </div>
    <div class="upside-card">
      <div class="upside-eyebrow">{{sub_block_2_eyebrow}}</div>
      <h3 class="upside-headline">{{sub_block_2_headline}}</h3>
      <p class="upside-body">{{sub_block_2_body}}</p>
      <p class="upside-source"><strong>Source:</strong> {{sub_block_2_sources}}</p>
    </div>
    <div class="upside-card">
      <div class="upside-eyebrow">{{sub_block_3_eyebrow}}</div>
      <h3 class="upside-headline">{{sub_block_3_headline}}</h3>
      <p class="upside-body">{{sub_block_3_body}}</p>
      <p class="upside-source"><strong>Source:</strong> {{sub_block_3_sources}}</p>
    </div>
  </div>

  <!-- ══ SECTION 04: KEY COMPETITIVE RISKS ════════════════════ -->
  <div class="section-label">04 — Competitive landscape</div>
  <h2>Key competitive risks</h2>

  <div class="table-wrap">
  <table class="risk-table">
    <tbody>
      <!-- Repeat for 4–6 risks -->
      <tr>
        <td style="width:30%">
          <div class="risk-title">{{risk_title — specific, attributable}}</div>
        </td>
        <td>
          <div class="risk-body">{{risk_body — 3–5 sentences naming competitor move and implication}}</div>
        </td>
      </tr>
      <!-- ...more risks... -->
    </tbody>
  </table>
  </div>

  <!-- ══ SECTION 05: RATING LEGEND & METHODOLOGY ══════════════ -->
  <div class="section-label">05 — Reference</div>
  <h2>Rating key &amp; methodology</h2>

  <div class="rating-legend">
    <div class="rl-item"><span class="rating r-confirmed">Confirmed</span> Publicly verifiable evidence found</div>
    <div class="rl-item"><span class="rating r-strong">Strong</span> Confirmed with above-average depth or maturity</div>
    <div class="rl-item"><span class="rating r-partial">Partial</span> Feature exists but gated, limited, or not fully agent-accessible</div>
    <div class="rl-item"><span class="rating r-unverified">Unverified</span> Cannot confirm without direct access — verify internally</div>
    <div class="rl-item"><span class="rating r-missing">Missing</span> No evidence found; capability absent or not publicly documented</div>
  </div>

  <div class="score-legend">
    <p><strong>Score chips:</strong> Each benchmark column carries an overall maturity score (0–10) in its header, and a per-pillar score in each pillar row. Pillar scores are weighted sums of the criterion ratings within that pillar; the overall score is the weighted sum across pillars. Colours:
      <span class="col-score s-strong">7.5+</span> strong &nbsp;
      <span class="col-score s-mid">5.0–7.4</span> mid &nbsp;
      <span class="col-score s-low">2.5–4.9</span> low &nbsp;
      <span class="col-score s-poor">&lt;2.5</span> poor.
    </p>
  </div>

  <div class="methodology">
    <p><strong>Scoring:</strong> {{methodology_scoring — explanation of weighting formula and normalisation}}</p>
    <p><strong>Sources:</strong> {{methodology_sources — comma-separated list of all primary sources used}}</p>
    <p><strong>Disclaimer:</strong> {{methodology_disclaimer — explicit note that internal verification (CDN/WAF, robots.txt, payment processor, regulatory sign-off) is required before acting on recommendations}}</p>
  </div>

  <!-- ══ FOOTER ═══════════════════════════════════════════════ -->
  <div class="report-footer">
    {{focus_player.domain}} &nbsp;·&nbsp; {{Sector}} Agentic Commerce Readiness Report &nbsp;·&nbsp; {{Date}} &nbsp;·&nbsp;
    Benchmark: {{benchmarks joined by " · "}} &nbsp;·&nbsp;
    Consulting PoV — Accenture Song &nbsp;·&nbsp; Focus: {{focus_player.descriptor}}
  </div>

</div><!-- /page -->
</body>
</html>
`;

---
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

```
pillar_score(column, pillar) = ( Σ (weight × rating_value) for all criteria in pillar )
                              / ( Σ (weight × 100%) for all criteria in pillar )
                              × 10

rating_value:  Confirmed = 100%   Strong = 100%   Partial = 50%
               Unverified = 25%   Missing = 0%
```

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

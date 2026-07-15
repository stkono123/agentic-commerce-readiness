---
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

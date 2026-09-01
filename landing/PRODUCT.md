# Sous — PRODUCT.md

## register
brand

## Product purpose / pitch
Sous is the site web + AI assistant for French restaurants. It makes the restaurant's
existing data the single source of truth (le logiciel de caisse) and keeps the public
site, the in-dining QR menu and the price cards in perfect sync. The restaurateur
edits by sending a WhatsApp message (text or voice); Sous drafts the change; the
restaurateur validates in one click before anything goes live. Nothing auto-publishes.
French regulatory compliance (INCO, 14 allergènes, origine des viandes, prix TTC,
décret 2024-171) is a product feature, not an afterthought.

## Users
- Independant French restaurateurs: time-poor, at the stove, French-speaking,
  non-technical. They used RUMOR (bistro), SORA (japonais), KNOCK KNOCK (burgers),
  Mamma Rosa (italien) as in-page personas.
- They are legally exposed (allergen liability) so they distrust anything that
  "publishes silently" and anything that looks like a template generator.
- Chains / multi-établissements (plan GROUPE) as a secondary audience.

## Brand
Warm bistro editorial. Crème and paper paper, ink black-coffee, coal; tomato-flame
orange as the voice accent; olive and butter for stickers and post-its. Anton
all-caps display (menu-board voice), Caveat as the only handwritten voice, Georgia
serif for quotes, Inter for small UI copy. Steam mark (deux traits de vapeur) is the
identity.

## Tone
French, calm, confident, warm. Earned humor lives in tiny handwritten asides
("validé par le chef."), never in shouting. No hype, no "!!", no fake velocity:
the product asks for trust with legally risky data, so the page must feel like a
reliable kitchen, not a fireworks show. One handwritten annotation per view at most.

## Anti-references
- Template-generator landing clichés ("en ligne en 1 minute", hero mockup of a fake
  generic website).
- SaaS hero-metric template (big number, small label, stats row).
- Editorial-magazine restraint (italic serif + mono labels + ruled columns) - not
  this brief; this brand is food-warm, not gallery-quiet.
- Purple gradients, glassmorphism, identical icon-card grids, modal-first thinking.
- Em dashes in copy; accent-heavy gradients on text.

## Strategic principles
- La caisse est la source de vérité: le menu est le point de vérité unique.
- Rien n'est publié sans validation du chef: the validation loop is the differentiator
  (brouillon → Publier / Modifier).
- Le QR menu en salle and the à-jour guarantee are proof points of sync.
- La conformité française is a feature, stated plainly (not as legal-word soup).
- The site demonstrates its output with restaurant personas that each carry a real
  ambiance, not one generic template.
- One register of truth, many ambiances: same engine, completely different sites.

## How the product proves itself on the page

- **TellSous demo** (`MenuSection` + `TellSous.jsx`): the visitor watches the
  whole loop happen — send a change idea (chip click) → Sous prepares a draft
  with brief feedback → types the draft word by word → shows the proposed card
  ("Le brunch arrive. / Dimanches dès 11h", "Le plat du jour reste le bar") →
  the chef can edit, save, validate and see the site + QR confirmation. The point
  is always: nothing publishes without the chef. This demo IS the pitch, not
  decoration.
- **Diff markers** in the menu preview: `Nouveau`, `Prix à jour`,
  `Recette ajustée`, plus old-price strikethrough on the plats du jour. Users
  distrust silent updates; showing the delta (brouillon → validation) is the
  trust mechanism.
- **Sync proof**: the QR menu en salle and the "toujours à jour" guarantee are
  literal copy blocks (FAQ: "Le site est-il synchronisé avec ma caisse ?").
- **Compliance as a feature**: 14 allergènes, origine des viandes, prix TTC,
  validation humaine are spelled out in FAQ and plan ESSENTIEL features.

## Pricing (page)

- **ESSENTIEL — 49 €/mois** : site personnalisé, synchro menu (POS), mises à
  jour WhatsApp, QR code table dynamique, conformité allergènes.
- **PRO — 89 €/mois** (mise en avant) : tout Essentiel + assistant IA avancé,
  promotions, intégration réservation, stats de visites, support prioritaire.
- **GROUPE — sur mesure** : multi-sites, charte centralisée, API dédiée,
  intégrations sur mesure, account manager.

## Personas live on the page

- Marquee: intentionally neutral `example1..example6` — no fake brand names
  (anti-template stance: show typed examples, not invented brands).
- Testimonials: **RUMOR** (bistro, Lyon), **SORA** (japonais, Paris),
  **KNOCK KNOCK** (burgers, Nantes) — each a different ambiance carried by a
  quote about the workflow (menu → site, Sunday night → Monday live, weekly
  menu).
- Menu preview uses real dishes (Burrata, Tagliatelle al Ragù, Daurade grillée,
  Ravioli di Burro) to sell the "menu source de vérité" mechanism.

## Guardrails for future work

- Never add em dashes to visible copy; never pure `#000`/`#fff`; never flame on
  flame-soup — see DESIGN.md for full laws.
- New personas must each get their own typography/color, never one generic
  template repeated.
- Regulatory copy must stay plain and factual (INCO, 14 allergènes,
  origine des viandes, décret 2024-171), never legal-ese.
- Keep the validation loop visible in every demo of the product; remove it and
  you remove the trust the whole brand is built on.

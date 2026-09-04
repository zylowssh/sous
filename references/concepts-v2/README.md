# Sous page concepts v2

Generated with the built-in ImageGen tool as implementation references. Marketing PNGs each describe one horizontal section. Auth and signup PNGs describe screens or wizard states, while dashboard PNGs describe separate routes inside one shared shell. No application code was changed.

Before implementing these references with an AI coding agent, read [AI-IMPLEMENTATION-GUIDE.md](./AI-IMPLEMENTATION-GUIDE.md). It defines section boundaries, route mapping, responsive translation, shared shells, interaction requirements and reference-conflict rules.

## Shared art direction

- Brand: SOUS., warm restaurant editorial rather than generic SaaS.
- Palette: cream `#F4EFE5`, paper `#FDFAF3`, ink `#171310`, coal `#0E0C0A`, flame `#E4572E`, olive `#CFCAAD`, butter `#EEC461`.
- Type: compressed display similar to Anton, Inter-like UI text, one handwritten Caveat-like annotation maximum per view.
- Material language: kitchen ticket rails, torn menu paper, approval stamps, thin rules, restrained shadows and tactile grain.
- Product truth: the POS/menu is the source of truth; Sous prepares drafts; nothing publishes before the restaurant validates.
- Avoid: generic SaaS cards, glassmorphism, gradients, fake metrics, purple/blue AI styling, repeated restaurant templates and em dashes in visible copy.

## Produit prompt set

1. `01-hero.png`: one instruction becomes a validated website, QR menu and printed menu.
2. `02-source-de-verite.png`: POS-to-web flow shown as tickets on a kitchen rail.
3. `03-validation.png`: dark WhatsApp draft and explicit approve/modify loop.
4. `04-identites.png`: Mamma Rosa, Knock Knock and Sora as three genuinely distinct identities.
5. `05-conformite.png`: allergens, meat origin, TTC pricing and decree 2024-171 built into a menu.
6. `06-cta.png`: vermilion close built around a single `PRÊT À SERVIR` ticket.

## Exemples prompt set

1. `01-hero.png`: three contrasting restaurant sites presented as the proof of customization.
2. `02-index.png`: editorial contact sheet for six restaurant identities and category filters.
3. `03-mamma-rosa.png`: warm Italian case study with desktop, mobile, menu and reservation views.
4. `04-knock-knock.png`: loud coal, neon and butter burger-club case study.
5. `05-sora.png`: quiet, precise Japanese case study with bilingual menu and reservation flow.
6. `06-cta.png`: blank custom canvas inviting the next restaurant to become the next example.

## Tarifs prompt set

1. `01-hero-plans.png`: exact Essentiel, Pro and Groupe offers on one restaurant service-menu sheet.
2. `02-comparaison.png`: exact plan matrix with Pro highlighted and multi-site features reserved for Groupe.
3. `03-accompagnement.png`: included onboarding and human support shown as five tickets on a rail.
4. `04-pro.png`: Pro value demonstrated through a real promotion and reservation workflow.
5. `05-faq.png`: accessible FAQ paired with a human support contact.
6. `06-cta.png`: decisive 49-euro closing CTA with no hidden fees and no commitment.

## Signup prompt set

1. `signup/01-restaurant.png`: restaurant intake ticket paired with a live, image-free site preview.
2. `signup/02-account.png`: high-contrast account creation form with a physical owner slip.
3. `signup/03-connect.png`: POS, photo and opening-hours setup as interactive tickets on a kitchen rail.
4. `signup/04-direction.png`: five distinct restaurant identities presented as a selectable contact sheet.
5. `signup/05-review.png`: final onboarding summary and explicit validation promise on a clipped order ticket.

## Sign-in prompt set

1. `signin/01-login.png`: focused login receipt on coal, with a direct path back to account creation.

## Legal prompt set

1. `legal/01-mentions-legales.png`: legal register with a fixed contents index and readable two-column document.
2. `legal/02-confidentialite.png`: privacy policy organized as five ruled rows with rights highlighted in olive.
3. `legal/03-cgu.png`: terms-of-use contract with a seven-part index and explicit client-validation reminder.

## 404 prompt set

1. `404/01-not-found.png`: oversized 404 typography and a stamped missing-table reservation ticket.

## Dashboard prompt set

1. `dashboard/01-overview.png`: overview with status tickets on a kitchen rail, activity ledger, Sous AI pad and performance strip.
2. `dashboard/02-sous-ai.png`: assistant conversation beside a locked draft preview awaiting explicit validation.
3. `dashboard/03-site.png`: site settings sheet, live preview, publication status and maintenance controls.
4. `dashboard/04-site-editor.png`: section inspector and full-width restaurant-site editing canvas.
5. `dashboard/05-menu.png`: category index, dense menu ledger, dish editor and compliance strip.
6. `dashboard/06-reservations.png`: table timeline with booking slips and a detailed reservation receipt.
7. `dashboard/07-medias.png`: gallery-led media contact sheet with folders, metadata and storage state.
8. `dashboard/08-statistiques.png`: restrained analytics sheet with one primary chart, source bars and ranked dishes.
9. `dashboard/09-integrations.png`: connected-service tickets with the POS-to-menu-to-site-to-QR flow made explicit.
10. `dashboard/10-parametres.png`: predictable settings index, general fields, preferences and separated danger zone.
11. `dashboard/11-profil.png`: personal record sheet, owner credential and password controls.
12. `dashboard/12-contact.png`: message form, human support contact sheet and compact FAQ.
13. `dashboard/13-aide.png`: searchable help manual with indexed categories, articles and support resources.

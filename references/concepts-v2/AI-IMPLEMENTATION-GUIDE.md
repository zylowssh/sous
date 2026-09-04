# Sous Concept V2: AI implementation guide

This document explains how an AI coding agent must interpret and implement the visual references in this folder.

The PNG files are visual specifications. They are not production assets and must never be rendered as full-page background images. Recreate the layouts with semantic React components, CSS, real controls, project images and the existing Sous icon components.

## 1. First identify the page family

The folders describe three different kinds of composition. Do not implement them all in the same way.

| Reference folder | Meaning of one PNG | How the files combine |
| --- | --- | --- |
| `produit/` | One full-width marketing section | Six ordered sections form `/produit` |
| `exemples/` | One full-width marketing section | Six ordered sections form `/exemples` |
| `tarifs/` | One full-width marketing section | Six ordered sections form `/tarifs` |
| `signup/` | One state of the signup wizard | Only one state is visible at a time on `/signup` |
| `signin/` | One complete authentication screen | The image describes `/login` |
| `legal/` | One separate legal route | The three images do not stack together |
| `404/` | One complete error screen | The image describes the catch-all route |
| `dashboard/` | One dashboard route inside a shared shell | Each image is a separate route, never a vertical section |

The numeric filename prefix establishes order within a page or flow. It does not mean every numbered image should be visible simultaneously.

## 2. Global non-negotiable rules

### Build the interface, do not display the reference

- Never place a Concept V2 PNG in an `<img>` tag as the page implementation.
- Recreate paper, rules, rails, stamps, inputs, navigation and typography in code.
- Use real project photography only where the reference clearly contains photography.
- Use CSS or existing SVG components for simple icons and physical details.
- Keep text selectable, controls interactive and layouts responsive.

### Use the real Sous identity

- A branded lockup is the existing two-stroke `SousMark` followed by the visible word `sous.` or `SOUS.` according to the surrounding design.
- Use the established Sous icon, not a generic flame glyph, flame emoji or invented flame SVG.
- Do not replace the lockup with `/brand/sous-logo.svg` when the existing component-based icon and text lockup is expected.
- Do not copy any accidental `Plato` text from older references. The product name is always Sous.
- Decorative steam or flame-like shapes may appear as background texture only when the reference calls for them. They are never substitutes for the logo.

### One real navigation shell

- A route gets at most one real marketing navbar, dashboard sidebar or compact auth/legal header.
- Ignore any repeated marketing navbar accidentally visible inside a section reference.
- A restaurant-site preview may show its content and hierarchy, but do not add a decorative fake navigation row unless that navigation is itself being edited or tested.
- Never put a second navbar at the top of every marketing section.
- Never put a second dashboard sidebar inside a dashboard route component.

### One real footer

- Marketing routes have one shared footer after the final section.
- Do not reproduce a black proof strip as a fake footer inside a CTA.
- CTA proof points such as `Site personnalisé`, `Menu et QR synchronisés` and `Validation avant publication` belong with the CTA message.
- Legal routes may use one shared footer after all legal content. The footer is not repeated per content block.
- Auth, dashboard and 404 screens do not need the marketing footer.

### Product truth

- The POS or menu is the source of truth.
- Sous prepares changes and drafts.
- Nothing publishes before explicit restaurant approval.
- Any UI that suggests silent publication is incorrect.

## 3. Shared visual system

Use the existing project tokens instead of sampling slightly different colors from every PNG.

| Role | Value | Use |
| --- | --- | --- |
| Cream | `#F4EFE5` | Main page ground |
| Paper | `#FDFAF3` | Documents, tickets and forms |
| Ink | `#171310` | Primary text and rules |
| Coal | `#0E0C0A` | Dark sections and dashboard sidebar |
| Flame | `#E4572E` | Primary actions and active state |
| Olive | `#CFCAAD` | Secondary surface and calm emphasis |
| Butter | `#EEC461` | Small warning or annotation accent |

Typography roles:

- Anton or `font-display`: short, high-impact headings and ticket labels.
- Inter or `font-sans`: forms, navigation, body copy, tables and dashboard data.
- Caveat or `font-hand`: one handwritten annotation per viewport at most.
- Never use display type for long body copy or dense dashboard data.

Material roles:

- Paper edges, clips, rails and stamps must support hierarchy or state.
- Use a rail when several related items belong to one process.
- Use a stamp for a meaningful status such as selected, connected, confirmed or awaiting approval.
- Use thin rules for grouping before reaching for a card.
- Shadows stay restrained and physically plausible.
- Do not use glassmorphism, gradient text, decorative gradients or generic floating blobs.
- Avoid nested cards and repeated identical card grids.

## 4. Marketing routes: one image equals one section

The Product, Examples and Pricing folders each define one scrolling route with six ordered sections.

### Required composition model

```text
MarketingPageShell
├── Navbar, rendered once
├── Scroll progress and section navigation
├── main
│   ├── Section 01
│   ├── Section 02
│   ├── Section 03
│   ├── Section 04
│   ├── Section 05
│   └── Section 06, final CTA
└── Footer, rendered once
```

Every PNG maps to one section component. Do not merge two references into one component. Do not split one reference into several unrelated page sections unless responsive reflow requires internal subregions.

### Desktop artwork behavior

- Design on a logical 1440px-wide artboard.
- Each section owns its own background, height and composition.
- Scale the artboard to the available width through one outer frame.
- Default logical section height is 810px.
- Taller references may opt into an explicit height such as 960px or 1100px.
- Keep fixed artwork coordinates inside that section only. Never position one section relative to another section's artboard.
- On desktop, stacked sections are sticky at the top of the viewport.
- As the next section arrives, the previous section may scale down by about 6 percent and darken slightly.
- The first section has no rounded top edge or elevated shadow.
- The final CTA is not sticky. It closes the sequence and flows into the real footer.
- Respect `prefers-reduced-motion` by removing the stack transform and brightness animation.

### Mobile and tablet behavior

Do not shrink the 1440px desktop artboard until it becomes unreadable.

Below 1024px:

- Render a native responsive version of the same content.
- Preserve the section's message, order, palette and primary action.
- Change the composition to one or two columns as space allows.
- Replace tiny desktop decorations with readable native controls.
- Images keep meaningful alt text and predictable aspect ratios.
- Pricing becomes a readable plan stack or compact comparison.
- FAQ content uses semantic `<details>` and `<summary>` controls.
- CTAs remain at least 44px high.

### Product route order

| Reference | Section responsibility |
| --- | --- |
| `produit/01-hero.png` | Explain one instruction becoming three synchronized surfaces |
| `produit/02-source-de-verite.png` | Show the POS-to-menu-to-site-to-QR pipeline |
| `produit/03-validation.png` | Explain draft, modification and explicit approval |
| `produit/04-identites.png` | Prove that restaurants retain distinct identities |
| `produit/05-conformite.png` | Show allergens, origins, availability and TTC compliance |
| `produit/06-cta.png` | Close with one decisive signup action |

### Examples route order

| Reference | Section responsibility |
| --- | --- |
| `exemples/01-hero.png` | Establish customization through contrasting restaurant identities |
| `exemples/02-index.png` | Provide the real filterable restaurant index |
| `exemples/03-mamma-rosa.png` | Present the Mamma Rosa case study |
| `exemples/04-knock-knock.png` | Present the Knock Knock case study |
| `exemples/05-sora.png` | Present the Sora case study |
| `exemples/06-cta.png` | Invite the next restaurant to become the next example |

The category controls in the index must actually filter. Case-study CTAs must route with explicit style metadata, for example `/signup?style=mamma-rosa`.

### Pricing route order

| Reference | Section responsibility |
| --- | --- |
| `tarifs/01-hero-plans.png` | Introduce Essentiel, Pro and Groupe |
| `tarifs/02-comparaison.png` | Provide the exact feature comparison |
| `tarifs/03-accompagnement.png` | Explain onboarding and human support |
| `tarifs/04-pro.png` | Demonstrate the Pro workflow |
| `tarifs/05-faq.png` | Answer pricing questions with accessible disclosure controls |
| `tarifs/06-cta.png` | Close on the 49 euro starting price and signup |

Plan actions must carry explicit route metadata such as `/signup?plan=pro`. Do not infer behavior by matching visible button text.

## 5. Signup: five wizard states, not five stacked sections

The five files in `signup/` are sequential states of one `/signup` route.

```text
Signup page
├── Compact Sous header
├── Persistent progress state, steps 1 through 5
├── Current step content, exactly one visible
├── Persistent form data shared across steps
└── Back and continue actions
```

State mapping:

| Reference | State | Required behavior |
| --- | --- | --- |
| `signup/01-restaurant.png` | Restaurant identity | Inputs update the image-free restaurant-site preview live |
| `signup/02-account.png` | Owner account | Collect identity, email, phone and password |
| `signup/03-connect.png` | Existing tools | Let users mark menu, media and hours tasks as connected or complete |
| `signup/04-direction.png` | Visual direction | Select exactly one restaurant style with a visible selected state |
| `signup/05-review.png` | Review and consent | Summarize data, accept legal terms and create the account |

Implementation rules:

- Keep all entered values when moving backward or forward.
- Validate only the fields required for the current step.
- Move keyboard focus to the new step heading after a transition.
- The progress indicator must expose the current step to assistive technology.
- On step 1, the live preview updates restaurant name, cuisine, address, domain and Instagram without using photographs.
- On mobile, place the live preview below the step 1 form.
- The header always includes `Déjà un compte ? Se connecter` linking to `/login`.
- `/commencer` is only a legacy redirect to `/signup`; never create a separate Commencer page.

## 6. Sign-in: one focused auth screen

`signin/01-login.png` describes the complete `/login` route.

- Use a compact Sous lockup and a link to `/signup`.
- Do not render the marketing navbar, dashboard sidebar or marketing footer.
- The login ticket is the main form, not a decorative layer behind another form card.
- Include email, password, show/hide password, forgotten-password affordance, loading state and inline error state.
- On success, honor a valid local `next` route before defaulting to `/dashboard`.
- On mobile, stack the introduction above the form and remove nonessential overlap.

## 7. Legal pages: separate routes sharing one legal shell

The legal images do not form one page.

| Reference | Route |
| --- | --- |
| `legal/01-mentions-legales.png` | `/mentions-legales` |
| `legal/02-confidentialite.png` | `/confidentialite` |
| `legal/03-cgu.png` | `/cgu` |

Both routes share:

- One compact header containing the Sous lockup and `Retour à l’accueil`.
- No marketing navigation bar.
- A readable document surface that can continue vertically below the reference viewport.
- A sticky or nearby section index on desktop.
- A compact jump-link index on mobile.
- Real headings with stable anchor IDs.
- Body measure near 65 to 75 characters.
- One contact block at the end of the complete document.
- One real footer after the content if the shared legal shell uses a footer.

The reference shows the first desktop viewport, not the maximum legal-copy length. Preserve complete approved legal text even when it extends beyond the pictured paper sheet. Never shrink the text to force everything into one viewport.

## 8. The 404 route: one complete recovery screen

`404/01-not-found.png` describes the catch-all route.

- It is one viewport, not a marketing section.
- Render the Sous lockup once, without a marketing navbar.
- Keep one obvious `Retour à l’accueil` action.
- Preserve the oversized 404 and missing-reservation-ticket idea.
- The decorative ticket must not hide the error heading from screen readers.
- Set `noindex` metadata.
- On mobile, keep the error copy and recovery action above the decorative receipt.

## 9. Dashboard: thirteen routes sharing one persistent shell

The dashboard folder does not describe a long scrolling dashboard page. Each PNG maps to one route inside `DashboardLayout`.

```text
DashboardLayout
├── Desktop sidebar, rendered once
├── Mobile top bar and drawer, rendered once
├── Route-aware metadata
└── Outlet
    └── Current dashboard page content
```

Route mapping:

| Reference | Route | Active shell state |
| --- | --- | --- |
| `dashboard/01-overview.png` | `/dashboard` | Accueil |
| `dashboard/02-sous-ai.png` | `/dashboard/ai` | Sous AI |
| `dashboard/03-site.png` | `/dashboard/site` | Site |
| `dashboard/04-site-editor.png` | `/dashboard/site/editeur` | Site |
| `dashboard/05-menu.png` | `/dashboard/menu` | Menu |
| `dashboard/06-reservations.png` | `/dashboard/reservations` | Réservations |
| `dashboard/07-medias.png` | `/dashboard/medias` | Médias |
| `dashboard/08-statistiques.png` | `/dashboard/statistiques` | Statistiques |
| `dashboard/09-integrations.png` | `/dashboard/integrations` | Intégrations |
| `dashboard/10-parametres.png` | `/dashboard/parametres` | Paramètres |
| `dashboard/11-profil.png` | `/dashboard/profil` | User menu, no main navigation item |
| `dashboard/12-contact.png` | `/dashboard/contact` | Contactez-nous |
| `dashboard/13-aide.png` | `/dashboard/aide` | Centre d’aide |

Dashboard shell rules:

- Desktop sidebar is fixed and approximately 230 to 256px wide.
- The sidebar contains the Sous lockup once, primary navigation, support links and the restaurant/user switcher.
- Only one navigation destination is active.
- Profile is indicated through the user menu, not by highlighting Accueil.
- Each page provides only its workspace content and topbar configuration.
- Do not duplicate the sidebar markup in every page component.
- Use one shared component vocabulary for buttons, fields, tabs, badges, toggles, tables, empty states and errors.
- Keep Inter for all operational controls and data.
- Reserve tactile tickets and rails for grouping that has a real operational meaning.
- Do not force every data group into a paper ticket.
- On screens below 1024px, replace the fixed sidebar with a top bar and accessible drawer.
- Tables may scroll horizontally when preserving columns is more useful than collapsing them.
- Editors use familiar responsive panels. Do not scale the entire desktop dashboard like an image.

Dashboard interaction requirements:

- Overview links open their actual routes.
- Sous AI drafts remain unpublished until validation.
- Site editor publish, undo, device preview and section selection controls work.
- Menu search, filters, selection, editing and availability controls work.
- Reservation date, view, booking selection and detail actions work.
- Media search, folders, selection, upload and view controls work.
- Statistics date range and tabs update displayed data.
- Integrations expose connected, disconnected, loading and error states.
- Settings and profile forms show dirty, saving, success and error states.
- Contact submits a real form adapter and announces success or error.
- Help search and article/category navigation work.

## 10. Responsive translation rules

Reference images show desktop composition. Responsive implementation is a translation, not a crop.

### Desktop, 1024px and above

- Marketing pages use the scalable 1440px section artboard.
- Dashboard pages use the fixed sidebar and fluid workspace.
- Auth and legal pages may keep asymmetric split compositions.

### Tablet, 768px to 1023px

- Marketing sections use native two-column or stacked layouts.
- Dashboard sidebar becomes a drawer.
- Inspectors and detail panels may become a secondary column or slide-over triggered by an explicit control.
- Preserve tap targets and readable data density.

### Mobile, below 768px

- Use one primary column.
- Put the task before the decorative artifact.
- Convert horizontal indexes to scrollable tabs or disclosure lists.
- Put selected-item editors below lists or open them as route/state-driven sheets only when necessary.
- Keep primary actions reachable without covering content.
- Avoid absolute positioning for essential content.

## 11. Actions and state must be explicit

- Use links for navigation and buttons for state changes.
- Route actions use explicit `to`, `href`, `data-route` or action metadata.
- Section jumps use explicit IDs and `data-scroll` or anchor links.
- Never determine behavior by matching visible button text.
- Every control needs hover, focus, active, disabled, loading, success and error treatment when applicable.
- Preserve visible keyboard focus.
- Use semantic tabs, switches, tables, labels, details and summaries.
- Announce asynchronous results through appropriate live regions.

## 12. Suggested component boundaries

Prefer this architecture over one large page file:

```text
src/
├── components/
│   ├── MarketingPageShell
│   ├── DesktopArtworkFrame
│   ├── NativeEditorialSection
│   ├── DashboardLayout
│   ├── DashboardTopbar
│   ├── SousMark
│   └── shared form, status and action primitives
├── product/sections/
│   └── one component per Product PNG
├── exemples/sections/
│   └── one component per Examples PNG
├── tarifs/sections/
│   └── one component per Pricing PNG
└── pages/
    ├── one orchestrator per route
    └── one dashboard workspace per dashboard PNG
```

Marketing route orchestrators should store section metadata in ordered arrays. Each entry owns:

```js
{
  id,
  label,
  component,
  background,
  desktopHeight,
  stack,
  mobile: {
    eyebrow,
    title,
    copy,
    image,
    items,
    action
  }
}
```

Visible labels do not own behavior. Actions do.

## 13. Reference conflict rules

When a generated PNG conflicts with the product or existing code, use this priority:

1. The latest explicit user instruction.
2. Product truth and approved route behavior.
3. Exact approved copy and real data requirements.
4. Shared Sous identity and design tokens.
5. The reference image's composition and styling.

Examples:

- If a PNG accidentally contains `Plato`, implement `Sous`.
- If a PNG shows a flame where the Sous icon should be, use `SousMark`.
- If a section PNG contains a repeated navbar, omit it and keep the one shared navbar.
- If a CTA PNG contains a fake footer strip, move its proof points into the CTA body and keep the real footer after the page.
- If legal copy does not fit in the pictured viewport, extend the page vertically.
- If an image-generated control cannot work as drawn, use the closest standard accessible control without changing the hierarchy.

## 14. Completion checklist for an AI coding agent

Before declaring a page complete, verify:

- The correct reference-to-route model was used.
- Marketing references became separate ordered sections.
- Signup references became mutually exclusive wizard states.
- Dashboard references became separate routes inside one shared shell.
- Legal references became three separate readable routes.
- The real Sous icon and wordmark treatment are used everywhere.
- No old Plato branding remains.
- No repeated fake navbars or fake CTA footers remain.
- Reference PNGs are not being used as the implemented interface.
- Buttons and links have explicit actions.
- Interactive previews, filters, forms, tabs and disclosures work.
- Desktop, tablet and mobile layouts are intentionally composed.
- Keyboard navigation, focus, labels, contrast and reduced motion are handled.
- No publishing occurs without an explicit validation action.
- Visual QA was performed against each relevant PNG at desktop size and at least one mobile viewport.

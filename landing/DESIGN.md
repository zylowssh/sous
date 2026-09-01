# Sous — DESIGN.md

Derived from the shipping Vite + React + Tailwind landing code, not aspirational.

## Palette (Tailwind tokens)
- cream `#F4EFE5` — page ground (tinted warm, never `#fff`)
- paper `#FDFAF3` — card ground
- ink `#171310` — text black-coffee (never `#000`)
- coal `#0E0C0A` — dark sections (tell, hero card, knock knock card)
- flame `#E4572E` — tomato accent, the voice color
- olive `#CFCAAD` — section ground where warmth without shouting is needed (how)
- butter `#EEC461` — sticker / post-it / highlight

Commitment: Committed. Flame carries ~1/3 of page across hero card, testimonials
section, marquee, accents. Use flame on ink or cream, never flame-on-dark-soup.

## Type
- display: Anton (all-caps, tight) — headlines, menu-board voice
- hand: Caveat — the single handwritten annotation voice (captions, asides,
  "validé par le chef.", sticker copy). Max one per view.
- sans: Inter — small UI / captions / body text
- serif: Georgia — blockquotes and editorial pull-quotes (testimonial surface)

Scale steps: 4xl/5xl/6xl display with 1.05–1.1 leading; body 14–16px; caps labels
12px minimum with controlled tracking. Light-on-dark leading bump 0.05–0.1.

## Elevation / shape
- shadow-card `0 12px 24px -8px rgba(23,19,16,.12)` — small cards
- shadow-photo `0 20px 40px -12px rgba(0,0,0,.25)` — imagery
- Border radius: small (rounded-sm/md) for cards, rounded-full for images in
  circular frames. No large-radius everywhere; the page is print-like.

## Texture / marks
- SousMark: two-stroke steam, currentColor-recolorable (sous-icon.svg source).
- Doodles are line SVGs (stroke `currentColor`, 2–2.5 weight): hand-arrows,
  asterisks, scribble-circles. They are the joke-delivery system.
- Grain overlay: 5% fractal noise, mix-blend-multiply, fixed, pointer-events none.

## Motion laws
- Do not animate layout properties. Reveals animate transform/opacity only.
- MaskWords: word-by-word rise 700ms cubic-bezier(.22,1,.36,1), staggered.
- Reveal: translateY(32px)→0, 700ms, same curve, `--d` delay per element.
- Parallax: translateY driven on scroll, passive rAF-throttled.
- Marquee 30s linear infinite; floaty 5s ease-in-out for doodles.
- Magnet / Tilt: transform-only hover essentials (buttons, cards). Ease-out only.
- prefers-reduced-motion: kill reveals/masks/marquee; static.
- Desktop: sections stack/snap (section-stack + useStackSnap); goToSection walks
  main children by offsetHeight to find real anchors.

## Composition laws
- Section alternation: cream ↔ olive ↔ paper ↔ coal ↔ flame ↔ cream. Adjacent
  sections must contrast. Testimonial is a flame drench (Commited, permitted).
- Max container: max-w-7xl; sections full-bleed with px-4/px-8.
- Asymmetric grids everywhere: 0.85fr/1.15fr, 0.75fr/1.6fr, 0.9fr/1.6fr, lg:grid-cols-12.
- One big display headline per section; one hand annotation max; caps labels for
  metadata; arrows as micro-CTA affordance.
- Imagery: Unsplash food/restaurant photography, always object-cover in a
  non-rectangular frame (rotated card, rounded-full, aspect-video crop). No
  decorative colored placeholders.

## Sections / composants (état actuel)

Page montée dans `App.jsx`: Navbar -> Hero -> TemplateSection -> HowItWorks ->
Examples -> TellSous -> MenuSection -> BigMarquee -> BeforeAfter -> Tarifs ->
FAQ -> HelpSection -> Footer. Chaque section principale est un `.section-stack`
(`Section.jsx`).

- **Hero** : `hero-img.webp` responsive (pas de crops de Unsplash ici), bouton d'un
  doigt `hand`, titre display Anton, masque mobile "sous-marquee".
- **LogoMarquee** : séquence `example1..example6` (pas de faux noms de
  restaurants), masque horizontal à dégradé, asterisque en séparateur.
- **Examples** : la vraie vitrine. `CardSwap` (react-bits, gsap) empile
  4 "navigateurs" vides en 16:9 — chrome réduit : feux Safari (rouge/jaune/
  vert pleins) + pilule « example.com ». Aucun faux site, aucune capture.
  Rotation douce 6s, pause au survol. Empilement bottom-right de la section,
  légende main au-dessus (cf. `CardSwap.css` pour les échelles media).
- **BeforeAfter** : fond `flame` intégral (lavage Committed). 3 cartes : RUMOR
  (2 col), Sora (1 col), KNOCK KNOCK pleine largeur. Pas d'image.
- **MenuSection** : carte "Aperçu du menu" en pleine largeur + 2 cartes
  photo plein-bords à l'italienne : plat du jour (prix barré -> prix à jour) et
  la carte "avis de Sous" (Ravioli, recette mise à jour). Marqueurs `MarkChip` :
  **Nouveau** (flamme pleine) / outline pour `Prix à jour`, `Recette ajustée`.
- **TellSous** : la démo chat. Séquençage `idle → thinking bref (700ms, avec
  option d'afficher immédiatement) → typing rapide (45ms/mot) → done`. Le
  brouillon peut être modifié, enregistré, puis validé. La confirmation nomme
  explicitement le site et le QR. Clic sur chip = rejouer.
- **Loader** : aucun splash temporisé au chargement. `brand/sous-loader.svg`
  reste réservé au feedback bref de la démo TellSous.
- **HelpSection** : accompagnement humain en trois moments, avant lancement,
  prise en main et après mise en ligne, avec contact direct et rappel de la
  validation obligatoire.

## Interactions & micro-UI

- Boutons magnet/tilt; cartes photo zoom image au survol (transform only).
- Révélation : `.reveal` (translateY 32px → 0, 700ms, `.22,1,.36,1`), délai par
  `--d`; masques de mots `.mask-line` (rise + légère rotation, `--wd`).
- Marquee 30s linéaire, `sous-marquee` (mobile des lettres du logo) 8s;
  `floaty` 5s ease-in-out pour doodles; `draw` pour le trait de vapeur du logo.
- Accordéon FAQ; chips plan PRO mis en avant. Tout est `aria-*`/focus digne.
- Navigation latérale : chaque repère reste large pour la cible tactile, tandis
  que son trait s’anime par `scaleX` depuis la droite; libellé en infobulle au
  survol ou au focus.

## Responsive & stacking

- Mobile/tablet : chaque section est une carte arrondie pleine page (flushcards)
  — cf. `.section-stack` (margin 0.75rem, `min-height: 100svh - 1.5rem`).
- Desktop (≥1024px) : stack sticky plein écran (`top: 0`, coins hauts arrondis,
  ombre portée haute), zoom avant sur la section active via `useStackSnap`.
- CardSwap : `640×580` en "stack", descendançage en tablette/mobile via
  `CardSwap.css` (scale 0.75 / 0.58, translations calibrées pour rester dans la
  section).

## Accessibilité & motion

- `prefers-reduced-motion: reduce` : scroll lisse off, reveal/mask/draw/text
  statiques, toutes les animations ~0 (cf. `index.css`).
- TellSous passe directement au brouillon avec `prefers-reduced-motion`.
- Navigation : boutons `aria-expanded`/`aria-label`, focus visibles, cibles
  d'ancres calculées par `offsetHeight` (pas de hash URL).

## Assets

- `public/brand/sous-icon.svg` : logo deux traits de vapeur, `currentColor`.
- `public/brand/sous-loader.svg` : loader flamme (deux paths `#E4572E`).
- `public/hero-img.webp` et `public/hero-img-768.webp` : visuel hero responsive.
- `public/og-sous.jpg` : carte sociale 1200×630.
- `public/fonts/*.woff2` : Anton, Caveat et Inter auto-hébergées; licences OFL
  conservées dans `assets-source/font-licenses/`.
- Doodles : SVG ligne (stroke `currentColor`, poids 2–2.5) — arrows, asterisks,
  message, cercles scribble. Système de livraison de la blague.

## Lois de copie (rappel impl)

- Français, **zéro em dash** (`—`) dans le texte visible — interdit même en
  libellé; autorisé uniquement dans les commentaires de code.
- `uppercase` fréquent (display Anton, libellés); les check-tests doivent donc
  comparer en `toLowerCase()`.
- Jamais de `#000` / `#fff`; flamme sur ink/cream seulement.

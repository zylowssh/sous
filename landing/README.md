# Sous — Landing

Page de lancement du produit **Sous** : le site + l'assistant IA des restaurants
français. La démo interactive simule le vrai principe produit — on envoie un
message à Sous, Sous propose un brouillon, le chef valide, rien ne se publie sans
lui.

Stack : **Vite 5** + **React 18** + **Tailwind 3**. GSAP est présent pour le
composant `CardSwap` (react-bits).

## Pré-requis

- Node **18+** (Vite 5)
- npm

## Lancer le projet

```bash
cd landing
npm install
npm run dev
```

Ouvrir l'URL affichée (par défaut `http://localhost:5173/`).

L'onglet voyage-de-développeur (esbuild Nest Binary Reflection) : si npm signale
un postinstall bloqué par `allow-scripts`, le build fonctionne quand même
(préréglage des binaires) — lancer le build pour vérifier.

## Scripts

| Commande        | Effet                                              |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Serveur de dev Vite (HMR)                          |
| `npm run build` | Build de production -> `dist/`                     |
| `npm run preview` | Prépare le build en local (après `npm run build`) |

Pas de lint ni de test configurés — la validation se fait par
`npm run build` + vérification visuelle/vérification DOM en headless.

## Structure

```
landing/
  src/
    App.jsx                 # assemblage des sections, stack scroll, loader
    data.js                 # images IMG.*
    index.css               # section-stack, mask-line, reveal, marquee, reduced-motion
    components/
      Section.jsx           # wrapper .section-stack (mobile: cartes flottantes,
                            # desktop: sticky stack)
      Reveal.jsx            # apparition au défilement (IO, seuil 0.2)
      fx.jsx                # SousMark, doodles, DotsNav, ScrollProgress,
                            # Grain, BigMarquee, useStackSnap, goToSection
      doodles.jsx           # logo + icônes trait (arrows, asterisks, message)
      Navbar.jsx  Footer.jsx  Loader.jsx
      Hero.jsx     LogoMarquee.jsx   HowItWorks.jsx
      Examples.jsx  CardSwap.jsx/.css
      BeforeAfter.jsx       # témoignages (fond flame)
      MenuSection.jsx       # aperçu du menu + avis de Sous (cartés sous la forme
                            # "plat du jour", marqueurs de diff), TellSous démo
      TellSous.jsx          # simulacre de chat (thinking -> typing -> publié)
      TemplateSection.jsx   # ambiances
      FaqPricing.jsx        # FAQ + plans (ESSENTIEL / PRO / GROUPE)
  public/
    brand/
      sous-icon.svg         # logo deux traits de vapeur
      sous-loader.svg       # animation loader au niveau de la flamme (#E4572E)
    hero-img.png
  DESIGN.md
  PRODUCT.md
```

## Fonctionnement clé

- **Stack scaffati**: mobile/tablet = carte arrondie plein écran, desktop = stack
  sticky plein écran (`Section.jsx` + `useStackSnap`); `goToSection` navigue
  d'ancre en ancre par `offsetHeight`.
- **Reveal / MaskWords / marquee** : transform/opacity uniquement, courbe
  `cubic-bezier(.22,1,.36,1)`, `prefers-reduced-motion` désactive tout.
- **TellSous.jsx** : `idle → thinking (5 s, loader animé) → typing (mot/mot,
  110 ms) → done (carte "Le brunch arrive.", flamme statique)`. Le clic sur un
  chip relance la séquence. Le loader partagé sert aussi au splash de la page.
- **CardSwap.jsx** : réadaptation de react-bits (gsap), 4 navigateurs vides
  16:9 (feux de signalisation style Safari + « example.com »), rotation elastic
  6 s, pause au survol. CSS de marque dans `CardSwap.css` (cartes coal, bordure
  cream/22).
- Le marquee de logos affiche **example1…example6** (pas de faux noms de
  restaurants).
- **MenuSection** : la démo de mise à jour montre des marqueurs de diff
  (`Nouveau`, `Prix à jour`, `Recette ajustée`) et un « plat du jour » avec prix
  barré → nouveau prix.

## Conventions importantes (résumé)

- Tout le texte visible est en **français**, **sans em dash** (`—`) dans la page
  (autorisé dans les commentaires de code).
- Jamais de `#000` ni de `#fff` purs — `ink` `#171310`, `cream` `#F4EFE5`.
- Pas de texte en dégradé, pas de glassmorphism, palettes comme
  `tailwind.config.js` (`flame`, `butter`, `olive`, `coal`, `paper`).
- Détails complet dans [DESIGN.md](./DESIGN.md) et [PRODUCT.md](./PRODUCT.md).

## Dépannage

- Port déjà occupé : `npm run dev -- --port 5174 --strictPort` pour forcer un
  autre port.
- Vérifier qu'un serveur `preview`/`dev` n'est pas resté en arrière-plan :
  `Get-NetTCPConnection -LocalPort <port> -State Listen`.
- Régénérer les fichiers `dist/` obsolètes : `npm run build`.
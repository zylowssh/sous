# Sous — landing page

Refonte de la landing page sous l'identité **Sous**, alignée sur le pitch produit :
la caisse comme source de vérité, la boucle de validation, l'échelle d'autonomie,
le menu QR et la conformité française.

C'est une **copie** : le projet Plato d'origine (`../src`, `../dist`) n'a pas été touché.

## Démarrer

```bash
npm install
npm run fonts    # une seule fois — télécharge les polices en local (voir plus bas)
npm run dev
```

## Ce qui a changé par rapport à Plato

**Récit.** L'ancienne page vendait un générateur de site ("zéro template, en ligne en
1 minute") — la catégorie la plus encombrée du web, et pas ce que fait le produit.
La nouvelle vend la maintenance : le site s'écarte de la carte, la caisse a la vérité,
vous dictez, Sous prépare, vous publiez.

**La section chat.** C'était le contresens le plus coûteux : Plato répondait
« C'est fait ✓✓✓ » — publication silencieuse, l'inverse exact du différenciateur.
`ConfirmLoop.jsx` montre maintenant un brouillon avec deux boutons, **Publier** et
**Modifier**, et un état « rien n'est en ligne » tant que vous n'avez pas tranché.
La section est interactive : cliquer change réellement d'état.

**Sections ajoutées** (absentes de la version Plato, ce sont pourtant les cinq raisons
de vous choisir en France) : synchronisation caisse (L'Addition, Zelty, Lightspeed),
échelle d'autonomie, menu QR en salle, conformité INCO / décret 2024-171 / prix TTC,
et le point WhatsApp dit franchement.

**Ton.** Anton en capitales, orange flame, post-its et emoji 😬/😍 promettaient de la
vitesse ; le produit demande qu'on lui confie une donnée à risque légal. Palette
crème / encre / vert profond, serif éditorial, une seule annotation manuscrite.

**Mouvement.** Le scroll-snap, l'empilement collant des sections et l'aimant de
défilement ont sauté : sur mobile ils faisaient démarrer la page à la deuxième
section. Le scroll est redevenu prévisible.

## Points à traiter avant la mise en ligne

1. **Polices** — `npm run fonts` télécharge Fraunces, Inter et Caveat dans
   `public/fonts`. Elles sont ensuite servies depuis votre domaine : plus aucun appel
   à `fonts.gstatic.com`, donc plus d'adresse IP visiteur envoyée à Google. C'est le
   minimum pour une page qui vend l'hébergement en France.
2. **Photos** — `src/data.js` pointe encore vers Unsplash. Téléchargez-les dans
   `public/img` et remplacez les URL : même raison que les polices.
3. **Formulaire** — `Access.jsx` a un `onSubmit` vide. À brancher (Formspree, Brevo,
   votre API).
4. **Pages légales** — les liens du pied de page (`/mentions-legales`,
   `/confidentialite`, `/sous-traitants`, `/cgv`) pointent vers des routes à créer.
5. **Tarifs** — 39 € et 79 € TTC sont des hypothèses de travail, à valider avec les
   premiers restaurants.

## Structure

```
src/
  App.jsx            ordre des sections, commenté
  data.js            caisses, échelle d'autonomie, styles, tarifs, FAQ, images
  index.css          base, classes de composants, mouvement réduit
  fonts.css          @font-face locales
  components/
    Hero.jsx         le menu du soir, une rupture lue dans la caisse
    Drift.jsx        la dérive du site, semaine après semaine
    PosSync.jsx      la caisse comme source de vérité
    ConfirmLoop.jsx  ← le cœur : brouillon, Publier / Modifier
    Autonomy.jsx     ce qui passe en auto, ce qui n'y passe jamais
    QrTable.jsx      le menu QR en salle
    Compliance.jsx   INCO, origine des viandes, prix TTC, RGPD
    Examples.jsx     six styles de sortie + curseurs d'ambiance
    Pricing.jsx      trois plans, prix TTC
    Faq.jsx          objections, dont la responsabilité allergènes
    Access.jsx       demande d'accès (MVP accompagné)
    Footer.jsx       navigation + liens légaux
    marks.jsx        wordmark Sous et pictogrammes, tout en SVG
    fx.jsx           MaskWords, Parallax, ScrollProgress, grain
scripts/
  fetch-fonts.mjs    récupération des polices en local
```

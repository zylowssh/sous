/*
  Photos de démonstration.

  Elles pointent aujourd'hui vers Unsplash. Avant la mise en ligne, télécharge-les
  dans /public/img et remplace les URL ci-dessous par « /img/xxx.jpg » : un visiteur
  français ne doit pas voir son IP partir vers un CDN américain sur une page qui
  vend l'hébergement en France.

  Chaque emplacement a un ratio fixe côté CSS (.photo-slot + aspect-*), donc rien
  ne bouge pendant le chargement.
*/
const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  salle: U('1517248135467-4c7edcad34c4'),
  poulpe: U('1467003909585-2f8a72700288'),
  pasta: U('1621996346565-e3dbc646d9a9'),
  ramen: U('1569718212165-3a8278d5f624'),
  burger: U('1568901346375-23c9450c58cd'),
  brunch: U('1567620905732-2d1ec7ab7445'),
  chef: U('1577219491135-ce391730fb04'),
  nappe: U('1414235077428-338989a2e8c0'),
};

/* Caisses : l'ordre est celui du marché français, pas celui d'un catalogue US. */
export const POS = [
  {
    name: "L'Addition",
    note: 'Leader français · données hébergées en France',
    status: 'Synchronisation complète',
  },
  {
    name: 'Zelty',
    note: 'API ouverte · écosystème riche',
    status: 'Synchronisation complète',
  },
  {
    name: 'Lightspeed',
    note: 'International · multi-établissements',
    status: 'Synchronisation complète',
  },
  {
    name: 'Autre caisse, ou pas de caisse',
    note: 'Carte PDF, photo ou ardoise',
    status: 'Extraction, puis validation',
  },
];

/* L'échelle d'autonomie. C'est le tableau le plus important de la page :
   il dit noir sur blanc ce que Sous ne s'autorisera jamais. */
export const AUTONOMY = [
  {
    what: 'Prix et disponibilité des plats',
    source: 'Lus dans votre caisse',
    level: 'auto',
    detail: 'Automatique dès le premier jour',
  },
  {
    what: 'Plat du jour, suggestions, épuisés',
    source: 'Caisse ou message',
    level: 'auto',
    detail: 'Automatique dès le premier jour',
  },
  {
    what: 'Textes de présentation, mise en avant, photos',
    source: 'Vos messages',
    level: 'earned',
    detail: 'Automatique après 10 brouillons validés',
  },
  {
    what: 'Horaires, jours de fermeture, fermeture exceptionnelle',
    source: 'Vos messages',
    level: 'always',
    detail: 'Votre validation, à chaque fois',
  },
  {
    what: 'Allergènes et origine des viandes',
    source: 'Carte et fiches produits',
    level: 'always',
    detail: 'Votre validation, à chaque fois — sans exception',
  },
];

/* Les styles de sortie. Un seul produit, six restaurants qui n'ont rien à voir. */
export const STYLES = [
  {
    name: 'Mamma Rosa',
    kind: 'Trattoria · Paris 11e',
    sliders: { chaleur: 92, premium: 30 },
    theme: 'warm',
    headline: 'Comme à la maison,\nen plus bruyant',
    cta: 'Voir la carte',
    img: 'pasta',
  },
  {
    name: 'SORA',
    kind: 'Japonais · Lyon 2e',
    sliders: { chaleur: 12, premium: 74 },
    theme: 'minimal',
    headline: 'Cuisine japonaise,\npréparée avec intention',
    cta: 'Le menu',
    img: 'ramen',
  },
  {
    name: 'KNOCK KNOCK',
    kind: 'Bar à burgers · Lille',
    sliders: { chaleur: 60, premium: 8 },
    theme: 'bold',
    headline: 'Bons burgers,\nbonne humeur',
    cta: 'Commander',
    img: 'burger',
  },
  {
    name: 'Le Comptoir Rive',
    kind: 'Bistrot · Bordeaux',
    sliders: { chaleur: 70, premium: 55 },
    theme: 'bistro',
    headline: 'Le bistrot,\nsans le folklore',
    cta: 'Réserver',
    img: 'salle',
  },
  {
    name: 'BRAISE',
    kind: 'Table du soir · Marseille',
    sliders: { chaleur: 35, premium: 95 },
    theme: 'cinematic',
    headline: 'Feu de bois.\nRien d’autre.',
    cta: 'Le menu du soir',
    img: 'poulpe',
  },
  {
    name: 'kaffee',
    kind: 'Brunch · Nantes',
    sliders: { chaleur: 80, premium: 45 },
    theme: 'editorial',
    headline: 'Ouvert tôt,\nfermé tard',
    cta: 'Nos brunchs',
    img: 'brunch',
  },
];

export const PLANS = [
  {
    name: 'Service',
    price: '39 €',
    unit: 'TTC / mois',
    for: 'Un restaurant, une carte, un QR de table.',
    features: [
      'Site public + menu QR en salle',
      'Synchronisation avec votre caisse',
      'Modifications par message, avec validation',
      'Champs allergènes et origine des viandes',
      'Nom de domaine et hébergement en France',
    ],
    cta: 'Demander un accès',
    featured: false,
  },
  {
    name: 'Salle',
    price: '79 €',
    unit: 'TTC / mois',
    for: 'Ceux qui vivent dedans tous les jours.',
    features: [
      'Tout le plan Service',
      'Plusieurs QR (terrasse, bar, emporter)',
      'Échelle d’autonomie personnalisée',
      'Fiche Google et référencement local',
      'Statistiques de consultation du menu',
      'Réservations connectées',
    ],
    cta: 'Demander un accès',
    featured: true,
  },
  {
    name: 'Groupe',
    price: 'Sur devis',
    unit: '',
    for: 'Plusieurs adresses, une seule carte à tenir.',
    features: [
      'Multi-établissements',
      'Carte partagée et déclinaisons locales',
      'Rôles et validations par établissement',
      'Accompagnement dédié',
    ],
    cta: 'Nous écrire',
    featured: false,
  },
];

export const FAQ = [
  {
    q: 'Et si Sous se trompe sur un prix ?',
    a: "Un prix ne vient jamais d'une interprétation : il est lu dans votre caisse, à l'identique. Si la donnée manque ou paraît incohérente, Sous ne devine pas — il vous le signale et laisse l'ancienne valeur en ligne jusqu'à votre réponse.",
  },
  {
    q: "Ma caisse n'est pas dans la liste.",
    a: "Ce n'est pas bloquant. Sous lit aussi une carte PDF, une photo ou un document Word : il en extrait les plats, les prix et les allergènes, vous validez l'extraction une fois, et les modifications suivantes passent par message.",
  },
  {
    q: 'Qui est responsable de l’affichage des allergènes ?',
    a: "Vous, légalement — et c'est exactement pour cette raison que Sous ne publie jamais ces champs tout seul. Ils restent sous validation humaine quel que soit votre niveau d'autonomie, et l'historique conserve qui a validé quoi, et quand.",
  },
  {
    q: 'Mes échanges passent par WhatsApp ?',
    a: "Par défaut oui, parce que c'est là que vous êtes déjà. WhatsApp appartient à Meta : les messages transitent donc par une infrastructure hors Union européenne. Le site, la carte et vos données clients, eux, sont hébergés en France. Si vous préférez éviter Meta, le même canal existe en SMS ou par e-mail.",
  },
  {
    q: 'Combien de temps avant la mise en ligne ?',
    a: "Comptez une semaine. On branche la caisse, on relit la carte ensemble — surtout les allergènes — et on ouvre. La première mise en place se fait avec vous, pas dans un formulaire.",
  },
  {
    q: 'Je peux garder mon site actuel ?',
    a: "Si vous y tenez, Sous peut n'alimenter que la carte et le menu QR, et laisser le reste tranquille. La plupart des restaurants finissent par tout basculer, mais rien ne vous y oblige.",
  },
];

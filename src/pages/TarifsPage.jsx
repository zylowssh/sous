import EditorialPage from '../components/EditorialPage';
import TarifsCtaSection from '../tarifs/sections/TarifsCtaSection';
import TarifsFaqSection from '../tarifs/sections/TarifsFaqSection';
import TarifsHeroSection from '../tarifs/sections/TarifsHeroSection';
import TarifsOnboardingSection from '../tarifs/sections/TarifsOnboardingSection';
import TarifsProSection from '../tarifs/sections/TarifsProSection';
import TarifsTableSection from '../tarifs/sections/TarifsTableSection';
import { IMG } from '../tarifs/tarifsAssets';

const FAQ = [
  ['Est-ce sans engagement ?', 'Oui. Vous pouvez annuler à tout moment.'],
  ['Y a-t-il des frais de mise en place ?', 'Non. Aucun frais de mise en place, sur toutes les offres.'],
  ["Puis-je changer d’offre ?", 'Oui, à tout moment, au prorata.'],
  ['Comment se connecte la caisse ?', 'Via votre caisse existante, selon son intégration.'],
  ['Puis-je garder mon domaine ?', 'Oui, votre domaine reste le vôtre.'],
  ['Mes données sont-elles protégées ?', 'Oui, avec un hébergement sécurisé en Europe.'],
];

const TARIFS_SECTIONS = [
  {
    id: 'tarifs-hero',
    label: 'Tarifs',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: TarifsHeroSection,
    first: true,
    mobile: {
      eyebrow: 'Tarifs',
      title: 'Un site à jour. Un tarif clair.',
      copy: 'Pas d’engagement. Pas de frais cachés. Votre validation reste comprise.',
      image: IMG.trattoria,
      imageAlt: 'Site de restaurant inclus dans les offres Sous',
      action: { label: 'Voir les offres', href: '#tarifs-comparison', primary: true },
    },
  },
  {
    id: 'tarifs-comparison',
    label: 'Comparatif',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: TarifsTableSection,
    height: 960,
    mobile: {
      eyebrow: 'Comparatif',
      title: 'Choisissez le service qui vous ressemble.',
      kind: 'pricing',
      plans: [
        { name: 'Essentiel', price: '49 € / mois', features: ['Site personnalisé', 'Menu synchronisé', 'QR dynamique'], action: { label: 'Commencer', href: '/signup?plan=essentiel' } },
        { name: 'Pro', price: '89 € / mois', features: ['Tout Essentiel', 'Réservations', 'Support prioritaire'], action: { label: 'Créer mon site', href: '/signup?plan=pro', primary: true } },
        { name: 'Groupe', price: 'Sur mesure', features: ['Gestion multi-sites', 'API dédiée', 'Account manager'], action: { label: 'Parler à l’équipe', href: '/signup?plan=groupe' } },
      ],
    },
  },
  {
    id: 'tarifs-onboarding',
    label: 'Démarrage',
    background: 'var(--color-editorial-sage)',
    backgroundClass: 'bg-olive',
    component: TarifsOnboardingSection,
    mobile: {
      eyebrow: 'Démarrage',
      title: 'On vous accompagne jusqu’à la mise en ligne.',
      copy: 'Une personne vous répond, connecte vos outils et prépare la première version avec vous.',
      image: IMG.chef,
      imageAlt: 'Membre de l’équipe Sous accompagnant un restaurant',
      items: ['Connexion de la caisse', 'Import du menu', 'Préparation du site', 'Validation ensemble'],
    },
  },
  {
    id: 'tarifs-pro',
    label: 'Formule Pro',
    background: 'var(--color-editorial-dark)',
    backgroundClass: 'bg-coal',
    component: TarifsProSection,
    mobile: {
      eyebrow: 'Formule Pro',
      title: 'Pour les maisons qui veulent aller plus loin.',
      copy: 'Promotions, réservations, statistiques et accompagnement prioritaire dans une seule formule.',
      image: IMG.promo,
      imageAlt: 'Promotion restaurant gérée dans Sous',
      action: { label: 'Choisir Pro', href: '/signup', primary: true },
    },
  },
  {
    id: 'tarifs-faq',
    label: 'Questions',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: TarifsFaqSection,
    mobile: {
      eyebrow: 'Questions',
      title: 'Les réponses avant de dire oui.',
      kind: 'faq',
      items: FAQ,
      action: { label: 'Parler à l’équipe', href: '/signup' },
    },
  },
  {
    id: 'tarifs-cta',
    label: 'Commencer',
    background: 'var(--color-flame)',
    backgroundClass: 'bg-flame',
    component: TarifsCtaSection,
    stack: false,
    mobile: {
      eyebrow: 'Commencer',
      title: 'Prêt à goûter ?',
      copy: 'Commencez avec Essentiel. Passez à Pro quand votre service grandit.',
      items: ['Site personnalisé', 'QR menu', 'Synchronisation caisse', 'Support humain'],
      image: IMG.trattoria,
      imageAlt: 'Restaurant prêt à lancer son site Sous',
      action: { label: 'Commencer à 49 €', href: '/signup', primary: true },
    },
  },
];

const DARK_TARIFS_SECTIONS = ['tarifs-pro'];

export default function TarifsPage() {
  return (
    <EditorialPage
      title="Tarifs | Sous"
      description="Des offres claires pour un site personnalisé, un QR menu synchronisé et des mises à jour validées par vous."
      rootClassName="tr-root"
      background="var(--color-editorial-cream)"
      sections={TARIFS_SECTIONS}
      darkSectionIds={DARK_TARIFS_SECTIONS}
    />
  );
}

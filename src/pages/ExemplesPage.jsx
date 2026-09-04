import EditorialPage from '../components/EditorialPage';
import ExemplesCtaSection from '../exemples/sections/ExemplesCtaSection';
import ExemplesGridSection from '../exemples/sections/ExemplesGridSection';
import ExemplesHeroSection from '../exemples/sections/ExemplesHeroSection';
import ExemplesKnockSection from '../exemples/sections/ExemplesKnockSection';
import ExemplesMammaSection from '../exemples/sections/ExemplesMammaSection';
import ExemplesSoraSection from '../exemples/sections/ExemplesSoraSection';
import { IMG } from '../exemples/exemplesAssets';

const EXEMPLES_SECTIONS = [
  {
    id: 'exemples-hero',
    label: 'Introduction',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: ExemplesHeroSection,
    first: true,
    mobile: {
      eyebrow: 'Exemples',
      title: "Des sites qui ont du goût. Pas l’air d’un catalogue.",
      copy: 'Même moteur. Chaque restaurant garde sa voix.',
      image: IMG.burger,
      imageAlt: 'Aperçu du site Knock Knock',
      action: { label: 'Parcourir les maisons', href: '#exemples-grid' },
    },
  },
  {
    id: 'exemples-grid',
    label: 'Les maisons',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: ExemplesGridSection,
    height: 960,
    mobile: {
      eyebrow: 'Six maisons',
      title: 'Six façons de recevoir.',
      copy: 'Bistrot, trattoria, burger club, izakaya, table végétale ou café. Chaque identité reste entière.',
      image: IMG.rumor,
      imageAlt: 'Aperçu du restaurant Rumor',
      items: ['Rumor, Lyon', 'Mamma Rosa, Lille', 'Knock Knock, Nantes', 'Sora, Paris', 'Verde, Bordeaux', 'Café Léon, Marseille'],
    },
  },
  {
    id: 'exemples-mamma',
    label: 'Mamma Rosa',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: ExemplesMammaSection,
    mobile: {
      eyebrow: 'Mamma Rosa',
      title: 'Une trattoria qui sent le dimanche.',
      copy: 'Chaleureux, familial, sans folklore. Le menu et les réservations restent toujours visibles.',
      image: IMG.pastaclose,
      imageAlt: 'Plat de pâtes de Mamma Rosa',
      action: { label: 'Choisir ce style', href: '/signup?style=mamma-rosa', primary: true },
    },
  },
  {
    id: 'exemples-knock',
    label: 'Knock Knock',
    background: 'var(--color-editorial-dark)',
    backgroundClass: 'bg-coal',
    component: ExemplesKnockSection,
    mobile: {
      eyebrow: 'Knock Knock',
      title: 'Un burger club qui ne chuchote pas.',
      copy: 'Une carte courte, des promos visibles et un QR comptoir. Même moteur, beaucoup plus de décibels.',
      image: IMG.burgerfries,
      imageAlt: 'Burger et frites de Knock Knock',
      action: { label: 'Choisir cet univers', href: '/signup?style=knock-knock', primary: true },
    },
  },
  {
    id: 'exemples-sora',
    label: 'Sora',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: ExemplesSoraSection,
    mobile: {
      eyebrow: 'Sora',
      title: "Le calme dans l’assiette. La précision dans la carte.",
      copy: 'Saisonnalité visible, menu bilingue et réservation sans friction.',
      image: IMG.gindara,
      imageAlt: 'Plat japonais du restaurant Sora',
      action: { label: 'Choisir Sora', href: '/signup?style=sora', primary: true },
    },
  },
  {
    id: 'exemples-cta',
    label: 'Commencer',
    background: 'var(--color-flame)',
    backgroundClass: 'bg-flame',
    component: ExemplesCtaSection,
    stack: false,
    mobile: {
      eyebrow: 'Votre maison',
      title: 'Le prochain exemple porte votre nom.',
      copy: 'Votre salle a déjà une personnalité. Donnons-lui un site.',
      items: ['Site personnalisé', 'Menu et QR synchronisés', 'Validation avant publication'],
      mockup: 'identity',
      action: { label: 'Commencer', href: '/signup', primary: true },
    },
  },
];

const DARK_EXEMPLES_SECTIONS = ['exemples-knock'];

export default function ExemplesPage() {
  return (
    <EditorialPage
      title="Exemples | Sous"
      description="Découvrez des sites de restaurants qui gardent leur propre voix tout en restant synchronisés avec leur menu."
      rootClassName="ex-root"
      background="var(--color-editorial-cream)"
      sections={EXEMPLES_SECTIONS}
      darkSectionIds={DARK_EXEMPLES_SECTIONS}
    />
  );
}

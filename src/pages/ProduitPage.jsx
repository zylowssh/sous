import EditorialPage from '../components/EditorialPage';
import ProductApprovalSection from '../product/sections/ProductApprovalSection';
import ProductComplianceSection from '../product/sections/ProductComplianceSection';
import ProductCtaSection from '../product/sections/ProductCtaSection';
import ProductExamplesSection from '../product/sections/ProductExamplesSection';
import ProductHeroSection from '../product/sections/ProductHeroSection';
import ProductPipelineSection from '../product/sections/ProductPipelineSection';
import { IMG } from '../product/productAssets';

const PRODUCT_SECTIONS = [
  {
    id: 'product-hero',
    label: 'Introduction',
    background: 'var(--color-editorial-paper)',
    backgroundClass: 'bg-cream',
    component: ProductHeroSection,
    first: true,
    mobile: {
      eyebrow: 'Le produit',
      title: 'Une instruction. Trois surfaces à jour.',
      copy: 'Votre caisse alimente le menu. Sous prépare. Vous validez.',
      image: IMG.pancakes,
      imageAlt: 'Aperçu du site et du menu synchronisés',
      action: { label: 'Voir Sous en action', href: '#product-pipeline', primary: true },
    },
  },
  {
    id: 'product-pipeline',
    label: 'Synchronisation',
    background: 'var(--color-product-sage)',
    backgroundClass: 'bg-olive',
    component: ProductPipelineSection,
    artworkOffsetY: 24,
    mobile: {
      eyebrow: 'Synchronisation',
      title: 'La caisse reste la source de vérité.',
      copy: 'Sous traduit et normalise les données avant de synchroniser le site et le QR menu.',
      image: IMG.pasta,
      imageAlt: 'Plat synchronisé depuis la caisse',
      items: ['Import automatique', 'Descriptions normalisées', 'Site et QR alignés'],
    },
  },
  {
    id: 'product-approval',
    label: 'Validation',
    background: 'var(--color-editorial-dark)',
    backgroundClass: 'bg-coal',
    component: ProductApprovalSection,
    artworkOffsetY: 24,
    mobile: {
      eyebrow: 'Validation',
      title: 'Rien ne sort sans votre feu vert.',
      copy: 'Chaque changement est présenté clairement. Vous validez ou demandez une correction avant publication.',
      image: IMG.burger,
      imageAlt: 'Proposition de mise à jour à valider',
      action: { label: 'Comprendre la validation', href: '/signup' },
    },
  },
  {
    id: 'product-examples',
    label: 'Exemples',
    background: 'var(--color-editorial-paper)',
    backgroundClass: 'bg-cream',
    component: ProductExamplesSection,
    artworkOffsetY: 24,
    mobile: {
      eyebrow: 'Résultat',
      title: 'Votre restaurant, partout cohérent.',
      copy: 'Le site, le menu mobile et le QR racontent la même chose au même moment.',
      image: IMG.sashimi,
      imageAlt: 'Exemple de menu restaurant sur plusieurs écrans',
    },
  },
  {
    id: 'product-compliance',
    label: 'Conformité',
    background: 'var(--color-editorial-cream)',
    backgroundClass: 'bg-cream',
    component: ProductComplianceSection,
    artworkOffsetY: 88,
    height: 1100,
    mobile: {
      eyebrow: 'Conformité',
      title: 'Les détails importants restent visibles.',
      copy: 'Allergènes, prix, disponibilité et mentions utiles suivent chaque mise à jour.',
      items: ['Allergènes structurés', 'Prix toujours alignés', 'Historique des validations', 'Publication contrôlée'],
      action: { label: 'Voir les tarifs', href: '/tarifs' },
    },
  },
  {
    id: 'product-cta',
    label: 'Commencer',
    background: 'var(--color-flame)',
    backgroundClass: 'bg-flame',
    component: ProductCtaSection,
    artworkOffsetY: 88,
    mobile: {
      eyebrow: 'Commencer',
      title: 'Votre menu change. Votre site suit.',
      copy: 'Donnez à votre équipe un site qui reste vivant sans devenir une nouvelle corvée.',
      image: IMG.pancakes,
      imageAlt: 'Site de restaurant prêt à être publié',
      action: { label: 'Créer mon site', href: '/signup', primary: true },
    },
  },
];

const DARK_PRODUCT_SECTIONS = ['product-approval'];

export default function ProduitPage() {
  return (
    <EditorialPage
      title="Produit | Sous"
      description="Une instruction, trois surfaces à jour. Sous synchronise votre site, votre menu et votre QR après votre validation."
      rootClassName="sous-root"
      background="var(--color-editorial-paper)"
      sections={PRODUCT_SECTIONS}
      darkSectionIds={DARK_PRODUCT_SECTIONS}
    />
  );
}

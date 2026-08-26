import { AsteriskIcon, SousMark } from './doodles';
import { goToSection } from './fx';

const footerCols = [
  {
    title: 'PRODUIT',
    links: [
      { label: 'Le produit', href: '#produit' },
      { label: 'Comment ça marche', href: '#how' },
      { label: 'Exemples', href: '#exemples' },
      { label: 'Menu synchronisé', href: '#menu' },
      { label: 'Tarifs', href: '#tarifs' },
    ],
  },
  {
    title: 'CONTACT',
    links: [
      { label: 'contact@sous-app.fr', href: 'mailto:contact@sous-app.fr' },
    ],
  },
  { title: 'LÉGAL', links: [
    { label: 'Mentions légales', href: '#mentions-legales' },
    { label: 'Confidentialité', href: '#confidentialite' },
    { label: 'CGU', href: '#cgu' },
  ] },
];

// Home anchors scroll through goToSection (native anchors break on pinned
// sticky sections); standalone pages and legal hashes use navigateTo with
// the cream transition overlay.
const HOME_SECTIONS = new Set(['top', 'product', 'how', 'examples', 'tell', 'menu', 'testimonial', 'pricing']);
const STANDALONE_PAGES = new Set(['exemples', 'produit', 'tarifs', 'login', 'signup', 'commencer']);

export default function Footer({ onNavigate }) {
  const onLinkClick = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const id = href.slice(1);
    if (HOME_SECTIONS.has(id)) goToSection(id);
    else if (STANDALONE_PAGES.has(id) || onNavigate) onNavigate(id);  // cross-page → transition overlay
    else window.location.hash = id;              // fallback (no prop)
  };

  return (
    <footer className="border-t border-ink/15 bg-cream py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[1fr_2fr_auto]">
        <div className="flex items-start gap-3">
          <span className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            <SousMark className="h-8 w-auto text-flame md:h-11" />
            sous.
          </span>
          <div>
            <p className="font-hand text-base text-ink/80 md:text-lg">Des sites qui servent vos plats.</p>
            <p className="mt-1 max-w-[16rem] text-xs text-ink/70 md:text-sm">Votre site web, enfin à votre image. Zéro template, zéro stress, 100% vous.</p>
            <a href="mailto:contact@sous-app.fr" className="mt-2 inline-block text-xs font-semibold text-ink/80 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-flame md:text-sm">
              contact@sous-app.fr
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {footerCols.map((c) => (
            <div key={c.title}>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50 md:text-[11px]">{c.title}</p>
              <ul className="mt-2 space-y-1.5 md:mt-3 md:space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} onClick={(e) => onLinkClick(e, l.href)} className="text-xs text-ink/80 transition-colors hover:text-flame md:text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="flex max-w-[12rem] items-start gap-2 font-hand text-base leading-snug text-ink/80 md:text-lg">
          <AsteriskIcon className="mt-1 h-4 w-4 shrink-0 text-flame md:h-5 md:w-5" />
          Conçu pour les professionnels de la restauration.
        </p>
      </div>

      <p className="mt-8 text-center text-[10px] text-ink/50 md:text-xs">© 2026 Sous. Tous droits réservés.</p>
    </footer>
  );
}

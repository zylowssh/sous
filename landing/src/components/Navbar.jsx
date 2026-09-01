import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SousMark } from './doodles';

const links = [
  { label: 'Produit', href: '/produit', sectionId: 'product' },
  { label: 'Exemples', href: '/exemples', sectionId: 'examples' },
  { label: 'Tarifs', href: '/tarifs', sectionId: 'pricing' },
];

// Same document-flow offset walk as goToSection/DotsNav: sticky pinning on
// desktop makes getBoundingClientRect() report 0 for every section scrolled
// past, so we walk <main>'s children by layout height instead.
function anchorInMain(el) {
  const main = el.closest('main');
  if (!main) return el.getBoundingClientRect().top + window.scrollY;
  let y = main.getBoundingClientRect().top + window.scrollY;
  for (const child of main.children) {
    if (child === el) return y;
    y += child.offsetHeight;
  }
  return y;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.45;
      let current = null;
      for (const { label, sectionId } of links) {
        const section = document.getElementById(sectionId);
        if (section && anchorInMain(section) <= marker) current = label;
        else break;
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${scrolled || open ? 'border-b border-ink/10 bg-cream/95 backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Sous, retour en haut"
          className="flex min-h-11 items-center gap-2.5 font-display text-4xl font-bold tracking-tight text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
        >
          <SousMark className="h-8 w-auto text-flame" />
          sous.
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.href} onClick={closeMenu} aria-current={active === l.label ? 'page' : undefined} className="group relative rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame">
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-flame transition-transform duration-300 group-hover:scale-x-100 ${active === l.label ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/commencer" onClick={closeMenu} className="group hidden min-h-11 items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-flame hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame sm:inline-flex">
            Commencer
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-sm md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={open ? undefined : ''}
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="space-y-3 px-4 py-4 text-base font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.href} onClick={closeMenu} aria-current={active === l.label ? 'page' : undefined} className={`flex min-h-11 items-center rounded-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${active === l.label ? 'text-flame' : ''}`}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/commencer" onClick={closeMenu} className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 py-2 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame">
              Commencer <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

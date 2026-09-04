import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon, SousMark } from './doodles';

const links = [
  { label: 'Produit', href: '/produit' },
  { label: 'Exemples', href: '/exemples' },
  { label: 'Tarifs', href: '/tarifs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${scrolled || open ? 'border-b border-ink/10 bg-cream' : 'bg-transparent'}`}>
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
              <Link
                to={l.href}
                onClick={closeMenu}
                aria-current={location.pathname === l.href ? 'page' : undefined}
                className={`group relative rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame ${location.pathname === l.href ? 'font-bold' : ''}`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-flame transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === l.href ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/signup" onClick={closeMenu} className="group hidden min-h-11 items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-flame hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame sm:inline-flex">
            Commencer
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
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
              <Link
                to={l.href}
                onClick={closeMenu}
                aria-current={location.pathname === l.href ? 'page' : undefined}
                className={`flex min-h-11 items-center rounded-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${location.pathname === l.href ? 'font-bold underline decoration-flame decoration-2 underline-offset-4' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/signup" onClick={closeMenu} className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 py-2 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame">
              Commencer <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

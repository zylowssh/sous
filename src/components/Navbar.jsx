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

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-cream/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Sous — retour en haut"
          className="flex items-center gap-2.5 font-display text-4xl font-bold tracking-tight text-ink transition-opacity hover:opacity-70"
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
                className={`group relative ${location.pathname === l.href ? 'font-bold' : ''}`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-flame transition-all duration-300 group-hover:w-full ${location.pathname === l.href ? 'w-full' : 'w-0'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/commencer" onClick={closeMenu} className="group hidden sm:inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-flame">
            Commencer
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 md:hidden"
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

      <div id="mobile-menu" className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="space-y-3 px-4 py-4 text-base font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                onClick={closeMenu}
                aria-current={location.pathname === l.href ? 'page' : undefined}
                className={`block border-l-2 py-1 pl-3 ${location.pathname === l.href ? 'border-flame font-bold' : 'border-transparent'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/commencer" onClick={closeMenu} className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-cream">
              Commencer <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

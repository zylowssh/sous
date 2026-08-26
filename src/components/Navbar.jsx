import { useEffect, useState } from 'react';
import { ArrowRightIcon, SousMark } from './doodles';
import { goToSection } from './fx';

const links = [
  { label: 'Produit', href: '#produit' },
  { label: 'Exemples', href: '#exemples' },
  { label: 'Tarifs', href: '#tarifs' },
];

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace('#', '');
    // Standalone pages use onNavigate for cross-page transitions
    if (onNavigate && ['produit', 'exemples', 'tarifs', 'login', 'signup', 'commencer'].includes(id)) {
      onNavigate(id);
    } else {
      goToSection(id);
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-cream/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          onClick={(e) => handleNav(e, '#top')}
          aria-label="Sous — retour en haut"
          className="flex items-center gap-2.5 font-display text-4xl font-bold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          <SousMark className="h-8 w-auto text-flame" />
          sous.
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)} className="group relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-flame transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#signup" onClick={(e) => handleNav(e, '#signup')} className="group hidden sm:inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-flame">
            Commencer
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
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
            <li key={l.label}><a href={l.href} onClick={(e) => handleNav(e, l.href)} className="block py-1">{l.label}</a></li>
          ))}
          <li>
            <a href="#signup" onClick={(e) => handleNav(e, '#signup')} className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-cream">
              Commencer <ArrowRightIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

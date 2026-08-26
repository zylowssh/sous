import { useEffect, useState } from 'react';
import { ArrowRight, SousWordmark } from './marks';
import { goToSection } from './fx';

const links = [
  { label: 'Le principe', id: 'principe' },
  { label: 'Validation', id: 'boucle' },
  { label: 'Conformité', id: 'conformite' },
  { label: 'Exemples', id: 'exemples' },
  { label: 'Tarifs', id: 'tarifs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id) => {
    setOpen(false);
    goToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-ink/10 bg-cream/92 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Sous — retour en haut"
          className="text-[1.6rem] text-ink"
        >
          <SousWordmark />
        </a>

        <ul className="hidden items-center gap-7 text-sm text-ink/75 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => jump(l.id)} className="group relative py-1 transition-colors hover:text-ink">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sauge transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={() => jump('acces')} className="btn-primary hidden py-2.5 sm:inline-flex">
            Demander un accès
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="p-2 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="block space-y-[5px]">
              <span className={`block h-px w-6 bg-ink transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-ink transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="space-y-1 px-5 pb-5 text-base">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => jump(l.id)} className="w-full border-b border-ink/10 py-3 text-left">
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <button onClick={() => jump('acces')} className="btn-primary w-full justify-center">
              Demander un accès <ArrowRight className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

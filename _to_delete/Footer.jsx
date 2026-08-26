import { AsteriskIcon, PlatoMark } from './doodles';

const cols = [
  { title: 'PRODUIT', links: ['Comment ça marche', 'Synchronisation POS', 'Conformité légale', 'Assistant WhatsApp'] },
  { title: 'ENTREPRISE', links: ['À propos', 'Contact', 'Partenaires POS'] },
  { title: 'RESSOURCES', links: ['Blog', 'Guides de conformité', 'Centre d\'aide'] },
  { title: 'LÉGAL', links: [{ label: 'Mentions légales', href: '#mentions-legales' }, { label: 'Confidentialité', href: '#confidentialite' }, { label: 'CGU', href: '#cgu' }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1fr_2fr_auto]">
        <div className="flex items-start gap-4">
          <span className="flex items-center gap-3 font-display text-5xl font-bold tracking-tight text-ink">
            <PlatoMark className="h-11 w-auto text-flame" />
            plato.
          </span>
          <div>
            <p className="font-hand text-lg text-ink/80">Des sites qui servent vos plats.</p>
            <p className="mt-1 max-w-[16rem] text-sm text-ink/70">Votre site web, enfin à votre image. Zéro template, zéro stress, 100% vous.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => {
                  const href = typeof l === 'string' ? `#${l.toLowerCase().replace(/\s+/g, '-')}` : l.href;
                  const label = typeof l === 'string' ? l : l.label;
                  return (
                    <li key={label}>
                      <a href={href} className="text-sm text-ink/80 transition-colors hover:text-flame">{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="flex max-w-[12rem] items-start gap-2 font-hand text-lg leading-snug text-ink/80">
          <AsteriskIcon className="mt-1 h-5 w-5 shrink-0 text-flame" />
          Conçu pour les professionnels de la restauration.
        </p>
      </div>
      <p className="mt-10 text-center text-xs text-ink/50">© 2026 Plato. Tous droits réservés.</p>
    </footer>
  );
}

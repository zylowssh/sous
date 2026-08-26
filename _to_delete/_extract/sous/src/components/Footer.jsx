import { SousWordmark } from './marks';

const columns = [
  {
    title: 'Produit',
    links: [
      ['Le principe', '#principe'],
      ['Synchronisation caisse', '#caisse'],
      ['Boucle de validation', '#boucle'],
      ['Menu QR', '#qr'],
      ['Tarifs', '#tarifs'],
    ],
  },
  {
    title: 'Ressources',
    links: [
      ['Conformité allergènes', '#conformite'],
      ['Exemples de sites', '#exemples'],
      ['Questions fréquentes', '#faq'],
    ],
  },
  {
    title: 'Légal',
    links: [
      ['Mentions légales', '/mentions-legales'],
      ['Politique de confidentialité', '/confidentialite'],
      ['Sous-traitants et RGPD', '/sous-traitants'],
      ['Conditions générales', '/cgv'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.9fr))]">
          <div>
            <SousWordmark className="text-3xl" tagline />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink/60">
              Le site et le menu QR de votre restaurant, tenus à jour depuis votre caisse et vos
              messages.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="label">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[14px] text-ink/65 transition-colors hover:text-ink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-[13px] text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sous. Tous droits réservés.</p>
          <p>Hébergement en France · Prix affichés TTC</p>
        </div>
      </div>
    </footer>
  );
}

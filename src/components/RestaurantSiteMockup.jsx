import { QrIcon, SousMark } from './doodles';

const cleanDomain = (website, name) => {
  if (website) return website.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const slug = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${slug || 'votre-restaurant'}.fr`;
};

export default function RestaurantSiteMockup({
  name = '',
  cuisine = '',
  address = '',
  website = '',
  instagram = '',
  placeholder = false,
  className = '',
  style,
}) {
  const displayName = name || 'Votre restaurant';
  const displayCuisine = cuisine || 'Votre cuisine';
  const displayAddress = address || 'Votre adresse apparaîtra ici';
  const domain = cleanDomain(website, name);

  return (
    <section
      aria-label={placeholder ? 'Aperçu du prochain site Sous' : 'Aperçu en direct du site'}
      className={`overflow-hidden border border-ink/20 bg-paper text-ink shadow-photo ${className}`}
      style={style}
    >
      <div className="flex h-9 items-center justify-between border-b border-ink/10 px-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-flame" />
          <span className="h-2 w-2 rounded-full bg-butter" />
          <span className="h-2 w-2 rounded-full bg-[#43aa58]" />
        </div>
        <span className="font-mono text-[8px] font-bold tracking-wide text-ink/40">{placeholder ? 'votre-restaurant.fr' : domain}</span>
      </div>

      {placeholder ? (
        <div className="min-h-[25rem] bg-[#fbf8f1] px-8 py-7 sm:min-h-[32rem] sm:px-12 sm:py-10">
          <div className="flex items-center justify-between border-b border-ink/10 pb-7">
            <span className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink">
              <SousMark className="h-6 w-auto text-flame" />
              sous.
            </span>
            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-ink/25">Site en préparation</span>
          </div>

          <div className="mt-10 h-52 border border-dashed border-ink/15 sm:h-64" />
          <div className="mt-8 space-y-5" aria-hidden="true">
            <span className="block h-2 w-[76%] border border-dashed border-ink/15" />
            <span className="block h-2 w-[92%] border border-dashed border-ink/15" />
            <span className="block h-2 w-[68%] border border-dashed border-ink/15" />
          </div>
          <div className="mt-10 grid grid-cols-[1.25fr_.75fr] gap-6" aria-hidden="true">
            <div className="h-36 border border-dashed border-ink/15" />
            <div className="h-36 border border-dashed border-ink/15" />
          </div>
        </div>
      ) : (
        <div aria-live="polite">
          <div className="bg-[#cfcaad] px-7 py-8 sm:px-9 sm:py-10">
            <div className="flex items-start justify-between gap-5">
              <p className="max-w-[14ch] font-display text-xl uppercase leading-none">{displayName}</p>
              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-ink/45">Aperçu en direct</span>
            </div>
            <p className="mt-12 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-flame">{displayCuisine}</p>
            <h2 className="mt-3 max-w-[11ch] font-display text-5xl uppercase leading-[0.88] sm:text-6xl">Une table qui vous ressemble.</h2>
            <p className="mt-5 max-w-sm text-sm text-ink/60">{displayAddress}</p>
            <span className="mt-7 inline-flex border border-ink px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em]">Découvrir la carte</span>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-ink/15 px-7 py-6 sm:px-9">
            <div>
              <p className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-ink/40">À la carte</p>
              {['L’assiette signature', 'Le plat de saison', 'Le dessert maison'].map((item, index) => (
                <div key={item} className="mt-3 flex items-baseline justify-between gap-5 border-b border-ink/10 pb-2 text-xs">
                  <span>{item}</span><span className="font-bold">{14 + (index * 4)} €</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center border-l border-ink/15 pl-6 text-center">
              <QrIcon className="h-12 w-12 text-ink/55" />
              <span className="mt-2 font-mono text-[7px] font-bold uppercase tracking-[0.14em] text-ink/45">Menu synchronisé</span>
            </div>
          </div>

          {instagram && <p className="border-t border-ink/10 px-7 py-3 font-mono text-[8px] text-ink/45 sm:px-9">@{instagram.replace(/^@/, '')}</p>}
        </div>
      )}
    </section>
  );
}

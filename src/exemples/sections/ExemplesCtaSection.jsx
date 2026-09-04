import { Arr, Check } from '../components/exemplesPrimitives';
import RestaurantSiteMockup from '../../components/RestaurantSiteMockup';

const PROOFS = [
  'Site personnalisé',
  'Menu et QR synchronisés',
  'Validation avant publication',
];

export default function ExemplesCtaSection() {
  return (
    <>
      <div className="absolute" style={{ left: 66, top: 188, width: 780 }}>
        <p className="fm text-[11px] font-bold tracking-[0.16em]" style={{ color: 'var(--color-editorial-near-black)' }}>
          VOTRE MAISON, NOTRE PROCHAIN PROJET
        </p>
        <h1 className="fd mt-[20px]" style={{ fontSize: 82, lineHeight: 1.01, color: 'var(--color-editorial-paper)' }}>
          LE PROCHAIN EXEMPLE
          <br />
          PORTE VOTRE NOM.
        </h1>
        <p className="mt-[22px] text-[17px]" style={{ color: '#FBEDE3' }}>
          Votre salle a déjà une personnalité. Donnons-lui un site.
        </p>

        <ul className="mt-[30px] flex flex-wrap gap-x-[26px] gap-y-[12px]" aria-label="Ce qui est inclus">
          {PROOFS.map((proof) => (
            <li key={proof} className="flex items-center gap-[9px] text-[13px] font-semibold" style={{ color: 'var(--color-editorial-paper)' }}>
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full" style={{ background: 'var(--color-editorial-near-black)' }}>
                <Check s={12} color="var(--color-editorial-paper)" />
              </span>
              {proof}
            </li>
          ))}
        </ul>

        <div className="mt-[34px] flex gap-[18px]">
          <button
            type="button"
            data-route="/signup"
            className="flex h-[58px] items-center gap-[12px] rounded-[4px] px-[32px] text-[14px] font-bold tracking-[0.06em] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-editorial-paper)]"
            style={{ background: 'var(--color-editorial-near-black)', color: 'var(--color-editorial-paper)' }}
          >
            COMMENCER <Arr className="h-[12px] w-[17px]" color="var(--color-editorial-paper)" />
          </button>
          <button
            type="button"
            data-route="/signup"
            className="h-[58px] rounded-[4px] border-[1.5px] px-[32px] text-[14px] font-bold tracking-[0.06em] transition-colors hover:bg-[var(--color-editorial-paper)] hover:text-[var(--color-editorial-near-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-editorial-paper)]"
            style={{ borderColor: 'var(--color-editorial-paper)', color: 'var(--color-editorial-paper)' }}
          >
            PARLER À L'ÉQUIPE
          </button>
        </div>
      </div>

      <RestaurantSiteMockup
        placeholder
        className="absolute -rotate-[4deg] rounded-t-[12px]"
        style={{ left: 930, top: 62, width: 660, height: 760 }}
      />

      <div className="absolute" style={{ left: 782, top: 246, transform: 'rotate(-5deg)' }}>
        <p className="fh text-[23px] leading-[1.3]" style={{ color: 'var(--color-editorial-near-black)' }}>
          On commence
          <br />
          par écouter.
        </p>
        <svg viewBox="0 0 76 30" className="ml-[72px] mt-[4px] h-[30px] w-[76px]" fill="none" stroke="var(--color-editorial-near-black)" strokeWidth="1.8" strokeLinecap="round">
          <path d="M2 5c20 18 43 20 68 7M61 7l10 5-7 9" />
        </svg>
      </div>
    </>
  );
}

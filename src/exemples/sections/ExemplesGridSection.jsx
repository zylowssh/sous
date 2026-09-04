import { useState } from 'react';
import { IMG, INK, ORANGE } from '../exemplesAssets';
import { Arr, Star } from '../components/exemplesPrimitives';

const CATEGORIES = ['TOUS', 'BISTROT', 'ITALIEN', 'BURGER', 'JAPONAIS', 'CAFÉ', 'VÉGÉTAL'];

const CaseLabel = ({ x, y, num, name, city, cat }) => (
  <div className="absolute fm" style={{ left: x, top: y }}>
    <div className="flex items-baseline gap-[8px]">
      <span className="fs italic text-[13px]" style={{ color: ORANGE }}>{num}</span>
      <span className="font-bold text-[11px] tracking-[0.08em]">{name}</span>
      <span className="text-[11px]" style={{ color: "var(--color-editorial-muted)" }}>/ {city}</span>
    </div>
    <div className="text-[10px] tracking-[0.08em] mt-[4px]" style={{ color: "var(--color-editorial-muted)" }}>{cat}</div>
  </div>
);

export default function ExemplesGridSection() {
  const [activeCategory, setActiveCategory] = useState('TOUS');
  const isVisible = (category) => activeCategory === 'TOUS' || activeCategory === category;
  const caseClass = (category, base = '') => `${base} transition-opacity duration-300 ${isVisible(category) ? 'opacity-100' : 'opacity-15'}`;

  return (
    <>
      <div className="absolute left-0 w-full flex items-center justify-center gap-[58px]" style={{ top: 64, height: 44, background: "var(--color-editorial-near-black)" }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={activeCategory === c}
            onClick={() => setActiveCategory(c)}
            className="relative fm font-bold text-[10px] tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-flame)]"
            style={{ color: activeCategory === c ? ORANGE : '#CFC9C0' }}
          >
            {c}
            {activeCategory === c && <span className="absolute left-0 -bottom-[6px] h-[2px] w-full" style={{ background: ORANGE }} />}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Filtre actif : {activeCategory.toLowerCase()}</p>

      <h2 className="absolute fd" style={{ left: 80, top: 126, fontSize: 46, lineHeight: 1.05 }}>
        SIX MAISONS.
        <br />
        SIX FAÇONS DE RECEVOIR.
      </h2>
      <button type="button" data-scroll="exemples-mamma" className="absolute flex items-center gap-[8px] fm font-bold text-[10px] tracking-[0.12em] border-b pb-[6px]" style={{ left: 80, top: 248, borderColor: INK }}>
        OUVRIR UNE ÉTUDE DE CAS <Arr className="w-[14px] h-[10px]" />
      </button>

      {/* ---- 01 RUMOR ---- */}
      <div className={caseClass('BISTROT', 'absolute soft-shadow overflow-hidden')} style={{ left: 80, top: 283, width: 410, height: 234, background: "#E7E2D3" }}>
        <div className="absolute left-[16px] top-[14px] right-[140px]">
          <div className="flex justify-end gap-[10px] fm text-[6.5px] tracking-[0.12em]" style={{ color: "var(--color-editorial-rule)" }}>
            <span>LE RESTAURANT</span><span>LA CARTE</span><span>GROUPES</span><span>CONTACT</span>
          </div>
          <div className="fd text-[36px] mt-[14px]" style={{ color: "#3F4A3C" }}>RUMOR</div>
          <div className="fm text-[8px] leading-[1.7] mt-[6px]" style={{ color: "var(--color-editorial-copy)" }}>
            CUISINE DE BISTROT<br />PRODUITS DE CARACTÈRE
          </div>
          <button type="button" className="fm text-[6.5px] tracking-[0.12em] border px-[10px] py-[5px] mt-[10px]" style={{ borderColor: "var(--color-editorial-copy)" }}>RÉSERVER UNE TABLE</button>
          <div className="fm text-[6.5px] leading-[1.7] mt-[14px]" style={{ color: "var(--color-editorial-muted)" }}>
            OUVERT LE SOIR<br />DU MARDI AU SAMEDI<br />18 RUE BOURGELAT, 69002 LYON
          </div>
        </div>
        <span className="absolute left-[245px] top-[88px] w-[34px] h-[34px] rounded-full border flex items-center justify-center fs text-[15px]" style={{ borderColor: INK }}>
          R
        </span>
        <img src={IMG.rumor} alt="" className="absolute right-0 top-0 w-[128px] h-full object-cover"  decoding="async" loading="lazy" />
      </div>

      {/* ---- 02 MAMMA ROSA ---- */}
      <div className={caseClass('ITALIEN', 'absolute card-shadow')} style={{ left: 508, top: 172, width: 410, height: 345, background: "#F3EBDD", border: "6px solid var(--color-editorial-red)" }}>
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-[16px] top-[16px] w-[52%]">
            <div className="fd text-[34px] leading-[0.95]" style={{ color: "var(--color-editorial-red)", letterSpacing: 1 }}>MAMMA ROSA</div>
            <div className="fh text-[17px] mt-[6px]" style={{ color: "var(--color-editorial-deep)" }}>Cucina Italiana</div>
            <div className="fm text-[6.5px] leading-[1.9] mt-[12px]" style={{ color: "var(--color-editorial-copy)" }}>
              LA CUCINA<br />LA TRATTORIA<br />GROUPES<br />CONTACT
            </div>
            <button type="button" className="fm text-[6.5px] tracking-[0.12em] border px-[10px] py-[5px] mt-[10px]" style={{ borderColor: "var(--color-editorial-copy)" }}>RÉSERVER</button>
            <div className="fm text-[6.5px] leading-[1.7] mt-[12px]" style={{ color: "var(--color-editorial-muted)" }}>
              22 RUE DES VIEUX MURS<br />59800 LILLE
            </div>
            <div className="flex gap-[8px] mt-[8px]">
              {["f", "s", "t", "d"].map((s) => (
                <span key={s} className="w-[12px] h-[12px] rounded-full flex items-center justify-center" style={{ background: "var(--color-editorial-copy)" }}>
                  <span className="text-[7px] text-[#F3EBDD] leading-none">{s}</span>
                </span>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 60 44" className="absolute left-[168px] top-[196px] w-[62px]" fill="none" stroke="var(--color-editorial-red)" strokeWidth="1.4" strokeLinecap="round">
            <ellipse cx="30" cy="26" rx="12" ry="9" />
            <path d="M20 20c-6-6-12-6-14-2 3 1 5 3 6 6M40 20c6-6 12-6 14-2-3 1-5 3-6 6" />
            <path d="M22 33l-6 8M27 35l-3 9M33 35l3 9M38 33l6 8M30 17v-6M26 12l-3-4M34 12l3-4" />
          </svg>
          <img src={IMG.grate} alt="" className="absolute right-[12px] top-[12px] w-[45%] h-[290px] object-cover" style={{ border: "4px solid #fff" }}  decoding="async" loading="lazy" />
          <div className="checker absolute inset-x-0 bottom-0" style={{ height: 14 }} />
        </div>
      </div>

      {/* ---- 03 KNOCK KNOCK ---- */}
      <div className={caseClass('BURGER', 'absolute soft-shadow overflow-hidden')} style={{ left: 936, top: 180, width: 410, height: 332, background: "var(--color-editorial-gold)" }}>
        <div className="relative px-[16px] pt-[14px]" style={{ height: 125 }}>
          <div className="flex justify-between fm text-[6.5px] tracking-[0.12em]" style={{ color: "var(--color-editorial-deep)" }}>
            <span className="flex gap-[14px]"><span>MENU</span><span>LE RESTO</span><span>INFOS</span></span>
            <span className="border px-[8px] py-[4px]" style={{ borderColor: "var(--color-editorial-deep)" }}>RÉSERVER</span>
          </div>
          <div className="fd text-[38px] mt-[10px]" style={{ color: "var(--color-editorial-near-black)" }}>KNOCK KNOCK</div>
          <div className="fm text-[7px] tracking-[0.14em] mt-[4px]" style={{ color: "var(--color-editorial-copy)" }}>NANTES</div>
        </div>
        <div className="relative">
          <img src={IMG.burgerfries} alt="" className="w-full h-[207px] object-cover"  decoding="async" loading="lazy" />
          <span className="absolute right-[14px] top-[14px] w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center" style={{ border: "2px solid var(--color-editorial-gold)", color: "var(--color-editorial-gold)", background: "rgba(20,16,11,.25)" }}>
            <span className="fm text-[5px] tracking-[0.14em]">BURGERS</span>
            <span className="fd text-[16px]">KK</span>
            <span className="fm text-[5px] tracking-[0.14em]">DE CARACTÈRE</span>
          </span>
        </div>
      </div>

      {/* ---- 04 SORA ---- */}
      <div className={caseClass('JAPONAIS', 'absolute soft-shadow overflow-hidden')} style={{ left: 80, top: 588, width: 410, height: 258, background: "#101010" }}>
        <div className="absolute left-[18px] top-[18px] w-[42%]">
          <div className="text-[17px] tracking-[0.35em] text-[var(--color-editorial-paper)]">SORA <span className="tracking-normal">空</span></div>
          <div className="fm text-[7px] leading-[1.8] mt-[12px]" style={{ color: "var(--color-editorial-muted)" }}>
            CUISINE JAPONAISE<br />CONTEMPORAINE
          </div>
          <div className="fm text-[7px] leading-[2] mt-[16px]" style={{ color: "#CFC9C0" }}>
            À PROPOS<br />MENU<br />RÉSERVATION<br />JOURNAL<br />CONTACT
          </div>
          <Star className="w-[16px] h-[16px] mt-[10px]" />
        </div>
        <img src={IMG.nigiri} alt="" className="absolute right-0 top-0 w-[55%] h-full object-cover"  decoding="async" loading="lazy" />
      </div>

      {/* ---- 05 VERDE ---- */}
      <div className={caseClass('VÉGÉTAL', 'absolute soft-shadow overflow-hidden')} style={{ left: 508, top: 588, width: 410, height: 258, background: "#E9E4D6" }}>
        <div className="absolute left-[18px] top-[14px] right-[190px]">
          <div className="flex justify-between fm text-[6.5px] tracking-[0.1em]" style={{ color: "var(--color-editorial-rule)" }}>
            <span>LA TABLE</span><span>NOTRE APPROCHE</span><span>CARTE</span><span>RÉSERVER</span>
          </div>
          <div className="text-[26px] font-light mt-[22px]" style={{ color: "#5A7042", letterSpacing: "0.35em" }}>VERDE</div>
          <div className="fm text-[8px] leading-[1.8] mt-[12px]" style={{ color: "var(--color-editorial-copy)" }}>
            CUISINE VÉGÉTALE<br />DE SAISON
          </div>
          <div className="fm text-[6.5px] leading-[1.7] mt-[14px]" style={{ color: "var(--color-editorial-muted)" }}>
            12 RUE SAINTE-COLOMBE<br />33000 BORDEAUX
          </div>
          <svg viewBox="0 0 20 20" className="w-[20px] mt-[10px]" fill="none" stroke="#5A7042" strokeWidth="1.3">
            <path d="M10 18V9M10 9C10 5.5 12.5 3 16 3c0 3.5-2.5 6-6 6ZM10 12c0-2.4-1.9-4.3-4.3-4.3 0 2.4 1.9 4.3 4.3 4.3Z" />
          </svg>
        </div>
        <img src={IMG.verde} alt="" className="absolute right-0 top-0 w-[45%] h-full object-cover"  decoding="async" loading="lazy" />
      </div>

      {/* ---- 06 CAFÉ LÉON ---- */}
      <div className={caseClass('CAFÉ', 'absolute soft-shadow overflow-hidden')} style={{ left: 936, top: 588, width: 410, height: 258, background: "var(--color-editorial-paper-alt)" }}>
        <div className="absolute left-[18px] top-[14px] right-[170px]">
          <div className="flex justify-between fm text-[6.5px] tracking-[0.1em]" style={{ color: "#274690" }}>
            <span>LE CAFÉ</span><span>LA CARTE</span><span>ÉVÉNEMENTS</span><span>CONTACT</span>
            <span className="relative" style={{ color: ORANGE }}>RÉSERVER<span className="absolute left-0 -bottom-[3px] h-[1.5px] w-full" style={{ background: ORANGE }} /></span>
          </div>
          <div className="fd text-[30px] mt-[14px]" style={{ color: "#274690" }}>CAFÉ LÉON</div>
          <div className="fm text-[7.5px] leading-[1.7] mt-[6px]" style={{ color: "#274690" }}>
            CAFÉ DE SPÉCIALITÉ<br />BRUNCH &amp; PÂTISSERIES
          </div>
          <div className="fm text-[6.5px] leading-[1.7] mt-[12px]" style={{ color: "var(--color-editorial-muted)" }}>
            7 COURS JULIEN<br />13006 MARSEILLE
          </div>
          <svg viewBox="0 0 60 60" className="w-[70px] mt-[6px]" fill="none" stroke="#274690" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="28" cy="8" r="4" />
            <path d="M28 12v14M28 26l-6 14M28 26l6 14M28 16l-9 6M28 15l10-2 3-4" />
            <rect x="42" y="4" width="7" height="6" rx="1" />
            <path d="M49 5h3v3h-3" />
          </svg>
        </div>
        <img src={IMG.cafe} alt="" className="absolute right-0 top-0 w-[40%] h-full object-cover"  decoding="async" loading="lazy" />
      </div>

      <div className={caseClass('BISTROT')}><CaseLabel x={80} y={535} num="01." name="RUMOR" city="LYON" cat="BISTROT" /></div>
      <div className={caseClass('ITALIEN')}><CaseLabel x={508} y={535} num="02." name="MAMMA ROSA" city="LILLE" cat="ITALIEN" /></div>
      <div className={caseClass('BURGER')}><CaseLabel x={936} y={535} num="03." name="KNOCK KNOCK" city="NANTES" cat="BURGER" /></div>
      <div className={caseClass('JAPONAIS')}><CaseLabel x={80} y={866} num="04." name="SORA" city="PARIS" cat="JAPONAIS" /></div>
      <div className={caseClass('VÉGÉTAL')}><CaseLabel x={508} y={866} num="05." name="VERDE" city="BORDEAUX" cat="VÉGÉTAL" /></div>
      <div className={caseClass('CAFÉ')}><CaseLabel x={936} y={866} num="06." name="CAFÉ LÉON" city="MARSEILLE" cat="CAFÉ" /></div>
    </>
  );
}

/* ============================= STAGE C : CASE MAMMA ROSA ============================= */

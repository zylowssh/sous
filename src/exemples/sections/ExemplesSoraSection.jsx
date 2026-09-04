import { IMG, ORANGE } from '../exemplesAssets';
import { Arr, Star } from '../components/exemplesPrimitives';

export default function ExemplesSoraSection() {
  return (
    <>
      {/* phone menu */}
      <div className="absolute card-shadow rounded-[14px] overflow-hidden" style={{ left: 48, top: 172, width: 160, height: 455, background: "var(--color-editorial-paper-soft)", border: "4px solid var(--color-editorial-near-black)" }}>
        <div className="flex justify-between items-center px-[12px] py-[10px]" style={{ background: "var(--color-editorial-near-black)" }}>
          <span className="text-[10px] tracking-[0.3em] text-[var(--color-editorial-paper)]">SORA</span>
          <span className="text-[var(--color-editorial-paper)] text-[11px]">≡</span>
        </div>
        <div className="flex justify-between fm text-[7px] px-[12px] pt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          <span className="font-bold tracking-[0.14em]">MENU</span>
          <span>JP / FR</span>
        </div>
        <div className="px-[12px] mt-[8px] space-y-[8px]">
          {[
            { j: "刺身 / SASHIMI", items: [["Sashimi moriawase", "Assortiment du jour", 23], ["Maguro akami", "Thon rouge", 18], ["Tai uçuri", "Dorade sauvage", 17]] },
            { j: "焼き物 / YAKIMONO", items: [["Gindara saikyō yaki", "Black cod mariné", 28], ["Negima yakitori", "Poulet fermier, poireau", 9], ["Shishitō", "Poivrons shishitō grillés", 8]] },
            { j: "揚げ物 / AGEMONO", items: [["Karaage", "Poulet frit, citron yuzu", 11], ["Ebi tempura", "Crevettes, sauce tentsuyu", 16]] },
          ].map((s) => (
            <div key={s.j}>
              <div className="fm text-[6.5px] tracking-[0.1em] pb-[4px]" style={{ color: "var(--color-editorial-muted)", borderBottom: "1px solid rgba(22,19,16,.2)" }}>{s.j}</div>
              <div className="mt-[6px] space-y-[6px]">
                {s.items.map((it) => (
                  <div key={it[0]} className="flex justify-between">
                    <div>
                      <div className="fm font-bold text-[7px]">{it[0]}</div>
                      <div className="fm text-[6px]" style={{ color: "var(--color-editorial-muted)" }}>{it[1]}</div>
                    </div>
                    <div className="fm text-[7px]">{it[2]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="absolute inset-x-0 bottom-0 fm font-bold text-[8px] tracking-[0.12em] py-[10px]" style={{ background: "#CBB98A", color: "var(--color-editorial-deep)" }}>
          RÉSERVER UNE TABLE
        </button>
      </div>

      {/* browser */}
      <div className="absolute card-shadow rounded-[8px] overflow-hidden" style={{ left: 243, top: 88, width: 650, height: 535, background: "var(--color-editorial-paper-soft)" }}>
        <div className="relative h-[405px]" style={{ background: "#101010" }}>
          <div className="flex justify-between items-center px-[22px] pt-[16px]">
            <span className="text-[13px] tracking-[0.35em] text-[var(--color-editorial-paper)]">SORA</span>
            <div className="flex items-center gap-[16px] fm text-[7px] tracking-[0.12em]" style={{ color: "#CFC9C0" }}>
              <span>ACCUEIL</span><span>MENU</span><span>À PROPOS</span><span>JOURNAL</span>
              <span className="px-[12px] py-[6px] rounded-[2px]" style={{ background: "#CBB98A", color: "var(--color-editorial-deep)" }}>RÉSERVER</span>
            </div>
          </div>
          <div className="absolute left-[28px] top-[90px]">
            <div className="fs text-[34px] leading-[1.15]" style={{ color: "var(--color-editorial-paper)" }}>Izakaya<br />contemporain</div>
            <div className="fm text-[8px] leading-[1.9] mt-[12px]" style={{ color: "var(--color-editorial-gray)" }}>
              Produits de saison. Techniques japonaises.
              <br />
              Ambiance chaleureuse.
            </div>
            <button type="button" className="fm text-[7px] tracking-[0.12em] border px-[12px] py-[7px] mt-[14px]" style={{ borderColor: "var(--color-editorial-rule)", color: "var(--color-editorial-cream-alt)" }}>
              VOIR LE MENU →
            </button>
          </div>
          <img src={IMG.sashimi} alt="" className="absolute right-[16px] top-[60px] w-[380px] h-[300px] object-cover rounded-[6px]"  decoding="async" loading="lazy" />
          <div className="absolute inset-x-[16px] bottom-[14px] flex items-center gap-[14px] rounded-[6px] px-[14px] py-[10px]" style={{ background: "var(--color-ink)", border: "1px solid var(--color-editorial-charcoal)" }}>
            <span className="flex items-center gap-[8px] fm text-[8px]" style={{ color: "var(--color-editorial-cream-alt)" }}>
              <svg viewBox="0 0 14 14" className="w-[11px]" fill="none" stroke="var(--color-editorial-gray)"><circle cx="7" cy="4.5" r="2.5" /><path d="M2.5 12c.5-3 2.3-4.5 4.5-4.5s4 1.5 4.5 4.5" /></svg>
              2 personnes
            </span>
            <span className="w-px h-[14px]" style={{ background: "var(--color-editorial-charcoal)" }} />
            <span className="flex items-center gap-[8px] fm text-[8px]" style={{ color: "var(--color-editorial-cream-alt)" }}>
              <svg viewBox="0 0 14 14" className="w-[11px]" fill="none" stroke="var(--color-editorial-gray)"><rect x="1.5" y="2.5" width="11" height="10" rx="1.5" /><path d="M1.5 5.5h11M4 1.5v2.5M10 1.5v2.5" /></svg>
              Sam. 24 mai
            </span>
            <span className="w-px h-[14px]" style={{ background: "var(--color-editorial-charcoal)" }} />
            <span className="flex items-center gap-[8px] fm text-[8px]" style={{ color: "var(--color-editorial-cream-alt)" }}>
              <svg viewBox="0 0 14 14" className="w-[11px]" fill="none" stroke="var(--color-editorial-gray)"><circle cx="7" cy="7" r="5.5" /><path d="M7 4v3l2 2" /></svg>
              19:30
            </span>
            <button type="button" className="flex-1 fm font-bold text-[8px] tracking-[0.14em] py-[9px] rounded-[3px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>RÉSERVER</button>
          </div>
        </div>
        <div className="flex items-center gap-[20px] px-[28px] pt-[18px]">
          <div>
            <div className="fm text-[8px] tracking-[0.14em]" style={{ color: "var(--color-editorial-rule)" }}>旬 / SHUN</div>
            <div className="fs text-[18px] mt-[8px]">初鰹、山菜、筍</div>
          </div>
          <div className="fm text-[8px] leading-[1.8] w-[170px]" style={{ color: "var(--color-editorial-copy)" }}>
            Le meilleur du moment,
            <br />
            sélectionné chaque matin
            <br />
            au marché.
            <div className="font-bold tracking-[0.12em] mt-[8px]">EN SAVOIR PLUS →</div>
          </div>
          <img src={IMG.greens} alt="" className="ml-auto w-[205px] h-[110px] object-cover rounded-[4px]"  decoding="async" loading="lazy" />
        </div>
      </div>

      <h2 className="absolute fd" style={{ left: 945, top: 112, fontSize: 40, lineHeight: 1.1 }}>
        LE CALME DANS L'ASSIETTE.
        <br />
        LA PRÉCISION DANS LA CARTE.
      </h2>
      <div className="absolute" style={{ left: 947, top: 228 }}>
        <Star className="w-[18px] h-[18px]" />
      </div>

      <div className="absolute card-shadow rounded-[6px] overflow-hidden" style={{ left: 945, top: 308, width: 198, height: 292, background: "#14100C" }}>
        <div className="p-[14px]">
          <div className="fm text-[6.5px] tracking-[0.12em]" style={{ color: "var(--color-editorial-muted)" }}>焼き物 / YAKIMONO</div>
          <div className="fs text-[16px] mt-[8px] leading-[1.25]" style={{ color: "var(--color-editorial-paper)" }}>Gindara<br />saikyō yaki</div>
          <div className="fm text-[7px] leading-[1.6] mt-[8px]" style={{ color: "var(--color-editorial-gray)" }}>
            Black cod mariné au miso
            <br />
            saikyō, panais rôti
          </div>
          <div className="fm font-bold text-[9px] mt-[8px]" style={{ color: "var(--color-editorial-cream-alt)" }}>28 €</div>
        </div>
        <img src={IMG.gindara} alt="" className="absolute inset-x-0 bottom-0 w-full h-[130px] object-cover"  decoding="async" loading="lazy" />
      </div>

      <div className="absolute soft-shadow rounded-[6px]" style={{ left: 1165, top: 308, width: 192, height: 292, background: "#F5F1E9", border: "1px solid #d8d2c4", padding: 18 }}>
        <div className="flex justify-center">
          <svg viewBox="0 0 34 22" className="w-[34px]" fill="none" stroke="var(--color-editorial-copy)" strokeWidth="1.2">
            <path d="M2 2h30v18H2z" strokeDasharray="3 2" />
            <path d="M13 7h8M13 11h8M15 15l2 2 4-4" />
          </svg>
        </div>
        <div className="fs text-[13px] text-center mt-[10px]">Réservation confirmée</div>
        <div className="fm text-[8px] text-center leading-[1.7] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          Samedi 24 mai 2025<br />19:30 pour 2 personnes
        </div>
        <div className="h-px mt-[12px]" style={{ background: "rgba(22,19,16,.25)" }} />
        <div className="fm text-[7.5px] leading-[1.7] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          SORA<br />12 rue Notre-Dame de Nazareth<br />75003 Paris
        </div>
        <button type="button" className="w-full fm font-bold text-[7.5px] tracking-[0.12em] border py-[8px] mt-[12px]" style={{ borderColor: "var(--color-editorial-copy)" }}>
          VOIR MA RÉSERVATION
        </button>
      </div>

      {[
        { x: 85, t: "SAISONNALITÉ VISIBLE", d: "Le shun est mis en avant sur la page d'accueil. Les produits du moment guident le menu et les envies." },
        { x: 485, t: "MENU BILINGUE", d: "Japonais et français côte à côte. Les noms et les descriptions restent fidèles, clairs et appétissants." },
        { x: 885, t: "RÉSERVATION SANS FRICTION", d: "En trois éléments, la table est réservée. Une confirmation immédiate, simple et rassurante." },
      ].map((c, i) => (
        <div key={c.t} className="absolute text-center" style={{ left: c.x, top: 678, width: 300, borderLeft: i ? "1px solid rgba(22,19,16,.2)" : "none" }}>
          <div className="fm font-bold text-[10px] tracking-[0.14em]">{c.t}</div>
          <div className="fm text-[9px] leading-[1.7] mt-[10px]" style={{ color: "var(--color-editorial-rule)" }}>{c.d}</div>
        </div>
      ))}

      <button type="button" data-route="/signup?style=sora" className="absolute flex items-center justify-center gap-[10px] fm font-bold text-[11px] tracking-[0.12em]" style={{ left: 1125, top: 680, width: 182, height: 40, background: ORANGE, color: "var(--color-editorial-paper)" }}>
        CHOISIR SORA <Arr className="w-[15px] h-[10px]" color="var(--color-editorial-paper)" />
      </button>
      <div className="absolute flex items-center gap-[10px]" style={{ left: 1147, top: 738 }}>
        <Star className="w-[14px] h-[14px]" />
        <span className="fh text-[16px]" style={{ color: "var(--color-editorial-deep)" }}>Tout est à sa place.</span>
      </div>
    </>
  );
}

/* ============================= STAGE F : CTA + FOOTER ============================= */

import { INK, ORANGE, SAGE } from '../tarifsAssets';
import { Check, Sawtooth, SousLogoMark, Star, Underline } from '../components/tarifsPrimitives';

const Ring = ({ x, top = 396 }) => (
  <span
    className="absolute rounded-full"
    style={{
      left: x,
      top,
      width: 12,
      height: 46,
      border: '3.5px solid #8a6a2f',
      boxShadow: '0 1px 2px rgba(0,0,0,.3)',
    }}
  />
);

export default function TarifsOnboardingSection() {
  return (
    <>
      <div className="absolute fm font-bold text-[12px] tracking-[0.1em]" style={{ left: 162, top: 135 }}>
        <span style={{ color: ORANGE }}>3/6</span> <span className="ml-[10px]">TARIFS</span>
      </div>
      <h2 className="absolute fd" style={{ left: 160, top: 160, fontSize: 42, lineHeight: 1.08 }}>
        DÈS LE PREMIER SERVICE,
        <br />
        VOUS N'ÊTES PAS SEUL.
      </h2>
      <p className="absolute text-[13px]" style={{ left: 162, top: 268, color: "var(--color-editorial-copy)" }}>
        La mise en ligne, la vérification et la prise en main sont comprises.
      </p>

      <div className="absolute flex items-center gap-[10px] px-[18px] h-[36px]" style={{ left: 770, top: 188, background: "var(--color-editorial-near-black)" }}>
        <span className="w-[8px] h-[8px] rounded-full" style={{ background: ORANGE }} />
        <span className="fm font-bold text-[10px] tracking-[0.1em] text-[var(--color-editorial-paper)]">UNE PERSONNE VOUS RÉPOND</span>
      </div>
      <svg viewBox="0 0 70 40" className="absolute" style={{ left: 965, top: 232, width: 70 }} fill="none" stroke="var(--color-editorial-deep)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 8c16 18 36 22 58 16M54 18l9 5-7 7" />
      </svg>
      <div className="absolute" style={{ left: 1045, top: 222, transform: "rotate(-2deg)" }}>
        <div className="fh text-[21px] leading-[1.35]" style={{ color: "var(--color-editorial-deep)" }}>
          Du menu au premier
          <br />
          service, avec vous.
        </div>
        <Underline className="w-[155px] h-[9px]" />
      </div>

      <div className="brass absolute rounded-[5px]" style={{ left: 120, top: 400, width: 1200, height: 9, boxShadow: "0 2px 4px rgba(0,0,0,.35)" }} />
      {[105, 1310].map((x) => (
        <span key={x} className="absolute rounded-full" style={{ left: x, top: 391, width: 27, height: 27, background: "radial-gradient(circle at 35% 30%, #d9b26a, #8a6a2f 60%, #6d5222)", boxShadow: "0 2px 4px rgba(0,0,0,.4)" }} />
      ))}
      <Ring x={211} />
      <Ring x={452} />
      <Ring x={718} />
      <Ring x={962} />
      <Ring x={1198} />

      {/* tag 01 */}
      <div className="absolute soft-shadow" style={{ left: 118, top: 440, width: 200, height: 330, background: "var(--color-editorial-paper-alt)", padding: "18px 22px" }}>
        <Sawtooth color="var(--color-editorial-paper-alt)" top />
        <Sawtooth color="var(--color-editorial-paper-alt)" />
        <div className="fd text-[24px]" style={{ color: ORANGE }}>01</div>
        <div className="h-[1.5px] mt-[6px]" style={{ background: INK }} />
        <div className="fd text-[15px] leading-[1.25] mt-[8px]">ON RECUEILLE<br />VOTRE MENU</div>
        <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="fh text-[13px] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>Menu du chef</div>
        <div className="relative mt-[8px]">
          {["Entrées", "Plats", "Desserts", "Boissons", "Vins"].map((l) => (
            <div key={l} className="fm text-[9px] leading-[2.1]" style={{ color: "var(--color-editorial-copy)", borderBottom: "1px dotted var(--color-editorial-muted)" }}>{l}</div>
          ))}
          <span className="absolute right-[6px] top-[4px] h-[110px] w-px" style={{ background: ORANGE }} />
          <span className="absolute" style={{ right: 1, top: 52 }}><Star className="w-[11px] h-[11px]" /></span>
        </div>
      </div>

      {/* tag 02 */}
      <div className="absolute soft-shadow" style={{ left: 350, top: 435, width: 218, height: 340, background: "var(--color-editorial-paper-alt)", padding: "18px 22px" }}>
        <Sawtooth color="var(--color-editorial-paper-alt)" top />
        <Sawtooth color="var(--color-editorial-paper-alt)" />
        <div className="fd text-[24px]" style={{ color: ORANGE }}>02</div>
        <div className="h-[1.5px] mt-[6px]" style={{ background: INK }} />
        <div className="fd text-[15px] leading-[1.25] mt-[8px]">ON CONNECTE<br />LA CAISSE</div>
        <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="fm text-[8px] mt-[12px]">Connexion sécurisée</div>
        <div className="fm text-[7px] mt-[12px]" style={{ color: "var(--color-editorial-rule)" }}>Fournisseur</div>
        <div className="flex justify-between items-center border px-[8px] py-[5px] mt-[3px] fm text-[9px]" style={{ borderColor: "var(--color-editorial-rule)", background: "var(--color-editorial-surface)" }}>
          Lightspeed <span className="text-[7px]">▾</span>
        </div>
        <div className="fm text-[7px] mt-[10px]" style={{ color: "var(--color-editorial-rule)" }}>Établissement</div>
        <div className="flex justify-between items-center border px-[8px] py-[5px] mt-[3px] fm text-[9px]" style={{ borderColor: "var(--color-editorial-rule)", background: "var(--color-editorial-surface)" }}>
          Brasserie du Centre <span className="text-[7px]">▾</span>
        </div>
        <div className="fh text-[14px] mt-[14px] text-center" style={{ color: "var(--color-editorial-deep)" }}>Connecté.</div>
        <Underline className="w-[70px] h-[7px] ml-[62px]" />
      </div>

      {/* tag 03 */}
      <div className="absolute soft-shadow" style={{ left: 598, top: 440, width: 235, height: 340, background: "var(--color-editorial-paper-soft)", padding: "18px 0 0" }}>
        <div style={{ padding: "0 22px" }}>
          <div className="fd text-[24px]" style={{ color: ORANGE }}>03</div>
          <div className="h-[1.5px] mt-[6px]" style={{ background: INK }} />
          <div className="fd text-[15px] leading-[1.25] mt-[8px]">VOUS TESTEZ<br />LE BROUILLON</div>
          <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
          <div className="flex gap-[24px] fm text-[8px] tracking-[0.1em] mt-[12px]">
            <span className="relative font-bold pb-[6px]">APERÇU<span className="absolute left-0 bottom-0 h-[2px] w-full" style={{ background: ORANGE }} /></span>
            <span style={{ color: "var(--color-editorial-muted)" }}>QR CODE</span>
          </div>
        </div>
        <div className="h-px mt-[2px]" style={{ background: "rgba(22,19,16,.2)" }} />
        <div className="relative mt-[14px] px-[22px]">
          <span className="absolute left-0 top-[8px] bottom-[30px] w-[2px]" style={{ background: ORANGE }} />
          <div className="fm font-bold text-[9px] tracking-[0.12em]">ENTRÉES</div>
          <div className="mt-[10px] space-y-[10px]">
            {[["Velouté de saison", "8 €"], ["Œuf parfait, cèpes", "11 €"], ["Saumon gravlax", "12 €"]].map((d) => (
              <div key={d[0]} className="flex justify-between fm text-[8.5px]">
                <span>{d[0]}</span>
                <span>{d[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tag 04 */}
      <div className="absolute soft-shadow" style={{ left: 866, top: 440, width: 205, height: 320, background: "var(--color-editorial-gold)", padding: "18px 24px" }}>
        {[{ l: -6, t: -6 }, { r: -6, t: -6 }, { l: -6, b: -6 }, { r: -6, b: -6 }].map((c, i) => (
          <span key={i} className="absolute w-[14px] h-[14px] rounded-full" style={{ left: c.l, right: c.r, top: c.t, bottom: c.b, background: SAGE }} />
        ))}
        <div className="fd text-[24px]" style={{ color: ORANGE }}>04</div>
        <div className="h-[1.5px] mt-[6px]" style={{ background: INK }} />
        <div className="fd text-[15px] leading-[1.25] mt-[8px]">VOUS DONNEZ<br />LE FEU VERT</div>
        <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "#6d5222" }} />
        <div className="mt-[18px] space-y-[14px]">
          {["Contenu validé", "Prix vérifiés", "Mise en page ok"].map((l) => (
            <div key={l} className="flex items-center gap-[10px]">
              <span className="w-[15px] h-[15px] border-[1.5px] flex items-center justify-center" style={{ borderColor: INK }}>
                <Check s={10} color={INK} />
              </span>
              <span className="fm text-[9px]">{l}</span>
            </div>
          ))}
        </div>
        <div className="fh text-[17px] mt-[22px]" style={{ color: "var(--color-editorial-deep)" }}>Feu vert !</div>
        <Underline className="w-[70px] h-[7px]" />
      </div>

      {/* tag 05 */}
      <div className="absolute soft-shadow rounded-[6px] overflow-hidden" style={{ left: 1096, top: 440, width: 218, height: 340, background: "var(--color-editorial-paper-alt)" }}>
        <div style={{ padding: "16px 20px 10px" }}>
          <div className="fd text-[24px]" style={{ color: ORANGE }}>05</div>
          <div className="h-[1.5px] mt-[6px]" style={{ background: INK }} />
          <div className="fd text-[15px] leading-[1.25] mt-[8px]">ON RESTE<br />DISPONIBLE</div>
        </div>
        <div className="mt-[6px]" style={{ background: "#E7DFCE", padding: "10px 12px 14px" }}>
          <div className="flex items-center gap-[8px]">
            <span className="text-[10px]" style={{ color: "var(--color-editorial-rule)" }}>‹</span>
            <span className="w-[20px] h-[20px] rounded-full flex items-center justify-center" style={{ background: "var(--color-editorial-paper-soft)" }}><SousLogoMark className="w-[8px] h-[12px]" /></span>
            <span className="flex-1">
              <span className="block fm font-bold text-[8px]">SOUS. Support</span>
              <span className="block text-[7px]" style={{ color: "#7c9a6d" }}>● En ligne</span>
            </span>
            <span className="text-[10px]" style={{ color: "var(--color-editorial-rule)" }}>⋮</span>
          </div>
          <div className="relative rounded-[6px] p-[8px] text-[9px] leading-[1.5] mt-[10px] pr-[40px]" style={{ background: "var(--color-editorial-surface)" }}>
            Besoin d'un ajustement ? On est là.
            <span className="absolute right-[6px] bottom-[5px] text-[7px]" style={{ color: "var(--color-editorial-muted)" }}>10:42</span>
          </div>
          <div className="flex justify-end mt-[8px]">
            <div className="relative rounded-[6px] p-[8px] text-[9px] pr-[52px]" style={{ background: "#DCE5CC" }}>
              Merci, c'est parfait !
              <span className="absolute right-[6px] bottom-[5px] text-[7px]" style={{ color: "#7c9a6d" }}>10:45 ✓✓</span>
            </div>
          </div>
          <div className="flex items-center gap-[8px] rounded-full border px-[10px] py-[6px] mt-[10px]" style={{ borderColor: "#b7ae9e", background: "var(--color-editorial-surface)" }}>
            <span className="text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>☺</span>
            <span className="flex-1 text-[8px]" style={{ color: "var(--color-editorial-muted)" }}>Message</span>
            <span className="text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>📎</span>
            <span className="text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>🎙</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================= STAGE 4 : PRO DARK ============================= */

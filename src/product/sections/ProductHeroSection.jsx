import { IMG, INK, ORANGE } from '../productAssets';
import { Arr, Pin, QR, SousLogoMark, Star, Underline } from '../components/productPrimitives';

const BRUNCH = [
  { n: "Pancakes sarrasin", d: "sirop d'érable, noisettes", p: "13 €" },
  { n: "Ravioli di burro", d: "sauce noisette, parmesan", p: "17 €" },
  { n: "Œufs mimosa", d: "moutarde, herbes fraîches", p: "12 €" },
];

export default function ProductHeroSection() {
  return (
    <>
      <h1 className="absolute fd" style={{ left: 52, top: 212, fontSize: 60, lineHeight: 1.05 }}>
        UNE INSTRUCTION.
        <br />
        TROIS SURFACES
        <br />À JOUR.
      </h1>
      <p className="absolute text-[16px] leading-[1.55]" style={{ left: 52, top: 442, color: ORANGE }}>
        Votre caisse alimente le menu.
        <br />
        Sous prépare. Vous validez.
      </p>
      <button type="button" data-scroll="product-pipeline" className="absolute flex items-center gap-[10px] rounded-[3px] px-[26px] h-[46px] fm font-bold text-[11px] tracking-[0.1em]" style={{ left: 52, top: 520, background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
        VOIR SOUS EN ACTION <Arr className="w-[16px] h-[11px]" />
      </button>
      <div className="absolute" style={{ left: 238, top: 625, transform: "rotate(-2deg)" }}>
        <div className="flex items-start gap-[10px]">
          <Star className="w-[20px] h-[20px] mt-[10px]" />
          <div className="fh text-[20px] leading-[1.25]" style={{ color: "var(--color-editorial-deep)" }}>
            Rien ne sort
            <br />
            sans votre feu vert.
          </div>
        </div>
        <Underline className="w-[160px] h-[10px] ml-[30px]" />
      </div>

      {/* WhatsApp card */}
      <div className="absolute soft-shadow" style={{ left: 447, top: 55, width: 265, transform: "rotate(-2.5deg)", background: "#EFE7D8", border: "1px solid #E0D7C4", borderRadius: 6, padding: 16 }}>
        <div className="flex items-center gap-[8px]">
          <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
            <svg viewBox="0 0 16 16" className="w-[10px] h-[10px]" fill="#fff">
              <path d="M8 2a6 6 0 0 0-5.2 9L2 14l3.1-.8A6 6 0 1 0 8 2Zm3 8.2c-.3.7-1.4 1.2-2 1.1-.5-.1-1.7-.4-3.2-1.8-1.2-1.1-1.8-2.3-2-2.7-.2-.4-.1-.9.2-1.2l.6-.7c.2-.2.5-.2.7.1l.9 1.2c.2.2.1.5-.1.7l-.4.4c.3.6.9 1.3 1.5 1.8.6.5 1.3.9 1.9 1.1l.5-.5c.2-.2.5-.3.7-.1l1.3.9c.3.2.3.5.1.7Z" />
            </svg>
          </span>
        </div>
        <div className="fm text-[8px] tracking-[0.14em] mt-[8px]" style={{ color: "var(--color-editorial-taupe)" }}>VOUS (VIA WHATSAPP)</div>
        <div className="relative mt-[8px] rounded-[4px] p-[12px] text-[11px] leading-[1.55]" style={{ background: "#FBF7EE", color: "var(--color-editorial-copy)" }}>
          On lance le brunch dimanche prochain à 11h. Faites-en quelque chose de spécial sur l'accueil.
          <span className="absolute right-[8px] bottom-[6px] text-[8px]" style={{ color: "var(--color-editorial-muted)" }}>10:42</span>
        </div>
      </div>

      {/* Draft paper */}
      <div className="absolute paper-shadow" style={{ left: 498, top: 238, transform: "rotate(1.5deg)", background: "#F4ECDC", borderRadius: 4, padding: 32 }}>
        <div className="absolute right-[24px] top-[24px] fm font-bold text-[15px] tracking-[0.1em] border-[2.5px] rounded-[4px] px-[16px] py-[5px]" style={{ color: ORANGE, borderColor: ORANGE, transform: "rotate(8deg)" }}>
          BROUILLON
        </div>
        <div className="fd text-[27px]">LE BRUNCH ARRIVE.</div>
        <div className="fm text-[12px] tracking-[0.08em] mt-[4px]">DIMANCHES DÈS 11H</div>
        <div className="h-px mt-[16px]" style={{ background: INK }} />
        <div className="mt-[16px] space-y-[14px]">
          {BRUNCH.map((b) => (
            <div key={b.n} className="flex justify-between">
              <div>
                <div className="fm font-bold text-[12px]">{b.n}</div>
                <div className="fm text-[11px]" style={{ color: "var(--color-editorial-taupe)" }}>{b.d}</div>
              </div>
              <div className="fm text-[12px]">{b.p}</div>
            </div>
          ))}
        </div>
        <div className="mt-[16px] border rounded-[3px] px-[12px] py-[9px] flex justify-between fm font-bold text-[11px]" style={{ borderColor: INK }}>
          <span>+ JUS D'ORANGE FRAIS</span>
          <span>4 €</span>
        </div>
        <div className="mt-[24px] flex items-center gap-[26px]">
          <button type="button" className="fm font-bold text-[11px] tracking-[0.08em] px-[20px] py-[13px]" style={{ background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
            VALIDER ET PUBLIER
          </button>
          <button type="button" className="fm font-bold text-[11px] underline underline-offset-4">MODIFIER LA PROPOSITION</button>
        </div>
      </div>

      {/* Laptop */}
      <div className="absolute" style={{ left: 965, top: 125, width: 425, transform: "rotate(2deg)" }}>
        <div className="rounded-t-[10px] overflow-hidden" style={{ border: "6px solid var(--color-editorial-near-black)", background: "var(--color-editorial-paper)", height: 264 }}>
          <div className="px-[10px] pt-[3px]">
            <SousLogoMark className="h-[42px] w-auto" />
          </div>
          <div className="relative">
            <div className="absolute left-[16px] top-[16px] w-[45%]">
              <div className="fd text-[24px] leading-[1.02]">LE BRUNCH<br />ARRIVE.</div>
              <div className="fm text-[9px] tracking-[0.08em] mt-[6px]">DIMANCHES DÈS 11H</div>
              <button type="button" className="fm text-[7px] tracking-[0.12em] border px-[10px] py-[5px] mt-[16px]">VOIR LE MENU</button>
              <div className="mt-[14px] text-[10px]" style={{ color: "var(--color-editorial-taupe)" }}>↓</div>
            </div>
            <img src={IMG.pancakes} alt="pancakes" className="absolute right-0 top-[6px] w-[52%] h-[196px] object-cover"  decoding="async" />
          </div>
        </div>
        <div className="relative h-[10px] rounded-b-[8px]" style={{ background: "linear-gradient(#D8D3CC,#9d968c)", margin: "0 -24px" }}>
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-[70px] h-[4px] rounded-b" style={{ background: "#8a847b" }} />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute card-shadow" style={{ left: 955, top: 462, width: 132, height: 298, borderRadius: 22, border: "5px solid var(--color-editorial-near-black)", background: "var(--color-editorial-paper)", padding: 12 }}>
        <span className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[46px] h-[10px] rounded-full" style={{ background: "var(--color-editorial-near-black)" }} />
        <SousLogoMark className="mt-[10px] h-[34px] w-auto" />
        <div className="fd text-[15px] leading-[1.05] mt-[10px]">LE BRUNCH<br />ARRIVE.</div>
        <div className="fm text-[7px] tracking-[0.08em] mt-[4px]">DIMANCHES DÈS 11H</div>
        <div className="flex justify-center mt-[10px]">
          <QR seed={11} size={86} bg="var(--color-editorial-paper)" />
        </div>
        <button type="button" className="fm text-[7px] tracking-[0.12em] border px-[10px] py-[5px] mt-[10px] w-full">VOIR LE MENU</button>
      </div>

      {/* Pinned paper */}
      <div className="absolute paper-shadow" style={{ left: 1115, top: 500, width: 243, transform: "rotate(2deg)", background: "#F1E9D9", padding: 20 }}>
        <Pin x={112} y={-8} />
        <div className="fd text-[17px]">LE BRUNCH ARRIVE.</div>
        <div className="fm text-[9px] tracking-[0.08em] mt-[3px]">DIMANCHES DÈS 11H</div>
        <div className="h-px mt-[10px]" style={{ background: "rgba(22,19,16,.4)" }} />
        <div className="mt-[10px] space-y-[10px]">
          {BRUNCH.map((b) => (
            <div key={b.n} className="flex justify-between">
              <div>
                <div className="fm font-bold text-[9px]">{b.n}</div>
                <div className="fm text-[8px]" style={{ color: "var(--color-editorial-taupe)" }}>{b.d}</div>
              </div>
              <div className="fm text-[9px]">{b.p}</div>
            </div>
          ))}
        </div>
        <div className="mt-[10px] border rounded-[3px] px-[10px] py-[7px] flex justify-between fm font-bold text-[9px]" style={{ borderColor: INK }}>
          <span>+ JUS D'ORANGE FRAIS</span>
          <span>4 €</span>
        </div>
        <div className="fm text-[9px] mt-[12px]" style={{ color: "var(--color-editorial-taupe)" }}>Merci et à dimanche.</div>
      </div>

      {/* arrows */}
      <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 1440 810" fill="none">
        <defs>
          <marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0L7 4L0 8" fill="none" stroke={ORANGE} strokeWidth="1.6" />
          </marker>
        </defs>
        <path d="M468 222C468 252 476 262 494 274" stroke={ORANGE} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#ah2)" />
        <path d="M1032 402c-6 22-10 34-12 50" stroke={ORANGE} strokeWidth="2" markerEnd="url(#ah2)" />
        <path d="M906 586c18 14 28 20 40 26" stroke={ORANGE} strokeWidth="2" markerEnd="url(#ah2)" />
        <path d="M1090 634c12-2 20-3 30-5" stroke={ORANGE} strokeWidth="2" markerEnd="url(#ah2)" />
      </svg>
    </>
  );
}

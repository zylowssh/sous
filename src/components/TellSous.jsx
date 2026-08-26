import Reveal from './Reveal';
import Section from './Section';
import { IMG } from '../data';
import { AsteriskIcon, CheckIcon, EditIcon, MessageIcon, ScribbleCircle } from './doodles';
import { MaskWords } from './fx';

const requests = [
  { text: 'Mettre en avant le brunch du dimanche', border: 'border-ink/20', icon: EditIcon },
  { text: 'Ajouter le nouveau plat du jour', border: 'border-ink/20', icon: MessageIcon },
  { text: 'Modifier les horaires pour les fêtes', border: 'border-ink/20', icon: null },
  { text: 'Rendre le menu plus lisible sur mobile', border: 'border-ink/20', icon: null },
];

export default function TellSous() {
  return (
    <Section id="tell" bg="bg-coal" className="text-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 py-16 md:px-8 lg:grid-cols-12 lg:py-8">
        <Reveal className="lg:col-span-4">
          <h2 className="font-display leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
            <MaskWords text="Dites-le à" />{' '}
            <span className="relative inline-block px-2 text-flame">
              Sous.
              <ScribbleCircle className="-inset-x-2 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+16px)] text-flame/40" />
            </span>
          </h2>
          <p className="mt-6 font-hand text-2xl text-cream/70">
            Votre assistant digital. Par texte ou par voix.
          </p>
          <AsteriskIcon className="mt-6 h-5 w-5 text-cream/40" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="space-y-5 rounded-xl border border-cream/10 bg-[#181512] p-5 shadow-card">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cream/50">
                <MessageIcon className="h-4 w-4" /> Vous (via WhatsApp)
              </p>
              <div className="ml-6 rounded-lg rounded-tl-none bg-[#26221C] p-4 text-sm leading-relaxed text-cream/90">
                On lance le brunch dimanche prochain à 11h. Faites-en quelque chose de spécial sur l'accueil.
              </div>
              <p className="ml-6 mt-1 text-right text-[10px] text-cream/40">10:42</p>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-flame">
                <CheckIcon className="h-4 w-4" /> Sous
              </p>
              <div className="ml-6 rounded-lg rounded-tl-none bg-[#26221C] p-4">
                <p className="text-sm font-medium text-cream/80">Voici une proposition de mise à jour pour votre page d'accueil :</p>
                
                <div className="mt-3 rounded border border-cream/10 bg-[#1E1B18] p-3">
                  <p className="font-display text-lg uppercase leading-none text-cream">Le brunch arrive.</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cream/60">Dimanches dès 11h</p>
                  <div className="mt-3 overflow-hidden rounded">
                    <img src={IMG.brunch} alt="Brunch" loading="lazy" className="aspect-video w-full object-cover opacity-80" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded bg-flame px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors hover:bg-flame/90">
                    <CheckIcon className="h-3.5 w-3.5" /> Valider et publier
                  </button>
                  <button className="text-xs font-medium text-cream/50 underline decoration-cream/20 underline-offset-4 hover:text-cream/80">
                    Modifier la proposition
                  </button>
                </div>
              </div>
              <p className="ml-6 mt-1 text-right text-[10px] text-cream/40">10:43</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-3">
          <div className="flex flex-col items-start gap-4">
            {requests.map((r, i) => (
              <Reveal key={r.text} delay={i * 100} from="right">
                <span className={`inline-flex items-center gap-2 rounded-full border ${r.border} bg-cream/5 px-4 py-2.5 text-xs font-medium text-cream/80 transition-colors hover:bg-cream/10`}>
                  {r.icon && <r.icon className="h-4 w-4 shrink-0 text-cream/60" />} {r.text}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

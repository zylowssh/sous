import Reveal from './Reveal';
import Section from './Section';
import { MaskWords } from './fx';
import { CheckIcon, EditIcon, GlobeIcon, MessageIcon, ScribbleCircle } from './doodles';

const steps = [
  { 
    icon: MessageIcon, 
    num: '01', 
    title: 'Une envie ? Un message.', 
    text: 'Envoyez une instruction (texte ou vocal) via WhatsApp. "On lance le brunch dimanche à 11h."' 
  },
  { 
    icon: EditIcon, 
    num: '02', 
    title: 'Sous prépare une proposition', 
    text: 'Votre assistant génère un brouillon de mise à jour pour votre site, basé sur vos données.' 
  },
  { 
    icon: CheckIcon, 
    num: '03', 
    title: 'Vous validez en un clic', 
    text: 'Vous vérifiez la proposition. Rien n\'est jamais publié sans votre accord explicite.' 
  },
  { 
    icon: GlobeIcon,
    num: '04', 
    title: 'Après validation, tout est à jour',
    text: 'La modification validée rejoint votre site web et votre QR menu en salle.'
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" bg="bg-olive">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 py-16 md:px-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-10 lg:py-10">
        <Reveal>
          <h2 className="font-display leading-[1.1] text-4xl md:text-5xl xl:text-6xl">
            <MaskWords text="Vous cuisinez." />
            <br />
            <MaskWords text="Sous s'occupe" start={300} />{' '}
            <span className="relative inline-block px-1">
              <MaskWords text="du reste." start={500} />
              <ScribbleCircle className="-inset-x-3 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+24px)] text-ink/20" />
            </span>
          </h2>
          <p className="mt-6 font-hand text-2xl text-ink/75">Simple, fiable, et sous votre contrôle.</p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 130} className="relative">
              <span className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-7xl text-ink/10 italic">{s.num}</span>
              <s.icon className="relative h-10 w-10 md:h-12 md:w-12" />
              <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Étape {s.num}
              </p>
              <h3 className="mt-2 text-base font-bold uppercase tracking-wide md:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-base">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

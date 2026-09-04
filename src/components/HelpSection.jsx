import Reveal from './Reveal';
import Section from './Section';
import { ArrowRightIcon, AsteriskIcon, CheckIcon, MessageIcon, ShieldIcon } from './doodles';

const supportMoments = [
  {
    title: 'Avant le lancement',
    copy: 'On vérifie avec vous le menu, la connexion à la caisse, les allergènes et le nom de domaine.',
  },
  {
    title: 'Pendant la prise en main',
    copy: 'Vous testez le brouillon et la validation avec une personne de l’équipe, sur votre vrai fonctionnement.',
  },
  {
    title: 'Après la mise en ligne',
    copy: 'Une question sur un prix, le QR ou une publication ? L’équipe vous aide à retrouver une version fiable.',
  },
];

export default function HelpSection() {
  return (
    <Section id="help" bg="bg-olive">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-14">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-widest text-ink/70">Besoin d’un coup de main ?</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Une équipe vous accompagne, du menu au premier service.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
            Sous ne vous laisse pas seul avec un outil. La configuration, les premiers essais et les questions de publication se font avec vous.
          </p>

          <a
            href="mailto:contact@sous-app.fr?subject=Besoin%20d%27aide%20avec%20Sous"
            className="group mt-8 inline-flex min-h-11 items-center gap-3 bg-ink px-5 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors duration-300 hover:bg-flame hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
          >
            Parler à l’équipe
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>

          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink/70">
            <ShieldIcon className="h-4 w-4 text-flame" /> Rien n’est publié pendant l’accompagnement sans votre validation.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative border-y-2 border-ink py-2">
            <div className="absolute -right-1 -top-8 rotate-3 bg-butter px-3 py-2 font-hand text-lg font-bold text-ink shadow-card">
              On répond en humain.
            </div>

            {supportMoments.map((moment, index) => (
              <div key={moment.title} className="grid gap-3 border-b border-ink/20 py-6 last:border-b-0 md:grid-cols-[3rem_0.55fr_1fr] md:items-start">
                <span className="font-display text-3xl text-flame">0{index + 1}</span>
                <h3 className="text-base font-extrabold uppercase tracking-wide text-ink">{moment.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-ink/75">{moment.copy}</p>
              </div>
            ))}

            <div className="flex items-center justify-between gap-4 border-t border-ink/20 py-5 text-sm font-semibold text-ink/75">
              <span className="flex items-center gap-2"><MessageIcon className="h-4 w-4" /> contact@sous-app.fr</span>
              <span className="flex items-center gap-2 text-right"><CheckIcon className="h-4 w-4 text-flame" /> Réponse personnalisée</span>
            </div>
          </div>
          <AsteriskIcon className="ml-auto mt-6 h-6 w-6 text-ink/60" />
        </Reveal>
      </div>
    </Section>
  );
}

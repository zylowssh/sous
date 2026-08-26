import Reveal from './Reveal';
import { ArrowRight, SousWordmark } from './marks';

/* Bande d'appel à l'action. Le MVP est accompagné à la main : la promesse
   affichée doit être celle-là, pas une inscription self-service. */
export default function Access() {
  return (
    <section id="acces" className="scroll-mt-20 bg-coal text-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="label !text-cream/45">Première saison</p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] text-cream md:text-[2.7rem]">
                Nous accompagnons vingt restaurants, un par un.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65">
                Pas de formulaire d’inscription qui vous laisse seul devant un éditeur. On branche
                votre caisse, on relit votre carte ensemble — allergènes en tête — et on ouvre.
              </p>
            </div>

            <div className="rounded-2xl border border-cream/12 bg-cream/[0.04] p-7">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  /* Brancher ici votre outil (Formspree, Brevo, API interne…). */
                }}
              >
                <div>
                  <label htmlFor="resto" className="label !text-cream/45">
                    Votre restaurant
                  </label>
                  <input
                    id="resto"
                    name="resto"
                    type="text"
                    autoComplete="organization"
                    placeholder="Le Comptoir Rive, Bordeaux"
                    className="mt-2 w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-cream/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label !text-cream/45">
                    E-mail ou téléphone
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    placeholder="vous@restaurant.fr"
                    className="mt-2 w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-cream/50"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cream px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Demander un accès
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[12px] leading-relaxed text-cream/40">
                  Une réponse sous 48 h, par un humain. Vos coordonnées servent uniquement à vous
                  recontacter et ne sont transmises à personne.
                </p>
              </form>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex items-center justify-center gap-4 text-cream/25">
          <span className="h-px w-16 bg-cream/15" />
          <SousWordmark className="text-2xl" />
          <span className="h-px w-16 bg-cream/15" />
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageMeta from '../components/PageMeta';
import { Grain } from '../components/fx';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-ink">
      <PageMeta
        title="Page introuvable | Sous"
        description="Cette page n’existe pas. Revenez à l’accueil de Sous."
        noIndex
      />
      <Grain />
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[110] bg-ink px-4 py-3 font-semibold text-cream focus:not-sr-only"
      >
        Aller au contenu
      </a>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="relative mx-auto grid min-h-screen max-w-[1600px] items-center gap-10 px-6 pb-12 pt-28 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:pb-16 lg:pt-32"
      >
        <div className="relative z-10">
          <p aria-hidden="true" className="font-display text-[clamp(10rem,33vw,31rem)] leading-[0.68] tracking-[-0.06em]">
            404
          </p>
          <div className="relative mt-5 border-b border-ink/70 pb-5 lg:mt-10">
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.86] tracking-[-0.025em]">
              Cette table n’existe pas.
            </h1>
          </div>
          <p className="mt-5 max-w-xl font-mono text-sm tracking-wide text-ink/65 sm:text-base">
            La page demandée a quitté le service.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex min-h-12 items-center bg-flame px-7 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Retour à l’accueil&nbsp; →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg pb-20 lg:pb-0">
          <div className="not-found-receipt relative rotate-[2deg] bg-paper px-7 pb-10 pt-14 shadow-photo sm:px-10">
            <span aria-hidden="true" className="absolute left-1/2 top-0 h-12 w-16 -translate-x-1/2 -translate-y-5 rounded-b bg-ink shadow-card" />
            <p className="text-center font-display text-4xl uppercase tracking-[0.16em]">Sous.</p>
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">Bistro contemporain</p>
            <div className="my-7 border-y border-dashed border-ink/40 py-6 font-mono text-xs uppercase leading-8 text-ink/70">
              <div className="flex justify-between"><span>Date</span><span>--/--/----</span></div>
              <div className="flex justify-between"><span>Heure</span><span>--:--</span></div>
              <div className="flex justify-between"><span>Couverts</span><span>--</span></div>
              <div className="flex justify-between"><span>Nom</span><span>----------</span></div>
            </div>
            <p className="rotate-[-2deg] border-4 border-flame px-3 py-3 text-center font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-none text-flame">
              Introuvable
            </p>
            <p className="mt-8 border-t border-dashed border-ink/40 pt-5 font-mono text-[10px] uppercase leading-5 tracking-wider text-ink/60">
              Merci et à bientôt.<br />L’équipe Sous.
            </p>
          </div>
          <p className="absolute bottom-0 right-2 rotate-[-5deg] font-hand text-3xl text-ink sm:-right-4 sm:text-4xl">
            On vous raccompagne&nbsp;?
          </p>
        </div>
      </main>
    </div>
  );
}

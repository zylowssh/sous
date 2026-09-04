import { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SousMark } from './doodles';

class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error('Route rendering failed', error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="flex min-h-screen items-center justify-center bg-cream px-6 text-ink">
        <div className="max-w-xl border-y border-ink/20 py-12 text-center">
          <SousMark className="mx-auto h-12 w-auto text-flame" />
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-flame">
            Service momentanément interrompu
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
            Quelque chose a débordé.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/65">
            Rechargez la page. Si le problème persiste, revenez à l’accueil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="min-h-11 bg-flame px-5 py-3 text-sm font-bold text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Recharger
            </button>
            <Link
              to="/"
              className="inline-flex min-h-11 items-center border border-ink/30 px-5 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default function ErrorBoundary({ children }) {
  const location = useLocation();
  return <Boundary key={location.pathname}>{children}</Boundary>;
}

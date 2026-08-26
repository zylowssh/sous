import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateSection from './components/TemplateSection';
import HowItWorks from './components/HowItWorks';
import Examples from './components/Examples';
import TellSous from './components/TellSous';
import MenuSection from './components/MenuSection';
import BeforeAfter from './components/BeforeAfter';
import FaqPricing from './components/FaqPricing';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { BigMarquee, DotsNav, Grain, ScrollProgress, useStackSnap, goToSection } from './components/fx';
import { onReady } from './components/ready';
import { SousMark } from './components/doodles';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Commencer from './pages/Commencer';
import ExemplesPage from './pages/ExemplesPage';
import ProduitPage from './pages/ProduitPage';
import TarifsPage from './pages/TarifsPage';
import CGU from './pages/CGU';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';

export default function App() {
  const [view, setView] = useState(window.location.hash.replace('#', '') || 'home');
  const [showContent, setShowContent] = useState(false);
  const [transitionActive, setTransitionActive] = useState(false);
  const transitioningRef = useRef(false);

  useEffect(() => {
    const handleHashChange = () => setView(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowContent(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Deep link: restore the section from the URL hash once the loader is done.
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return undefined;
    const cancel = onReady(() => {
      setTimeout(() => {
        if (document.getElementById(id)) goToSection(id);
      }, 60);
    });
    return cancel;
  }, []);

  // Page-transition: cream overlay slides down to cover, the view switches
  // behind it, then it lifts back up to reveal the new page.
  const navigateTo = useCallback((hash) => {
    if (transitioningRef.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      window.location.hash = hash;
      window.scrollTo(0, 0);
      return;
    }
    transitioningRef.current = true;
    setTransitionActive(true);
    setTimeout(() => {
      window.location.hash = hash;
      window.scrollTo(0, 0);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTransitionActive(false);
        transitioningRef.current = false;
      }));
    }, 500);
  }, []);

  useStackSnap();

  // Auth & onboarding pages (dark/cream backgrounds, no landing page chrome)
  if (view === 'login') return <Login onNavigate={navigateTo} />;
  if (view === 'signup') return <Signup onNavigate={navigateTo} />;
  if (view === 'commencer') return <Commencer onNavigate={navigateTo} />;

  // Standalone content pages (landing page chrome: Navbar + Footer)
  if (view === 'exemples') return <ExemplesPage onNavigate={navigateTo} />;
  if (view === 'produit') return <ProduitPage onNavigate={navigateTo} />;
  if (view === 'tarifs') return <TarifsPage onNavigate={navigateTo} />;

  // Legal pages
  if (view === 'cgu') return <CGU onBack={() => navigateTo('')} />;
  if (view === 'confidentialite') return <Confidentialite onBack={() => navigateTo('')} />;
  if (view === 'mentions-legales') return <MentionsLegales onBack={() => navigateTo('')} />;

  return (
    <div className="overflow-x-clip overflow-y-visible">
      <Loader />
      {showContent && (
        <>
          <Grain />
          <ScrollProgress />
          <Navbar onNavigate={navigateTo} />
          <DotsNav />
          <main>
            <Hero />
            <TemplateSection />
            <HowItWorks />
            <Examples />
            <TellSous />
            <MenuSection />
            <BigMarquee text="Votre site, toujours à jour" />
            <BeforeAfter />
            <FaqPricing />
          </main>
          <Footer onNavigate={navigateTo} />
        </>
      )}

      {/* Page-transition overlay — same cream + steam-mark language as the
          initial Loader, but lightweight: slide-down cover → view switches →
          slide-up reveal. No progress bar, no words, just the mark. */}
      <div
        className={`pointer-events-none fixed inset-0 z-[100] bg-cream transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          transitionActive ? '' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <SousMark className="h-20 w-auto text-flame/30" />
        </div>
      </div>
    </div>
  );
}

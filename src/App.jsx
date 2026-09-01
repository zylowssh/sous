import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './landing/components/Navbar';
import Hero from './landing/components/Hero';
import TemplateSection from './landing/components/TemplateSection';
import HowItWorks from './landing/components/HowItWorks';
import Examples from './landing/components/Examples';
import TellSous from './landing/components/TellSous';
import MenuSection from './landing/components/MenuSection';
import BeforeAfter from './landing/components/BeforeAfter';
import FaqPricing from './landing/components/FaqPricing';
import HelpSection from './landing/components/HelpSection';
import Footer from './landing/components/Footer';
import Loader from './landing/components/Loader';
import { BigMarquee, DotsNav, Grain, ScrollProgress, useStackSnap } from './landing/components/fx';
import { SousMark } from './components/doodles';
import { setReady } from './components/ready';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Commencer from './pages/Commencer';
import ExemplesPage from './pages/ExemplesPage';
import ProduitPage from './pages/ProduitPage';
import TarifsPage from './pages/TarifsPage';
import SystemDesignPage from './pages/SystemDesignPage';
import CGU from './pages/CGU';
import Confidentialite from './pages/Confidentialite';
import MentionsLegales from './pages/MentionsLegales';

function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowContent(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useStackSnap();

  return (
    <div className="overflow-x-clip overflow-y-visible">
      <Loader />
      {showContent && (
        <>
          <Grain />
          <ScrollProgress />
          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-[110] rounded-sm bg-ink px-4 py-3 font-semibold text-cream focus:not-sr-only focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
          >
            Aller au contenu
          </a>
          <Navbar />
          <DotsNav />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <TemplateSection />
            <HowItWorks />
            <Examples />
            <TellSous />
            <MenuSection />
            <BigMarquee text="Votre site, toujours à jour" />
            <BeforeAfter />
            <FaqPricing />
            <HelpSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

function TransitionWrapper({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionActive, setTransitionActive] = useState(false);
  const transitioningRef = useRef(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      if (transitioningRef.current) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
        return;
      }
      transitioningRef.current = true;
      setTransitionActive(true);
      setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setTransitionActive(false);
          transitioningRef.current = false;
        }));
      }, 500);
    }
  }, [location, displayLocation]);

  return (
    <div className="overflow-x-clip overflow-y-visible">
      <Routes location={displayLocation}>
        {children}
      </Routes>

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

export default function App() {
  useEffect(() => {
    const id = requestAnimationFrame(setReady);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <BrowserRouter>
      <TransitionWrapper>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/commencer" element={<Commencer />} />
        <Route path="/exemples" element={<ExemplesPage />} />
        <Route path="/produit" element={<ProduitPage />} />
        <Route path="/tarifs" element={<TarifsPage />} />
        <Route path="/system-design" element={<SystemDesignPage />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </TransitionWrapper>
    </BrowserRouter>
  );
}

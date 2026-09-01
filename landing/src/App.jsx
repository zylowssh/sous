import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateSection from './components/TemplateSection';
import HowItWorks from './components/HowItWorks';
import Examples from './components/Examples';
import TellSous from './components/TellSous';
import MenuSection from './components/MenuSection';
import BeforeAfter from './components/BeforeAfter';
import FaqPricing from './components/FaqPricing';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { BigMarquee, DotsNav, Grain, ScrollProgress, useStackSnap } from './components/fx';

/**
 * The landing page stands alone: every link or button that would leave for
 * another page is a no-op. Clicks are caught on the way down (capture), so
 * react-router's own <Link> handler never runs — no navigation, no URL
 * change, no remount.
 */
function useBlockOutboundNav() {
  useEffect(() => {
    const onClickCapture = (e) => {
      const el = e.target;
      const anchor = el && el.closest ? el.closest('a') : null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (href === '#top') {
        // Dead CTA: used by the pricing cards' "Commencer" — a no-op like
        // every other button that leaves the page.
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (href === '' || href.startsWith('#') || href.startsWith('mailto:')) return;

      let pathname = '';
      try {
        pathname = new URL(href, window.location.href).pathname;
      } catch {
        return;
      }
      if (pathname === '/' || pathname === window.location.pathname) return;

      e.preventDefault();
      e.stopPropagation();

      // Keep the mobile menu usable: a tapped nav link still closes it,
      // it just doesn't navigate anywhere.
      const toggle = document.querySelector('button[aria-controls="mobile-menu"][aria-expanded="true"]');
      if (toggle) toggle.click();
    };
    document.addEventListener('click', onClickCapture, true);
    return () => document.removeEventListener('click', onClickCapture, true);
  }, []);
}

function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  useBlockOutboundNav();

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Any other path renders the same landing in place — nothing to
            leave for, so nothing ever un-mounts or replays the loader. */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import { useEffect, useRef } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import PageMeta from './PageMeta';
import { DotsNav, Grain, ScrollProgress, goToSection, useStackSnap } from './fx';

const DEFAULT_TITLE = 'Sous | Votre menu, partout à jour';

export default function MarketingPageShell({
  title = DEFAULT_TITLE,
  description,
  rootClassName = '',
  background,
  sections,
  darkSectionIds,
  dotsAppearance = 'standard',
  mainClassName = '',
  onMainClick,
  children,
}) {
  const mainRef = useRef(null);

  useStackSnap();

  useEffect(() => {
    if (!window.location.hash) return undefined;

    const frame = requestAnimationFrame(() => goToSection(window.location.hash.slice(1)));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main || !onMainClick) return undefined;
    main.addEventListener('click', onMainClick);
    return () => main.removeEventListener('click', onMainClick);
  }, [onMainClick]);

  return (
    <div
      className={`overflow-x-clip overflow-y-visible ${rootClassName}`}
      style={background ? { background } : undefined}
    >
      <PageMeta title={title} description={description} />
      <Grain />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[110] rounded-sm bg-ink px-4 py-3 font-semibold text-cream focus:not-sr-only focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
      >
        Aller au contenu
      </a>
      <Navbar />
      <DotsNav
        sections={sections}
        darkSectionIds={darkSectionIds}
        appearance={dotsAppearance}
      />
      <main ref={mainRef} id="main-content" tabIndex={-1} className={mainClassName}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

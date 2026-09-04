import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import MarketingPageShell from './components/MarketingPageShell';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import PageMeta from './components/PageMeta';
import { BigMarquee } from './components/fx';

const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Examples = lazy(() => import('./components/Examples'));
const FaqPricing = lazy(() => import('./components/FaqPricing'));
const HelpSection = lazy(() => import('./components/HelpSection'));
const Hero = lazy(() => import('./components/Hero'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const MenuSection = lazy(() => import('./components/MenuSection'));
const TellSous = lazy(() => import('./components/TellSous'));
const TemplateSection = lazy(() => import('./components/TemplateSection'));

const CGU = lazy(() => import('./pages/CGU'));
const Confidentialite = lazy(() => import('./pages/Confidentialite'));
const ExemplesPage = lazy(() => import('./pages/ExemplesPage'));
const Login = lazy(() => import('./pages/Login'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const ProduitPage = lazy(() => import('./pages/ProduitPage'));
const Signup = lazy(() => import('./pages/Signup'));
const SystemDesignPage = lazy(() => import('./pages/SystemDesignPage'));
const TarifsPage = lazy(() => import('./pages/TarifsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const DashboardLayout = lazy(() => import('./components/DashboardLayout'));
const DashboardAI = lazy(() => import('./pages/DashboardAI'));
const DashboardContact = lazy(() => import('./pages/DashboardContact'));
const DashboardHelp = lazy(() => import('./pages/DashboardHelp'));
const DashboardIntegrations = lazy(() => import('./pages/DashboardIntegrations'));
const DashboardMedias = lazy(() => import('./pages/DashboardMedias'));
const DashboardMenu = lazy(() => import('./pages/DashboardMenu'));
const DashboardOverview = lazy(() => import('./pages/DashboardOverview'));
const DashboardProfile = lazy(() => import('./pages/DashboardProfile'));
const DashboardReservations = lazy(() => import('./pages/DashboardReservations'));
const DashboardSettings = lazy(() => import('./pages/DashboardSettings'));
const DashboardSite = lazy(() => import('./pages/DashboardSite'));
const DashboardSiteEditor = lazy(() => import('./pages/DashboardSiteEditor'));
const DashboardStats = lazy(() => import('./pages/DashboardStats'));
const RequireAuth = lazy(() => import('./components/RequireAuth'));

const META = {
  login: ['Connexion | Sous', 'Connectez-vous à votre espace Sous.'],
  signup: ['Créer mon site | Sous', 'Créez le site de votre restaurant avec Sous.'],
  system: ['Système de design | Sous', 'Les fondations visuelles et techniques de Sous.'],
  cgu: ["Conditions générales d’utilisation | Sous", "Consultez les conditions générales d’utilisation de Sous."],
  privacy: ['Confidentialité | Sous', 'Consultez la politique de confidentialité de Sous.'],
  legal: ['Mentions légales | Sous', 'Consultez les mentions légales de Sous.'],
};

function PageRoute({ meta, noIndex = false, children }) {
  return (
    <>
      <PageMeta title={meta[0]} description={meta[1]} noIndex={noIndex} />
      {children}
    </>
  );
}

function LandingPage() {
  return (
    <MarketingPageShell>
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
    </MarketingPageShell>
  );
}

function RouteFallback() {
  return <div className="min-h-screen bg-cream" aria-hidden="true" />;
}

function TransitionWrapper({ children }) {
  const location = useLocation();
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const displayedPath = useRef(`${location.pathname}${location.search}`);
  const initialLoaderTimer = useRef(0);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [loading, setLoading] = useState(() => !reducedMotion.current);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (reducedMotion.current) setLoading(false);
    else initialLoaderTimer.current = window.setTimeout(() => setLoading(false), 850);

    return () => {
      window.clearTimeout(initialLoaderTimer.current);
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  useEffect(() => {
    const nextPath = `${location.pathname}${location.search}`;
    if (nextPath === displayedPath.current) return undefined;
    window.clearTimeout(initialLoaderTimer.current);

    if (reducedMotion.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      displayedPath.current = nextPath;
      setDisplayLocation(location);
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    let finishTimer = 0;
    const swapTimer = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      displayedPath.current = nextPath;
      setDisplayLocation(location);
      finishTimer = window.setTimeout(() => setLoading(false), 650);
    }, 420);

    return () => {
      window.clearTimeout(swapTimer);
      window.clearTimeout(finishTimer);
    };
  }, [location]);

  return (
    <div className="overflow-x-clip overflow-y-visible">
      <Suspense fallback={<RouteFallback />}>
        <ErrorBoundary>
          <Routes location={displayLocation}>
            {children}
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <Loader active={loading} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TransitionWrapper>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<PageRoute meta={META.login} noIndex><Login /></PageRoute>} />
        <Route path="/signup" element={<PageRoute meta={META.signup} noIndex><Signup /></PageRoute>} />
        <Route path="/commencer" element={<Navigate to="/signup" replace />} />
        <Route path="/exemples" element={<ExemplesPage />} />
        <Route path="/produit" element={<ProduitPage />} />
        <Route path="/tarifs" element={<TarifsPage />} />
        <Route path="/system-design" element={<PageRoute meta={META.system} noIndex><SystemDesignPage /></PageRoute>} />
        <Route path="/cgu" element={<PageRoute meta={META.cgu}><CGU /></PageRoute>} />
        <Route path="/confidentialite" element={<PageRoute meta={META.privacy}><Confidentialite /></PageRoute>} />
        <Route path="/mentions-legales" element={<PageRoute meta={META.legal}><MentionsLegales /></PageRoute>} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="ai" element={<DashboardAI />} />
            <Route path="site" element={<DashboardSite />} />
            <Route path="site/editeur" element={<DashboardSiteEditor />} />
            <Route path="menu" element={<DashboardMenu />} />
            <Route path="reservations" element={<DashboardReservations />} />
            <Route path="medias" element={<DashboardMedias />} />
            <Route path="statistiques" element={<DashboardStats />} />
            <Route path="integrations" element={<DashboardIntegrations />} />
            <Route path="parametres" element={<DashboardSettings />} />
            <Route path="profil" element={<DashboardProfile />} />
            <Route path="contact" element={<DashboardContact />} />
            <Route path="aide" element={<DashboardHelp />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </TransitionWrapper>
    </BrowserRouter>
  );
}

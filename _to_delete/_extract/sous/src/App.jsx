import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Drift from './components/Drift';
import PosSync from './components/PosSync';
import ConfirmLoop from './components/ConfirmLoop';
import Autonomy from './components/Autonomy';
import QrTable from './components/QrTable';
import Compliance from './components/Compliance';
import Examples from './components/Examples';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Access from './components/Access';
import Footer from './components/Footer';
import { Grain, ScrollProgress } from './components/fx';
import { setReady } from './components/ready';

export default function App() {
  useEffect(() => setReady(), []);

  return (
    <div className="overflow-x-clip">
      <Grain />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 1. Le problème vécu, pas la promesse produit */}
        <Hero />
        <Drift />
        {/* 2. La source de vérité */}
        <PosSync />
        {/* 3. Le mécanisme différenciant */}
        <ConfirmLoop />
        <Autonomy />
        {/* 4. L'usage quotidien qui garde le site vivant */}
        <QrTable />
        {/* 5. Ce qui rend la délégation défendable */}
        <Compliance />
        {/* 6. La preuve visuelle */}
        <Examples />
        <Pricing />
        <Faq />
        <Access />
      </main>
      <Footer />
    </div>
  );
}

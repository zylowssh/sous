import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { Grain } from '../components/fx';
import { AsteriskIcon, ArrowRightIcon, QrIcon } from '../components/doodles';
import { BrowserFrame, ButtonLink, Eyebrow, PhoneFrame, Receipt, Stamp, TrustStrip } from '../components/MarketingPrimitives';
import { IMG } from '../data';

const categories = ['Tous', 'Italien', 'Burger', 'Japonais', 'Bistrot', 'Végétal', 'Café'];

const projects = [
  { id: 'rumor', name: 'RUMOR', city: 'Lyon', category: 'Bistrot', image: IMG.interior, palette: 'bg-[#d8d0bd]', copy: 'Le bistrot du coin, passé côté nuit.' },
  { id: 'mamma', name: 'MAMMA ROSA', city: 'Lille', category: 'Italien', image: IMG.pasta, palette: 'bg-[#ead6bf]', copy: 'La table du dimanche, tous les jours.' },
  { id: 'knock', name: 'KNOCK KNOCK', city: 'Nantes', category: 'Burger', image: IMG.burger, palette: 'bg-coal text-cream', copy: 'Burgers francs. Nuits longues.' },
  { id: 'sora', name: 'SORA', city: 'Paris', category: 'Japonais', image: IMG.ramen, palette: 'bg-[#e7e5df]', copy: 'La précision dans chaque bol.' },
  { id: 'verde', name: 'VERDE', city: 'Bordeaux', category: 'Végétal', image: IMG.greens, palette: 'bg-[#314233] text-cream', copy: 'Le végétal sans voix basse.' },
  { id: 'leon', name: 'CAFÉ LÉON', city: 'Marseille', category: 'Café', image: IMG.cafe, palette: 'bg-butter', copy: 'Le café qui connaît votre prénom.' },
];

function ProjectPreview({ project, compact = false }) {
  const dark = project.palette.includes('text-cream');
  return (
    <BrowserFrame dark={dark} label={`${project.id}.fr`}>
      <div className={`${project.palette} ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
        <div className="flex items-center justify-between gap-4">
          <p className={`${compact ? 'text-xs' : 'text-base'} font-black tracking-[0.15em]`}>{project.name}</p>
          <span className="text-[8px] font-black uppercase tracking-widest">Menu</span>
        </div>
        <h3 className={`${compact ? 'mt-7 text-2xl' : 'mt-10 text-3xl sm:text-4xl'} max-w-[12ch] font-display uppercase leading-[0.95]`}>{project.copy}</h3>
        <img src={project.image} alt={`Aperçu de ${project.name}`} className={`${compact ? 'mt-4 aspect-[16/10]' : 'mt-6 aspect-[16/10]'} w-full object-cover`} />
        <div className="mt-3 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.16em] opacity-60"><span>{project.category}</span><span>{project.city}</span></div>
      </div>
    </BrowserFrame>
  );
}

function CaseHeader({ number, name, category, mood, title, copy, light = false }) {
  return (
    <div>
      <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${light ? 'text-flame' : 'text-flame'}`}>{number} / {name} / {category}</p>
      <h2 className={`mt-4 max-w-[11ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      <p className={`mt-5 max-w-md text-sm leading-relaxed ${light ? 'text-cream/60' : 'text-ink/60'}`}>{copy}</p>
      <p className={`mt-6 font-hand text-xl ${light ? 'text-cream/55' : 'text-ink/50'}`}>{mood}</p>
    </div>
  );
}

export default function ExemplesPage() {
  const [filter, setFilter] = useState('Tous');
  const visible = filter === 'Tous' ? projects : projects.filter(project => project.category === filter);

  useEffect(() => {
    document.title = 'Exemples | Sous';
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />

      <main>
        <section className="relative min-h-[780px] overflow-hidden px-4 pb-24 pt-28 md:px-8 lg:min-h-screen lg:px-16 lg:pt-36">
          <p aria-hidden className="absolute -left-6 top-16 font-display text-[24vw] uppercase leading-none text-ink/[0.035]">Exemples</p>
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <div>
                <Eyebrow>Les maisons signées Sous</Eyebrow>
                <h1 className="mt-4 max-w-[13ch] font-display text-5xl uppercase leading-[0.9] tracking-[-0.02em] sm:text-7xl xl:text-[6.4rem]">Des sites qui ont du goût. <span className="text-flame">Pas l’air d’un catalogue.</span></h1>
              </div>
              <div className="pb-2">
                <p className="max-w-sm text-sm leading-relaxed text-ink/60">Même moteur, mêmes exigences de mise à jour, mais une direction artistique pensée pour chaque salle.</p>
                <a href="#index" className="group mt-6 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.12em] underline decoration-ink/30 underline-offset-8 hover:text-flame">Voir les six maisons <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative mt-14 min-h-[420px] sm:min-h-[520px]">
              <div className="absolute left-0 top-16 w-[54%] -rotate-3 sm:w-[44%]"><ProjectPreview project={projects[1]} compact /></div>
              <div className="absolute left-[24%] top-0 z-20 w-[56%] rotate-1 sm:left-[29%] sm:w-[45%]"><ProjectPreview project={projects[2]} compact /></div>
              <div className="absolute right-0 top-20 z-10 w-[52%] rotate-3 sm:w-[42%]"><ProjectPreview project={projects[3]} compact /></div>
              <p className="absolute bottom-0 right-4 flex items-center gap-2 font-hand text-xl text-ink/55 sm:text-2xl"><AsteriskIcon className="h-5 w-5 text-flame" /> Pas un template. Une interprétation.</p>
            </Reveal>
          </div>
        </section>

        <section id="index" className="scroll-mt-20 px-4 pb-24 md:px-8 lg:px-16 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="bg-ink p-4 text-cream sm:p-5">
                <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtrer les exemples">
                  {categories.map(category => (
                    <button key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className={`shrink-0 border px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] transition-colors ${filter === category ? 'border-flame bg-flame text-cream' : 'border-cream/20 text-cream/60 hover:border-cream/55 hover:text-cream'}`}>{category}</button>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal className="mt-14 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div><Eyebrow>L’index des tables</Eyebrow><h2 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Six maisons. Six façons de recevoir.</h2></div>
              <p className="max-w-lg text-sm leading-relaxed text-ink/60 lg:justify-self-end">Filtrez par cuisine, puis regardez comment l’identité change sans que la lisibilité du menu ne se perde.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
              {visible.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 80} className={`${index % 5 === 0 || index % 5 === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
                  <a href={`#${project.id}`} className="group block">
                    <ProjectPreview project={project} compact />
                    <div className="flex items-center justify-between border-b border-ink/20 py-3 text-[10px] font-black uppercase tracking-[0.15em]"><span>{String(index + 1).padStart(2, '0')} / {project.name}</span><ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="mamma" className="scroll-mt-16 border-y border-ink/15 bg-[#d7d0b5] px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <Reveal>
              <CaseHeader number="01" name="Mamma Rosa" category="Italien" mood="Chaleureux, généreux, sans folklore." title="Une trattoria qui sent le dimanche." copy="Une identité terre cuite, une photographie généreuse et une carte qui garde la cuisine au premier plan." />
              <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/signup" tone="dark">Créer une identité</ButtonLink><a href="#index" className="inline-flex items-center border border-ink px-5 py-3 text-[10px] font-black uppercase tracking-widest">Retour à l’index</a></div>
            </Reveal>
            <Reveal delay={100} className="relative pb-10 pr-0 sm:pr-24">
              <ProjectPreview project={projects[1]} />
              <PhoneFrame dark={false} className="absolute bottom-0 right-0 hidden w-40 sm:block"><img src={IMG.pasta} alt="Menu mobile Mamma Rosa" className="aspect-[3/4] w-full object-cover" /><div className="p-3"><p className="font-serif text-sm italic">La carte</p><p className="mt-2 text-[8px]">Pasta fresca · 18 €</p></div></PhoneFrame>
              <Receipt className="absolute -bottom-8 left-8 hidden w-52 -rotate-2 md:block"><p className="text-[9px] font-black uppercase tracking-widest text-flame">Note de salle</p><p className="mt-3 font-serif text-sm italic">« On a enfin un site qui nous ressemble. »</p></Receipt>
            </Reveal>
          </div>
        </section>

        <section id="knock" className="scroll-mt-16 bg-coal px-4 py-24 text-cream md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <Reveal className="relative min-h-[560px]">
              <img src={IMG.burger} alt="Burger de Knock Knock" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute left-5 top-5 bg-butter px-3 py-2 text-[9px] font-black uppercase tracking-widest text-ink">Menu de nuit</div>
              <PhoneFrame className="absolute bottom-5 right-5 w-40 sm:w-48"><div className="p-4"><p className="font-display text-2xl uppercase text-flame">KNOCK KNOCK</p><p className="mt-5 text-[9px] font-black uppercase tracking-widest">Smash simple · 14 €</p><p className="mt-2 text-[9px] text-cream/50">Bœuf, cheddar, pickles, sauce maison.</p><div className="mt-6 bg-flame p-2 text-center text-[8px] font-black uppercase">Commander</div></div></PhoneFrame>
            </Reveal>
            <Reveal delay={100}>
              <CaseHeader light number="02" name="Knock Knock" category="Burger club" mood="Carte courte. Promos du soir. QR comptoir." title="Un burger club qui ne chuchote pas." copy="Noir, orange, gros titres et photographie frontale. Une expérience rapide qui fonctionne aussi bien à table qu’au comptoir." />
              <div className="mt-8"><ButtonLink to="/signup" tone="light">Faire aussi singulier</ButtonLink></div>
            </Reveal>
          </div>
        </section>

        <section id="sora" className="scroll-mt-16 px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <CaseHeader number="03" name="Sora" category="Japonais" mood="Peu de bruit. Beaucoup de précision." title="Le calme dans l’assiette. La précision dans la carte." copy="Un site retenu, des détails fins et une réservation immédiatement visible." />
              <div className="grid grid-cols-3 gap-3 border-y border-ink/20 py-5 text-center text-[9px] font-black uppercase tracking-widest"><span>Menu lisible</span><span>Mobile net</span><span>Réserver vite</span></div>
            </Reveal>
            <Reveal delay={100} className="relative mt-14 pb-10 sm:pr-28">
              <ProjectPreview project={projects[3]} />
              <PhoneFrame className="absolute bottom-0 right-0 hidden w-44 sm:block"><img src={IMG.ramen} alt="Menu mobile Sora" className="aspect-square w-full object-cover" /><div className="p-4"><p className="text-[8px] font-black uppercase tracking-widest">Menu dégustation</p><p className="mt-2 text-[9px] text-cream/50">6 temps · 78 €</p></div></PhoneFrame>
              <Receipt className="absolute -bottom-6 left-8 hidden w-48 rotate-2 md:block"><p className="text-[9px] font-black uppercase tracking-widest">Réservation</p><p className="mt-3 text-xs">Samedi · 20h30<br />2 personnes</p><Stamp className="mt-4">Confirmée</Stamp></Receipt>
            </Reveal>
          </div>
        </section>

        <section className="bg-flame text-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-16 lg:py-28">
            <Reveal>
              <Eyebrow light>Votre table manque à l’index</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] font-display text-5xl uppercase leading-[0.9] sm:text-7xl xl:text-8xl">Le prochain exemple porte votre nom.</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">Donnez-nous votre menu, quelques images et l’ambiance de votre salle. Sous compose le reste avec vous.</p>
              <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/signup" tone="dark">Créer mon site</ButtonLink><ButtonLink to="/produit" tone="outlineLight">Voir comment ça marche</ButtonLink></div>
            </Reveal>
            <Reveal delay={100}>
              <BrowserFrame label="votre-restaurant.fr" className="-rotate-2">
                <div className="flex aspect-[16/10] items-center justify-center bg-paper p-8 text-center">
                  <div><QrIcon className="mx-auto h-12 w-12 text-ink/20" /><p className="mt-5 font-display text-4xl uppercase text-ink/15">Votre identité ici.</p><p className="mt-3 font-hand text-xl text-ink/40">Pas celle du voisin.</p></div>
                </div>
              </BrowserFrame>
            </Reveal>
          </div>
          <TrustStrip light items={['Direction sur mesure', 'Menu connecté', 'Mobile inclus', 'Votre validation']} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

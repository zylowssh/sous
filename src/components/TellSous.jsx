import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Section from './Section';
import { IMG, srcSetFor } from '../data';
import { AsteriskIcon, CheckIcon, EditIcon, MessageIcon, ScribbleCircle, SousMark } from './doodles';
import { MaskWords } from './fx';

const CONVOS = {
  brunch: {
    userText: "On lance le brunch dimanche prochain à 11h. Faites-en quelque chose de spécial sur l'accueil.",
    intro: "Voici une proposition de mise à jour pour votre page d'accueil :",
    title: 'Le brunch arrive.',
    sub: 'Dimanches dès 11h',
    img: IMG.brunch,
  },
  plat: {
    userText: 'Tu peux ajouter le nouveau plat du jour au menu ?',
    intro: "C'est fait, voici le nouveau plat du jour :",
    title: 'Lotte rôtie, beurre blanc.',
    sub: 'Plat du jour · 19€',
    img: IMG.fish,
  },
  horaires: {
    userText: 'Il faudrait adapter les horaires pour les fêtes.',
    intro: 'Voici les horaires affichés pendant les fêtes :',
    title: 'Soir de Noël, le 24.',
    sub: 'Service de 19h à 2h · Fermé le 25',
    img: null,
  },
  menu: {
    userText: "Le menu est dur à lire sur mobile, tu peux l'améliorer ?",
    intro: 'Voici la version mobile du menu, nettement plus lisible :',
    title: 'Menu, version mobile.',
    sub: 'Tout tient en une page. Plus de zoom.',
    img: null,
  },
};

const requests = [
  { id: 'brunch', text: 'Mettre en avant le brunch du dimanche', icon: EditIcon },
  { id: 'plat', text: 'Ajouter le nouveau plat du jour', icon: MessageIcon },
  { id: 'horaires', text: 'Modifier les horaires pour les fêtes', icon: null },
  { id: 'menu', text: 'Rendre le menu plus lisible sur mobile', icon: null },
];

export default function TellSous() {
  const [qid, setQid] = useState('brunch');
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState('idle'); // idle | thinking | typing | done
  const [tokens, setTokens] = useState(0);
  const [published, setPublished] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(CONVOS.brunch.title);
  const chatRef = useRef(null);

  const convo = CONVOS[qid];
  const introWords = convo.intro.split(' ');
  const introText = introWords.slice(0, tokens).join(' ');
  const thinking = stage === 'thinking';
  const typing = stage === 'typing';
  const done = stage === 'done';
  const statusText = editing
    ? 'Modification du brouillon en cours.'
    : published
      ? 'Publié. Le site et le QR menu sont à jour.'
      : thinking
        ? 'Sous prépare un brouillon. Rien n’est encore publié.'
        : typing
          ? 'Sous rédige la proposition.'
          : done
            ? 'Le brouillon est prêt à être vérifié.'
            : 'La démonstration est prête.';

  useEffect(() => {
    const el = chatRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    setTokens(0);
    setPublished(false);
    setEditing(false);
    setDraftTitle(convo.title);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTokens(introWords.length);
      setStage('done');
      return undefined;
    }

    setStage('thinking');
    const t1 = setTimeout(() => setStage('typing'), 700);
    return () => clearTimeout(t1);
  }, [convo.title, introWords.length, qid, run, started]);

  useEffect(() => {
    if (stage !== 'typing') return undefined;
    if (tokens >= introWords.length) {
      const t = setTimeout(() => setStage('done'), 300);
      return () => clearTimeout(t);
    }
    const iv = setInterval(() => setTokens((x) => x + 1), 45);
    return () => clearInterval(iv);
  }, [stage, tokens, introWords.length]);

  const pick = (id) => {
    setRun((r) => r + 1);
    setQid(id);
  };

  const showDraftNow = () => {
    setTokens(introWords.length);
    setStage('done');
  };

  const startEditing = () => {
    setEditing(true);
  };

  const saveDraft = () => {
    if (!draftTitle.trim()) setDraftTitle(convo.title);
    setEditing(false);
  };

  const wordIn = { animation: 'word-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both' };
  const caret = { animation: 'blink 0.9s steps(2) infinite' };

  return (
    <Section id="tell" bg="bg-coal" className="text-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 py-16 md:px-8 lg:grid-cols-12 lg:py-8">
        <Reveal className="lg:col-span-4">
          <h2 className="font-display leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
            <MaskWords text="Dites-le à" />{' '}
            <span className="relative inline-block px-2 text-flame">
              Sous.
              <ScribbleCircle className="-inset-x-2 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+16px)] text-flame/40" />
            </span>
          </h2>
          <p className="mt-6 font-hand text-2xl text-cream/70">
            Il prépare. Vous vérifiez. Rien ne part sans vous.
          </p>
          <AsteriskIcon className="mt-6 h-5 w-5 text-cream/70" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div ref={chatRef} className="space-y-5 rounded-xl border border-cream/10 bg-[#181512] p-5 shadow-card">
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{statusText}</p>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/75">
                <MessageIcon className="h-4 w-4" /> Vous (via WhatsApp)
              </p>
              <div className="ml-6 rounded-lg rounded-tl-none bg-[#26221C] p-4 text-sm leading-relaxed text-cream/90">
                {convo.userText}
              </div>
              <p className="ml-6 mt-1 text-right text-xs text-cream/65">10:42</p>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-flame">
                {done ? (
                  <SousMark className="h-4 w-auto text-flame" />
                ) : (
                  <img src="/brand/sous-loader.svg" alt="" draggable={false} className="h-4 w-auto select-none"  decoding="async" loading="lazy" />
                )}
                Sous
              </p>

              {thinking ? (
                <div className="ml-6 flex flex-wrap items-center gap-3 rounded-lg rounded-tl-none bg-[#26221C] px-4 py-3.5">
                  <img src="/brand/sous-loader.svg" alt="" draggable={false} className="h-6 w-auto select-none"  decoding="async" loading="lazy" />
                  <span className="font-hand text-xl text-cream/80">il prépare le brouillon…</span>
                  <button
                    type="button"
                    onClick={showDraftNow}
                    className="min-h-11 text-sm font-semibold text-cream underline decoration-cream/50 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                  >
                    Afficher tout de suite
                  </button>
                </div>
              ) : (
                <div className="ml-6 rounded-lg rounded-tl-none bg-[#26221C] p-4">
                  <p className="text-sm font-medium leading-relaxed text-cream/80">
                    {introText}
                    {typing && (
                      <span className="ml-1 inline-block h-3.5 w-0.5 translate-y-0.5 bg-flame" style={caret} />
                    )}
                  </p>

                  {done && (
                    <>
                      <div className="mt-3 rounded border border-cream/10 bg-[#1E1B18] p-3" style={wordIn}>
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-display text-lg uppercase leading-none text-cream">{draftTitle}</p>
                          <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-extrabold uppercase tracking-widest ${published ? 'bg-flame text-ink' : 'bg-butter text-ink'}`}>
                            {published ? 'Publié' : 'Brouillon'}
                          </span>
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-cream/75">{convo.sub}</p>
                        {convo.img && (
                          <div className="mt-3 overflow-hidden rounded">
                            <img
                              src={convo.img}
                              srcSet={srcSetFor(convo.img)}
                              sizes="(min-width: 1024px) 36vw, calc(100vw - 5rem)"
                              alt={convo.title}
                              loading="lazy"
                              decoding="async"
                              className="aspect-video w-full object-cover opacity-80"
                             />
                          </div>
                        )}
                      </div>

                      <div className="mt-4" style={wordIn}>
                        {published ? (
                          <p className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-wide text-cream">
                            <CheckIcon className="h-4 w-4 text-flame" /> Publié, le site et le QR menu sont à jour.
                          </p>
                        ) : editing ? (
                          <div className="rounded-md bg-paper p-3 text-ink">
                            <label htmlFor="demo-draft-title" className="text-xs font-bold uppercase tracking-widest text-ink/75">
                              Titre du brouillon
                            </label>
                            <input
                              id="demo-draft-title"
                              value={draftTitle}
                              onChange={(e) => setDraftTitle(e.target.value)}
                              className="mt-2 min-h-11 w-full rounded-sm border border-ink/30 bg-cream px-3 py-2 text-sm font-semibold text-ink outline-none focus:border-flame focus:ring-2 focus:ring-flame/30"
                            />
                            <div className="mt-3 flex flex-wrap gap-3">
                              <button
                                type="button"
                                onClick={saveDraft}
                                className="min-h-11 rounded-sm bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                              >
                                Enregistrer le brouillon
                              </button>
                              <button
                                type="button"
                                onClick={() => { setDraftTitle(convo.title); setEditing(false); }}
                                className="min-h-11 px-2 text-xs font-bold uppercase tracking-wide text-ink/75 underline decoration-ink/40 underline-offset-4"
                              >
                                Annuler
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setPublished(true)}
                              className="inline-flex min-h-11 items-center gap-2 rounded bg-flame px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:bg-butter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                            >
                              <CheckIcon className="h-3.5 w-3.5" /> Valider et publier
                            </button>
                            <button
                              type="button"
                              onClick={startEditing}
                              className="min-h-11 text-xs font-semibold text-cream underline decoration-cream/50 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                            >
                              Modifier la proposition
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
              <p className="ml-6 mt-1 text-right text-xs text-cream/65">10:43</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-3">
          <div className="flex flex-col items-start gap-4">
            {requests.map((r, i) => (
              <Reveal key={r.id} delay={i * 100} from="right">
                <button
                  type="button"
                  onClick={() => pick(r.id)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${
                    qid === r.id
                      ? 'border-flame/70 bg-flame/10 text-cream'
                      : 'border-cream/20 bg-cream/5 text-cream/80 hover:bg-cream/10 hover:text-cream'
                  }`}
                >
                  {r.icon && <r.icon className="h-4 w-4 shrink-0 text-cream/75" />} {r.text}
                </button>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

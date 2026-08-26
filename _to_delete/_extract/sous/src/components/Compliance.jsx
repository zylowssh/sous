import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { Lock } from './marks';

const rules = [
  {
    ref: 'Règlement INCO 1169/2011',
    title: 'Les 14 allergènes majeurs',
    body: 'Extraits plat par plat, signalés quand ils manquent, affichés sur le site comme sur le menu QR. En cas de récidive, un défaut d’affichage peut aller jusqu’à la fermeture administrative — Sous les traite comme un champ à part, jamais comme du texte ordinaire.',
  },
  {
    ref: 'Décret n° 2024-171',
    title: 'L’origine des viandes',
    body: 'Le champ existe, il est obligatoire, et il vous est redemandé quand une fiche change. Aucune valeur n’est déduite ni recopiée d’un plat voisin.',
  },
  {
    ref: 'Code de la consommation',
    title: 'Des prix TTC, service compris',
    body: 'Affichés en toutes taxes comprises, avec la mention légale, partout où ils apparaissent — page d’accueil, carte, menu QR et fiche Google.',
  },
];

export default function Compliance() {
  return (
    <Section id="conformite" bg="bg-paper">
      <SectionHead
        label="Conformité"
        title="Ce ne sont pas des options du plan supérieur."
        lead="Trois obligations légales structurent la carte d’un restaurant en France. Elles sont traitées comme des données sensibles : validées par un humain, tracées, jamais publiées automatiquement."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {rules.map((r, i) => (
          <Reveal key={r.ref} delay={i * 110}>
            <div className="flex h-full flex-col rounded-xl border border-ink/12 bg-cream p-6">
              <p className="label !text-ink/45">{r.ref}</p>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug">{r.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{r.body}</p>
              <p className="mt-5 inline-flex items-center gap-2 border-t border-ink/10 pt-4 text-[12px] font-semibold uppercase tracking-label text-amber">
                <Lock className="h-3.5 w-3.5" />
                Validation humaine obligatoire
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={260}>
        <div className="mt-8 grid gap-6 rounded-xl border border-ink/12 bg-chalk/40 p-7 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-medium">Où vivent vos données</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
              Site, carte, photos et statistiques sont hébergés en France, chez un hébergeur soumis
              au RGPD. Vos données de caisse ne servent qu’à alimenter votre carte.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-medium">Le point WhatsApp, dit franchement</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
              WhatsApp appartient à Meta : vos messages transitent par une infrastructure hors Union
              européenne. C’est le canal le plus pratique, pas le plus souverain. SMS et e-mail sont
              disponibles si vous préférez.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

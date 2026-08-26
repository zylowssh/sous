import Reveal from './Reveal';
import Section, { SectionHead } from './Section';

const symptoms = [
  {
    when: 'Il y a 3 semaines',
    what: 'Le prix du plat du jour a augmenté en cuisine.',
    site: 'Le site affiche toujours l’ancien.',
  },
  {
    when: 'Hier, 20 h 10',
    what: 'Le poulpe est parti en rupture.',
    site: 'Le menu QR le propose encore aux tables 4 et 7.',
  },
  {
    when: 'Décembre dernier',
    what: 'Vous avez fermé une semaine pour les fêtes.',
    site: 'Google indique toujours « ouvert ».',
  },
  {
    when: 'Depuis l’ouverture',
    what: 'Les allergènes ont été saisis une fois, à la va-vite.',
    site: 'Personne ne les a relus depuis.',
  },
];

export default function Drift() {
  return (
    <Section id="principe" bg="bg-paper">
      <SectionHead
        label="Le vrai problème"
        title="Créer le site n’a jamais été le problème. C’est le mardi suivant."
        lead="Un site de restaurant ne meurt pas le jour du lancement. Il se périme lentement, pendant que vous faites tourner un service."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink/12 bg-ink/10 sm:grid-cols-2">
        {symptoms.map((s, i) => (
          <Reveal key={s.when} delay={i * 90} className="bg-paper">
            <div className="h-full px-6 py-7">
              <p className="label">{s.when}</p>
              <p className="mt-3 font-display text-lg font-medium leading-snug">{s.what}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{s.site}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-12 max-w-3xl border-l-2 border-sauge pl-6 font-display text-xl leading-relaxed text-ink/85 md:text-2xl">
          Aucun restaurateur ne veut « gérer un site ». Il veut que la carte affichée dehors soit
          celle qu’on sert dedans.
        </p>
      </Reveal>
    </Section>
  );
}

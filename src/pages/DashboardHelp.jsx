import { Link } from 'react-router-dom';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Button } from '../components/dashboard-ui';
import { CalendarIcon, ArrowRightIcon, ImageIcon, SparkleIcon } from '../components/doodles';
import { UtensilsIcon } from '../components/dashicons';
import { MonitorIcon, CreditCardIcon, GearIcon, SearchIcon, BookIcon, PlayCircleIcon } from '../components/dashicons';

const categories = [
  { icon: CalendarIcon, iconBg: 'bg-orange-100 text-orange-600', title: 'Réservations', desc: 'Gérez vos réservations et disponibilités.' },
  { icon: UtensilsIcon, iconBg: 'bg-red-100 text-red-500', title: 'Menu', desc: 'Créez et gérez votre menu, plats et options.' },
  { icon: ImageIcon, iconBg: 'bg-purple-100 text-purple-600', title: 'Médias', desc: 'Ajoutez et organisez vos photos et vidéos.' },
  { icon: MonitorIcon, iconBg: 'bg-blue-100 text-blue-600', title: 'Site', desc: 'Personnalisez votre site et vos pages.' },
  { icon: CreditCardIcon, iconBg: 'bg-green-100 text-green-600', title: 'Paiements & facturation', desc: 'Gérez vos paiements et abonnements.' },
  { icon: GearIcon, iconBg: 'bg-sky-100 text-sky-600', title: 'Compte & paramètres', desc: 'Gérez votre compte et vos préférences.' },
];

const articles = [
  ['Comment ajouter des photos à mon menu ?', '2 mai 2024'],
  ['Comment gérer les annulations de réservation ?', '29 avr. 2024'],
  ['Comment connecter mon domaine personnalisé ?', '18 avr. 2024'],
  ['Comment accepter les paiements en ligne ?', '10 avr. 2024'],
  ["Personnaliser l'apparence de mon site", '3 avr. 2024'],
];

export default function DashboardHelp() {
  return (
    <div className="pb-16">
      <DashboardTopbar title="Centre d'aide" subtitle="Trouvez des réponses à vos questions et apprenez à utiliser Sous." />

      <div className="px-6 sm:px-10">
        <div className="relative mb-8">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
          <input placeholder="Rechercher dans l'aide..." className="w-full rounded-sm border border-ink/15 bg-paper py-3.5 pl-11 pr-4 text-sm placeholder:text-ink/35 focus:border-flame focus:outline-none" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-extrabold text-ink">Catégories populaires</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <button key={c.title} className="flex flex-col items-start gap-2 rounded-lg border border-ink/10 bg-paper p-5 text-left hover:border-ink/25">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-md ${c.iconBg}`}><c.icon className="h-5 w-5" /></div>
                  <p className="text-sm font-bold text-ink">{c.title}</p>
                  <p className="text-xs text-ink/50">{c.desc}</p>
                  <ArrowRightIcon className="mt-auto h-4 w-4 self-end text-ink/30" />
                </button>
              ))}
            </div>

            <Card title="Articles récents" className="mt-6">
              <div className="divide-y divide-ink/10">
                {articles.map(([t, d]) => (
                  <button key={t} className="flex w-full items-center justify-between gap-3 py-3 text-left">
                    <span className="flex items-center gap-2 text-sm font-semibold text-ink"><BookIcon className="h-4 w-4 shrink-0 text-ink/35" /> {t}</span>
                    <span className="shrink-0 text-xs text-ink/40">{d}</span>
                  </button>
                ))}
              </div>
              <button className="mt-3 flex items-center gap-1 text-xs font-bold text-flame">Voir tous les articles <ArrowRightIcon className="h-3 w-3" /></button>
            </Card>
          </div>

          <div className="space-y-5">
            <Card title="Ressources utiles">
              <div className="divide-y divide-ink/10">
                {[
                  [BookIcon, 'Guides et tutoriels', 'Découvrez nos guides pas à pas.'],
                  [PlayCircleIcon, 'Vidéos explicatives', 'Apprenez en vidéo, simplement.'],
                  [SparkleIcon, 'Nouveautés', 'Découvrez les dernières mises à jour de Sous.'],
                  [GearIcon, 'Statut', "Vérifiez l'état des services et maintenances."],
                ].map(([Icon, t, d]) => (
                  <button key={t} className="flex w-full items-center gap-3 py-3 text-left">
                    <Icon className="h-4 w-4 shrink-0 text-ink/50" />
                    <div className="flex-1"><p className="text-sm font-semibold text-ink">{t}</p><p className="text-xs text-ink/45">{d}</p></div>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink/25" />
                  </button>
                ))}
              </div>
            </Card>

            <Card title="Toujours besoin d'aide ?">
              <p className="text-sm text-ink/55">Notre équipe est là pour vous aider.</p>
              <Link to="/dashboard/contact"><Button className="mt-3 w-full justify-center">Contacter l'équipe</Button></Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

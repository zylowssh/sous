import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { SousMark, SparkleIcon, CalendarIcon, ImageIcon, ChartIcon, ChevronDownIcon } from './doodles';
import {
  HomeIcon, MonitorIcon, UtensilsIcon, PuzzleIcon, GearIcon, MailIcon, HelpCircleIcon, BellIcon,
} from './dashicons';
import { IMG } from '../data';

const NAV = [
  { to: '/dashboard', label: 'Accueil', icon: HomeIcon, end: true },
  { to: '/dashboard/ai', label: 'Sous AI', icon: SparkleIcon },
  { to: '/dashboard/site', label: 'Site', icon: MonitorIcon },
  { to: '/dashboard/menu', label: 'Menu', icon: UtensilsIcon },
  { to: '/dashboard/reservations', label: 'Réservations', icon: CalendarIcon },
  { to: '/dashboard/medias', label: 'Médias', icon: ImageIcon },
  { to: '/dashboard/statistiques', label: 'Statistiques', icon: ChartIcon },
  { to: '/dashboard/integrations', label: 'Intégrations', icon: PuzzleIcon },
  { to: '/dashboard/parametres', label: 'Paramètres', icon: GearIcon },
  { to: '/dashboard/contact', label: 'Contactez-nous', icon: MailIcon },
  { to: '/dashboard/aide', label: 'Centre d\u2019aide', icon: HelpCircleIcon },
];

export function DashboardTopbar({ title, subtitle, actions }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [restoOpen, setRestoOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink/55">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {actions}
        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink/70 hover:border-ink/30"
          >
            <BellIcon className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-flame text-[9px] font-bold text-cream">3</span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 z-20 mt-2 w-72 rounded-md border border-ink/10 bg-paper p-2 shadow-card">
              {[
                ['Nouvelle réservation', 'Claire Martin — 4 pers., 19:30'],
                ['Menu synchronisé', 'Depuis Lightspeed POS'],
                ['Avis client', 'Nouvel avis 5\u2605 sur Google'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-sm px-3 py-2 hover:bg-cream">
                  <p className="text-xs font-bold text-ink">{t}</p>
                  <p className="text-xs text-ink/50">{d}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setRestoOpen((v) => !v)}
            className="flex items-center gap-2 rounded-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-sm font-semibold text-ink"
          >
            Mamma Rosa <ChevronDownIcon className="h-4 w-4 text-ink/40" />
          </button>
          {restoOpen && (
            <div className="absolute right-0 z-20 mt-2 w-56 rounded-md border border-ink/10 bg-paper p-2 shadow-card">
              <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ink/40">Vos établissements</p>
              <div className="rounded-sm bg-flame/10 px-3 py-2 text-sm font-bold text-flame">Mamma Rosa</div>
              <button className="mt-1 w-full rounded-sm px-3 py-2 text-left text-sm text-ink/60 hover:bg-cream">+ Ajouter un établissement</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout() {
  const location = useLocation();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-cream">
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-coal px-4 py-6 text-cream">
        <Link to="/" className="flex items-center gap-2 px-2 font-display text-2xl font-bold tracking-tight">
          <SousMark className="h-6 w-auto text-flame" />
          sous.
        </Link>

        <nav className="mt-8 flex-1 space-y-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-flame text-cream' : 'text-cream/65 hover:bg-cream/5 hover:text-cream'
                }`
              }
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-md border border-cream/10 bg-cream/5 p-4">
          <p className="text-sm font-bold">Besoin d'aide ?</p>
          <p className="mt-1 text-xs text-cream/50">Parlez à Sous ou consultez notre centre d'aide.</p>
          <Link to="/dashboard/ai" className="mt-3 block rounded-sm bg-flame px-3 py-2 text-center text-xs font-bold text-cream hover:bg-flame/90">
            Démarrer une conversation
          </Link>
        </div>

        <div className="relative mt-4">
          <button onClick={() => setUserMenuOpen((v) => !v)} className="flex w-full items-center gap-3 rounded-sm px-2 py-2 hover:bg-cream/5">
            <img src={IMG.chef} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
            <div className="flex-1 text-left">
              <p className="text-sm font-bold leading-tight">Mamma Rosa</p>
              <p className="text-xs text-cream/45">Marco</p>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-cream/40" />
          </button>
          {userMenuOpen && (
            <div className="absolute bottom-full left-0 z-20 mb-2 w-full rounded-md border border-ink/10 bg-paper p-1.5 shadow-card">
              <Link to="/dashboard/profil" onClick={() => setUserMenuOpen(false)} className="block rounded-sm px-3 py-2 text-sm font-semibold text-ink hover:bg-cream">Mon profil</Link>
              <Link to="/dashboard/parametres" onClick={() => setUserMenuOpen(false)} className="block rounded-sm px-3 py-2 text-sm font-semibold text-ink hover:bg-cream">Paramètres</Link>
              <Link to="/" onClick={() => setUserMenuOpen(false)} className="block rounded-sm px-3 py-2 text-sm font-semibold text-red-600 hover:bg-cream">Se déconnecter</Link>
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1">
        <Outlet key={location.pathname} />
      </div>
    </div>
  );
}

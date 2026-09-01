import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Field, inputCls, Button, Toggle } from '../components/dashboard-ui';
import { CameraIcon } from '../components/dashicons';
import { IMG } from '../data';

const TABS = ['Profil', 'Préférences', 'Sécurité'];

export default function DashboardProfile() {
  const [tab, setTab] = useState('Profil');
  const [prefs, setPrefs] = useState({ dark: false, digest: true });

  return (
    <div className="pb-16">
      <DashboardTopbar title="Mon profil" subtitle="Gérez vos informations personnelles." />

      <div className="px-6 sm:px-10">
        <div className="flex gap-6 border-b border-ink/10">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`relative pb-3 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/55'}`}>
              {t}
              {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        {tab === 'Profil' && (
          <>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
              <Card title="Informations personnelles">
                <div className="space-y-4">
                  <Field label="Nom complet"><input defaultValue="Marco Rossi" className={inputCls} /></Field>
                  <Field label="Email"><input defaultValue="marco@mammarosa.fr" className={inputCls} /></Field>
                  <Field label="Téléphone"><input defaultValue="06 12 34 56 78" className={inputCls} /></Field>
                  <Field label="Rôle"><select className={inputCls}><option>Propriétaire</option><option>Manager</option><option>Employé</option></select></Field>
                  <Button>Enregistrer</Button>
                </div>
              </Card>

              <Card title="Photo de profil">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img src={IMG.chef} alt="Marco" className="h-28 w-28 rounded-full object-cover" />
                    <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-paper shadow"><CameraIcon className="h-4 w-4 text-ink" /></button>
                  </div>
                  <p className="mt-3 text-xs text-ink/45">JPG, PNG ou GIF. 1 Mo max.</p>
                  <Button variant="outline" className="mt-4 w-full justify-center">Changer la photo</Button>
                </div>
              </Card>
            </div>

            <Card title="Changer le mot de passe" className="mt-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Mot de passe actuel"><input type="password" className={inputCls} /></Field>
                <Field label="Nouveau mot de passe"><input type="password" className={inputCls} /></Field>
                <Field label="Confirmer le nouveau mot de passe"><input type="password" className={inputCls} /></Field>
              </div>
              <Button className="mt-4">Mettre à jour le mot de passe</Button>
            </Card>
          </>
        )}

        {tab === 'Préférences' && (
          <Card title="Préférences" className="mt-6 max-w-2xl">
            <div className="divide-y divide-ink/10">
              <Toggle checked={prefs.dark} onChange={(v) => setPrefs((p) => ({ ...p, dark: v }))} label="Thème sombre" desc="Utiliser un thème sombre pour le tableau de bord." />
              <Toggle checked={prefs.digest} onChange={(v) => setPrefs((p) => ({ ...p, digest: v }))} label="Résumé quotidien" desc="Recevoir un résumé de votre activité chaque matin." />
            </div>
          </Card>
        )}

        {tab === 'Sécurité' && (
          <Card title="Sécurité" className="mt-6 max-w-2xl">
            <div className="flex items-center justify-between py-2">
              <div><p className="text-sm font-bold text-ink">Authentification à deux facteurs</p><p className="text-xs text-ink/50">Ajoutez une couche de sécurité supplémentaire.</p></div>
              <Button variant="outline" className="text-xs">Activer</Button>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
              <div><p className="text-sm font-bold text-ink">Sessions actives</p><p className="text-xs text-ink/50">1 appareil connecté</p></div>
              <Button variant="outline" className="text-xs">Gérer</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

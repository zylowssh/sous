import { ArrowLeftIcon, AsteriskIcon, SousMark } from '../components/doodles';
import Footer from '../components/Footer';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

export default function Confidentialite({ onBack }) {
  return (
    <div className="min-h-screen bg-cream">
      <Grain />
      <Navbar />
      <div className="px-4 pb-20 pt-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <button 
              onClick={onBack}
              className="group mb-10 inline-flex items-center gap-2 rounded-sm border-2 border-ink/20 px-4 py-2.5 text-sm font-semibold text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-cream"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </button>

            <div className="mb-10 flex items-center gap-3">
              <SousMark className="h-10 w-auto text-flame" />
              <span className="font-display text-2xl font-bold tracking-tight text-ink">sous.</span>
            </div>

            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-6xl">
              Politique de<br />Confidentialité
            </h1>
            <p className="mt-4 text-sm text-ink/60">Dernière mise à jour : 25 août 2026</p>
          </Reveal>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/80">
            <Reveal delay={100}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">01.</span> Collecte des Données
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Dans le cadre de l'utilisation de Sous, nous sommes amenés à collecter et traiter certaines données 
                  personnelles vous concernant : nom, prénom, adresse e-mail, numéro de téléphone, nom et adresse du 
                  restaurant, ainsi que les données de menu synchronisées depuis votre logiciel de caisse.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">02.</span> Finalité du Traitement
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p className="mb-3">Ces données sont collectées dans le but exclusif de :</p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Créer et gérer votre compte utilisateur ;</li>
                  <li>Fournir le service de génération et de mise à jour de votre site web ;</li>
                  <li>Assurer la synchronisation avec votre logiciel de caisse (POS) ;</li>
                  <li>Vous informer sur les évolutions du service et répondre à vos demandes de support.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">03.</span> Intégration WhatsApp et Meta
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Sous utilise l'API WhatsApp Business pour permettre l'envoi d'instructions en langage naturel. 
                  Les messages transitent par les infrastructures de Meta Platforms, Inc. Nous nous engageons à ce 
                  que seules les données strictement nécessaires au fonctionnement du service (texte des instructions) 
                  soient traitées, et nous ne stockons pas l'historique de vos conversations au-delà de la durée 
                  nécessaire à la génération du brouillon.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">04.</span> Durée de Conservation
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Vos données personnelles sont conservées pendant toute la durée de votre abonnement, et jusqu'à 
                  3 ans après la résiliation de celui-ci, sauf obligation légale de conservation plus longue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">05.</span> Vos Droits (RGPD)
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
                  d'accès, de rectification, d'effacement, de portabilité et d'opposition sur vos données. Vous pouvez 
                  exercer ces droits en nous contactant à l'adresse : dpo@sous-app.fr.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">06.</span> Sécurité
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (chiffrement des 
                  données en transit et au repos, hébergement en France pour les données sensibles) pour garantir 
                  un niveau de sécurité adapté au risque.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400} className="mt-12 rounded-lg border border-ink/15 bg-paper p-6">
              <div className="flex items-start gap-3">
                <AsteriskIcon className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                <div>
                  <p className="font-hand text-lg font-bold text-ink">Protection de vos données</p>
                  <p className="mt-1 text-xs text-ink/70">
                    Pour toute question relative à la protection de vos données, contactez notre DPO : <a href="mailto:dpo@sous-app.fr" className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-ink">dpo@sous-app.fr</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

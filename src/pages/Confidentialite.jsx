import { Link } from 'react-router-dom';
import { ArrowLeftIcon, AsteriskIcon, SousMark } from '../components/doodles';
import Footer from '../components/Footer';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

export default function Confidentialite() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />
      <div className="px-4 pb-14 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link 
              to="/"
              className="group mb-10 inline-flex items-center gap-2 rounded-sm border-2 border-ink/20 px-4 py-2.5 text-sm font-semibold text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-cream"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </Link>

            <div className="mb-10 flex items-center gap-2">
              <SousMark className="h-6 w-auto text-flame" />
              <span className="font-display text-2xl font-bold tracking-tight text-ink">sous.</span>
            </div>

            <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Politique de<br />Confidentialité
            </h1>
            <p className="mt-4 text-sm text-ink/60">Dernière mise à jour : 25 août 2026</p>
          </Reveal>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/60">
            <Reveal delay={100}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                <span className="text-flame">01.</span> Collecte des Données
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Sous collecte les données personnelles nécessaires à la fourniture du service : nom, adresse e-mail, 
                  numéro de téléphone, informations relatives au restaurant (nom, adresse, type de cuisine). Ces données 
                  sont collectées lors de l'inscription et de l'utilisation du service.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                <span className="text-flame">02.</span> Utilisation des Données
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Les données collectées sont utilisées pour : la gestion du compte client, la synchronisation avec les 
                  logiciels de caisse, l'envoi de propositions de mise à jour via WhatsApp, l'amélioration du service, 
                  et la communication commerciale (avec consentement).
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                <span className="text-flame">03.</span> Partage des Données
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Les données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées avec des 
                  prestataires techniques (hébergement, synchronisation POS) dans le strict cadre de la fourniture du service.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                <span className="text-flame">04.</span> Sécurité
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Sous met en œuvre des mesures techniques et organisationnelles pour protéger les données personnelles 
                  contre tout accès non autorisé, perte, altération ou divulgation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                <span className="text-flame">05.</span> Vos Droits
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité 
                  de vos données. Pour exercer ces droits, contactez-nous à contact@sous-app.fr.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350} className="mt-12 rounded-lg border border-ink/15 bg-paper p-6">
              <div className="flex items-start gap-3">
                <AsteriskIcon className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                <div>
                  <p className="font-hand text-lg font-bold text-ink">Une question ?</p>
                  <p className="mt-1 text-xs text-ink/70">
                    Pour toute question relative à la confidentialité de vos données, contactez-nous à : <a href="mailto:contact@sous-app.fr" className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-ink">contact@sous-app.fr</a>
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

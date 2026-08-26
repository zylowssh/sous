import { ArrowLeftIcon, AsteriskIcon, SousMark } from '../components/doodles';
import Footer from '../components/Footer';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

export default function CGU({ onBack }) {
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
              Conditions Générales<br />d'Utilisation
            </h1>
            <p className="mt-4 text-sm text-ink/60">Dernière mise à jour : 25 août 2026</p>
          </Reveal>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/80">
            <Reveal delay={100}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">01.</span> Objet
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Sous, 
                  éditée par [Nom de votre Société], au capital de [X] €, immatriculée au RCS de [Ville] sous le numéro [SIRET], 
                  dont le siège social est situé au [Adresse complète] (ci-après « l'Éditeur »).
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">02.</span> Description du Service
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Sous est une solution SaaS permettant aux professionnels de la restauration de créer, gérer et maintenir 
                  automatiquement leur site web. Le service inclut la synchronisation avec les logiciels de caisse (POS), 
                  la génération de propositions de mise à jour via interface de messagerie, et l'hébergement du site généré.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">03.</span> Inscription et Compte
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  L'utilisation du service nécessite la création d'un compte professionnel. Le client s'engage à fournir des 
                  informations exactes et à maintenir la confidentialité de ses identifiants. Sous se réserve le droit de 
                  suspendre tout compte en cas d'usage frauduleux ou non conforme aux présentes CGU.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">04.</span> Tarification et Paiement
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Les services sont fournis contre le paiement d'un abonnement mensuel ou annuel, tel que détaillé sur la 
                  page tarifaire du site. Les prix sont indiqués en euros, toutes taxes comprises (TTC). Le paiement est 
                  prélevé automatiquement par carte bancaire à chaque échéance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">05.</span> Responsabilité et Conformité
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Sous met en œuvre des mesures techniques pour assurer la fiabilité des données synchronisées. Toutefois, 
                  le client reste ultimement responsable de la validation finale des publications, notamment en ce qui concerne 
                  le respect des réglementations en vigueur (affichage des allergènes, origine des viandes, prix TTC). 
                  Sous ne saurait être tenu responsable des erreurs résultant d'une validation imprudente par le client.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">06.</span> Propriété Intellectuelle
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  L'ensemble des éléments constitutifs de la plateforme Sous (code, design, logos, textes) est la propriété 
                  exclusive de l'Éditeur ou de ses partenaires. Le client obtient une licence d'utilisation non exclusive et 
                  non transférable du service pour la durée de son abonnement.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">07.</span> Loi Applicable et Juridiction
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Les présentes CGU sont soumises au droit français. En cas de litige, et après tentative de résolution 
                  amiable, les tribunaux compétents seront ceux du ressort du siège social de l'Éditeur.
                </p>
              </div>
            </Reveal>

            <Reveal delay={450} className="mt-12 rounded-lg border border-ink/15 bg-paper p-6">
              <div className="flex items-start gap-3">
                <AsteriskIcon className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                <div>
                  <p className="font-hand text-lg font-bold text-ink">Une question ?</p>
                  <p className="mt-1 text-xs text-ink/70">
                    Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@sous-app.fr" className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-ink">contact@sous-app.fr</a>
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

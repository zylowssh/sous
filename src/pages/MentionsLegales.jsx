import { ArrowLeftIcon, AsteriskIcon, SousMark } from '../components/doodles';
import { Grain } from '../components/fx';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

export default function MentionsLegales({ onBack }) {
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
              Mentions Légales
            </h1>
            <p className="mt-4 text-sm text-ink/60">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004</p>
          </Reveal>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/80">
            <Reveal delay={100}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">01.</span> Éditeur du Site
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Le site Sous (ci-après « le Site ») est édité par :<br />
                  <strong className="font-semibold text-ink">[Nom de votre Société]</strong><br />
                  Société par Actions Simplifiée (SAS) au capital de [Montant] €<br />
                  Immatriculée au Registre du Commerce et des Sociétés (RCS) de [Ville] sous le numéro [SIRET]<br />
                  Siège social : [Adresse complète du siège social]<br />
                  Numéro de TVA intracommunautaire : [FR XX XXXXXXXXX]<br />
                  Directeur de la publication : [Nom du Directeur]
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">02.</span> Hébergement
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Le Site est hébergé par :<br />
                  <strong className="font-semibold text-ink">[Nom de l'Hébergeur, ex: OVHcloud]</strong><br />
                  [Adresse complète de l'hébergeur]<br />
                  Téléphone : [Numéro de téléphone]<br />
                  Site web : [URL de l'hébergeur]
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">03.</span> Propriété Intellectuelle
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  L'ensemble du contenu du Site (textes, images, graphismes, logo, icônes, logiciels) est la propriété 
                  exclusive de l'Éditeur ou de ses partenaires, et est protégé par les lois françaises et internationales 
                  relatives à la propriété intellectuelle. Toute reproduction, représentation ou utilisation, même partielle, 
                  est strictement interdite sans l'autorisation préalable et écrite de l'Éditeur.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">04.</span> Limitation de Responsabilité
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  L'Éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le Site. 
                  Toutefois, l'Éditeur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                  mises à disposition. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité 
                  exclusive. L'Éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès 
                  ou de l'utilisation du Site.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink md:text-2xl">
                <span className="text-flame">05.</span> Contact
              </h2>
              <div className="mt-3 border-l-2 border-ink/15 pl-5">
                <p>
                  Pour toute question relative aux présentes mentions légales ou pour contacter l'Éditeur, vous pouvez 
                  nous écrire à l'adresse suivante :<br />
                  <strong className="font-semibold text-flame">contact@sous-app.fr</strong>
                </p>
              </div>
            </Reveal>

            <Reveal delay={350} className="mt-12 rounded-lg border border-ink/15 bg-paper p-6">
              <div className="flex items-start gap-3">
                <AsteriskIcon className="mt-0.5 h-5 w-5 shrink-0 text-flame" />
                <div>
                  <p className="font-hand text-lg font-bold text-ink">Besoin d'aide ?</p>
                  <p className="mt-1 text-xs text-ink/70">
                    Notre équipe est disponible pour répondre à vos questions : <a href="mailto:contact@sous-app.fr" className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-ink">contact@sous-app.fr</a>
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

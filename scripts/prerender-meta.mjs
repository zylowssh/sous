import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  {
    path: 'produit',
    title: 'Produit | Sous',
    description: 'Une instruction, trois surfaces à jour. Sous synchronise votre site, votre menu et votre QR après votre validation.',
  },
  {
    path: 'exemples',
    title: 'Exemples de sites restaurant | Sous',
    description: 'Découvrez des sites de restaurants qui gardent leur propre voix tout en restant synchronisés avec leur menu.',
  },
  {
    path: 'tarifs',
    title: 'Tarifs | Sous',
    description: 'Des offres claires pour un site de restaurant personnalisé, un QR menu synchronisé et des mises à jour validées par vous.',
  },
  {
    path: 'mentions-legales',
    title: 'Mentions légales | Sous',
    description: 'Consultez les mentions légales de Sous.',
  },
  {
    path: 'confidentialite',
    title: 'Confidentialité | Sous',
    description: 'Consultez la politique de confidentialité de Sous.',
  },
  {
    path: 'cgu',
    title: 'Conditions générales d’utilisation | Sous',
    description: 'Consultez les conditions générales d’utilisation de Sous.',
  },
];

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const replaceMeta = (html, route) => {
  const url = `https://sous-app.fr/${route.path}`;
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${description}" />`);
};

const template = await readFile(join('dist', 'index.html'), 'utf8');

await Promise.all(routes.map(async (route) => {
  const directory = join('dist', route.path);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), replaceMeta(template, route), 'utf8');
}));

console.log(`Prerendered route metadata for ${routes.length} public pages.`);

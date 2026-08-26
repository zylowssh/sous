/*
  Télécharge les polices en local (une seule fois) pour ne plus dépendre de
  fonts.gstatic.com au chargement de la page — c'est le point RGPD : sans ça,
  chaque visiteur envoie son adresse IP à Google.

  Usage :  npm run fonts

  Les fichiers atterrissent dans /public/fonts et sont servis depuis votre domaine.
  À relancer uniquement si vous changez de police.
*/
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'fonts');

// UA moderne : indispensable pour que l'API renvoie du woff2 et non du ttf.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const FONTS = [
  { file: 'fraunces-latin.woff2', css: 'family=Fraunces:opsz,wght@9..144,300..900' },
  { file: 'inter-latin.woff2', css: 'family=Inter:wght@100..900' },
  { file: 'caveat-latin.woff2', css: 'family=Caveat:wght@400..700' },
];

const grabLatinUrl = (css) => {
  // On garde le dernier bloc @font-face dont l'unicode-range couvre le latin de base.
  const blocks = css.split('@font-face').slice(1);
  const latin = blocks.filter((b) => b.includes('U+0000-00FF'));
  const chosen = latin.at(-1) ?? blocks.at(-1);
  return chosen?.match(/url\((https:[^)]+\.woff2)\)/)?.[1] ?? null;
};

await mkdir(OUT, { recursive: true });

for (const { file, css } of FONTS) {
  const cssUrl = `https://fonts.googleapis.com/css2?${css}&display=swap`;
  const sheet = await fetch(cssUrl, { headers: { 'User-Agent': UA } }).then((r) => r.text());
  const url = grabLatinUrl(sheet);

  if (!url) {
    console.error(`✗ ${file} — aucune URL woff2 trouvée pour ${css}`);
    continue;
  }

  const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
  await writeFile(resolve(OUT, file), buf);
  console.log(`✓ ${file}  (${Math.round(buf.length / 1024)} Ko)`);
}

console.log(`\nPolices écrites dans ${OUT}`);

/*
 * Empaqueta dist/ en un único HTML autocontenido.
 *
 * Sirve para publicar una vista previa del sitio en entornos donde no se
 * pueden servir archivos sueltos ni cargar hosts externos (por ejemplo un
 * artifact de claude.ai, cuyo CSP bloquea cualquier petición de red). Las
 * fuentes, el CSS, el JS y las imágenes entran como data: URIs.
 *
 * No sustituye al despliegue: Firebase Hosting sirve dist/ tal cual, que es
 * más rápido porque cachea los assets por separado.
 *
 *   npm run build && node tools/bundle-singlefile.mjs
 *   → dist-singlefile/index.html
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT_DIR = path.join(ROOT, 'dist-singlefile');
const FONT_CACHE = path.join(ROOT, 'node_modules', '.cache', 'sidartha-fonts');

/* La misma familia y pesos que declara src/styles/tokens/fonts.css. */
const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700' +
  '&family=Inter:wght@400;500;600;700&display=swap';

/* Chrome moderno para que Google Fonts devuelva woff2 y no ttf. */
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const dataUri = (file) => {
  const mime = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
};

/* Reescribe las rutas /assets/… que Vite deja en el CSS y el JS. */
const inlineAssetRefs = (text) =>
  text.replace(/\/assets\/(?:logos|photography)\/[A-Za-z0-9._-]+/g, (ref) => {
    const file = path.join(DIST, ref.slice(1));
    return fs.existsSync(file) ? dataUri(file) : ref;
  });

async function fetchCached(url, name) {
  const file = path.join(FONT_CACHE, name);
  if (fs.existsSync(file) && fs.statSync(file).size > 0) return file;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} al descargar ${url}`);
  fs.mkdirSync(FONT_CACHE, { recursive: true });
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

/* Descarga las @font-face de Google y devuelve el CSS con las woff2 inlineadas.
   Solo los subsets latin y latin-ext: el resto (cirílico, griego, vietnamita)
   multiplicaría el peso sin servir para un sitio en español. */
async function inlineFonts() {
  const cssFile = await fetchCached(GOOGLE_FONTS_URL, 'google-fonts.css');
  const css = fs.readFileSync(cssFile, 'utf8');

  const faces = css
    .split('/*')
    .slice(1)
    .filter((block) => /^\s*latin(-ext)?\s*\*\//.test(block))
    .map((block) => '@font-face' + block.split('@font-face')[1]);

  let out = '';
  for (const face of faces) {
    const url = face.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)[1];
    const file = await fetchCached(url, path.basename(url));
    out += face.replace(url, dataUri(file)) + '\n';
  }
  console.log(`  fuentes: ${faces.length} caras (latin, latin-ext)`);
  return out;
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('falta dist/index.html — ejecuta "npm run build" primero');
  }

  const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const cssHref = html.match(/href="(\/assets\/[^"]+\.css)"/)[1];
  const jsSrc = html.match(/src="(\/assets\/[^"]+\.js)"/)[1];
  const title = html.match(/<title>([^<]*)<\/title>/)[1];

  const fontCss = await inlineFonts();

  const css = inlineAssetRefs(fs.readFileSync(path.join(DIST, cssHref.slice(1)), 'utf8'))
    /* Vite minifica el @import a la forma sin url(): @import"…";
       La URL lleva ';' dentro (wght@300;400;…), así que el delimitador tiene
       que ser la comilla de cierre y no el primer punto y coma. */
    .replace(/@import\s*(?:url\(\s*)?(["'])[^"']*fonts\.googleapis[^"']*\1\s*\)?\s*;/g, '');

  const js = inlineAssetRefs(fs.readFileSync(path.join(DIST, jsSrc.slice(1)), 'utf8'))
    .replace(/\/\/# sourceMappingURL=.*$/m, '')
    /* Un </script> literal dentro del bundle cerraría la etiqueta antes de tiempo. */
    .replace(/<\/script>/gi, '<\\/script>');

  const page = `<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
${fontCss}${css}
</style>
</head>
<body>
<div id="root"></div>
<script type="module">
${js}
</script>
</body>
</html>
`;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outFile = path.join(OUT_DIR, 'index.html');
  fs.writeFileSync(outFile, page);

  /* Solo interesan las URLs que el navegador *pediría* (y que el CSP
     bloquearía). Los href de <a> apuntan a Instagram o Facebook a propósito:
     son destinos de navegación, no recursos, y deben quedarse. */
  const fetched = [
    ...page.matchAll(/(?:url\(\s*["']?|@import\s*["']|<link[^>]+href=["']|\ssrc=["'])(https?:\/\/[^"')\s]+)/gi),
  ].map((m) => m[1]);
  const externals = [...new Set(fetched)];
  if (externals.length) {
    console.warn('  aviso: quedan recursos externos →', externals.join(', '));
  }

  console.log(`  escrito ${path.relative(ROOT, outFile)} (${(page.length / 1024).toFixed(0)} KB)`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

/* P-Tanq Local : service worker.
   - Met en cache toute l’application dès la première ouverture (avec réseau).
   - Sert ensuite tout depuis le cache (cache d’abord) : l’application fonctionne sans réseau.
   - Une nouvelle version s’installe en attente ; la page affiche « Nouvelle version disponible :
     recharger » et l’active seulement quand l’utilisateur le demande.
   - Ne touche jamais aux données (IndexedDB et localStorage) : uniquement aux caches de l’application. */
const VERSION = 'ptanq-local-1.0.0';
const CACHE = VERSION;
const FONTS = 'ptanq-local-polices';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap';
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

/* Polices Bebas Neue et Barlow (licence OFL) : téléchargées une fois, gardées d’une version à l’autre. */
async function cacheFonts() {
  const c = await caches.open(FONTS);
  if (await c.match(FONT_CSS, { ignoreVary: true })) return;
  const css = await fetch(FONT_CSS, { mode: 'cors', credentials: 'omit' });
  if (!css.ok) return;
  const text = await css.clone().text();
  const urls = [...new Set([...text.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)'"]+)\)/g)].map(m => m[1]))];
  for (const u of urls) {
    const r = await fetch(u, { mode: 'cors', credentials: 'omit' });
    if (r.ok) await c.put(u, r);
  }
  await c.put(FONT_CSS, css); // en dernier : sa présence signifie « polices complètes »
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })));
    try { await cacheFonts(); } catch (e) { /* sans réseau vers les polices : polices de secours */ }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('ptanq-local-') && k !== CACHE && k !== FONTS).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      event.respondWith((async () => {
        const c = await caches.open(CACHE);
        return (await c.match('./index.html')) || (await c.match('./')) || fetch(req);
      })());
      return;
    }
    if (url.pathname.endsWith('/sw.js')) return; // le navigateur gère lui-même la mise à jour
    event.respondWith((async () => {
      const c = await caches.open(CACHE);
      const hit = await c.match(req, { ignoreSearch: true });
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') c.put(req, res.clone());
      return res;
    })());
    return;
  }

  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith((async () => {
      const c = await caches.open(FONTS);
      const hit = await c.match(req, { ignoreVary: true });
      if (hit) return hit;
      try {
        const res = await fetch(req);
        if (res.ok) c.put(req, res.clone());
        return res;
      } catch (e) {
        return new Response('', { status: 504, statusText: 'Hors réseau' });
      }
    })());
  }
});

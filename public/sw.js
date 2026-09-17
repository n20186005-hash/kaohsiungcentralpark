/* Kaohsiung Central Park guide — offline-first service worker.
 * Strategy:
 *   - HTML: network first, fall back to cache, then to the offline page.
 *   - Same-origin assets (CSS/JS/images/fonts): cache first, populate on miss.
 * Any failure is swallowed so the site keeps working without SW support.
 */
const VERSION = 'v1-2026-09';
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;
const OFFLINE_URL = '/offline';

const PRECACHE = [
  '/',
  '/manifest.webmanifest',
  '/favicon-32.png',
  '/favicon-16.png',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/images/hero-park.jpg',
  OFFLINE_URL,
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname.startsWith('/_') || url.pathname.includes('/astro/')) return;

  event.respondWith(cacheFirst(request));
});

function networkFirst(request) {
  return fetch(request)
    .then(response => {
      const copy = response.clone();
      caches.open(RUNTIME_CACHE).then(cache => cache.put(request, copy)).catch(() => undefined);
      return response;
    })
    .catch(() =>
      caches
        .match(request)
        .then(cached => cached || caches.match(OFFLINE_URL))
        .then(cached => cached || caches.match('/'))
    );
}

function cacheFirst(request) {
  return caches.match(request).then(cached => {
    if (cached) return cached;
    return fetch(request)
      .then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then(cache => cache.put(request, copy)).catch(() => undefined);
        return response;
      })
      .catch(() => cached);
  });
}

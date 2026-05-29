const CACHE_NAME = 'v1_cache';
const resourcesToCache = ['index.html', 'manifest.json'];

// Instala o PWA e guarda os arquivos no cache do celular
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Busca os arquivos no cache se estiver offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

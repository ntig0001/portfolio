const cache_name = 'v1';

const cache_assets = [
  'index.html',
  'about.html',
  'contact.html',
  'work.html',
  'js/main.js',
  'css/main.css'
];

// install Service Worker first to cache website files
self.addEventListener ('install', e => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches
          .open(cache_name)
          .then(cache => {
              console.log('Service Worker: Caching Assets');
              cache.addAll(cache_assets);
          })
          .then(() => self.skipWaiting())
  );
})

// offline loading
self.addEventListener ('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
})
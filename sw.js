self.addEventListener('install', (event) => {
  console.log('Service Worker: Installerar...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Aktivt nu');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

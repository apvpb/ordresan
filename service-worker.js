
self.addEventListener('install', event => {
  console.log('📦 Service worker installerad');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('🚀 Service worker aktiv');
});

self.addEventListener('fetch', event => {
  // Lägg till caching här om du vill senare
});

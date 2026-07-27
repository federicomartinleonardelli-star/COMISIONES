// Service Worker — Simulador de Comisiones Iruña
// Cachea el "app shell" para que abra rápido y funcione offline.
// Sube la versión (v2, v3...) cada vez que subas cambios grandes al repo
// para forzar a los celulares a bajar la versión nueva.
const CACHE_NAME = "comisiones-irunia-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest-comisiones.webmanifest",
  "./icon-comisiones-192.png",
  "./icon-comisiones-512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_SHELL);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Estrategia: red primero (para traer siempre la última actualización),
// y si no hay conexión, se sirve la copia guardada en caché.
// IMPORTANTE: esto solo cachea el "cascarón" de la app (HTML/manifest/íconos).
// Los datos de ventas viven en localStorage del navegador, no acá, así que
// nunca se pisan ni se pierden por el service worker.
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match("./index.html");
        });
      })
  );
});

const CACHE_NAME = "harcama-hesaplayici-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js"
];

// Service Worker yüklenirken dosyaları önbelleğe al
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log("Önbelleğe alınıyor...");
                return cache.addAll(urlsToCache);
            })
    );
});

// Ağ isteği yapılınca önbelleğe bak
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});

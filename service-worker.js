const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
    "/", // Ana sayfa
    "/index.html", 
    "/style.css", 
    "/script.js", 
    "/logo.png" // Eğer logon farklı bir dizinde ise, yolu güncelle
];

// Service Worker'ı yüklerken önbelleğe dosya ekle
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Ağdan veri çekilemezse önbellekten getir
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

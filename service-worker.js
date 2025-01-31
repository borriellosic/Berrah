const CACHE_NAME = "jackpot-hesaplayici-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/logo.png"
];

// Service Worker'ı yükleyip önbelleğe alma işlemi yapıyoruz
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Önbelleğe alma işlemi başladı");
                return cache.addAll(urlsToCache);
            })
    );
});

// Ağdan veri çekme isteği geldiğinde önbellekten yanıt verme
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    console.log("Önbellekten getirildi:", event.request.url);
                    return response;
                }
                console.log("Ağdan getiriliyor:", event.request.url);
                return fetch(event.request);
            })
    );
});

// Yeni bir Service Worker geldiğinde eski önbelleği temizleme
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Eski önbellek temizlendi:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

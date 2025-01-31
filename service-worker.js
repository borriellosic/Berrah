const CACHE_NAME = "yusufun-jackpot-hesaplayicisi-v2";
const urlsToCache = [
    "/Berrah/",           
    "/Berrah/index.html",
    "/Berrah/style.css",
    "/Berrah/script.js",
    "/Berrah/logo.png",
    "/Berrah/manifest.json"
];

// Service Worker yüklenirken dosyaları önbelleğe al
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("📦 Dosyalar önbelleğe alındı.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Önbellekten dosya çekme
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request); // Önbellekte yoksa internetten çek
        })
    );
});

// Yeni sürüm geldiğinde eski önbelleği sil
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("🗑 Eski önbellek silindi:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

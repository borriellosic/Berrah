const CACHE_NAME = "jackpot-hesaplayici-v1";
const urlsToCache = [
  "/Berrah/",  // Eğer proje ana dizindeyse sadece "/"
  "/Berrah/index.html",
  "/Berrah/style.css",
  "/Berrah/script.js",
  "/Berrah/logo.png"
];

// Kurulumda dosyaları önbelleğe al
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ağa bağlanmadan önce önbellekten yüklemeyi dene
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Eski cache'leri temizle
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
});

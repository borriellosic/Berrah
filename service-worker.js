self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/style.css',
                '/script.js',
                '/logo.png.png'  // Eğer başka resimler varsa buraya ekle
            ]);
        })
    );
});

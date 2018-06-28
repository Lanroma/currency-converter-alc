const staticCache = "staticCache-v8";
const staticAssets = [
  //js
  "/",
  "/scripts/bundle.js",
  //css
  "/styles/main.css",
  //html
  "/index.html",
  //fonts
  "https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lujVj9_mf.woff2",
  "https://free.currencyconverterapi.com/api/v5/currencies"
];

self.addEventListener("install", event => {
  // Cache static resources
  event.waitUntil(
    caches.open(staticCache).then(cache => cache.addAll(staticAssets))
  );
});

self.addEventListener("activate", event => {
  // clean old SW
});

self.addEventListener("fetch", event => {
  // offline-first
  event.respondWith(
    caches.match(event.request).then(cacheResponse => {
      return cacheResponse || fetch(event.request);
    })
  );
});

var staticCacheName = "pwa";
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["https://ubernaut.github.io/simple-template/"]);
    }),
  );
});
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});

//# sourceMappingURL=index.de97556b.js.map

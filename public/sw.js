const version = "v1";
const cacheName = `sw-${version}`;
const preCachedAssets = [
  "/",
  "./favicon.ico",
  "./Timer_Beep.mp3",
  "./CASSETTEOFF.mp3",
];

self.addEventListener("install", (event) => {
  console.log(`Servce worker is installed`);
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(preCachedAssets);
    })
  );
});

self.addEventListener("active", (event) => {
  console.log(`Servce worker is activated`);
  event.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheName.map((cache) => {
          if (cache !== cacheName) {
            console.log(`Service Worker: Clearing Old Cache`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(`Servce worker is fetching`);
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          let responseClone = response.clone();
          caches.open(cacheName).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
      );
    })
  );
});

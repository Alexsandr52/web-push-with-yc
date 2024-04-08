// const CACHE_NAME = 'node-ex-push-cache-v1';
// const urlsToCache = [
//   '/index.html',
//   '/client.js',
// ];

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request)
//           .then(function(response) {
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }
//             var responseToCache = response.clone();
//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           });
//       })
//   );
// });

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    self.registration.showNotification("Vibration Sample", {
        body: data.title,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample",
      });;
});

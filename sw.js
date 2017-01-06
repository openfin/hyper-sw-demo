// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('hyperblotter-sw').then(function(cache) {
      // And add resources to it
      return cache.addAll([
       'http://cdn.openfin.co.s3-website-us-east-1.amazonaws.com/demos/hyperblotter/css/styles.css',
        'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
        'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700',
       'http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700',
        'http://cdn.openfin.co.s3-website-us-east-1.amazonaws.com/demos/hyperblotter/out.js',
        'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic',
        'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0',
        'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0',
        'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0'
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});

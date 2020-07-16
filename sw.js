const version = "0.0.1b"
const cacheName = `nothing-${version}`

self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(cacheName).then(
                cache => {
                    return cache.addAll([
                        `/`,
                        `/index.html`,
                        '/index.js',    
                    ]).then(()=>self.skipWaiting());
                }
            )
    )
})



self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName).then(
                cache => cache.match(event.request, {ignoreSearch: true})
            ).then(
                response => {return response || fetch(event.request)} 
            )
    )
})


const cache_name='version_1'
const urlToCache=['/','/index.html','/static/js/bundle.js','/static/js/0.chunk.js','/static/js/main.chunk.js']


// install 

self.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(cache_name)
        .then((cache)=>{
            console.log("Cache install successfuly")
            return cache.addAll(urlToCache)
        })
    )
})

// fetch

self.addEventListener("fetch",(e)=>{
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request)
            .then(()=>{
                console.log("fetch")
                return fetch(e.request)
            })
        )
    }
})

self.addEventListener("activate",(e)=>{
    const cacheWhiteList=[];
    cacheWhiteList.push(cache_name)
    e.waitUntil(
        caches.keys().then((cache_name)=>
        Promise.all(
            cache_name.map((cacheName)=>{
                console.log("activate Data")
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})
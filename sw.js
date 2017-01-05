// sw.js

var CACHE_NAME = 'pwa-workshop.github.id-namp-card-cache-v1';
var urlsToCache = [
	'/namp-card'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log(`Opened cache for namp-card ${new Date()}`);
			return cache.addAll(urlsToCache);
		})
	);
});

var deferredEvent;

window.addEventListener("beforeinstallprompt", e => { 
  e.preventDefault();
  deferredEvent = e;
});

// 인스톨 버튼 이벤트 처리
button.addEventListener("click", e => {
  <span style="color:red">deferredEvent.prompt();</span> // 부추기기 보여짐
});
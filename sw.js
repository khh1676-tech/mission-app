// 최소한의 서비스워커 - "홈 화면에 추가"가 가능해지도록 하는 용도.
// 데이터는 항상 최신으로 봐야 하는 앱이라, 별도 캐싱은 하지 않고 그냥 네트워크로 통과시킴.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});

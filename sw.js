// Este evento corre quando a App é "instalada" no telemóvel
self.addEventListener('install', (e) => {
 console.log('Service Worker: Instalado');
});
// Este evento permite que a App funcione mesmo com picos de falta de rede
self.addEventListener('fetch', (e) => {
“My Creative Hub”
Página 5 de 6
 // Para este projeto base, apenas deixamos o tráfego passar
 e.respondWith(fetch(e.request));
});

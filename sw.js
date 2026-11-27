/* Organizador: recebe as notificações (Web Push). O conteúdo chega criptografado para este aparelho;
   o navegador decifra e entrega aqui. Não guarda nada em cache: o app continua sempre atualizado. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Organizador', {
    body: d.body || '',
    icon: 'icon-192.png',
    badge: 'badge-96.png',   // barra de status do Android: só a silhueta (branco sobre transparente)
    tag: d.tag || 'organizador',
    renotify: true,
    data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL(e.notification.data?.url || './', self.registration.scope).href;
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = all.find(c => c.url.startsWith(self.registration.scope));
    if (open) { await open.focus(); return; }
    await self.clients.openWindow(url);
  })());
});

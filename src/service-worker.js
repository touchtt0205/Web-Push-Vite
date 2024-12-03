self.addEventListener('push', function (event) {
    const options = {
      body: event.data ? event.data.text() : 'You have a new notification!',
      icon: '/icon.png',
      badge: '/badge.png'
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });
  
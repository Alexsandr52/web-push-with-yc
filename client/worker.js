self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    self.registration.showNotification("Vibration Sample", {
        body: data.title,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample",
      });;
})
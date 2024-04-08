const publicVapidKey = 'BGHlX34IJwgTUj-3NihhlRYFnFBmDsZ3wZ8efRAqdyELINiHxOtdv-3IC4cn4Ck4OENJJ2Ldy6q0HYzhWR2ERLo';

if('serviceWorker' in navigator){
    send().catch(err => console.error(err))
}

// Подписка на уведомления
async function send(){
    // Регестрируем serviceWorker и даем ему область видимости 
    const register = await navigator.serviceWorker.register('worker.js',{scope: '/'});

    // Для запроса у пользователя разрешения на получение уведомлений (push-уведомлений) и подписки на них.
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
      });

    await fetch('https://d5dp14he6ds6fmac8vcb.apigw.yandexcloud.net/add', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers:{'content-type': 'application/json'}
    });
}

// Для конверта ключа
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

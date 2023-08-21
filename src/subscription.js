
const convertedVapidKey = urlBase64ToUint8Array("BMQOKdrpuYRNgI3wXtDoQstTJEt1rnO9w6b9KM3MnJek8V4DH72OYNYoACbpveEVg_1snYmI8EZIdJV_5qjfMo4")

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  // eslint-disable-next-line
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function sendSubscription(subscription) {
  return fetch(`http://localhost:8003/message/subscribepartner`, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function SubscribeUser(partnerid) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
      if (!registration.pushManager) {
        console.log('Push manager unavailable.')
        return
      }

      registration.pushManager.getSubscription().then(function(existedSubscription) {
        if (existedSubscription === null) {
          console.log('No subscription detected, make a request.')
          registration.pushManager.subscribe({
            applicationServerKey: convertedVapidKey,
            userVisibleOnly: true,
          }).then(function(newSubscription) {
            localStorage.setItem("subscription" , JSON.stringify(newSubscription));
            const obj = {
                subscription : newSubscription,
                partnerid : partnerid
            }
            console.log('New subscription added.')
            sendSubscription(obj)
          }).catch(function(e) {
            if (Notification.permission !== 'granted') {
              console.log('Permission was not granted.')
            } else {
              console.error('An error ocurred during the subscription process.', e)
            }
          })
        } else {
          console.log('Existed subscription detected.');
          localStorage.setItem("subscription" , JSON.stringify(existedSubscription));
          const obj = {
            subscription : existedSubscription,
            partnerid : partnerid
        }
          sendSubscription(obj);
        }
      })
    })
      .catch(function(e) {
        console.error('An error ocurred during Service Worker registration.', e)
      })
  }
}
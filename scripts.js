window.navigator.geolocation.getCurrentPosition(console.log);

const geolocationEl = document.querySelector('#geolocationTxt');
const canvas = document.querySelector('#canvas');



function getGeolocation() {
    console.log('@')
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          console.log('!')
        geolocationEl.innerHTML = "Geolocation is not supported by this browser.";
      }
} 

function showPosition(position) {
    geolocationEl.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }


function camera() {
    console.log('!');
    navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            canvas.srcObject = stream
        })
        .catch((err) => {
            alert('cannot access camera', err);
        });
}

// https://www.youtube.com/watch?v=M3n-xemH-e8
Notification.requestPermission((status) => {
    console.log("Notification permission status: ", status);
});

function displayNotification() {
    console.log('start')
    if (Notification.permission === "granted") {
        navigator.serviceWorker.getRegistration()
        .then(function(reg) {
            reg.showNotification("Hello World!")
        })
    } else {
        console.log('Err')
    }
}
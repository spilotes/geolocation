const p = document.querySelector("#location");
let watchID;

p.innerText = "Trying to get your location...";

const showPos = (pos) => {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  p.innerText = `Lat: ${lat} 🗺️ Lon: ${lon}`;
};

const showErrors = (error) => {
  p.innerText =
    error.code == 1 ? `Error! Denied access.` : `Error! Unavailable position.`;
};

const getUpdatedPos = () => {
  if (navigator.geolocation) {
    const OPTIONS = { timeout: 5000 };
    watchID = navigator.geolocation.watchPosition(showPos, showErrors, OPTIONS);
  } else {
    this.p.innerText = `
      Sorry, but looks like your browser doesnt support
      geolocation at the moment.
    `;
  }
};

document.addEventListener("load", getUpdatedPos());

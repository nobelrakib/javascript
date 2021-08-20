// Init storage
const storage = new Storage();
// get Stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on Dom load
document.addEventListener("DOMContentLoaded", getWeather);

// Change the location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change the location
  weather.changeLocation(city, state);

  // Set location for LS
  storage.setLocationData(city, state);

  // Get and display the weather
  getWeather();

  // Close the Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}

function formatDate(Date) {
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[Date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[Date.getMonth()];

  let day = Date.getDate();
  let year = Date.getFullYear();

  return `${weekday}, ${month} ${day}, ${year}`;
}

function formatDayTime(Date) {
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[Date.getDay()];
  let minutes = now.getMinutes();

  let zeroMin = "";

  if (minutes < 10) {
    zeroMin = 0;
  }

  let hours = now.getHours();

  return `${weekday} ${hours}:${zeroMin}${minutes}`;
}

function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCityInput").value;
  let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);

  axios.get(apiURL).then(showTemp);

  /* cityElement.innerHTML = city;*/
}

function updateCelsius(event) {
  event.preventDefault();
  currentTempValue.innerHTML = 19;
}

function updateFahrenheit(event) {
  event.preventDefault();
  currentTempValue.innerHTML = 66;
}

function showTemp(response) {
  let cityElement = document.querySelector("#currentCity");
  let tempElement = document.querySelector("#currentTempValue");
  /* --  need to update the icon too -- 
  let iconElement = document.querySelector("#weatherIcon");
  iconElement.innerHTML = response.data.weather.icon;
  */

  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

function findCurrentCity(position) {
  let varLat = position.coords.latitude;
  let varLon = position.coords.longitude;
  let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${varLat}&lon=${varLon}&units=${unit}&appid=${apiKey}`;

  axios.get(apiURL).then(showTemp);
  /*console.log(apiURL);*/
}

function btnCurrentLocation() {
  navigator.geolocation.getCurrentPosition(findCurrentCity);
}

let menuoptions = ["London", "Paris", "Rome", "New York", "Auckland"];

let cityShown = menuoptions[0];
let now = new Date();
let showFullDate = formatDate(now);
let showDayTime = formatDayTime(now);
let timeElement = document.querySelector("#currentTime");
let cityElement = document.querySelector("#currentCity");
timeElement.innerHTML = showDayTime;
cityElement.innerHTML = cityShown;

let menuOpt1Element = document.querySelector("#menuOption1");
let menuOpt2Element = document.querySelector("#menuOption2");
let menuOpt3Element = document.querySelector("#menuOption3");
let menuOpt4Element = document.querySelector("#menuOption4");
let menuOpt5Element = document.querySelector("#menuOption5");

menuOpt1Element.innerHTML = menuoptions[0];
menuOpt2Element.innerHTML = menuoptions[1];
menuOpt3Element.innerHTML = menuoptions[2];
menuOpt4Element.innerHTML = menuoptions[3];
menuOpt5Element.innerHTML = menuoptions[4];

/* this needs its own function
menuOpt1Element.addEventListener("click", updateCityFromMenu);
menuOpt2Element.addEventListener("click", updateCityFromMenu);
menuOpt3Element.addEventListener("click", updateCityFromMenu);
menuOpt4Element.addEventListener("click", updateCityFromMenu);
menuOpt5Element.addEventListener("click", updateCityFromMenu);

*/

let searchElement = document.querySelector("#searchForm");
searchElement.addEventListener("submit", updateCity);

let currentTempValue = document.querySelector("#currentTempValue");

let celsiusElement = document.querySelector("#celsius");
celsiusElement.addEventListener("click", updateCelsius);

let fahrenheitElement = document.querySelector("#fahrenheit");
fahrenheitElement.addEventListener("click", updateFahrenheit);

let apiKey = "e4a1a55cec92d0a62ad315df687956af";

let unit = "metric";
/*let city = "Wellington";*/

let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityShown}&units=${unit}&appid=${apiKey}`;

let btnCurrentCityElement = document.querySelector("#btnCurrentLocation");
btnCurrentCityElement.addEventListener("click", btnCurrentLocation);

/*  -- this is old code which can be deleted later on

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}



navigator.geolocation.getCurrentPosition(handlePosition);



let apiAppID = `&appid=${apiKey}`;
let weatherAPICurrentRoot =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={}";

/*let weatherAPICurrentRoot =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={}";

let weatherAPIGeoLocateRoot =
  "http://api.openweathermap.org/geo/1.0/direct?q=London,GB&limit=2";

console.log(`${weatherAPIGeoLocateRoot}${apiAppID}`);

axios.get(`${weatherAPIGeoLocateRoot}${apiAppID}`).then(showTemp);

*/

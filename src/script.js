function convertDateTime(timestamp) {
  //Calculate the date and time based on API Weather data
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDate();
  let year = date.getFullYear();

  let zeroMin = "";
  if (minutes < 10) {
    zeroMin = 0;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[date.getDay()];

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

  let month = months[date.getMonth()];
  return `${weekday}, ${month} ${day}, ${year}   ${hours}:${zeroMin}${minutes}`;
}

function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCityInput").value;
  //  let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  //  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//this function deals with if the option of list of cities is clicked
//option 1
function updateCityFromMenu1(event) {
  event.preventDefault();
  let city = document.querySelector("#menuOption1").innerHTML;
  console.log(city);
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  // let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//option 2
function updateCityFromMenu2(event) {
  event.preventDefault();
  let city = document.querySelector("#menuOption2").innerHTML;
  console.log(city);
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  // let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//option 3
function updateCityFromMenu3(event) {
  event.preventDefault();
  let city = document.querySelector("#menuOption3").innerHTML;
  console.log(city);
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  // let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//option 4
function updateCityFromMenu4(event) {
  event.preventDefault();
  let city = document.querySelector("#menuOption4").innerHTML;
  console.log(city);
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  // let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//option 5
function updateCityFromMenu5(event) {
  event.preventDefault();
  let city = document.querySelector("#menuOption5").innerHTML;
  console.log(city);
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  // let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemp);
}

//this dunction converts the temp to celsius
function updateCelsius(event) {
  event.preventDefault();
  currentTempValue.innerHTML = celsiusTemp;
  celsiusElement.classList.add("active");
  fahrenheitElement.classList.remove("active");
}

//this dunction converts the temp to Fahrenheit
function updateFahrenheit(event) {
  event.preventDefault();
  celsiusElement.classList.remove("active");
  fahrenheitElement.classList.add("active");
  let tempAmount = celsiusTemp; //sets the temp to celsius
  let fahrenheitNumber = Math.round((parseInt(tempAmount) * 9) / 5 + 32);
  currentTempValue.innerHTML = fahrenheitNumber;
}

function showTemp(response) {
  let cityElement = document.querySelector("#currentCity");
  let tempElement = document.querySelector("#currentTempValue");
  let windSpeedElement = document.querySelector("#currentWind");
  let humidityElement = document.querySelector("#currentHumidity");
  let weatherDescriptionElement = document.querySelector("#weatherDescription");
  let countryElement = document.querySelector("#currentCountry");
  let timeElement = document.querySelector("#currentTime");
  let iconElement = document.querySelector("#weatherIcon");

  timeElement.innerHTML = convertDateTime(response.data.dt * 1000);

  celsiusTemp = Math.round(response.data.main.temp);

  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  countryElement.innerHTML = response.data.sys.country;
  weatherDescriptionElement.innerHTML = response.data.weather[0].description;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;

  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function findCurrentCity(position) {
  let varLat = position.coords.latitude;
  let varLon = position.coords.longitude;
  // let apiKey = "e4a1a55cec92d0a62ad315df687956af";
  //let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${varLat}&lon=${varLon}&units=${unit}&appid=${apiKey}`;

  axios.get(apiURL).then(showTemp);
}

function btnCurrentLocation() {
  navigator.geolocation.getCurrentPosition(findCurrentCity);
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  let forecastDays = ["Mon", "Tues", "Wed"];
  forecastDays.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
          <div class="col-md-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title forecastDay" id="forecastDay">${day}</h5>
                <img
                  src=""
                  alt="Clear"
                  id="weatherIconForecast"
                  class="float-left"
                />
                <i class="fa-solid fa-cloud"></i>
                <span class="high" id="forecastDayHigh">h</span>
                <span class="low" id="forecastDayLow">l</span>
              </div>
            </div>
          </div>
          `;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

//define global variables
let apiKey = "e4a1a55cec92d0a62ad315df687956af";
let unit = "metric";

let menuoptions = ["London", "Paris", "Rome", "New York", "Auckland"];
//let cityShown = "Wellington";
let celsiusTemp = null;

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

menuOpt1Element.addEventListener("click", updateCityFromMenu1);
menuOpt2Element.addEventListener("click", updateCityFromMenu2);
menuOpt3Element.addEventListener("click", updateCityFromMenu3);
menuOpt4Element.addEventListener("click", updateCityFromMenu4);
menuOpt5Element.addEventListener("click", updateCityFromMenu5);

let searchElement = document.querySelector("#searchForm");
searchElement.addEventListener("submit", updateCity);

let currentTempValue = document.querySelector("#currentTempValue");

let celsiusElement = document.querySelector("#celsius");
celsiusElement.addEventListener("click", updateCelsius);

let fahrenheitElement = document.querySelector("#fahrenheit");
fahrenheitElement.addEventListener("click", updateFahrenheit);

//let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityShown}&units=${unit}&appid=${apiKey}`;

let btnCurrentCityElement = document.querySelector("#btnCurrentLocation");
btnCurrentCityElement.addEventListener("click", btnCurrentLocation);

navigator.geolocation.getCurrentPosition(findCurrentCity);

displayForecast();

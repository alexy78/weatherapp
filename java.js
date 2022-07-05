let h3 = document.querySelector("h3");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
let currentYear = now.getFullYear();
let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h3.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${hours}:${minutes}`;

function currentCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#cityinput");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchCity.value;
  let apiKey = "be3ab8e09c2856ab67e7aa09558d9610";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#change-city");
form.addEventListener("submit", currentCity);
function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperature.innerHTML = Math.round(celsiusTemperature);
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();

  let temperature = document.querySelector("#temperature");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

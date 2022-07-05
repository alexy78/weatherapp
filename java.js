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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#change-city");
form.addEventListener("submit", currentCity);

window.onload = init;

function init() {
  console.log("Window has loaded");
  showBckgnd(JSON.parse(localStorage.getItem("background")));
  showWings(JSON.parse(localStorage.getItem("wings")));
  showBody(JSON.parse(localStorage.getItem("body")));
  showHair(JSON.parse(localStorage.getItem("hair")));
  showDress(JSON.parse(localStorage.getItem("dress")));
  showShoes(JSON.parse(localStorage.getItem("shoes")));
  showAccent(JSON.parse(localStorage.getItem("accent")));
}

// Weather Functions
function getWeather() {
  const apiKey = "f2f6f1ebb0ac4c177eecaaaab4801a5e";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a ZIP code");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. Please try again. :(");
    });

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      displayHourlyForecast(data.list);
    })
    .catch((error) => {
      console.error("Error fetching hourly forecast data:", error);
      alert("Error fetching hourly forecast data. Please try again. :(");
    });
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById("temp-div");
  const weatherInfoDiv = document.getElementById("weather-info");
  const weatherIcon = document.getElementById("weather-icon");
  const hourlyForecastDiv = document.getElementById("hourly-forecast");

  // Clear previous content
  weatherInfoDiv.innerHTML = "";
  hourlyForecastDiv.innerHTML = "";
  tempDivInfo.innerHTML = "";

  if (data.cod === "404") {
    weatherInfoDiv.innerHTML = `<p>&{data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `<p>${temperature}°F</p>`;

    const weatherHTML = `<p>${cityName}</p><p>${description}</p>`;

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();
  }
}

function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = document.getElementById("hourly-forecast");
  const next24Hours = hourlyData.slice(0, 8);

  next24Hours.forEach((item) => {
    const dateTime = new Date(item.dt * 1000);
    const hour = dateTime.getHours();
    const temperature = Math.round(item.main.temp);
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const hourlyItemHTML = `
    <div class="hourly-item">
    <span>${hour}:00</span>
    <img src="${iconUrl}" alt="Hourly Weather Icon">
    <span>${temperature}°F</span>
    </div>`;

    hourlyForecastDiv.innerHTML += hourlyItemHTML;
  });
}

function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = "block";
}

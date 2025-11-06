window.onload = init;

function init() {
  const savedWeather = JSON.parse(localStorage.getItem("savedWeather"));
  const savedForecast = JSON.parse(localStorage.getItem("savedForecast"));

  if (savedWeather && savedForecast) {
    displayWeather(savedWeather);
    displayHourlyForecast(savedForecast);
  }

  checkMemory();
  console.log("Window has loaded");
}

// Check the Browser memory for user-chosen doll items. If there's none, page will load whatever is in the index.
function checkMemory() {
  const savedBckgnd = JSON.parse(localStorage.getItem("witchybckgnd"));
  const savedPet = JSON.parse(localStorage.getItem("witchypet"));
  const savedBody = JSON.parse(localStorage.getItem("witchybody"));
  const savedHair = JSON.parse(localStorage.getItem("witchyhair"));
  const savedDress = JSON.parse(localStorage.getItem("witchydress"));
  const savedAccent = JSON.parse(localStorage.getItem("witchyaccent"));

  if (
    savedBckgnd ||
    savedPet ||
    savedBody ||
    savedHair ||
    savedDress ||
    savedAccent
  ) {
    showBckgnd(savedBckgnd);
    showPet(savedPet);
    showBody(savedBody);
    showHair(savedHair);
    showDress(savedDress);
    showAccent(savedAccent);
  } else {
    showBckgnd(bckgndIndex);
    showPet(petIndex);
    showBody(bodyIndex);
    showHair(hairIndex);
    showDress(dressIndex);
    showAccent(accentIndex);
  }
}

// Weather Functions
function getWeather() {
  const apiKey = "be4cbc6ddb60c449b151f55d149abd04";
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  function successCallback(position) {
    const coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`;

    fetch(currentWeatherUrl)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
        localStorage.setItem("savedWeather", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching current weather data:", error);
        alert("Error fetching current weather data. Please try again. :(");
      });

    fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
        displayHourlyForecast(data.list);
        localStorage.setItem("savedForecast", JSON.stringify(data.list));
      })
      .catch((error) => {
        console.error("Error fetching hourly forecast data:", error);
        alert("Error fetching hourly forecast data. Please try again. :(");
      });
  }

  function errorCallback(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
  }
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById("temp-div");
  const weatherInfoDiv = document.getElementById("weather-info");
  const weatherIcon = document.getElementById("weather-icon");
  const hourlyForecastDiv = document.getElementById("hourly-forecast");
  const weatherTimestamp = document.getElementById("timestamp");

  // Clear previous content
  weatherInfoDiv.innerHTML = "";
  hourlyForecastDiv.innerHTML = "";
  tempDivInfo.innerHTML = "";
  weatherTimestamp.innerHTML = "";

  if (data.cod === "404") {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    const temperatureHTML = `<p>${temperature}°F</p>`;
    const weatherHTML = `<p>${cityName}</p><p>${description}</p>`;
    const dateTime = `Weather data searched at: ${new Date(data.dt * 1000)}`;

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    weatherTimestamp.innerHTML = dateTime;

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

// Displays the weather icon for the hourly panel
function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = "block";
}

// Reset Button
function resetPage() {
  localStorage.clear();
  location.reload();
}

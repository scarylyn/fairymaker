window.onload = init;

function init() {
  const savedWeather = JSON.parse(sessionStorage.getItem("savedWeather"));
  const savedForecast = JSON.parse(sessionStorage.getItem("savedForecast"));

  if (savedWeather && savedForecast) {
    displayWeather(savedWeather);
    displayHourlyForecast(savedForecast);
  }

  showBckgnd(JSON.parse(sessionStorage.getItem("witchybckgnd")));
  showPet(JSON.parse(sessionStorage.getItem("witchypet")));
  showBody(JSON.parse(sessionStorage.getItem("witchybody")));
  showHair(JSON.parse(sessionStorage.getItem("witchyhair")));
  showDress(JSON.parse(sessionStorage.getItem("witchydress")));
  showAccent(JSON.parse(sessionStorage.getItem("witchyaccent")));
  console.log("Window has loaded");
}

// Weather Functions
function getWeather() {
  const apiKey = "be4cbc6ddb60c449b151f55d149abd04";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
      sessionStorage.setItem("savedWeather", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. Please try again. :(");
    });

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      displayHourlyForecast(data.list);
      sessionStorage.setItem("savedForecast", JSON.stringify(data.list));
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

function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = "block";
}

// Reset Button
function resetPage() {
  const input = document.getElementById("city");
  input.value = "";
  sessionStorage.clear();
  location.reload();
}

// Hide Button
function hideButtons() {
  const hiddenBtns = document.getElementsByClassName("btn");
  const titleChange = document.getElementById("pagetitle");
  for (let i = 0; i < hiddenBtns.length; i++) {
    if (hiddenBtns[i].style.display === "none") {
      hiddenBtns[i].style.display = "block";
      titleChange.innerHTML = `Create Your Weather Witch`;
    } else {
      hiddenBtns[i].style.display = "none";
      titleChange.innerHTML = `The Weather Witch`;
    }
  }

  // Toggle button text
  const hideBtn = document.getElementById("hide");
  if (hideBtn.textContent === "Hide Buttons") {
    hideBtn.textContent = "Show Buttons";
  } else {
    hideBtn.textContent = "Hide Buttons";
  }
}

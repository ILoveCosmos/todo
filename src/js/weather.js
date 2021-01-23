const API_WEATHER_KEY = "d9847d9ac83145f21312809e4c652adf";
const jsCityWeatherInfo = document.querySelector(
  ".cityweather-container__info"
);

function getCityWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_WEATHER_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      //   console.log(json);
      const cityName = json.name;
      const cityTemp = json.main.temp;
      //   console.log(cityName, cityTemp);

      jsCityWeatherInfo.innerText = `${cityName} @ ${cityTemp} ℃`;
    });
}

function handleSuccessGetPosition(position) {
  const coordinate = position.coords;
  //   console.log(coordinate.latitude, coordinate.longitude);
  getCityWeather(coordinate.latitude, coordinate.longitude);
}

function handleErrorGetPosition() {
  alert("Sorry. no position available.");
}

function init() {
  navigator.geolocation.getCurrentPosition(
    handleSuccessGetPosition,
    handleErrorGetPosition
  );
}

init();

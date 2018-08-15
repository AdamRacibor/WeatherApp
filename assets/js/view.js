const view = (function(){
  const day = document.querySelector('#day');
  const date = document.querySelector('#date');
  const cityName = document.querySelector('#cityName');
  const currentWeatherSection = document.querySelector('#currentWeatherSection');
  const futureWeatherList = document.querySelector('#futureWeatherList');

  function addWeatherInformations(currentWeather) {
    day.textContent = currentWeather.day;
    date.textContent = currentWeather.date;
    cityName.textContent = currentWeather.name;
  }

  function generateCurrentWeather(currentWeather) {
    currentWeatherSection.innerHTML = `<img id="weather-icon" class="weather__img" src="img/${currentWeather.icon}.svg" alt="${currentWeather.weather}"><span id="temperature" class="weather__value">${currentWeather.temperature}<sup>o</sup>C</span>`;
  }

  function generateFutureWeather(futureWeather) {
    futureWeatherList.insertAdjacentHTML('afterbegin', `<li class="future-weather-list__item"><span class="future-weather-list__day">${futureWeather.day}</span><img id="future-weather-list-icon" class="future-weather-list__img" src="img/${futureWeather.icon}-black.svg" alt="${futureWeather.weather}"><span class="future-weather-list__value">${futureWeather.temperature}<sup>o</sup>C</span></li>`)
  }

  return {
    addWeatherInformations: addWeatherInformations,
    generateCurrentWeather: generateCurrentWeather,
    generateFutureWeather: generateFutureWeather,
  }
})();

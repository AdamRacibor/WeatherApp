const app = (function() {
  const city = document.querySelector('#city');
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  navigation.form.addEventListener('submit', (e) => {
    e.preventDefault();
    navigation.changeSection();
    weather.getCityWoeid(city.value)
      .then(woeid => weather.getWeather(woeid))
        .then(result => {
          const cityWeather = new weather.currentCityWeather(
            weekDays[weather.getDayNumber(result.consolidated_weather[0].applicable_date)],
            result.consolidated_weather[0].applicable_date, result.title,
            result.consolidated_weather[0].weather_state_abbr,
            result.consolidated_weather[0].weather_state_name,
            Math.round(result.consolidated_weather[0].the_temp)
          );
          view.addWeatherInformations(cityWeather);
          view.generateCurrentWeather(cityWeather);

          const secondDay = new weather.futureCityWeather(
            shortWeekDays[weather.getDayNumber(result.consolidated_weather[3].applicable_date)],
            result.consolidated_weather[3].weather_state_abbr,
            result.consolidated_weather[3].weather_state_name,
            Math.round(result.consolidated_weather[3].the_temp)
          );
          view.generateFutureWeather(secondDay);

          const thirdDay = new weather.futureCityWeather(
            shortWeekDays[weather.getDayNumber(result.consolidated_weather[2].applicable_date)],
            result.consolidated_weather[2].weather_state_abbr,
            result.consolidated_weather[2].weather_state_name,
            Math.round(result.consolidated_weather[2].the_temp)
          );
          view.generateFutureWeather(thirdDay);

          const fourthDay = new weather.futureCityWeather(
            shortWeekDays[weather.getDayNumber(result.consolidated_weather[1].applicable_date)],
            result.consolidated_weather[1].weather_state_abbr, result.consolidated_weather[1].weather_state_name,
            Math.round(result.consolidated_weather[1].the_temp)
          );
          view.generateFutureWeather(fourthDay);
      });
  });
})();

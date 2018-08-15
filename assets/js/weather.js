const weather = (function() {

  class currentCityWeather {
    constructor(day, date, name, icon, weather, temperature) {
      this.day = day;
      this.date = date;
      this.name = name;
      this.icon = icon;
      this.weather = weather;
      this.temperature = temperature;
    }
  }

  class futureCityWeather {
    constructor(day, icon, weather, temperature) {
      this.day = day;
      this.icon = icon;
      this.weather = weather;
      this.temperature = temperature;
    }
  }

  async function getCityWoeid(city) {
      const woeid = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`).then(id => id.json());
      return woeid;
  }

  async function getWeather(woeid) {
    try {
      const weather = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid[0].woeid}`).then(result => result.json());
      navigation.changeSection();
      return weather;
    } catch {
      navigation.showErrorMsg()
      return false;
    }
  }

  function getDayNumber(date) {
    const day = new Date(date);
    return day.getDay();
  }

  return {
    getCityWoeid: getCityWoeid,
    getWeather: getWeather,
    currentCityWeather: currentCityWeather,
    futureCityWeather: futureCityWeather,
    getDayNumber: getDayNumber,
  }
})();

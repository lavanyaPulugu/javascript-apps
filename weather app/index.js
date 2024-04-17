function getWeather() {
  const city = document.querySelector(".search input").value;
  const apiKey = "bf978ae042ba10fb64ab5480c3d6aa71";
  const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=` +
    apiKey +
    "&units=metric";

  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Weather data for ${city}:`, data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

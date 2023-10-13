const inputBox = document.querySelector(`.input-box`);
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(`.weather-img`);
const temperature = document.querySelector(`.temperature`);
const description = document.querySelector(`.description`);
const humidity = document.getElementById(`humidity`);
const wind_speed = document.getElementById(`wind-speed`);
const location_not_found = document.querySelector(`.location-not-found`);
const weather_body = document.querySelector(`.weather-body`);
async function checkWeather(city) {
  
  const api_key = "0b78484702481f65c00d109e5c17e325";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const response = await fetch(`${url}`);
  const weatherData = await response.json();

  if(weatherData.cod === `404`){
    location_not_found.style.display ="flex";
    weather_body.style.display ="none";
    console.log("error");
    return;
  }
  location_not_found.style.display ="none";
  weather_body.style.display ="flex";

  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  wind_speed.innerHTML = `${weatherData.wind.speed}Km/H`;

  switch (weatherData.weather[0].main) {
    case `Clouds`:
      weather_img.src = "./assets/cloud.png";
      break;
    case `Clear`:
      weather_img.src = "./assets/clear.png";
      break;
    case `Rain`:
      weather_img.src = "./assets/rain.png";
      break;
    case `Mist`:
      weather_img.src = "./assets/mist.png";
      break;
      case `Snow`:
      weather_img.src = "./assets/snow.png";
      break;
  }

  console.log(weather_data.then.data, "response");
}
searchBtn.addEventListener(`click`, () => {
  checkWeather(inputBox.value);
});

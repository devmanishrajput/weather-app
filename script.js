const inputBox = document.querySelector(`.input-box`);
const searchBtn = document.getElementById(`searchBtn`);
const weather_img = document.querySelector(`.weather-img`);
const temperature = document.querySelector(`.temperature`);
const description = document.querySelector(`.description`);
const humidity = Document.getElementById(`humidity`);
const wind_speed = document.getElementById(`wind-speed`);


async function checkWeather(city){
    const api_key = "0b78484702481f65c00d109e5c17e325";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

        console(weather_data);
        // temperature.innerHTML = `$`

}
searchBtn.addEventListener(`click`,()=>{
    checkWeather(inputBox.value);
});
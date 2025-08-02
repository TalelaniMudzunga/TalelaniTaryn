function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#weather-icon"); 
    

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = date.toLocaleString("en-US", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit"
    });
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
      
    iconElement.src = response.data.condition.icon_url;
    iconElement.alt = response.data.condition.description;
}
function searchCity(city) {
    let apiKey = "4798o43t6a95dd37517f901a314b0ebe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
function handleSearch(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");
    let city = searchInput.value.trim();
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;
    searchCity(city); 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
searchCity("Soweto"); 
    

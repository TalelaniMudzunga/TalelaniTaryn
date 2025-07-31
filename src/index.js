function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    temperatureElement.innerHTML = Math.round(temperature);
       
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
    

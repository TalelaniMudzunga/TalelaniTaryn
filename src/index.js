function searchCity() {
    let apiKey = "4798o43t6a95dd37517f901a314b0ebe";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key={lat}&key=${apiKey}&units=metric';
}
function handleSearch(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value.trim();
    searchCity(searchInput.value); 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
    

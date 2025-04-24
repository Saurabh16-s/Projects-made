const apiKey = "62a2377aa0c472990f73c863b67345c2"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); // Ensure the correct element is selected

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json(); // Use await here to wait for the API response

    // Display weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // Set the appropriate weather icon based on the weather condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist.png";
    }

    // Display the weather info
    document.querySelector(".weather").style.display = "block";
}

// Add event listener to the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // Fetch weather for the entered city
});

// Optionally, you can add event listener for pressing 'Enter' key
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value); // Fetch weather for the entered city
    }
});

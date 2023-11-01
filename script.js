let searchBox = document.querySelector(".search-box input");
let searchBtn = document.querySelector(".search-box button");
let searchBar = document.querySelector(".search-bar");
let weatherCard = document.querySelector(".weather-card");
let arrowIcon = document.querySelector(".back-btn");
let weatherLogo = document.querySelector(".weather-logo");
let toastMessage = document.querySelector(".toast-message");
let removeMsg = document.querySelector(".remove-msg");
console.log(weatherLogo);



let apiKey = "2bef135a4f323f1a4cf7ce4fd5cdfd67";
async function weather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    if (response.status == 404) {
        toastMessage.style.left ="5%";
    }

    if (data.weather[0].main == "Haze") {
        weatherLogo.src = "./Weather Icons/haze.svg";
    } else if(data.weather[0].main == "Clear") {
        weatherLogo.src = "./Weather Icons/clear.svg";
    } else if(data.weather[0].main == "Rain") {
        weatherLogo.src = "./Weather Icons/rain.svg";
    } else if(data.weather[0].main == "Clouds") {
        weatherLogo.src = "./Weather Icons/Cloud.svg";
    } else if(data.weather[0].main == "Snow") {
        weatherLogo.src = "./Weather Icons/snow.svg";
    } else if(data.weather[0].main == "	Drizzle") {
        weatherLogo.src = "./Weather Icons/drazzle.png";
    } else if(data.weather[0].main == "Storm") {
        weatherLogo.src = "./Weather Icons/storm.svg";
    } else if(data.weather[0].main == "Mist") {
        weatherLogo.src = "./Weather Icons/storm.svg";
    } else if(data.weather[0].main == "smoke") {
        weatherLogo.src = "./Weather Icons/smoke.jpg";
    }


    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + '° c';
    document.querySelector(".city-name p").textContent = data.name;
    document.querySelector(".weather-condition").textContent = data.weather[0].description;
    document.querySelector(".humidity-speed").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    
    
}

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    weather(searchBox.value);

    searchBox.value = "";

    searchBar.style.display = "none";
    weatherCard.style.display = "block";
});

arrowIcon.addEventListener("click", function(event) {
    event.preventDefault();
    searchBar.style.display = "block";
    weatherCard.style.display = "none";
})

removeMsg.addEventListener("click", function(event) {
    event.preventDefault();
    toastMessage.style.left ="-25%";
    weatherCard.style.display = "none";
    searchBar.style.display = "block";
});
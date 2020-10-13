window.onload=

function(){

const city = document.querySelector(".location");
const temp = document.querySelector(".temperature");
const descr = document.querySelector(".description");
const image = document.querySelector(".weather-image");
const notification = document.querySelector(".notification");
const KELVIN = 273;
const key = "9fc6f08ac37f5e54bfccd982d3d3a148";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notification.style.display = "block";
    notification.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
};

//GET LOCALIZATION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    image.innerHTML = `<img src="images/${weather.iconId}.png"/>`;
    temp.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descr.innerHTML = weather.description;
    city.innerHTML = `${weather.city}, ${weather.country}`;
}

};
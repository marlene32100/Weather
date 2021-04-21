const api_key = "3d94c226c24af80636ba80857e13acc9";
let lat;
let lon;

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let today = new Date();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      let api_weather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`;
      let api_location = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${api_key}`;

      // Fetch data from OpenWeather API
      fetch(api_weather).then((response) => {
        return response.json().then((data) => {
          const temperature = data.current.temp;
          const celsius = Math.round(temperature - 273.15);
          const description = data.current.weather[0].description;
          document.getElementById("celsius").innerHTML = celsius;
          document.getElementById("description").innerHTML = description;
          console.log(data);
        });
      });

      // Get location name from coordinates
      fetch(api_location).then((response) => {
        return response.json().then((data) => {
          const location = data[0].name;
          document.getElementById("location").innerHTML = location;
        });
      });

      // Show different image based on daytime/night time
      let time_now = time.split(":")[0];

      if (time_now >= 20 || time_now < 7) {
        fetch(api_weather).then((response) => {
          return response.json().then((data) => {
            const weather_description = data.current.weather[0].description;
            if (
              weather_description === "few clouds" ||
              weather_description === "scattered clouds" ||
              weather_description === "broken clouds"
            ) {
              document.body.style.backgroundImage =
                "url('./assets/images/cloudy-night.jpg')";
            } else if (weather_description === "thunderstorm") {
              document.body.style.backgroundImage =
                "url('./assets/images/thunder.jpg')";
            } else if (
              weather_description === "rain" ||
              weather_description === "shower rain"
            ) {
              document.body.style.backgroundImage =
                "url('./assets/images/rain.jpg')";
            } else if (weather_description === "snow") {
              document.body.style.backgroundImage =
                "url('./assets/images/snow.jpg')";
            } else if (weather_description === "mist") {
              document.body.style.backgroundImage =
                "url('./assets/images/mist.jpg')";
            } else {
              document.body.style.backgroundImage =
                "url('./assets/images/starry-night.jpg')";
            }
          });
        });
        document.body.style.backgroundImage =
          "url('./assets/images/starry-night.jpg')";
      } else {
        fetch(api_weather).then((response) => {
          return response.json().then((data) => {
            const weather_description = data.current.weather[0].description;
            if (
              weather_description === "few clouds" ||
              weather_description === "scattered clouds" ||
              weather_description === "broken clouds"
            ) {
              document.body.style.backgroundImage =
                "url('./assets/images/cloud.jpg')";
            } else if (weather_description === "thunderstorm") {
              document.body.style.backgroundImage =
                "url('./assets/images/thunder.jpg')";
            } else if (
              weather_description === "rain" ||
              weather_description === "shower rain"
            ) {
              document.body.style.backgroundImage =
                "url('./assets/images/rain.jpg')";
            } else if (weather_description === "snow") {
              document.body.style.backgroundImage =
                "url('./assets/images/snow.jpg')";
            } else if (weather_description === "mist") {
              document.body.style.backgroundImage =
                "url('./assets/images/mist.jpg')";
            } else {
              document.body.style.backgroundImage =
                "url('./assets/images/sunny.jpg')";
            }
          });
        });
      }

      function showError(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            document.getElementById("display-error").innerHTML =
              "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            document.getElementById("display-error").innerHTML =
              "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            document.getElementById("display-error").innerHTML =
              "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            document.getElementById("display-error").innerHTML =
              "An unknown error occurred.";
            break;
        }
      }
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
});

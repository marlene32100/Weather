let positionInfo = [];

let positionCopy= positionInfo.map((x) => x);

document.getElementById("location").innerHTML=positionCopy;

let field = document.getElementById("result").value;

 
// WEATHER API
//fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9fc6f08ac37f5e54bfccd982d3d3a148`)
//  .then(response => response.json())
//  .then(data => console.log(data));

// GEOLOCATION
function getPosition() {
  
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                //CLEAR THE ARRAY BEFORE PASSING THE VALUES
                positionInfo.length=0;
                positionInfo.push(latitude);
                positionInfo.push(longitude);
                
                document.getElementById("location").innerHTML=positionInfo;
            });
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
  }
  




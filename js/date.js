window.onload =

function today(){

var today = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dd = today.getDate();
var mm 
= months[today.getMonth()];
var yyyy = today.getFullYear();
var days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log(dd+" "+mm+" "+yyyy+", "+days[today.getDay()] );

document.getElementById("today").innerHTML=dd+" "+mm+" "+yyyy+", "+days[today.getDay()];

}

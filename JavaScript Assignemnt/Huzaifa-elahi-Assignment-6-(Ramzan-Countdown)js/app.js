var day = document.getElementById("RamdanDay");
var hours = document.getElementById("RamdanTime");
var minutes = document.getElementById("RamdanMinute");
var seconds = document.getElementById("RamdanSecond");

var ramadan = new Date("Mar 10, 2024 18:39:00").getTime();
console.log(ramadan);
var t = setInterval(function () {
  var now = new Date().getTime();
  var cal = ramadan - now;

  var dte = Math.floor(cal / (1000 * 60 * 60 * 24));
  // console.log(dte);

  day.innerHTML = dte;

  var hour = Math.floor((cal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hour);

  hours.innerHTML = hour;

  var min = Math.floor((cal % (1000 * 60 * 60)) / (1000 * 60));
  console.log(min);

  minutes.innerHTML = min;

  var sec = Math.floor((cal % (1000 * 60)) / 1000);
  console.log(sec);

  seconds.innerHTML = sec;
});

var days = document.getElementById(he);

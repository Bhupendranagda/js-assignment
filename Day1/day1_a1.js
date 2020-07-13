d = new Date();
todayDay = d.getDay();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var Day = weekday[todayDay];
document.getElementById("todayDate").innerHTML = Day;

function time() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var Time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("txt").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  setTimeout(time, 500);
}

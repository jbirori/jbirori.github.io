var nextSunday = new Date();
nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()));

setInterval(function() {
  var today = new Date();
  var hoursTo = ((7 - today.getDay()) * 24) - (today.getHours() + 1);
  var minutesTo = (59 - today.getMinutes());
  var secondsTo = (59 - today.getSeconds());

  document.getElementById('hours').innerHTML = hoursTo;
  document.getElementById('minutes').innerHTML = minutesTo < 10 ? `0${minutesTo}` : minutesTo;
  document.getElementById('seconds').innerHTML = secondsTo < 10 ? `0${secondsTo}` : secondsTo;
 }, 1000);

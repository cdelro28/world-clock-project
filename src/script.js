function showCityTime() {
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  let seattleTime = moment().tz("America/Vancouver");

  seattleDateElement.innerHTML = seattleTime.format("MMMM Do YYYY");
  seattleTimeElement.innerHTML = seattleTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );
}
showCityTime();
setInterval(showCityTime, 1000);

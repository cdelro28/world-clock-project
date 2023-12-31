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

function updateCity(event) {
  setInterval(() => {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.split("/")[1].replace("Vancouver", "Seattle");

    let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss");
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");

    let cityUpdateElement = document.querySelector("#city-update");
    cityUpdateElement.innerHTML = `<div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityDate}</div>
  </div>
  <div class="time">${cityTime}<small> ${moment()
      .tz(cityTimeZone)
      .format("A")}</small></div>
    </div>
`;
  }, 1000);
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

function showCityTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[<small>]");

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

  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKongElement.querySelector(".date");
  let hongKongTimeElement = hongKongElement.querySelector(".time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );
}

showCityTime();
setInterval(showCityTime, 1000);

function updateCity(event) {
  setInterval(() => {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone
      .split("/")[1]
      .replace("Vancouver", "Seattle")
      .replace("_", " ");

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

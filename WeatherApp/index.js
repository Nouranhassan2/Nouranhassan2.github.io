const searchInput = document.getElementById("search");
const findBtn = document.querySelector(".find-btn");

// findBtn.addEventListener("click", function() {
//   var result = searchInput.value;
//   url = "http://api.weatherapi.com/v1/forecast.json?key=217e3762eed54021b74125233240101&q=" + city + "&days=3&aqi=no&alerts=no";
//   response = await fetch(url);
//   weather = await response.json();
//   alert(weather.current.temp_c);

// });

// if (sessionStorage.getItem("city") == null) {
//   getData("cairo");
// } else {
//   getData(JSON.parse(sessionStorage.getItem("city")));
// }

// function local(key) {
//   sessionStorage.setItem("city", JSON.stringify(key));
// }

findBtn.addEventListener("click", function () {
  // local(searchInput.value);

  getData(searchInput.value);
});
// get data
async function getData(key) {
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=217e3762eed54021b74125233240101&q=${key}&days=4`
  );
  let result = await data.json();
  displayData(result);
}

function displayData(DATA) {
  let cartona = `   <div class="col-lg-4 box">
  <div class="head w-100 d-flex justify-content-between">
    <div class="day">${new Date(
      DATA.forecast.forecastday[0].date
    ).toLocaleDateString("en", { weekday: "long" })}</div>
    <div class="date">${
      new Date(DATA.location.localtime).toLocaleDateString("en", {
        day: "2-digit",
      }) +
      new Date(DATA.location.localtime).toLocaleDateString("en", {
        month: "long",
      })
    }
    </div>
  </div>

  <div class="forecast-content" id="current">
    <div class="location">${DATA.location.name}</div>
    <div class="degree d-flex align-items-center">
      <div class="num">${DATA.current.temp_c}<sup>o</sup>C</div>

      <div class="forecast-icon">
        <img
          src=${DATA.current.condition.icon} 
          alt=""
          width="90"
        />
      </div>
    </div>
    <div class="custom">${DATA.current.condition.text}</div>
    <span
      ><img
        src="https://routeweather.netlify.app/images/icon-umberella@2x.png"
        alt=""
        width="21"
        height="21"
      />${DATA.current.wind_degree}%</span
    >
    <span
      ><img
        src="https://routeweather.netlify.app/images/icon-wind@2x.png"
        alt=""
        width="23"
        height="21"
      />${DATA.current.wind_kph}km/h</span
    >
    <span
      ><img
        src="https://routeweather.netlify.app/images/icon-compass@2x.png"
        alt=""
        width="21"
        height="21"
      />${DATA.current.wind_dir}</span
    >
  </div>
</div>
<div class="col-lg-4 box2 text-center">
  <div class="head w-100">
    <div class="day">${new Date(
      DATA.forecast.forecastday[1].date
    ).toLocaleDateString("en", {
      weekday: "long",
    })}</div>
  </div>

  <div class="forecast-content" id="current">
    <div
      class="degree d-flex align-items-center justify-content-center flex-column"
    >
      <div class="forecast-icon">
        <img
          src=${DATA.forecast.forecastday[1].day.condition.icon}
          alt=""
          width="48"
        />
      </div>
      <div class="num2 pt-4">${
        DATA.forecast.forecastday[1].day.maxtemp_c
      }<sup>o</sup>C</div>
      <small>${DATA.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
    </div>
    <div class="custom">${DATA.forecast.forecastday[1].day.condition.text}</div>
  </div>
</div>
<div class="col-lg-4 box text-center">
  <div class="head w-100">
    <div class="day">${new Date(
      DATA.forecast.forecastday[2].date
    ).toLocaleDateString("en", {
      weekday: "long",
    })}</div>
  </div>

  <div class="forecast-content" id="current">
    <div
      class="degree d-flex align-items-center justify-content-center flex-column"
    >
      <div class="forecast-icon">
        <img
          src=${DATA.forecast.forecastday[2].day.condition.icon}
          alt=""
          width="48"
        />
      </div>
      <div class="num2 pt-4">${
        DATA.forecast.forecastday[2].day.maxtemp_c
      }<sup>o</sup>C</div>
      <small>${DATA.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
    </div>
    <div class="custom">${DATA.forecast.forecastday[2].day.condition.text}</div>
  </div>
</div>`;
  document.querySelector("#display").innerHTML = cartona;
}

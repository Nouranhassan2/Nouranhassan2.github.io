// & =====> Html variables
var dataElement = document.getElementById("data");
var selectElement = document.getElementById("food");
var searchInput = document.querySelector("input");
let allDatadata = [];

// & =====> Events
selectElement.addEventListener("change", function (e) {
  console.log(e.target.value);
  getData(e.target.value);
  searchInput.value = "";
});

searchInput.addEventListener("blur", function (e) {
  console.log(e.target.value);
  getData(e.target.value);
});

// & =====> Functions
//get Data
function getData(type) {
  var myHttp = new XMLHttpRequest();
  myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${type} `);
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState === 4) {
      let data = JSON.parse(myHttp.response);
      console.log(data);
      allData = data.recipes;
      console.log(allData);
      displayData();
    }
  });
}
//display data
function displayData() {
  cartona = ``;
  for (let i = 0; i < allData.length; i++) {
    cartona += ` <div class="col-md-4">
    <img src="${allData[i].image_url}" class="w-100" alt="img" />
    <h3 class="mt-2" >${allData[i].title}</h3>
  </div> `;
  }
  dataElement.innerHTML = cartona;
}

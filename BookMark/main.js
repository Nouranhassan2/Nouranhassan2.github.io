var siteNameEl = document.getElementById("Name");
var siteLinkEl = document.getElementById("URL");
var closeIcon = document.getElementById("closeBtn");
var alertModal = document.getElementById("alert");
var visitBtns;

var productList = [];
if (localStorage.getItem("products") !== null) {
  productList = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}

function submitBtn() {
  if (validateData() === true) {
    var product = {
      name: siteNameEl.value,
      link: siteLinkEl.value,
    };
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));
    //clear
    clearInputs();
    //display
    displayProduct();
  } else {
    displayAlert();
  }
}

//clear function
function clearInputs() {
  siteNameEl.value = "";
  siteLinkEl.value = "";
}
//display in table

function displayProduct() {
  var productInTable = ``;
  for (var i = 0; i < productList.length; i++) {
    productInTable += `<tr>
    <td>${i + 1}</td>
    <td>${productList[i].name}</td>
    <td><button class="btn btn-success visit-btn " onclick="visitWebsite(${i})">
    <i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
    <td><button class="btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash-can"></i>
    Delete</button></td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = productInTable;
}

//delete function
function deleteItem(index) {
  productList.splice(index, 1);
  displayProduct();
  localStorage.setItem("products", JSON.stringify(productList));
}

//close function
function closeButton() {
  alertModal.classList.replace("d-block", "d-none");
}
//display alert
function displayAlert() {
  alertModal.classList.replace("d-none", "d-block");
}
//visit function
function visitWebsite(index) {
  var websiteUrl = productList[index].link;
  window.open(websiteUrl);
}
//fuction validate product
function validateData() {
  var nameRegex = /^\w{3,}(\s+\w+)*$/;
  var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  if (
    nameRegex.test(siteNameEl.value) === true &&
    urlRegex.test(siteLinkEl.value) === true
  ) {
    return true;
  } else {
    return false;
  }
}

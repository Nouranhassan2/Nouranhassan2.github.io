// & ===> HTML Elements
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpBtn = document.querySelector(".btn-signUp");
const toggleBtn = document.querySelector("#togglePassword");

// & ===> App Variables
let usersData;
getDataToLocalStorage();

// & ===> Events
signUpBtn.addEventListener("click", signUp);
toggleBtn.addEventListener("click", passwordVisibility);
// & ===> Functions
function signUp() {
  var userInfo = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  usersData.push(userInfo);
  setDataToLocalStorage();
  window.location.href = "login.html";
}

function setDataToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(usersData));
}

function getDataToLocalStorage() {
  usersData = JSON.parse(localStorage.getItem("users")) || [];
}
// function to validate user name
function validateUserName() {
  let userName = userNameInput.value;
  let ragexUserName = /^[A-z]{1,30}$/;

  if (ragexUserName.test(userName) == true) {
    userNameInput.classList.remove("is-invalid");
    userNameInput.classList.add("is-valid");

    return true;
  } else {
    //invalid
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    alert("write valid username");

    return false;
  }
}

// function to validate emil
function vailidateEmail() {
  let email = emailInput.value;
  let ragexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (ragexEmail.test(email) == true) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    alert("write valid email");
  }
}

// function to validate password
function validatePassword() {
  let password = passwordInput.value;
  let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regexPass.test(password) == true) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    alert("password must contain at least 8 characters (alphabet and digit)");
  }
}

// function to make password visible
function passwordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  }
}

// & ===> HTML Variables
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".btn-signUp");
var usersData = JSON.parse(localStorage.getItem("users")) || [];
console.log(usersData);

if (localStorage.getItem("users") != null) {
  var allUsers = JSON.parse(localStorage.getItem("users")) || [];
}

// & ===> Functions

function loginUser() {
  let checker = 0;
  let users = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email == users.email &&
      allUsers[i].password == users.password
    ) {
      checker = 1;
      localStorage.setItem("userName", allUsers[i].userName);
      window.location.href = "home.html";
    }
  }
  if (checker == 0) {
    alert("not valid");
  }
}

function togglePasswordVisibility() {
  var toggleBtn = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  }
}

// & ===>Events
loginBtn.addEventListener("click", loginUser);
toggleBtn.addEventListener("click", togglePasswordVisibility);

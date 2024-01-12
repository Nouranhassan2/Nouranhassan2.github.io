var logoutBtn = document.querySelector(".btn-logout");

function displayName() {
  var loggedInUserName = localStorage.getItem("userName");
  if (loggedInUserName) {
    var welcomeMessage = "Welcome, " + loggedInUserName + "!";
    document.getElementById("welcomeMessage").innerHTML = welcomeMessage;
  }
}

window.onload = function () {
  displayName();
};

function logoutUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  window.location.href = "login.html";
}

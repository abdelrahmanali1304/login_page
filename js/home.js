let welcomeMasseg = document.getElementById("welcomeMasseg");
let logOutBtn = document.getElementById("logOutBtn");

if (localStorage.getItem("userName") != null) {
  welcomeMasseg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}

function logOut() {
  window.location.href = "login.html";
  localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click",logOut)
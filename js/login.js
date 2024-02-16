let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");
let loginBtn = document.getElementById("loginBtn");
let massegeAlert=document.getElementById('massage')
let userContainer = [];

if (localStorage.getItem("usersData") != null) {
  userContainer = JSON.parse(localStorage.getItem("usersData"));
}

function login() {
  if(  checkInput()==true){

    alertMassageFalse("All Inputs Required","red")

  }else{

    if(checkEmailPassword()==true){

        window.location.href='home.html'
     }else{
     
         alertMassageFalse('Email Or Password Incorrect','red')
     
     }
  }


}
function checkEmailPassword() {
  for (let i = 0; i < userContainer.length; i++) {
    if (
      userContainer[i].email == emailLogin.value &&
      userContainer[i].password == passwordLogin.value
    ) {localStorage.setItem('userName',userContainer[i].userName)
      return true;
    }
  }
}


function alertMassageFalse(text,color) {
    massegeAlert.classList.replace("d-none", "d-block");
    massegeAlert.innerHTML = text;
    massegeAlert.style.color = color;
  }

  
function checkInput() {
    if (
        emailLogin.value == "" ||
        passwordLogin.value == ""
    ) {
      return true;
    } else {
      return false;
    }
  }

loginBtn.addEventListener("click", login);

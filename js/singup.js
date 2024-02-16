let signUpName = document.getElementById("signUpName");
let signUpEmail = document.getElementById("signUpEmail");
let signUppassword = document.getElementById("signUppassword");
let signUpBtn = document.getElementById("signUpBtn");
let massegeAlert = document.getElementById("massage");

let userContainer = [];
if (localStorage.getItem("usersData") != null) {
  userContainer = JSON.parse(localStorage.getItem("usersData"));
}

function signUp() {
  let userData = {
    userName: signUpName.value,
    email: signUpEmail.value,
    password: signUppassword.value,
  }
  if(checkInput()==true){

    alertMassageFalse()

  }else{
   if( checkEmail()==true){

    alertMassageFalse('EmailAlreadyExist','red')

   }else{


    userContainer.push(userData);
    localStorage.setItem("usersData", JSON.stringify(userContainer));
    clearForm();
    alertMassage();
    //   console.log(userContainer);


   }
  }

}

function alertMassage() {
  massegeAlert.classList.replace("d-none", "d-block");
  massegeAlert.innerHTML = "success";
  massegeAlert.style.color = "green";
}

function alertMassageFalse(text,color) {
  massegeAlert.classList.replace("d-none", "d-block");
  massegeAlert.innerHTML = text;
  massegeAlert.style.color = color;
}

function clearForm() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUppassword.value = "";
}

function checkInput() {
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUppassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmail(){

for(let i=0;i<userContainer.length;i++){

    if(userContainer[i].email==signUpEmail.value){

        return true;
    }


}


}

signUpBtn.addEventListener("click", signUp);
console.log(userContainer);

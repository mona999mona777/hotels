var nameInput = document.getElementById("the-name");
var emailInput = document.getElementById("the-Email");
var passInput = document.getElementById("the-pass");
var sendInput = document.getElementById("send");
var userInfo = [];
// not new user old one
var newEmail;
function newUser() {
  for (var i = 0; i < userInfo.length; i++) {
    newEmail = emailInput.value;
    if (userInfo[i].email == newEmail) {
      return false;
    }
  }
}

sendInput.addEventListener("click", function () {
  var regex = /^[a-zA-z][\w]{2,}@(gmail|yahoo)\.com$/;

  var theUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passInput.value,
  };
  // empty inputs
  if (
    theUser.name.length == 0 ||
    theUser.email.length == 0 ||
    theUser.password.length == 0
  ) {
    document.getElementById("the-word").innerHTML = "all inputs is required";
    document.getElementById("the-word").style.color = "red";
  }
  // not empty inputs
  else {
    if (regex.test(theUser.email)) {
      // empty locl storage
      if (localStorage.getItem("daataBase") == null) {
        document.getElementById("the-word").innerHTML = "success ";
        document.getElementById("the-word").style.color = "green";
        localStorage.setItem("userName", theUser.name);
        userInfo.push(theUser);
        localStorage.setItem("daataBase", JSON.stringify(userInfo));
        setTimeout(function () {
          window.location = "../signin.html";
        }, 500);
      }
      //not empty locl storage
      else {
        userInfo = JSON.parse(localStorage.getItem("daataBase"));

        if (newUser() == false) {
          document.getElementById("the-word").innerHTML =
            "email is alreedy exist";
          document.getElementById("the-word").style.color = "red";
        } else {
          document.getElementById("the-word").innerHTML = "success";
          document.getElementById("the-word").style.color = "green";
          localStorage.setItem("userName", theUser.name);
          userInfo.push(theUser);
          localStorage.setItem("daataBase", JSON.stringify(userInfo));
          setTimeout(function () {
            window.location = "../signin.html";
          }, 500);
        }
      }
    } else {
      document.getElementById("the-word").innerHTML = "unvalid email";
      document.getElementById("the-word").style.color = "red";
    }
  }
});

/* function emailValidation() {

 var regex = /^ [a-zA-z][\w]{2,}@[a-z]{4,}\.com$/;
var nameText = nameInput.value;
var emailText = emailInput.value;
var passText = passInput.value;
if (nameText.length == 0 && emailText.length == 0 && passText.length == 0) {
    console.log("all inputs id rqiured");
}


userInfo = JSON.parse(localStorage.getItem("daataBase"));


for (var i = 0; i < userInfo.length; i++) {
    if (emailText != userInfo[i].email) {
        console.log("sucess");
        userInfo.push(theUser);
        localStorage.setItem("daataBase", JSON.stringify(userInfo));
    }

    else if (emailText == userInfo[i].email) {
        console.log("alreedy exist ");
    }













}


} */

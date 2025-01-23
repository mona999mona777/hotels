var emailInput = document.getElementById("the-Email");
var passInput = document.getElementById("the-pass");;
var sendInput = document.getElementById("send");
var userInfo = [];

sendInput.addEventListener("click", function () {
    var regex = /^[a-zA-z][\w]{2,}@(gmail|yahoo)\.com$/;

    var theUser = {
        email: emailInput.value,
        password: passInput.value
    }
    // empty inputs
    if ( theUser.email.length == 0 || theUser.password.length == 0) {
        document.getElementById("the-word").innerHTML = "all inputs is required";
        document.getElementById("the-word").style.color = "red";
    }
    // not empty inputs
    else {
        if (regex.test(theUser.email)) {

            // empty locl storage
            if (localStorage.getItem("daataBase") == null) {
                document.getElementById("the-word").innerHTML = "incorresct email or password ";
                document.getElementById("the-word").style.color = "red";
            }
            //not empty locl storage
            else {
                userInfo = JSON.parse(localStorage.getItem("daataBase"));

                if (oldUserEmail() == true  &&  oldUserPassword()==true ) {
                    document.getElementById("the-word").innerHTML= "correct and success ";
                    document.getElementById("the-word").style.color="green";

                    setTimeout(function(){
                        window.location='./inner.html';
                    },500);
                  
                    // window.location='./inner.html';
                }

                else {
                    document.getElementById("the-word").innerHTML = "incorresct email or password ";
                    document.getElementById("the-word").style.color = "red";
                }

            }
        }
        else {
            // console.log("invaid email");
            document.getElementById("the-word").innerHTML = "incorresct email or password ";
            document.getElementById("the-word").style.color = "red";
        }
    }

})

var oldEmail;
function oldUserEmail() {
    for (var i = 0; i < userInfo.length; i++) {
        oldEmail = emailInput.value;
        if (userInfo[i].email == oldEmail) {
            return true;
        }
    }
}


var oldPassword;
function oldUserPassword() {
    for (var i = 0; i < userInfo.length; i++) {
        oldPassword = passInput.value;
        if (userInfo[i].password == oldPassword) {
            return true;
        }
    }
}
// var theUserName=document.getElementById("the-user-name");
var localUserName = localStorage.getItem("userName");
document.getElementById("the-user-name").innerHTML = localUserName;
setTimeout(function () {
  window.location = "./index.html";
}, 2000);

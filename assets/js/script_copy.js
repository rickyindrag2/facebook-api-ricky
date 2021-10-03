function myFunction2() {
  var x2 = document.getElementById("myTopnav2");

  if (!x2.classList.contains("responsive")) {
    x2.classList.add("responsive");
  } else {
    x2.classList.remove("responsive");
  }
}
window.onscroll = function () {
  myFunctionSticky2();
};

var topnav2 = document.getElementById("myTopnav2");

var sticky = topnav.offsetTop;

function myFunctionSticky2() {
  if (window.pageYOffset >= sticky) {
    topnav2.classList.add("sticky");
  } else {
    topnav2.classList.remove("sticky");
  }
}

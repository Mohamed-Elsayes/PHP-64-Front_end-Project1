

//start top button action
let topbtn = document.getElementById("top-btn");
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}
topbtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
//end top button action

window.onscroll = function () {
  menuLinksBG();
  scrollFunction();
};
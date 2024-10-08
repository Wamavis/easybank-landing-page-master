const btnHumburger = document.querySelector("#btnHumburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHumburger?.addEventListener("click", function () {
  //close Hamburger menu
  console.log("click humburger");

  if (header?.classList.contains("open")) {
    header?.classList.remove("open");
    overlay?.classList.remove("fade-in");
    overlay?.classList.add("fade-out");
  } else {
    //open hamburger menu
    header?.classList.add("open");
    overlay?.classList.remove("fade-out");
    overlay?.classList.add("fade-in");
  }
});

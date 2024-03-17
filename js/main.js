let header = document.getElementById("header");
let headerLogo = document.querySelector(".header .logo img");
let menuIcon = document.getElementById("menu-icon");
let navUl = document.querySelector(".header nav ul");
let up = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY > 120) {
    header.classList.add("scroll");
    headerLogo.src = "images/bakery-color.png";
  } else if (window.scrollY < 120 && window.innerWidth > 992) {
    header.classList.remove("scroll");
    headerLogo.src = "images/bakery-light-1.png";
  }
  if (this.scrollY >= 800) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

if (window.innerWidth <= 992) {
  header.classList.add("scroll");
  headerLogo.src = "images/bakery-color.png";
}

menuIcon.onclick = function () {
  this.classList.toggle("clicked");
  navUl.classList.toggle("clicked");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

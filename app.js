const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");


const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);
const navLink = document.querySelectorAll(".nav__link");


const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

navLink.forEach((n) => n.addEventListener("click", closeMenu));
// Content Hamburger

const contentHamburger = document.querySelector(".content__hamburger");
const contentMenu = document.querySelector(".content-left");


const contentMobileView = () => {
    contentHamburger.classList.toggle("active");
    contentMenu.classList.toggle("active");
};
contentHamburger.addEventListener("click", contentMobileView);

const contentLink = document.querySelectorAll(".content-left__link");

const contentCloseMenu = () => {
    contentHamburger.classList.remove("active");
    contentMenu.classList.remove("active");
};

contentLink.forEach((n) => n.addEventListener("click", contentCloseMenu));



let navbar = document.querySelector(".navbar");

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");
let overlay = document.querySelector(".overlay");
let container = document.querySelector(".container");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
    overlay.style.display = "block";
    document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.right = "-100%";
    overlay.style.display = "none";
    document.getElementsByTagName('html')[0].style.overflowY = "auto";
    document.getElementsByTagName('body')[0].style.overflowY = "auto";
});

container.addEventListener("click", () => {
    navLinks.style.right = "-100%";
    overlay.style.display = "none";
    document.getElementsByTagName('html')[0].style.overflowY = "auto";
    document.getElementsByTagName('body')[0].style.overflowY = "auto";
});

// sidebar sub menu open close js code

let featurescssArrow = document.querySelector(".featurescss-arrow");
featurescssArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show1")
});

let companycssArrow = document.querySelector(".companycss-arrow");
companycssArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show2")
});
let navbar = document.querySelector(".navbar");

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");
let overlay = document.querySelector(".overlay");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
    overlay.style.display = "block";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.right = "-100%";
    overlay.style.display = "none";
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

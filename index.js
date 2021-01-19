const burger = document.querySelector ('.burger');
const menu = document.querySelector ('.menu');
const iconBurger = document.querySelector ('.fa-bars');
const iconX = document.querySelector ('.fa-times');

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    menu.classList.toggle("show");
})
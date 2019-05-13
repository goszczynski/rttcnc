const navTrigger = document.querySelector(".navi-toggle");
const burger = document.querySelector(".burger");
const rotate = document.querySelector(".navi-icon");

burger.addEventListener("click", function () {
    navTrigger.classList.toggle("active");
    rotate.classList.toggle("rotate");
})
"use strict";

const hamburgerNav = document.querySelector(".hamburger-btn");
const hamburgerNavClose = document.querySelector(".hamburger-nav");
const navigationLinks = document.querySelector(".nav-links");
const dropdownButton = document.querySelectorAll(".dropdown-btn");

hamburgerNav.addEventListener("click", () => {
  navigationLinks.classList.toggle("hidden");
  hamburgerNavClose.classList.toggle("active");
});

for (let i = 0; i < dropdownButton.length; i++) {
  dropdownButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

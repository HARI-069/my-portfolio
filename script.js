"use strict";

let menuBtn = document.getElementById("myNavMenu");

const myMenuFunction = function () {
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
};

const typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

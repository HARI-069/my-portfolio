"use strict";

const menuBtn = document.getElementById("myNavMenu");
const navHeader = document.getElementById("header");
const scrollBody = document.body.scrollTop;
const scrollDocEle = document.documentElement.scrollTop;

const typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const myMenuFunction = function () {
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
};

const headerShadow = function () {
  if (scrollBody > 50 || scrollDocEle > 50) {
    navHeader.style.boxShadow = "0 1px 6px rbga(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.lineHeight = "90px";
  }
};

window.onscroll = function () {
  headerShadow();
};

"use strict";

const menuBtn = document.getElementById("myNavMenu");
const navHeader = document.getElementById("header");
const scrollBody = document.body.scrollTop;
const scrollDocEle = document.documentElement.scrollTop;
const sections = document.querySelectorAll("section[id]");

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

// Scroll AnimaTion
const scrollRev = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
scrollRev.reveal(".top-header", {}); // Headings

scrollRev.reveal(".featured-text-card", {}); // Home
scrollRev.reveal(".featured-name", { delay: 100 });
scrollRev.reveal(".featured-text-info", { delay: 200 });
scrollRev.reveal(".featured-text-btn", { delay: 200 });
scrollRev.reveal(".socila_icons", { delay: 200 });
scrollRev.reveal(".featured-image", { delay: 300 });

scrollRev.reveal(".project-box", { interval: 200 }); // project Box

// ScRoll Left animation
const scrollRevLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duartion: 2000,
  reset: true,
});

scrollRevLeft.reveal(".about-info", { delay: 100 });
scrollRevLeft.reveal(".contact-info", { delay: 100 });

const scrollActive = function () {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHt = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
  });
};

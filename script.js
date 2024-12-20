"use strict";

const menuBtn = document.getElementById("myNavMenu");
const navHeader = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");
const downloadCV = document.getElementById("download-cv");
const downloadCVHome = document.getElementById("download-cv-home");
const downloadCVAbout = document.getElementById("download-cv-about");

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
  const scrollBody = document.body.scrollTop;
  const scrollDocEle = document.documentElement.scrollTop;

  if (scrollBody > 50 || scrollDocEle > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

window.onscroll = function () {
  headerShadow();
};

// Scroll Animation

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".top-header", {}); // Headings

sr.reveal(".featured-text-card", {}); // Home
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 }); // project Box

// Scroll Left animation
const scrollRevLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

scrollRevLeft.reveal(".about-info", { delay: 100 });
scrollRevLeft.reveal(".contact-info", { delay: 100 });

// Scroll Right animation
const scrollRevRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

scrollRevRight.reveal(".skills-box", { delay: 100 });
scrollRevRight.reveal(".form-control", { delay: 100 });

const scrollActive = function () {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

const downlaod = function () {
  const cvPath = "HARIHARAN_M_RESUME.pdf";
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "";
  document.body.append(link);
  link.click();
  document.body.removeChild(link);
};

downloadCV.addEventListener("click", downlaod);
downloadCVHome.addEventListener("click", downlaod);
downloadCVAbout.addEventListener("click", downlaod);

// document.addEventListener("DOMContentLoaded", function () {
// emailjs.init("8aFGqCQHkNrq19Vow");

const sendEmail = function () {
  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;
  // const message = document.getElementById("message").value;
  const responseMessage = document.getElementById("response-message");

  const templateParams = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (
    !templateParams.from_name ||
    !templateParams.from_name ||
    !templateParams.message
  ) {
    responseMessage.textContent = "Please fill in all fields before sending.";
    responseMessage.style.color = "red";
    return;
  }

  emailjs
    .send("service_j31nif9", "template_7zsra52", templateParams)
    .then((response) => {
      responseMessage.textContent = "Email sent successfully!";
      responseMessage.style.color = "green";
      // alert(response.status);

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      responseMessage.textContent =
        "Failed to send email. Please try again later.";
      responseMessage.style.color = "red";
      console.error("EmailJS error:", error);
    });
};
// });

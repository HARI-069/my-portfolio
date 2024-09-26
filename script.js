"use strict";

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const input = document.getElementById("cmd-input");
    if (input.value === "help") {
      alert("Diplay help...");
    }
  }
});

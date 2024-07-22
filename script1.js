document.addEventListener("DOMContentLoaded", () => {
  const speakButton = document.getElementById("speakButton");
  const iconContainer = speakButton.querySelector(".icon-container");

  speakButton.addEventListener("click", () => {
    iconContainer.classList.toggle("active");
  });
});

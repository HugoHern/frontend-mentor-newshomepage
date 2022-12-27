const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const menuPopup = document.querySelector(".menu-popup");

menuButton.addEventListener("click", () => {
  menuPopup.classList.remove("not-active");
});

closeButton.addEventListener("click", () => {
  menuPopup.classList.add("not-active");
});

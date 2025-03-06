function toggleMenu() {
  let menu = document.getElementById("mobileNav");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

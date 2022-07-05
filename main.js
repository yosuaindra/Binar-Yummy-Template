const menu = document.querySelector(".top-menu");
const menuItems = document.querySelectorAll(".menu a");
const hamburger= document.querySelector(".hamburger-menu");
const closeIcon= document.querySelector(".close");
const menuIcon = document.querySelector(".hamburger-menu i");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)
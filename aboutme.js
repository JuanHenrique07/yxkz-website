AOS.init();

const menu = document.querySelector("header")
const nav = document.querySelector("#nav")
const socials = document.querySelector(".socials")
const buttonMenu = document.querySelector(".bx-menu")
const closeBtnn = document.querySelector(".close-menu")


function menuOpen(){
  menu.style.display="flex";
  nav.style.display="flex";
  socials.style.display="flex";
  buttonMenu.style.display="none";
  closeBtnn.style.display="block";
}

function closeMenu(){
  menu.style.display="none";
  nav.style.display="none";
  socials.style.display="none";
  buttonMenu.style.display="block";
  closeBtnn.style.display="none";
}
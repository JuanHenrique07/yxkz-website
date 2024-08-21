AOS.init();

var options = {
    strings: ["solution for you."],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  };
  
  var typed = new Typed(".write", options);






  const thumbs = document.querySelector(".items-thumbs")
  const sites = document.querySelector(".items-sites")
  const menub1 = document.querySelector(".menub1")
  const menub2 = document.querySelector(".menub2")

function site(){
  thumbs.style.display="none"
  sites.style.display="grid"
  menub1.classList.add("active")
  menub2.classList.remove("active")
}


function thumb(){
  thumbs.style.display="grid";
  sites.style.display="none";
  menub1.classList.remove("active")
  menub2.classList.add("active")
}






const products = document.querySelectorAll('.product');
const popup = document.getElementById('product-popup');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const closeBtn = document.querySelector('.close');
const button = document.querySelector(".fullsite")
const linkbtn = document.querySelector(".seefullwebsite")
const mob = document.querySelector(".mob")
const pc = document.querySelector(".pc")

products.forEach(product => {
    const name = product.getAttribute('data-name');
    const image = product.getAttribute('data-image');
    const link = product.getAttribute('data-link');
    product.addEventListener('click', () => {
      if (product.classList.contains("web")) {
        popupTitle.textContent = name;
        popupImage.src = image;
        if (window.innerWidth < 768) {
            // Si la largura de la ventana es menor que 768px
            popupImage.style.height= "400px";
            popupImage.style.width= "300px";
        } else {
            // Si la largura de la ventana es mayor o igual que 768px
            popupImage.style.height= "750px";
            popupImage.style.width= "450px";
        }
        linkbtn.href = link;
        popup.style.display = 'block';
        button.style.display = "flex";

        if(product.classList.contains("resp")){
          mob.style.display="flex";
          pc.style.display="flex";
        } else {
          pc.style.display="flex";
          mob.style.display="none";
        }
      }else {
        popupTitle.textContent = name;
        popupImage.src = image;
        pc.style.display="none";
        mob.style.display="none";
        
        if (window.innerWidth < 768) {
            // Si la largura de la ventana es menor que 768px
            popupImage.style.height= "200px";
            popupImage.style.width= "330px";
        } else {
            // Si la largura de la ventana es mayor o igual que 768px
            popupImage.style.height= "450px";
            popupImage.style.width= "750px";
        }
        
        popup.style.display = 'block';
        button.style.display = "none";
      }
    });
});


closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});





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

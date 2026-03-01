console.log("HincTech cargado correctamente");

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){
  menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
  });
}


/* FAQ FLOTANTE */

function toggleFAQ(){
  const panel = document.getElementById("faqPanel");

  if(panel){
    if(panel.style.display === "block"){
      panel.style.display = "none";
    }else{
      panel.style.display = "block";
    }
  }
}


/* CERRAR FAQ SI HACEN CLICK AFUERA */

document.addEventListener("click", function(event){

  const faqPanel = document.getElementById("faqPanel");
  const faqButton = document.querySelector(".faq-button");

  if(!faqPanel || !faqButton) return;

  if(
    faqPanel.style.display === "block" &&
    !faqPanel.contains(event.target) &&
    !faqButton.contains(event.target)
  ){
    faqPanel.style.display = "none";
  }

});

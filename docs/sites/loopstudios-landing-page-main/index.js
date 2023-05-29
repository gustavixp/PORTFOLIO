const hamb = document.querySelector(".hamb"); 
const hambClose = document.querySelector(".hamb-close"); 
const navLinks = document.querySelector(".nav__links"); 
 
hamb.addEventListener("click", () => { 
  navLinks.classList.add("active"); 
  hamb.classList.add("hidden"); 
  hambClose.classList.remove("hidden"); 
}); 
 
hambClose.addEventListener("click", () => { 
  navLinks.classList.remove("active"); 
  hambClose.classList.add("hidden"); 
  hamb.classList.remove("hidden"); 
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-             A C C O R D I O N S             -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const buttons = document.querySelectorAll(".accordion__btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.parentNode.nextElementSibling;
    content.classList.toggle("active");
    const arrow = button.querySelector(".arrow");
    arrow.classList.toggle("rotate");
  });
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-           F E A T U R E S   T A B           -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.querySelectorAll(".features__tab-heading a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".features__tab-heading a, .tab")
      .forEach((elem) => {
        elem.classList.remove("active");
      });
    e.target.classList.add("active");
    document
      .querySelector(`.tab.${e.target.classList[0]}`)
      .classList.add("active");
  });
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-        H A M B U R G U E R   M E N U        -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const hamb = document.querySelector('.hamb'); 
const hambClose = document.querySelector('.hamb-close'); 
const headerWrapper = document.querySelector('.header__wrapper'); 
const logoHeader = document.querySelector('.logo__header'); 
 
hamb.addEventListener('click', () => { 
  headerWrapper.classList.add('active'); 
  logoHeader.classList.add('menu-on'); 
  hambClose.style.display = 'flex'; 
}); 
 
hambClose.addEventListener('click', () => { 
  headerWrapper.classList.remove('active'); 
  logoHeader.classList.remove('menu-on'); 
  hambClose.style.display = 'none'; 
});

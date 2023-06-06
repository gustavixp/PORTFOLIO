const hamburger = document.querySelector('.hamb');
const nav = document.querySelector(".nav");

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
})

window.addEventListener('click', (e) => {
  if (e.target != hamburger && e.target != nav) {
    nav.classList.remove('active');
  }
})
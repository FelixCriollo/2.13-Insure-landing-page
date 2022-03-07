const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-toggle');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('nav-toggle--close');
  nav.classList.toggle('nav--active');
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navBtn.classList.remove('nav-toggle--close');
    nav.classList.remove('nav--active');
  }
})
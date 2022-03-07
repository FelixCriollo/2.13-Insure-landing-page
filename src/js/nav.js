const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-toggle');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('nav-toggle--close');
  nav.classList.toggle('nav--active');
})
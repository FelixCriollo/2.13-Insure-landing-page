const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-toggle');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('nav-btn--close');
  nav.classList.toggle('nav--active');
})
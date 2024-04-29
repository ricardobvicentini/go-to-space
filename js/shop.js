/*  Slide do menu */

const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.slide');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

/* Nav pop-in > bottom btn display */

const popers = document.querySelectorAll('header .container');

const appearOnShow = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('pop', entry.isIntersecting);
  });
});

popers.forEach((poper) => {
  appearOnShow.observe(poper);
});

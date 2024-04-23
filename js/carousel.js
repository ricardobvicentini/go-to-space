'use strict';

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.list .item');
const header = document.getElementsByTagName('header');
const menuBtn = document.querySelector('.menu i');
let imgWrapper = document.querySelector('.images-wrapper');
let images = document.querySelectorAll('.helmet-img');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

menuBtn.addEventListener('click', () => {
  header.classList.toggle('show');
});

/* Slider function */
const setSlider = () => {
  let itemActiveOld = carousel.querySelector('.list .item.active');

  if (itemActiveOld) {
    itemActiveOld.classList.remove('active');
  }
  items[active].classList.add('active');
};
setSlider();

/* Show Image function */
const showImage = (direction) => {
  let imgWrapper = document.querySelector('.images-wrapper');
  let images = document.querySelectorAll('.helmet-img');
  imgWrapper.classList.remove('prev', 'next');
  if (direction === 'next') {
    imgWrapper.appendChild(images[0]);
    imgWrapper.classList.add('next');
  } else {
    let positionLast = images.length - 1;
    imgWrapper.prepend(images[lastPosition]);
    imgWrapper.classList.add('prev');
  }
  /* startAutoPlay(); */
};

/* Autoplay function */

const startAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
};
/* startAutoPlay(); */

nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  carousel.style.setProperty('--calculation', 1);
  carousel.style.setProperty('--oppCalculation', -1);

  setSlider();
  showImage('next');
};

prevBtn.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  carousel.style.setProperty('--calculation', -1);
  carousel.style.setProperty('--oppCalculation', 1);
  setSlider();
  showImage('prev');
};

/* Menu function */

/* menuBtn.onclick = () => {
  document.getElementsByTagName('header').classList.toggle('show');
}; */

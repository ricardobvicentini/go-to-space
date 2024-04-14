'use strict';

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.list .item');
const indicator = carousel.querySelector('.indicators');
const dots = indicator.querySelectorAll('ul li');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

/* Slider function */
const setSlider = () => {
  let itemActiveOld = carousel.querySelector('.list .item.active');
  if (itemActiveOld) {
    itemActiveOld.classList.remove('active');
  }
  items[active].classList.add('active');

  let dotActiveOld = indicator.querySelector('li.active');
  if (dotActiveOld) {
    dotActiveOld.classList.remove('active');
  }
  dots[active].classList.add('active');
  indicator.querySelector('.number').innerText = '0' + (active + 1);
};

/* Show Image function */

const showImage = (direction) => {
  let imgWrapper = document.querySelector('.images-wrapper');
  let images = document.querySelectorAll('.helmet-img');
  if (direction === 'next') {
    imgWrapper.appendChild(images[0]);
    imgWrapper.classList.add('next');
  }
};

nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  carousel.style.setProperty('--calculation', 1);
  setSlider();
  showImage('next');
};

prevBtn.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  carousel.style.setProperty('--calculation', -1);
  setSlider();
};

dots.forEach((item, position) => {
  item.onclick = () => {
    active = position;
    setSlider();
  };
});

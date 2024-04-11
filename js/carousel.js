'use strict';

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.list .item');
const indicator = carousel.querySelector('.indicators');
const dots = indicator.querySelectorAll('ul li');
let active = 2;
let firstPosition = 0;
let lastPosition = items.length - 1;

const setSlider = () => {
  let itemActiveOld = carousel.querySelector('.list .item.active');
  if (itemActiveOld) {
    itemActiveOld.classList.remove('active');
  }
  items[active].classList.add('active');
};

setSlider();

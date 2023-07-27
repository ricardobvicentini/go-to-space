/*  Slide do menu */

const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".slide");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

hamb.addEventListener("click", function() {
    nav.classList.toggle("click");
})

/* Botão menu > trocar icon */

hamb.addEventListener("click", () => {
    if(open.style.display === 'none') {
        open.style.display = 'block'; 
    } else {
        open.style.display = 'none';
    }
})

hamb.addEventListener("click", () => {
    if(close.style.display === 'block') {
        close.style.display = 'none'; 
    } else {
        close.style.display = 'block';
    }
})

/* Blur > scroll */

window.addEventListener("scroll", function(){
    let header = document.querySelector("header .container");
    header.classList.toggle('sticky', window.scrollY > 0);
})

/* Nav pop-in > bottom btn display */

const popers = document.querySelectorAll('header .container');

const appearOnShow = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("pop", entry.isIntersecting)
    })
})

popers.forEach(poper => {
    appearOnShow.observe(poper)
})

/* Scroll Reveal */

ScrollReveal({
    reset: true,
    distance: '65px',
    duration: 2500,
    delay: 300
});

ScrollReveal().reveal('.title--one', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.image--one', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.text--one', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.title--two', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.image--two', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.info--two', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.image--three', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.info--three', {delay: 700, origin: 'top'});
ScrollReveal().reveal('.image--four', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.info--four', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.image--five', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.info--five', {delay: 600, origin: 'top'});
ScrollReveal().reveal('.title--six', {delay: 600, origin: 'top'});
ScrollReveal().reveal('.text--six', {delay: 600, origin: 'bottom'});

/* Image six appear */

const imgs = document.querySelectorAll('.image--six');

const appearOnDisplay = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("display", entry.isIntersecting)
    })
})

imgs.forEach(img => {
    appearOnDisplay.observe(img)
})

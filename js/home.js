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

/* Right side scroll */

const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*="' + sectionId + '"]').classList.add('show');
        } else {
            document.querySelector('a[href*="' + sectionId + '"]').classList.remove('show');
        }
    })
})


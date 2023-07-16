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

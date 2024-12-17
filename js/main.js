const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const close = document.querySelector("#close");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    nav.classList.remove("hidden");
    abrir.classList.remove("visible");
    close.classList.add("visible");
})

close.addEventListener("click", () =>{
    nav.classList.remove("visible");
    nav.classList.add("hidden");
    abrir.classList.add("visible");
    close.classList.remove("visible");
})
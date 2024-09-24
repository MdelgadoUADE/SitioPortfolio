// SOLO CODIGO PARA HAMBURGUER MENU!
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  main.classList.add("invisible");
  footer.classList.add("invisible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  main.classList.remove("invisible");
  footer.classList.remove("invisible");
});

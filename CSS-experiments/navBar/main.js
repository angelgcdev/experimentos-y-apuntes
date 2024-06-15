/*Referencia a elementos html*/
const btnBurger = document.querySelector(".menu__icon--burger");
const btnClose = document.querySelector(".menu__button--close");
const header = document.querySelector(".header");

/*Eventos */
registrarEventos();
function registrarEventos() {
  btnBurger.addEventListener("click", mostrarNavbar);
  btnClose.addEventListener("click", ocultarNavbar);
}

/**Funciones */
function mostrarNavbar() {
  btnBurger.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");

  header.classList.toggle("hidden");
}

function ocultarNavbar() {
  btnBurger.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");

  header.classList.toggle("hidden");
}

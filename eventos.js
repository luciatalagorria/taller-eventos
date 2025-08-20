const div = document.getElementById("contenedor");
const boton = document.getElementById("botonSaludar");

// Evento del div
div.addEventListener("click", () => {
  alert("Hola! Soy el div");
});

// Evento del botón con stopPropagation
boton.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hola!");
});
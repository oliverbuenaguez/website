/* CARRUSEL */
let counter = 1; // empezamos en el slide 1
const totalSlides = 3; // cantidad de imágenes

setInterval(() => {
  document.getElementById("slide" + counter).checked = true;
  counter++;
  if (counter > totalSlides) {
    counter = 1; // volver al primero
  }
}, 3000); // cambia cada 3 segundos

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
}

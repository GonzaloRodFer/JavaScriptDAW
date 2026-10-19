function infoVentana() {
  console.log("Contenido: " + window.innerWidth + " x " + window.innerHeight);
  console.log("Ventana: " + window.outerWidth + " x " + window.outerHeight);
  console.log("Posición: " + window.screenX + ", " + window.scrrenY);
  console.log("Scroll: " + window.scrollX + ", " + window.scrollY);
}

infoVentana();

function subir() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bajar() {
  window.scrollBy(0, 300);
}
function posicion() {
  console.log(`Scroll Vertical: ${window.scrollX}`);
}

function abrirVentana() {
  console.log(
    window.open("https://www.mozilla.org", "hija", "noopener,noreferrer")
  );
  //noopener sirve para proteger la seguridad de una página web al evitar que una pestaña nueva recién abierta
  //original a través de JavaScript
}

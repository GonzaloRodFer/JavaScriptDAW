function contarVisitas() {
  let contarVisitas;
  if (localStorage.getItem("contadorCargas") == null) {
  }

  if (sessionStorage.getItem("contadorCargasSesion") == null) {
    sessionStorage.setItem("contadorCargaSesion", 1);
  } else {
    sessionStorage.setItem("contadorCargaSesion");
  }
}

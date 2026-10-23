function recuperarFecha() {
  let dia = localStorage.getItem("dia");
  let mes = localStorage.getItem("mes");
  let anno = localStorage.getItem("anno");

  let fechaGuardada = `${mes}-${dia}-${anno}`;

  localStorage.setItem("laFecha", fechaGuardada);
}

fecha = new Date();
almacenarFecha(fecha);

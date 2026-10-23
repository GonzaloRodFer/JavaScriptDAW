function almacenarFecha(fecha) {
  if (!(fecha instanceof Date)) {
    console.error("Proporciona un objeto Date no valido");
    return;
  }

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anno = fecha.getFullYear();

  localStorage.setItem("dia", dia.toString());
  localStorage.setItem("mes", mes.toString());
  localStorage.setItem("anno", anno.toString());

  console.log(`Storage date: ${dia}/${mes}/${anno}`);
}

fecha = new Date();
almacenarFecha(fecha);

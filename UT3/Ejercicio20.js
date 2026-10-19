function getSecondsToTomorrow() {
  fecha = new Date();
  const anno = fecha.getFullYear();
  const mes = fecha.getMonth();
  const dia = fecha.getDate();
  const fechaInicio = new Date();
  const fechaFin = new Date(anno, mes, dia + 1);
  const diferenciaS = (fechaFin - fechaInicio) / 1000;
  return diferenciaS;
}

console.log(getSecondsToTomorrow());

function getSecondsToday() {
  const fechaInicio = new Date();
  fechaInicio.setHours(0, 0, 0, 0);
  const fechaFin = new Date();
  const diferenciaS = (fechaFin - fechaInicio) / 1000;
  return diferenciaS;
}
console.log(getSecondsToday());

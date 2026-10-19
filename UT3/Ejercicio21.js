function cuantoFalta(fecha) {
  const fechaHoy = new Date();
  const fechaFinal = new Date(fecha);
  const diferenciaDias = (fechaFinal - fechaHoy) / 86400000;
  return Math.round(diferenciaDias);
}
f = new Date(2026, 9, 18);
console.log(cuantoFalta(f));

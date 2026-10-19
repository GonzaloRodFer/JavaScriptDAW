function diaSemana(fecha) {
  return fecha.getDay();
}
hoy = new Date();
console.log(diaSemana(hoy));

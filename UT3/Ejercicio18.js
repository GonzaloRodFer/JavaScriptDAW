function ultimoDiaMes(anno, mes) {
  let fecha = new Date(anno, mes, 0);
  return fecha.getDate();
}
console.log(ultimoDiaMes(2024, 2));
console.log(ultimoDiaMes(2014, 1));
console.log(ultimoDiaMes(2014, 0));

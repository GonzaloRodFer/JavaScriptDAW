function extraerValorDolares(str) {
  return Number(str.slice(1));
}
let cadena = "$34";
console.log(extraerValorDolares(cadena));

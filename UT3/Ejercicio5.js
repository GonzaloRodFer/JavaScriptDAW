function extraerValorEuros(str) {
  return Number(str.slice(0, -1));
}
let cadena = "234€";
console.log(extraerValorEuros(cadena));

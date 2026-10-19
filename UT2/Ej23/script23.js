function binario(n) {
  let salida = "";
  if (typeof n !== "number" || n < 0) {
    return salida;
  } else if (n === 0) {
    return "0";
  }
  let num = n;
  while (num >= 1) {
    salida = `${num % 2}${salida}`;
    num = (num - (num % 2)) / 2;
  }
  return salida;
}
console.log(binario(3));

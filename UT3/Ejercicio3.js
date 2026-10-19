function truncar(str, maxLong) {
  if (str.length > maxLong) {
    str = str.slice(0, maxLong - 1) + "…";
  }

  return str;
}
let cadena = "hola que tal, como estas";
console.log(truncar(cadena, 13));

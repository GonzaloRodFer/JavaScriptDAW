function contarLetra(cad, letra) {
  cont = 0;
  for (i = 0; i <= cad.length; i++) {
    if (cad[i] === letra) {
      cont++;
    }
  }
  return cont;
}
let cadena = "Hola como estás";
console.log(contarLetra(cadena, "o"));

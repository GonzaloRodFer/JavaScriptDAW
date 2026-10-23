function contadorLetras(cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }
  return contador;
}

let contadorLetras2 = function (cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }
  return contador;
};

let contadorLetras3 = (cadena, letra) => {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }
  return contador;
};

console.log(contadorLetras("Hola como estas", "a"));
console.log(contadorLetras2("Hola como estas", "e"));
console.log(contadorLetras3("Hola como estas", "o"));

function camelize(str) {
  let array;
  let cadena = "";

  array = str.split("-");

  cadena = array[0];
  for (let i = 1; i < array.length; i++) {
    cadena += array[i][0].toUpperCase() + array[1].slice(1);
  }
  return cadena;
}

let resultado;
resultado = camelize("background-color");
console.log(resultado);
resultado = camelize("list-style-image");
console.log(resultado);
resultado = camelize("-webkit-transition");
console.log(resultado);

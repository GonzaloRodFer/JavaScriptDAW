let array = [1, "dos", "tres", 4, 5, "tres", 7, "dos"];

function cambiarCadena(cadena) {
  let posicion = array.indexOf(cadena);
  if (posicion == -1) {
  } else {
    array[posicion] = array[posicion].toUpperCase();
    console.log(array);
  }
}

function cabiarCadenaUltima(cadena) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === cadena) {
      array[i] = array[i].toUpperCase();
      break;
    }
  }
}

function cambiarCadena2(cadena) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === cadena) {
      array[i] = array[i].toUpperCase();
    }
  }
}
cambiarCadena("tres");

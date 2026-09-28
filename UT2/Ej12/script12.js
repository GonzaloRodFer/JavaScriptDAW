function edad2(edad) {
  while (edad >= 0) {
    if (edad >= 0 && edad <= 12) {
      return "Niño";
    } else if (edad <= 25) {
      return "Joven";
    } else if (edad <= 60) {
      return "Adulto";
    } else {
      return "Jubilado";
    }
  }
  return "La edad no puede ser negariva";
}

console.log(edad2(-1));
console.log(edad2(1));
console.log(edad2(25));
console.log(edad2(26));
console.log(edad2(62));

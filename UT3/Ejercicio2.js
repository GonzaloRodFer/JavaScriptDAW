function comprobarSpam(str) {
  let boolean = false;
  if (str.includes("gratis") || str.includes("XXX")) {
    boolean = true;
  }
  return boolean;
}
let cadena = "La fiesta es gratis";
console.log(comprobarSpam(cadena));

function detectaErrorCritico(cadena) {
  let boolean = false;
  if (cadena.startsWith("error") || cadena.endsWith("critico")) {
    boolean = true;
  }
  return boolean;
}
let frase = "fallo en la distribución muy critico";
console.log(detectaErrorCritico(frase));

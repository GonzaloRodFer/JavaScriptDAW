/**
 * Comprueba si un DNI o un NIE es correcto: formato y letra de control.
 * DNI: 8 dígitos + letra. NIE: X, Y o Z + 7 dígitos + letra.
 * @param {string} nif_nie Documento que se comprueba (admite minúsculas).
 * @returns {boolean} true si el documento es correcto.
 */
function validarNIF_NIE(nif_nie) {
  const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
  const doc = nif_nie.trim().toUpperCase();

  // Debe tener 9 caracteres
  if (doc.length !== 9) return false;

  // NIE: se sustituye la letra inicial X, Y, Z por 0, 1, 2
  let numero = doc.slice(0, 8);
  const posNIE = "XYZ".indexOf(numero[0]);
  if (posNIE !== -1) {
    numero = posNIE + numero.slice(1);
  }

  // Los 8 primeros caracteres tienen que ser dígitos
  for (const c of numero) {
    if (c < "0" || c > "9") return false;
  }

  // Letra calculada
  const letraCalculada = LETRAS[Number(numero) % 23];
  // La letra del documento tiene que coincidir con la letra calculada a partir de los números
  const letraDoc = doc.at(-1);
  return letraDoc === letraCalculada;
}

// Pruebas: documentos válidos del enunciado
const validos = [
  "56221526G",
  "50127621H",
  "76069822J",
  "73126034H",
  "12313207L",
  "74997547K",
  "98319066T",
  "70454006S",
  "Y6478436V",
  "X5997109C",
  "Y7492239A",
  "X3412471F",
  " y6478436v ",
];
console.log("Las siguientes validaciones deberían devolver true");
for (const doc of validos) {
  console.log(doc, validarNIF_NIE(doc)); // true
}

// Casos incorrectos
console.log("Las siguientes validaciones deberían devolver false");
console.log("false: letra incorrecta 56221526A. ", validarNIF_NIE("56221526A"));
console.log("false: solo 7 dígitos 5622152G:. ", validarNIF_NIE("5622152G")); //
console.log(
  "false: carácter no numérico: 5622A526G. ",
  validarNIF_NIE("5622A526G")
); //
console.log(
  "false: letra inicial de NIE no válida : W6478436V. ",
  validarNIF_NIE("W6478436V")
); //

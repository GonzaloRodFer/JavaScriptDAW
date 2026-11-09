// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: ...........................................
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {};

// 1. STRING ------------------------------------------------------------
function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");
  // Tu código aquí
  let nombreCompleto;
  do {
    nombreCompleto = prompt("Dime tu nombre completo");
  } while (nombreCompleto === null || nombreCompleto.trim() === "");

  let partes = nombreCompleto
    .trim()
    .split(" ")
    .filter(function (item) {
      return item !== "";
    });

  let nombre = partes[0];
  let apellido1 = partes[1];
  let apellido2 = partes[2];

  nombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
  apellido1 = apellido1[0].toUpperCase() + apellido1.slice(1).toLowerCase();
  apellido2 = apellido2[0].toUpperCase() + apellido2.slice(1).toLowerCase();

  nombreC = `${nombre} ${apellido1} ${apellido2}`;
  ficha.nombre = nombreC;

  inicialNombre = nombre[0].toUpperCase();
  inicialApellido1 = apellido1[0].toUpperCase();
  inicialApellido2 = apellido2[0].toUpperCase();

  inicialesNombre = `${inicialNombre}${inicialApellido1}${inicialApellido2}`;

  do {
    dni = prompt("Dime tu DNI");
  } while (dni === null || dni.trim() === "" || dni.length !== 9);

  let apellidoCortado = apellido1.slice(0, 4).toLowerCase();
  if (apellidoCortado.length < 4) {
    apellidoCortado = apellidoCortado.padEnd(4, "x");
  }

  digitosDni = dni.slice(5, 8);
  nombreUsuario = quitarTildes(apellidoCortado) + digitosDni;
  ficha.usuario = nombreUsuario;

  mostrar(`Nombre: ${nombreCompleto} <br>`);
  mostrar(`Nombre normalizado: ${ficha.nombre} <br>`);
  mostrar(`Iniciales: ${inicialesNombre} <br>`);
  mostrar(`Nombre de usuario: ${ficha.usuario} <br>`);
}

// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  // Tu código aquí
  let fechaNacimiento = prompt(
    "Introduce tu fecha de nacimiento en formato dd/mm/aaaa"
  );
  ficha.textoNacimiento = fechaNacimiento;
  let fecha = ficha.textoNacimiento.split("/");
  dia = fecha[0];
  mes = fehca[1];
  anno = fehca[2];
  diaBinario = dia.toString(2);
  mesBinario = mes.toString(2);
  annoBinario = anno.toString(2);
  diaOctal = dia.toString(8);
  mesOctal = mes.toString(8);
  annoOctal = anno.toString(8);
  diaHexadecimal = dia.toString(16);
  mesHexadecimal = mes.toString(16);
  annoHexadecimal = anno.toString(16);
  fechaBinario = `${diaBinario}/${mesBinario}/${annoBinario}`;
  fechaOctal = `${diaOctal}/${mesOctal}/${annoOctal}`;
  fechaHexadecimal = `${diaHexadecimal}/${mesHexadecimal}/${annoHexadecimal}`;
  mostrar(`Fecha de nacimiento: ${fechaNacimiento}`);
  //mostrar(`Fecha de nacimiento: ${fechaBinario}`);
  //mostrar(`Fecha de nacimiento: ${fechaOctal}`);
  //mostrar(`Fecha de nacimiento: ${fechaHexadecimal}`);
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  // Tu código aquí
}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  // Tu código aquí
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}

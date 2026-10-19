function obtenerFechaHace(fecha, dias) {
  let copiaFecha = new Date(fecha);
  copiaFecha.setDate(copiaFecha.getDate() - dias);
  return copiaFecha.getDate();
}

console.log(obtenerFechaHace(new Date(), 13));
let date = new Date(2015, 0, 2);
console.log(obtenerFechaHace(date, 1)); // 1, (1 Jan 2015)
console.log(obtenerFechaHace(date, 2)); // 31, (31 Dec 2014)
console.log(obtenerFechaHace(date, 365)); // 2, (2 Jan 2014)

// function ordenarPorEdad(users) {
//   users.sort(function (a, b) {
//     return a.edad - b.edad;
//   });
// }

function encontrar(users) {
  return users.find((item) => item.nombre == "Pedro");
}

function encontrarFilter(users) {
  return users.filter((item) => item.edad < 30);
}

let juan = { nombre: "Juan", edad: 25 };
let pedro = { nombre: "Pedro", edad: 30 };
let marta = { nombre: "Marta", edad: 28 };
let arr = [juan, pedro, marta];

let user = arr.find(function (item) {
  return item.nombre == "Pedro";
});

let subArray = arr.map((item) => item.nombre);
// ordenarPorEdad(arr);
// console.log(arr[0].nombre); // Juan
// console.log(arr[1].nombre); // Marta
// console.log(arr[2].nombre); // Pedro
console.log(encontrar(arr));
console.log(encontrarFilter(arr));
console.log(subArray);

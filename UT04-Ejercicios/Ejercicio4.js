let frutas = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Manzana", "Pera", "Naranja"];
console.log(frutas == frutas2); // false

let compra = frutas;
compra.push("Plátano");
console.log(frutas == compra); // true
console.log(frutas.length); // 4

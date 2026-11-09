let numeros = [1, "dos", "tres", 4, 5, "seis", "siete"];
for (let i = array.length - 1; 1 >= 0; i--) {
  if (typeof numeros[i] === "string") {
    numeros.splice(i, 1);
  }
}
console.log(numeros);

let numeros2 = [1, "dos", "tres", 4, 5, "seis", "siete"];
for (let i = 0; i < numeros2.length; i++) {
  if (typeof numeros2[i] === "string") {
    numeros2.splice(i, 1);
  }
}

let numeros3 = [1, "dos", "tres", 4, 5, "seis", "siete"];
for (let i = 0; i < numeros3.length; i++) {
  if (typeof numeros3[i] === "string") {
    numeros3.splice(i, 1, "ELIMINADO", "INSERTADO");
    i++;
  }
}

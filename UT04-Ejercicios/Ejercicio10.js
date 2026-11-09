function filterRange(arr, a, b) {
  const resultados = [];
  for (const i of arr) {
    if (i >= a && i <= b) {
      resultados.push(i);
    }
  }
  return resultados;
}

arr.filter(function (elem) {
  return elem >= a && elem <= b;
});

let arr = [5, 3, 8, 1];
let filtrado;

function copiaOrdenada(arr) {
  arrCopia = arr.slice();
  arrCopia.sort();
  return arrCopia;
}

let arr = ["HTML", "CSS", "JavaScript"];
console.log(copiaOrdenada(arr));
console.log(arr);

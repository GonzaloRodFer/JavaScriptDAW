let result = 0;
function tablademultiplicar(n) {
  if (typeof n != "number" || n <= 0 || n >= 10) {
    console.log("Error de formato");
  } else {
    for (let multiplo = 1; multiplo <= 10; multiplo++) {
      result = n * multiplo;
      console.log(`${n} x ${multiplo} = ${result}`);
    }
  }
}
tablademultiplicar(2);
tablademultiplicar("hola");

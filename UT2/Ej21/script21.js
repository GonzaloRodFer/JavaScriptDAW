function factorial(n) {
  let resultado = 1;
  for (let num = 1; num <= n; num++) {
    resultado *= num;
  }
  return resultado;
}
console.log(factorial(3));

function fibonacci(n) {
  let resultado = 0;
  for (let num = 0; num <= n; num++) {
    resultado += num;
  }
  return resultado;
}
fibonacci(3);

function fibonacci(n) {
  if (typeof n === "number" && n > 0) {
    let resultado = 0;
    for (let num = 0; num <= n; num++) {
      resultado += num;
    }
    return resultado;
  }
}
fibonacci(3);

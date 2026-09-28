function primos(n) {
  for (let num = 2; num <= n; num++) {
    let esPrimo = true;
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      console.log(num);
    }
  }
}

primos(15);

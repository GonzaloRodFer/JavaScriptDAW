function multiplos() {
  console.log("LISTADO DE NÚMEROS DEL 1 AL 100");
  for (num = 1; num <= 100; num++) {
    if (num % 2 == 0 && num % 3 == 0) {
      console.log(`${num} es múltiplo de 2 y es múltiplo de 3`);
    } else if (num % 3 == 0) {
      console.log(`${num} es múltiplo de 3`);
    } else if (num % 2 == 0) {
      console.log(`${num} es múltiplo de 2`);
    } else {
      console.log(num);
    }
  }
}
multiplos();

function bonoloto() {
  let numeros = [];

  console.log("Los ganadores de la bonoloto son: ");

  for (i = 1; i <= 6; i++) {
    let r = 1 + Math.random() * (49 + 1 - 1);
    r = Math.floor(r);

    while (numeros.includes(r)) {
      r = 1 + Math.random() * (49 + 1 - 1);
      r = Math.floor(r);
    }

    numeros.push(r);
    console.log(r);
  }

  console.log("El complementario es: ");

  let c = 1 + Math.random() * 49;
  c = Math.floor(c);

  while (numeros.includes(c)) {
    c = 1 + Math.random() * 49;
    c = Math.floor(c);
  }

  console.log(c);

  console.log("El reintegro es: ");

  let reintegro = Math.floor(Math.random() * (9 + 1));
  console.log(reintegro);
}

bonoloto();

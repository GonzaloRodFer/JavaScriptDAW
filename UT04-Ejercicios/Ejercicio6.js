function almacenarEntrada() {
  let numeros = [];
  let continuar = true;

  while (continuar) {
    let entrada = prompt("Introduce un número: ");

    if (entrada === null || entrada.trim() === "") {
      continuar = false;
    } else {
      let numero = Number(entrada);

      if (isNaN(numero)) {
        continuar = false;
      } else {
        numeros.push(numero);
      }
    }
  }
  return numeros;
}

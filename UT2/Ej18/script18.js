function triangulo(lineas) {
  if (typeof lineas === "number" && lineas > 0) {
    for (let i = 1; i <= lineas; i++) {
      let fila = "";
      for (let j = 1; j <= i; j++) {
        fila += "#";
      }
      console.log(fila);
    }
  }
}
triangulo(7);

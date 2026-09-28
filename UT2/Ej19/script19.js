function tablero(numColumnas, numFilas) {
  if (
    typeof numColumnas === "number" &&
    typeof numFilas === "number" &&
    numColumnas > 0 &&
    numFilas > 0
  ) {
    for (let i = 1; i <= numFilas; i++) {
      let fila = "";

      for (let j = 1; j <= numColumnas; j++) {
        if ((i + j) % 2 === 0) {
          fila += "#";
        } else {
          fila += " ";
        }
      }

      console.log(fila);
    }
  }
}

tablero(7, 4);

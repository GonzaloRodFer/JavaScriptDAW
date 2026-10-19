let ventana;

function abrirVentana(url, ancho, alto) {
  const izquierda = (screen.width - ancho) / 2;
  const arriba = (screen.height - alto) / 2;

  ventana = window.open(
    url,
    "_blanck",
    `width=${ancho},height=${alto},left=${izquierda},top=${arriba}`
  );

  if (!ventana) {
    console.log("El navegador ha bloqueado la ventana.");
  }
}

function cerrarVentana() {
  if (ventana && !ventana.closed) {
    ventana.close();
  } else {
    console.log("No hay ninguna ventana abierta.");
  }
}

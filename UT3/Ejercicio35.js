function infoNavegador() {
  console.log(`Idioma: ${navigator.language}`);
  if ((navigator.online = true)) {
    console.log(`Conexión: Conectado`);
  } else {
    console.log(`Conexión: Desonectado`);
  }
  console.log(`Pantalla: ${screen.width} x ${screen.height}`);
  console.log(`Disponible: ${screen.availWidth} x ${screen.availHeight}`);
}

infoNavegador();

function saludo(idioma = navigator.idioma) {
  if (idioma.startsWith("es")) {
    return console.log("Hola");
  } else if (idioma.startsWith("fr")) {
    return console.log("Bonjour");
  } else {
    return console.log("Hello!");
  }
}

saludo("es");
saludo("fr");
saludo("de");

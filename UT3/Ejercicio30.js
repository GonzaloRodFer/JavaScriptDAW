function cambioPagina(url, remplazar) {
  if (url != "" || url != null) {
    location.replace(url);
  } else {
    console.log("Url no válida");
  }
}

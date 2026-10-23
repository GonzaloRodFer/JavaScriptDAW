function cambioPagina(url, remplazar = false) {
  if (url == "" || url == null || !url) {
    alert("La página no existe");
  } else if (remplazar == true) {
    location.replace(url);
  } else {
    location.assign(url);
  }
}

function obtenerParametro(nombre) {
  let obtenido = location.search.slice(1).split("&");

  for (let i = 0; i < obtenido.length; i++) {
    let busqueda = obtenido[i].split("=");
    if (busqueda[0].trim() === nombre.trim()) {
      return busqueda[1].trim();
    }
  }

  return null;
}

function mostrarResultado(aSacar) {
  console.log(aSacar);
}

function borrarPorPrefijo(almacen, prefijo) {
  let resultado = 0;
  for (let i = almacen.length - 1; i >= 0; i--) {
    if (almacen.key(i).startsWith(prefijo)) {
      almacen.removeItem(almacen.key(i));
      resultado++;
    }
  }
  return resultado;
}

localStorage.setItem("usuario_nombre", "gonzalo");

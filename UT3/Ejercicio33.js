function mismoOrigen(url1, url2) {
  let partes1 = descomponerUrl(url1);
  let partes2 = descomponerUrl(url2);

  let [p1, d1, pu1] = partes1;
  let [p2, d2, pu2] = partes2;

  return p1 === p2 && d1 === d2 && pu1 === pu2;
}

function descomponerUrl(url) {
  const iProtocolo = url.indexOf("://");
  const protocolo = url.slice(0, iProtocolo);

  const resto = url.slice(iProtocolo + 3);

  const iPath = resto.indexOf("/");
  const path = resto.slice(iPath);

  const autoridad = resto.slice(0, iPath);
  const partes = autoridad.split(":");

  const dominio = partes[0];
  let puerto;

  if (partes[1] !== undefined) {
    puerto = partes[1];
  } else if (protocolo === "https") {
    puerto = "433";
  } else {
    puerto = "80";
  }
  return [protocolo, dominio, puerto, path];
}

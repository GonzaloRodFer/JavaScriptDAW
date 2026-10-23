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

console.log(descomponerUrl("https://ejemplo.com:8080/curso/tema.html"));

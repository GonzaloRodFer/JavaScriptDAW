function mostrarUbicacion() {
  console.log(`Url: ${location.href}`);
  console.log(`Origen: ${location.origin}`);
  console.log(`Protocolo: ${location.protocol}`);
  console.log(`Hostname: ${location.hostname}`);
  console.log(`Puerto: ${location.port}`);
  console.log(`Pathname: ${location.pathname}`);
  console.log(`Busqueda: ${location.search}`);
  console.log(`Hash: ${location.hash}`);
}

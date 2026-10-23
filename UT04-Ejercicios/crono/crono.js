function calcularHora() {
  const fecha = new Date();
  let horas = fecha.getHours();
  let min = fecha.getMinutes();
  let seg = fecha.getSeconds();

  return `${horas}:${min}:${seg}`;
}

let campo = document.getElementById("hora");

let r = setInterval(() => {
  console.log((campo.value = calcularHora()));
}, 1000);

let m = setInterval(() => alert("Han pasado 10 segundos"), 10000);

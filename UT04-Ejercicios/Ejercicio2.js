function calcularHora() {
  const fecha = new Date();
  let horas = fecha.getHours();
  let min = fecha.getMinutes();
  let seg = fecha.getSeconds();

  return `${horas}:${min}:${seg}`;
}

let r = setInterval(() => {
  console.log(calcularHora());
}, 1000);

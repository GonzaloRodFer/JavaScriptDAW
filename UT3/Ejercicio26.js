let ventana;
function abrirHija() {
  ventana = window.open("hija26.html", "hija", "width=400,height=300");
}

function enviarMensaje() {
  let mensaje;
  if (ventana && !ventana.closed) {
    mensaje = prompt("Envia un mensaje: ");
    ventana.mostrarMensaje(mensaje);
  } else {
    alert("La ventana hija no está abierta");
  }
}

function responder() {
  let respuesta;
  respuesta = prompt("Resonde el mensaje: ");
  window.opener.mostrarMensaje(respuesta);
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

let usuario = prompt("Ingresa tu nombre de usuario", "");
if (usuario === "Admin") {
  let contraseña = prompt("Ingresa la contraseña", "");
  if (contraseña === "TheMaster") {
    alert("¡Bienvenido!");
  } else if (contraseña === "" || null) {
    alert("Cancelado");
  } else {
    alert("Contraseña Incorrecta");
  }
} else if (usuario === "" || null) {
  alert("Cancelado");
} else {
  alert("No te conozco");
}

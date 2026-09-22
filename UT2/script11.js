let usuario = prompt("Ingresa tu nombre de usuario", "");
if (usuario === "Admin") {
  let contraseña = prompt("Ingresa la contraseña", "");
  if (contraseña === "TheMaster") {
    console.log("¡Bienvenido!");
  } else if (contraseña === "" || null) {
    console.log("Cancelado");
  } else {
    console.log("Contraseña Incorrecta");
  }
} else if (usuario === "" || null) {
  console.log("Cancelado");
} else {
  console.log("No te conozco");
}

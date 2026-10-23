function guardarAlumno(alumno) {
  localStorage.setItem("alumno", JSON.stringify(alumno));
}

function leerAlumno() {
  const datos = localStorage.getItem("Alumno");
  if (datos === null) {
    return null;
  }
  return JSON.parse(datos);
}

guardarAlumno({ nombre: "Pepe", edad: 19, aficiones: ["cine", "musica"] });
console.log(leerAlumno());
console.log(Array.isArray(leerAlumno().aficiones));
console.log(leerAlumno().aficiones.length);

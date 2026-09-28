function pedirNumeroMayor100(n) {
  let n = "";
  do {
    n = prompt("Ingresa un número mayor que 100");
    if (n === null || n === "") {
      return null;
    }
  } while (n <= 100 && n != null);
  {
    alert("Ingresa otro número");
    n = prompt("Ingresa un número mayor que 100: ", null);
  }
  alert(`El número introducido es: ${n}`);
}
pedirNumeroMayor100();

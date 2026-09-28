function horas5Minutos() {
  for (i = 9; i <= 21; i++) {
    for (j = 0; j <= 55; j += 5) {
      console.log(`${i}:${String(j).padStart(2, "0")}`);
    }
  }
}
horas5Minutos();

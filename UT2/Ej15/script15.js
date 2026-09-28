function horas30Minutos() {
  for (i = 9; i <= 21; i++) {
    for (j = 0; j <= 55; j += 30) {
      console.log(`${i}:${String(j).padStart(2, "0")}`);
    }
  }
}
horas30Minutos();

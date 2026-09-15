const MAXI = 1100;
let sigue = true;
for (let a = 1000; sigue == true; a++) {
  document.body.innerHTML += "<p>" + a + "</p>";
  if (a == MAXI) sigue = false;
}

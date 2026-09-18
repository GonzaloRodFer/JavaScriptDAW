const MAXI = 1000;
let sigue = true;
for (let a = 900; sigue == true; a++) {
  document.body.innerHTML += "<p>" + a + "</p>";
  if (a == MAXI) sigue = false;
}

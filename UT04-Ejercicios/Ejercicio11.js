edades = [2, 20, 12, 18, 50, 80, 4];
// edades.sort(function (n1, n2) {
//   if (n1 == n2) {
//     return 0;
//   } else if (n1 < n2) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
edades.sort(function (n1, n2) {
  return n2 - n1;
});
console.log(edades);

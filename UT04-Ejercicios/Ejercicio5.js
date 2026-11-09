let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles);

let primerElemento = styles.shift();
console.log(primerElemento);
console.log(styles);

primerElemento = styles.unshift("Reagge");
primerElemento = styles.unshift("Rap");
console.log(styles);

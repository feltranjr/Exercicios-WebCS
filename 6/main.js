const readline = require('readline-sync');

let valor = parseFloat(readline.question("Digite um valor: "));
let reajuste = valor * 1.05;

console.log("Valor com reajuste de 5%:", reajuste.toFixed(2));
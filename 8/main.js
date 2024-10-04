const readline = require('readline-sync');

let A = parseInt(readline.question("Digite o primeiro valor: "));
let B = parseInt(readline.question("Digite o segundo valor: "));
let C = parseInt(readline.question("Digite o terceiro valor: "));

let valores = [A, B, C];
valores.sort((a, b) => b - a);

console.log("Valores em ordem decrescente:", valores.join(", "));
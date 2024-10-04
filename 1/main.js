const readline = require('readline-sync');

let A = parseFloat(readline.question("Digite o valor de A: "));
let B = parseFloat(readline.question("Digite o valor de B: "));
let C = parseFloat(readline.question("Digite o valor de C: "));
let soma = A + B;

console.log("A soma entre A e B é:", soma);
if (soma < C) {
    console.log("A soma é menor que C.");
} else {
    console.log("A soma não é menor que C.");
}

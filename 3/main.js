const readline = require('readline-sync');

let A = parseInt(readline.question("Digite o valor de A: "));
let B = parseInt(readline.question("Digite o valor de B: "));
let C;

if (A === B) {
    C = A + B;
} else {
    C = A * B;
}

console.log("O resultado é:", C);
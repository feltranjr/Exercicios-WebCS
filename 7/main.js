const readline = require('readline-sync');

let valor1 = readline.question("O primeiro valor é verdadeiro? (sim/não): ").toLowerCase() === 'sim';
let valor2 = readline.question("O segundo valor é verdadeiro? (sim/não): ").toLowerCase() === 'sim';

if (valor1 && valor2) {
    console.log("Ambos são VERDADEIROS.");
} else {
    console.log("Pelo menos um é FALSO.");
}
const readline = require('readline-sync');

let num = parseInt(readline.question("Digite um número: "));

if (num % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

if (num > 0) {
    console.log("O número é positivo.");
} else if (num < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

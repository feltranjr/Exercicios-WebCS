const readline = require('readline-sync');

let num = parseInt(readline.question("Digite um número inteiro: "));
console.log("Antecessor:", num - 1);
console.log("Sucessor:", num + 1);
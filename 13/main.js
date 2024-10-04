const readline = require('readline-sync');

let nome = readline.question("Digite o nome da pessoa: ");
let idade = parseInt(readline.question("Digite a idade da pessoa: "));

if (idade >= 18) {
    console.log(nome, "é maior de idade.");
} else {
    console.log(nome, "é menor de idade.");
}
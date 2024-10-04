const readline = require('readline-sync');

let nomeAluno = readline.question("Digite o nome do aluno: ");
let nota1 = parseFloat(readline.question("Digite a primeira nota: "));
let nota2 = parseFloat(readline.question("Digite a segunda nota: "));
let nota3 = parseFloat(readline.question("Digite a terceira nota: "));
let nota4 = parseFloat(readline.question("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Nome do aluno:", nomeAluno);
console.log("Média das notas:", media.toFixed(2));

if (media >= 7) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno reprovado.");
}
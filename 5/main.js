const readline = require('readline-sync');

let salarioMinimo = 1293.20;
let salarioUsuario = parseFloat(readline.question("Digite o valor do seu salário: "));
let quantSalarios = salarioUsuario / salarioMinimo;

console.log("Você ganha", quantSalarios.toFixed(2), "salários mínimos.");
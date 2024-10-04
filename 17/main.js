const readline = require('readline-sync');

let fahrenheit = parseFloat(readline.question("Digite a temperatura em Fahrenheit: "));

let celsius = (5 * (fahrenheit - 32)) / 9;

console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
console.log(`A temperatura correspondente em Celsius é: ${celsius.toFixed(2)}°C`);
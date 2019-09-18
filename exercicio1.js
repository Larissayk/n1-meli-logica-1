// 1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

// 1) Recebe o 1º número;
// 2) Verifica se o número1 é maior que 10;
// 3) O número1 é maior que 10? Sim --> O número1 é o maior do que 10!
// 4) O número1 é maior que 10? Não
//     5) O número1 é igual a 10? Sim--> O número1 é igual a 10!
// 8) O número1 é igual a 10? Não --> O número1 é o maior que 10!

// const numero = parseInt(prompt('Digite um valor'));
// if (numero > 10) {
//     alert(`${numero} é maior que 10!`)
// } else {
//     if (numero === 10) {
//         alert(`${numero} é igual a 10!`);
//     } else {
//         alert(`${numero} não é maior que 10 e nem igual a 10!`);
//     }
// }

// 2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

// 1) Recebe o 1º número;
// 2) Recebe o 2º número;
// 3) Verifica se o número1 é maior que o número2;
// 4) O número1 é maior que o número2? Sim --> O número1 é o maior!
// 5) O número1 é maior que o número2? Não --> O número2 é o maior!

// const valor1 = parseInt(prompt('Digite o primeiro valor'));
// const valor2 = parseInt(prompt('Digite o segundo valor'));

// if (valor1 > valor2) {
//     alert(`${valor1} é o maior número!`);
// } else {
//     alert(`${valor2} é maior número`);
// }



// 3. Altere o exercício anterior de forma que ele informe também se os números são iguais.

// 1) Recebe o 1º número;
// 2) Recebe o 2º número;
// 3) Verifica se o número1 é maior que o número2;
// 4) O número1 é maior que o número2? Sim --> O número1 é o maior!
// 5) O número1 é maior que o número2? Não
//     6) O número1 é igual ao número2? Sim--> Os números são iguais!
// 7) O número1 é igual ao número2? Não --> O número2 é o maior!


// const valorA = parseInt(prompt('Digite o primeiro valor'));
// const valorB = parseInt(prompt('Digite o segundo valor'));

// if (valorA > valorB) {
//     alert(`${valorA} é maior que o ${valorB}, ${valorA} é o maior número !`);
// } else {
//     if (valorA === valorB) {
//         alert(`${valorA} e ${valorB} são iguais!`);
//     } else {
//         alert(`${valorB} é maior que ${valorA} ${valorB} é o maior número!`);
//     }
// }


// 4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

// 1) Recebe um número;
// 2) Verifica se o número é divisível por 2 e seu resto é 0;
// 3) O resto da divisão é zero? Sim --> O número é par!
// 4) O resto da divisão é zero? Não --> O númeor é ímpar!


const valorX = parseInt(prompt('Digite um número:'));

if ((valorX % 2) === 0) {
    alert(`O número ${valorX} é par!`);
} else {
    alert(`O número ${valorX} é ímpar!`);
}


// 5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.

// 1) Recebe um número;
// 2) Verifica se número for divisível por 10 e o resto é 0;
// 3) O resto da divisão é zero? Sim --> O número é múltiplo de 10!
// 4) O resto da divisão é zero? Não --> O número não é múltiplo de 10!

// const valorZ = parseInt(prompt('Digite um número:'));

// if (valorZ % 10 === 0) {
//     alert(`${valorZ} é múltiplo de 10!`);
// } else {
//     alert(`${valorZ} não é múltiplo de 10!`);
// }

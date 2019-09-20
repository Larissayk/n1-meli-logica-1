// switch (expressão) {
//     case valor1:
//       //Instruções executadas quando o resultado da expressão for igual á valor1
//       [break;]
//     case valor2:
//       //Instruções executadas quando o resultado da expressão for igual á valor2
//       [break;]
//     ...
//     case valueN:
//       //Instruções executadas quando o resultado da expressão for igual á valorN
//       [break;]
//     default:
//       //Instruções executadas quando o valor da expressão é diferente de todos os cases
//       [break;]
//   }
// let expr = prompt('Digite uma fruta');
// switch (expr) {
//     case "Laranjas":
//       console.log("As laranjas custam $0.59 o quilo.");
//       break;
//     case "Maçãs":
//       console.log("Maçãs custam $0.32 o quilo.");
//       break;
//     case "Bananas":
//       console.log("Bananas custam $0.48 o quilo.");
//       break;
//     case "Cerejas":
//       console.log("Cerejas custam $3.00 o quilo.");
//       break;
//     case "Mangas":
//     case "Mamões":
//       console.log("Mangas e mamões custam $2.79 o quilo.");
//       break;
//     default:
//       console.log("Desculpe, estamos sem nenhuma " + expr + ".");
//   }

//   console.log("Tem algo mais que você gostaria de levar?");

// ----------------------------------------------------------------------------------------
//   SWITCH (TRUE)

// let num = parseInt(prompt('Coloque um número:'));

// switch (true) {
//     case num > 10:
//         console.log('maior que 10');
//         break;
//     case num === 10:
//         console.log('igual a 10');
//         break;
//     default:
//         console.log('O número é menor que 10');
// }

// 1) Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

// a) numero = número recebido do usuário;
// b) sorteado = número randômico;
// c) verificar se o número que o usuário colocou é igual ao número sorteado
// d) se numero = sorteado --> parabéns vc acertou!
// e) senão --> recebe outro número do usuário
// f) se numero2 = sorteado --> parabéns vc acertou!
// g) senão --> não foi dessa vez!

// const num1 = parseInt(prompt('Escolha um número de 1 a 10:'));
// const num2 = parseInt(prompt('Escolha outro número de 1 a 10:'));

// let sort = Math.floor(Math.random() * 10 + 1);
// console.log('sorte fora do if e else', sort);

// if (num1 == sort) {
//     alert('Parabéns vc acertou de primeira!');
// } else {
//     num2
//     console.log('sorte dentro else: ', sort)
//     if (num2 == sort) {
//         alert(`Parabéns vc acertou! O número é ${sort}`);
//     } else {
//         alert('Não foi dessa vez!')
//     }
// }

// 1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, 
// mas informa se o número sorteado é maior ou menor que o primeiro palpite.

// a) numero1 = número recebido do usuário;
// b) sorteado = número randômico;
// c) verificar se o número que o usuário colocou é igual ao número sorteado
// d) se numero = sorteado --> parabéns vc acertou!
// e) senão --> verificar se sorteado > número1
// f) se sorteado > numero1 = true --> Dica: o número sorteado é maior que o número1
// g) senão --> número sorteado é menor que o número 1.


// h) recebe outro número do usuário
// f) se numero2 = sorteado --> parabéns vc acertou!
// g) senão --> não foi dessa vez!


// const num1 = parseInt(prompt('Escolha um número de 1 a 10:'));
// const num2 = parseInt(prompt('Escolha outro número de 1 a 10:'));

// let sort = Math.floor(Math.random() * 10 + 1);
// console.log('sorte fora do if e else', sort);

// if (num1 == sort) {
//     alert('Parabéns vc acertou de primeira!');
// } else {
//     if (sort > num1) {
//         alert(`Dica: o número sorteado é maior que ${num1}`);
//     }else {
//         alert(`Dica: o número sorteado é menor que ${num1}`)
//     }


//     num2
//     console.log('sorte dentro else: ', sort)
//     if (num2 == sort) {
//         alert(`Parabéns vc acertou! O número é ${sort}`);
//     } else {
//         alert('Não foi dessa vez!')
//     }
// }

// 1.0 Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

// const num1 = parseInt(prompt('Digite um número de 1 a 10'));
// const num2 = parseInt(prompt('Tente Novamente: Digite um número de 1 a 10'));

// let sorte = Math.floor(Math.random()* 10 + 1 );

// if(num1 == sorte){
//     alert(`Parabéns vc acertou de primeira! `);
// }else{
//     num2;
//     if (num2 == sorte) {
//         alert(`Parabéns, agora vc acertou! `);
//     }else{
//         alert(`Tente novamente! :(`)
//         console.log(sorte);
//     }
// }

// 1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

const num1 = parseInt(prompt("Digite um número de 1 a 10"));
console.log(`num1: ${num1}`);

let sorte = Math.floor(Math.random() * 10 + 1);
console.log(`sorte: ${sorte}`);


if (num1 == sorte) {
  alert(`Parabéns vc acertou de primeira! `);
} else {
  if (sorte > num1) {
    alert(`O número sorteado é maior que ${num1} `);
  } else {
    alert(`O número sorteado é menor que ${num1}`);
  }
  const num2 = parseInt(prompt("Tente Novamente: Digite um número de 1 a 10"));

  if (num2 == sorte) {
    alert(`Parabéns, agora vc acertou!`);
  } else {
    alert(`Não foi dessa vez!`);
  }
}

// 1.2. Faça o mesmo programa anterior, agora com 3 palpites.
// const num1 = parseInt(prompt("Digite um número de 1 a 10"));

// let sorte = Math.floor(Math.random() * 10 + 1);

// if (num1 == sorte) {
//   alert(`Parabéns vc acertou de primeira! `);
// } else {
//   if (sorte > num1) {
//     alert(`O número sorteado é maior que ${num1} `);
//   } else {
//     alert(`O número sorteado é menor que ${num1}`);
//   }
//   const num2 = parseInt(prompt("Tente Novamente: Digite um número de 1 a 10"));

//   if (num2 == sorte) {
//     alert(`Parabéns, agora vc acertou!`);
//   } else {
//     if (sorte > num2) {
//       alert(`O número sorteado é ainda maior que ${num2} `);
//     } else {
//       alert(`O número sorteado é ainda menor que ${num2}`);
//     }
//     const num3 = parseInt(prompt("Tente Novamente: Digite um número de 1 a 10"));
//     if (num3 == sorte) {
//       alert(`Parabéns, demorou, mas vc acertou!`);
//     } else {
//       alert(`Não foi dessa vez!`);
//     }
//   }
// }

// 2.0 Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não
// necessariamente na mesma ordem.

// 1) sorteia 2 números de 1 a 5;
// 2) armazena os 2 números;
// 3) pede para o usuário digitar 2 números;
// 4) se N1 ou N2 = sorte 1 E N1 ou N2 = sorte 2
// 5) sim --> Vc acertou tudo!
// 6) não --> Não foi dessa vez, tente novamente!

// const sorte1 = Math.floor(Math.random() * 5 + 1);
// console.log(`sorte 1: ${sorte1}`);
// const sorte2 = Math.floor(Math.random() * 5 + 1);
// console.log(`sorte 2: ${sorte2}`);

// const num1 = parseInt(prompt("Digite um número de 1 a 5"));
// const num2 = parseInt(prompt("Digite mais um número de 1 a 5"));

// if ((num1 == sorte1 || num1 == sorte2) && (num2 == sorte1 || num2 == sorte2)) {
//     alert('Parabéns vc acertou os dois números!!');
// }else{
//     alert('Não foi dessa vez! :(')
// }

// 3.0 Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).

// 1) sorteia 2 números de 1 a 10;
// 2) armazena esses valores;
// 3) se ((N1 >= 3 && N1 <= 7) && (N2 >=3 && N2<=7))
// 4) sim --> os dois números estão dentro desse intervalo!
// 5) senão --> se ((N1 >= 3 && N1 <= 7) || (N2 >=3 && N2<=7))
// 6)sim --> apenas 1 número está dentro do intervalo;
// 7) senão --> nenhum dos numeros sorteados está dentro do intervalo.

// const sorte1 = Math.floor(Math.random() * 10 + 1);
// console.log(`sorte 1: ${sorte1}`);
// const sorte2 = Math.floor(Math.random() * 10 + 1);
// console.log(`sorte 2: ${sorte2}`);

// if (sorte1 >= 3 && sorte1 <= 7 && (sorte2 >= 3 && sorte2 <= 7)) {
//   alert("Os dois números sorteados estão dentro do intervalo de 3 a 7");
// } else {
//   if ((sorte1 >= 3 && sorte1 <= 7) || (sorte2 >= 3 && sorte2 <= 7)) {
//     alert("Apenas um dos números sorteados está dentro do intervalo de 3 a 7");
//   } else {
//     alert("Nenhum dos números sorteados está dentro do intervalo! :(");
//   }
// }

// 4.0 Escreva um programa que joga par ou ímpar com o usuário.

// 1)Pede para o usuário escolher par ou ímpar
// 2)Pede para o usuário escolher um número de 1 a 5;
// 3)computador sorteia um número de 1 a 5;
// 4) se (num + sorte)%2 == 0  && escolha=par
// 5) sim --> Deu par! vc ganhou!
// 6) não --> se (num + sorte)%2 !== 0 && escolha= ímpar
// 7) sim --> Deu ímpar! Vc ganhou!
// 8)  se (num + sorte)%2 == 0 && escolha= ímpar
// 9) sim --> deu par, vc perdeu!
// 10) não --> deu ímpar, vc perdeu!

// const sorte = Math.floor(Math.random() * 5);
// console.log(`Computador: ${sorte}`);
// const escolha = prompt("Escolha par ou ímpar:");
// console.log(`par ou ímpar: ${escolha}`);
// const num = parseInt(prompt("Digite um número de 1 a 5"));
// console.log(`Meu número: ${num}`);


// if ((num + sorte) % 2 == 0 && escolha === "par") {
//   alert("Deu par! Vc ganhou!");
// } else {
//   if ((num + sorte) % 2 !== 0 && escolha === "ímpar") {
//     alert("Deu ímpar! Vc ganhou!");
//   } else {
//     if ((num + sorte) % 2 == 0 && escolha === "ímpar") {
//       alert("Deu par! Vc perdeu!");
//     } else {
//       alert("Deu ímpar! Vc Perdeu!");
//     }
//   }
// }

// 5.0 Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A. 
// O programa deve então exibir uma mensagem dizendo se ele acertou ou errou. (Importante o programa aceitar 
// que a letra A seja digitada tanto em minúsculas quanto em maiúsculas).

// 1) Pede que o usuário insira uma palavra que começa com A (tanto faz se é mínuscula ou maiúscula);
// 2) O computador deve identificar se a primeira letra é A;
// 3) se sim --> Essa palavra começa com A;
// 4) não --> essa palavra não começa com A, tente novamente.

// const palavra = prompt("Digite uma palvra que começa com A:");
// console.log(palavra);

// if ((palavra.charAt(0) == 'A') || (palavra.charAt(0) == 'a')){
//     alert(`A palavra ${palavra} começa com A`);
// }else{
//     alert(`A palavra ${palavra} não começa com A, tente novamente`);
// }

// 1) Pede que o usuário digite uma palavra que começa com A;
// 2)Se a posição de "a" ou "A" for igual a 0
// 3) Sim --> A palavra começa com A
// 4)Nao --> A palavra começa com a

// const palavra = prompt("Digite uma palvra que começa com A:");
// console.log(palavra);

// if ((palavra.charAt(0) == 'A') || (palavra.charAt(0) == 'a')){


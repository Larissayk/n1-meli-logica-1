// # Terceira lista de exercícios

// 1. Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto. 


// 1) Pedir nome do atleta;
// 2) Pedir altura do atleta;
// 3) Perguntar 5 vezes;
// 4) Verificar qual é maior altura;
// 5) Informar maior altura.


// let cont, nome, nome2, altura,altura2;
// cont=0;
// altura2=0;
// nome2=0;

// while(cont < 5){
//      nome = prompt('Informe o seu nome:');
//     console.log('nome: ', nome)
//      altura = parseFloat(prompt('Digite a sua altura:'));
//     console.log('altura: ', altura);

//     if (altura > altura2) {
//         nome2 = nome;
//         altura2 = altura;
//     }

//     cont++;
// }
// document.write (`${nome2} é a atleta com maior altura, com ${altura2} metros`)


//     1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto. 

//     1.2 informe também a altura média destes 5 atletas. 

// --> cada vez que pedir uma altura, vc deve guardar ela e ir somando


let cont, nome, nome2, altura,altura2,media, soma;
cont=0;
altura2=0;
nome2='';
media=0;
soma=0;


while(cont < 2){
     nome = prompt('Informe o seu nome:');
    console.log('nome: ', nome)
     altura = parseFloat(prompt('Digite a sua altura:'));
    console.log('altura: ', altura);
    

    if (altura > altura2) {
        nome2 = nome;
        altura2 = altura ;

    }
    soma = soma + altura;

    cont++;
}
media = soma/5;

document.write (`${nome2} é a atleta com maior altura, com ${altura2} metros e a soma é ${soma}`)





// //     1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada
//  atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). 
//  O programa continua mostrando o nome do mais alto, e a altura média.


let cont, nome, nome2, altura,altura2,resposta, repete;
cont=0;
altura2=0;
nome2='';
resposta='';
repete=true;


while(repete){
     nome = prompt('Informe o seu nome:');
    console.log('nome: ', nome)
     altura = parseFloat(prompt('Digite a sua altura:'));
    console.log('altura: ', altura);
    

    if (altura > altura2) {
        nome2 = nome;
        altura2 = altura ;

    }
    soma = soma + altura;
    resposta = prompt('Continua? ');
    if( resposta == true) {
        repete = true;
    }else{
        repete=false;
    }

    cont++;
}
media = soma/5;

document.write (`${nome2} é a atleta com maior altura, com ${altura2} metros e a soma é ${soma}`)







// 2. Solicite que seja digitada uma palavra que contenha a letra F ou comece com a letra P


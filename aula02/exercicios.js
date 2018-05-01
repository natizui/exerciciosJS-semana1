//EXERCICIO 1
//se o número for maior que 13, retorne o dobro da diferença absoluta. caso contrário retorne a diferença entre 13 e o número.

let numero = prompt('Digite um numero:');
numero = parseInt(numero)

if (numero > 13){
    let diferenca = numero - 13;
    let dobroDiferenca = diferenca * 2;

    console.log(dobroDiferenca);
}else{
    let outraDiferenca = 13 - numero;
    console.log(outraDiferenca);
}

//EXERCICIO 2
//Se dois numero forem iguais, retornará o triplo da soma. Caso caso contrário calcular a soma dos dois números. 

let num1 = 4;
let num2 = 5;
let soma = num1 + num2;

if(num1 === num2){
    console.log(soma*3)
}else{
    console.log(soma)
}

//EXERCICIO 3
//Escreva um programa que recebe dois números e retornar true se um dos números for 50 ou se a soma deles for 50.

const num1 = 25;
const num2 = 25;
let soma = num1 + num2;

if(num1 === 50 || num2 === 50){
    console.log(true);
}else if(soma === 50){
    console.log(true);
}else{
    console.log(false);
}

//EXERCICIO 4
//Escreva um programa em JavaScript para verificar a partir de dois números, se um for positivo e um negativo. Caso os sinais sejam um diferente do outro retorna true.

const num1 = 30;
const num2 = -15;

if((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)){
    console.log(true);
}

//EXERCICIO 5
//Escreva um programa em JavaScript para verificar se dois valores estão no intervalo 50..99 (inclusive). Retorna true se algum deles estiver no intervalo especificado.
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
    console.log(true);
}else{
    console.log(false);
}

//EXERCICIO 6
//Escreva um programa em JavaScript para verificar se três valores estão no intervalo 50..99 (inclusive). Retorna true se um ou mais deles estiverem no intervalo especificado.

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)){
    console.log(true);
}else{
    console.log(false);
}
//EXERCICIO 7
//Escreva um programa JavaScript que aceite dois números e exiba o maior.

if(num1 > num2) { 
    console.log("O maior de " +num1+ " e " +num2+ " é " +num1+ ".");
}else if(num2 > num1) {
    console.log("O maior de "+ num1+" e " +num2+ " é " +num2+ ".");
}else{
    console.log("Os valores " +num1+ " e  " +num2+ " são iguais.");
}

//EXERCICIO 8
//Escreva uma instrução condicional JavaScript para encontrar o maior dos cinco números. Exibe uma caixa de alerta para mostrar o resultado.

const a=-5;
const b=-2;
const c=-6;
const d= 0;
const f=-1;

if (a>b && a>c && a>d && a>f){
    console.log(a);
}else if (b>a && b>c && b>d && b>f){
    console.log(b);
}else if (c>a && c>b && c>d && c>f){
    console.log(c);
}else if (d>a && d>c && d>b && d>f){
    console.log(d);
}else{
    console.log(f);
} 

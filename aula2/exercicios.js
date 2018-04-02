//EXERCICIO 1
const numero = prompt('Digite um numero:');
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
const num1 = 4;
const num2 = 5;
let soma = num1 + num2;

if(num1 === num2){
    console.log(soma*3)
}else{
    console.log(soma)
}

//EXERCICIO 3
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
const num1 = 30;
const num2 = -15;

if((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)){
    console.log(true);
}

//EXERCICIO 5
const x = 55;
const x = 20;

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
    console.log(true);
}else{
    console.log(false);
}

//EXERCICIO 6
const x = 50;
const x = 20;
const x = 70;

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)){
    console.log(true);
}else{
    console.log(false);
}
//EXERCICIO 7
const x = 55;
const x = 20;

if(num1 > num2) { 
    console.log("O maior de " +num1+ " e " +num2+ " é " +num1+ ".");
}else if(num2 > num1) {
    console.log("O maior de "+ num1+" e " +num2+ " é " +num2+ ".");
}else{
    console.log("Os valores " +num1+ " e  " +num2+ " são iguais.");
}

//EXERCICIO 8
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

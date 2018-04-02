var num = prompt ("Digite um número");
num = parseInt(num);

function quadrado (num) {
    return num**2;
};

console.log(quadrado(num));

//ou

function expoente (num, expo) {
    return num**expo;
}

console.log(expoente(num, expo));
//EXERCICIO 1
var divisao = function(num1, num2) {
    return num1/num2;
}

console.log(divisao(20,2));

//EXERCICIO 2
var produto = function(num1, num2) {
    return num1*num2;
};

console.log(produto(2,5));

//EXERCICIO 3
var subtracao = function (num1, num2) {
    return num1-num2;
};

console.log(subtracao(100, 20));

//EXERCICIO 4
const num1 = 25;
const num2 = 4;

var modulo = function (num1, num2) {
    return num1%num2;
};

console.log(modulo(num1, num2));

//EXERCICIO 5
const num = 2;

var quadrado = function(num) {
    return num**2;
};

console.log(quadrado(num));

//EXERCICIO 6
var soma = function(num1, num2) {
    return num1+num2;
};

console.log(soma(1, 2));

//EXERCICIO 7
var viraChocolate = function(variavel) {
    variavel="CHOCOLATE";
    return "O valor da variável agora é " + variavel + ".";
};

console.log(viraChocolate(xuxu));

//EXERCICIO 8
var funcao = function(x, y , z) {
    //NaN !== NaN -> true
	if (x !== x || y !== y || z !== z){
        return "preenche direito ai!";
    }
    //10 !== 10 -> false
	else {
        var resultado = x*y*z+2;
        return resultado;
    }
}

console.log("funcao = " + funcao() );

//EXERCICIO 9
var myFunction = function(val1, val2, val3) {
    if (val1 === undefined && val2 !== undefined && val3 !== undefined){
            return val1;
    }
    else if (val1 !== undefined && val2 !== undefined && val3 === undefined) {
            return val1 + val2;
    }
    else if (val1 !== undefined && val2 !== undefined && val3 !== undefined){
        return (val1+val2)/val3;
    }
    else if (val1 === undefined && val2 === undefined && val3 === undefined){
        return false;
    }
    return "null";
}
    
console.log("myFunction retorna: " + myFunction());

//EXERCICIO 10
var calculateDogAge = function(age) {
    return age*7;
}

console.log("Seu cãozinho tem " + calculateDogAge(3) + " anos de idade em anos de cão!");

//EXERCICIO 10 - ALTERNATIVA
var allAges = [];
do {
    const inputAge = parseInt(prompt("Digite a idade do seu cãozinho e clique em 'OK' ou clique em 'Cancelar' para sair"));
    if ( inputAge >=0 || inputAge < 0 ) {
        allAges.push(inputAge);
    }
}
while( inputAge >=0 || inputAge < 0 );

console.log(allAges);

function calculateDogAge(age) {
    return age*7;
}

var allConvertedAges = allAges.map(calculateDogAge);

function print(convertedAge) {
    console.log("Seu cãozinho tem " + convertedAge + " anos de idade em anos de cão!");
}

allConvertedAges.forEach(print);



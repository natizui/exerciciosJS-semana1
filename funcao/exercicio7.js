var x = prompt("Digite qualquer coisa");

function viraChocolate(variavel) {
    variavel="CHOCOLATE";
    return "O valor da variável agora é " + variavel + ".";
};

console.log(viraChocolate(x));

//ou

var y =prompt("Digite qualquer coisa");

function sobrescreva(valor) {
    y=valor;
    valor="CHOCOLATE";
    return "O valor da variável agora é " + valor + ".";
};

console.log(sobrescreva(y));

var x = parseInt(prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair'));
var y = parseInt(prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair'));
var z = parseInt(prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair'));

function funcao (x, y , z) {
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

console.log("funcao = " + funcao(x,y,z) );

//ou
/* function conta (x, y, z) {
    if (x == "" || y == "" || z == "") {
        return "preencha todos os valores corretamente";
    }
    return (x*y*z+2);
}
function conta (x, y, z) {
    if (x || y || z ) {
        return "preencha todos os valores corretamente";
    }
    return (x*y*z+2);
}

console.log("conta = " + conta(x,y,z)); */
//esses dois ultimos não funcionan :(
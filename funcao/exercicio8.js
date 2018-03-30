var x = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
x = parseInt(x);
var y = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
y = parseInt(y);
var z = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
z = parseInt(z);

function funcao (x, y , z) {
	if (x!==x||y!==y||z!==z){
        return "preenche direito ai!";
    }
	else {
        var resultado = x*y*z+2;
        return resultado;
    }
}

funcao (x, y, z);
console.log( funcao(x,y,z) );
var x=prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair')
x=parseInt(x);
var y=prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair')
y=parseInt(x);
var z=prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair')
z=parseInt(x);

function funcao (x, y , z) {
	if (x===undefined||y===undefined||z===undefined){
        console.log("preenche direito ai!")
    }
	else {
        var resultado = x*y*z+2
        console.log(resultado)
    }
}

funcao (x, y, z)
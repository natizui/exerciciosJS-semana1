var numeros = [];
do{
    x=prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair')
    x=parseInt(x);
    if ( x >=0 || x < 0 ) {
        numeros.push(x);
    }
}
while( x >=0 || x < 0 );

console.log(numeros);

function taNoIntervalo (num) {
    return num-50 >= 0 && num-99 <= 0;
}

var numerosNoIntervalo = numeros.filter(taNoIntervalo) ;

if(numerosNoIntervalo.length > 0) { 
    console.log(true);
    console.log(numerosNoIntervalo);
}
else{
    console.log(false);
}

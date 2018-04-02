//com prompt
var x = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
x = parseInt(x);
var y = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
y = parseInt(y);
var z = prompt('Digite um número e clique em "OK" ou clique em "Cancelar" para sair');
z = parseInt(z);
function funcao (x, y , z) {
    //se só um argumento for passado, retorna o valor do argumento
    if ((x===x && y!==y && z!==z) || (x!==x && y===y && z!==z) || (x!==x && y!==y && z===z)){
        if (x===x && y!==y && z!==z) {
            return x;
        }
        if (x!==x && y===y && z!==z) {
            return y;
        }
        if (x!==x && y!==y && z===z) {
            return z;
        }
    }
    //se dois argumentos forem passados, retorna a soma dos dois
    else if ((x===x && y===y && z!==z) || (x===x && y!==y && z===z) || (x!==x && y===y && z===z)) {
        if (x===x && y===y && z!==z){
            return x+y;
        }
        if (x===x && y!==y && z===z){
            return x+z;
        }
        if (x!==x && y===y && z===z){
            return y+z;
        }
    }
    //se todos os argumentos forem passados, retorna a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro
    else if (x===x||y===y||z===z){
        return (x+y)/z;
    }
    //se nenhum argumento for passado, retorna o valor booleano false
    else if (x!==x||y!==y||z!==z){
        return false;
    }
    //se nenhuma das condições acima for atendida, retorna "null"
    else {
        return "null";
    }
}

console.log("funcao retorna: " + funcao(x,y,z));

//sem prompt
function myFunction (val1, val2, val3) {
    //se só um argumento for passado, retorna o valor do argumento
    if (val1 === undefined && val2 !== undefined && val3 !== undefined){
            return val1;
    }
    //se dois argumentos forem passados, retorna a soma dos dois
    else if (val1 !== undefined && val2 !== undefined && val3 === undefined) {
            return val1 + val2;
    }
    //se todos os argumentos forem passados, retorna a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro
    else if (val1 !== undefined && val2 !== undefined && val3 !== undefined){
        return (val1+val2)/val3;
    }
    //se nenhum argumento for passado, retorna o valor booleano false
    else if (val1 === undefined && val2 === undefined && val3 === undefined){
        return false;
    }
    //se nenhuma das condições acima for atendida, retorna "null"
    return "null";
}
    
console.log("myFunction retorna: " + myFunction());


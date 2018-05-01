/*
let lista = ['roxo', 'azul', 'verde', 'preto'];

//mostra array como string
console.log(lista.toString());
//também mostra array como string, mas é possivel definir que separa os elementos 
console.log(lista.join());
console.log(lista.join(" - "));
//veja que lista continua contendo o array, lista não virou string
console.log(lista);


//splice retira elementos do array, splice(posição inicial, quantos elementos)
let listaParteCortada = lista.splice(2,2);
//concat junta elementos ao fim do array
let novaLista = lista.concat(['laranja', 'amarelo'])
console.log(novaLista);
console.log(lista.concat(listaParteCortada));
console.log(novaLista.concat(listaParteCortada));

lista.push('marrom', 'branco')
console.log(lista);
*/

//OBJETO DATE

// let data = new Date();
// let data2 = new Date(ano, mes, dia, hora, minuto, segundo, milissegundo);
// console.log(data2);

/*
let start = Date.now();  
let response = prompt("Qual o seu nome?");  
let end = Date.now();  
let elapsed = (end - start) / 1000;  
document.write("Você demorou " + elapsed + " seconds" + " para responder: " + response); 
*/

/*
let data = new Date();
//Retorna o dia como um número (1-31)
console.log(data.getDate());

//Retorna o dia da semana como um número (0-6)
console.log(data.getDay());

//Retorna o ano com quatro dígitos (yyyy)
console.log(data.getFullYear());

//Obter o mês (0-11)
console.log(data.getMonth());
*/

let data = new Date();
let mes = data.getMonth()+1;
let dataDeHoje = data.getDate() + "/" + mes  + "/" + data.getFullYear();
console.log(dataDeHoje);




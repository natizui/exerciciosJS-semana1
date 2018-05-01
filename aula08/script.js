
// document.querySelector("p").style.backgroundColor = "red";

// document.querySelector(".text").style.backgroundColor = "green";


let new_paragraph =  document.createElement("p");
let texto = document.createTextNode("reprogramando a forma como mulheres se percebem como contribuidoras no setor de tecnologia");
new_paragraph.appendChild(texto);
document.querySelector(".container").appendChild(new_paragraph);

var x = document.querySelectorAll("p");

for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "purple";
}
//let container = document.querySelector(".container");
// container.appendChild(new_paragraph) Se tivesse uma variável;
// let attribute = document.querySelector("").getAttribute("src");
// console.log(attribute);


//Acessando elementos do DOM
let container = document.querySelector(".container");
let old_titulo = document.getElementById("titulo");

//Criando elementos novos
let new_titulo = document.createElement("h3");
let node_texto = document.createTextNode("Novo Título");

//Inserindo um texto ao paragrafo que criamos aqui no js
new_titulo.appendChild(node_texto);

//Substitui o tútulo antigo pelo novo
container.replaceChild(new_titulo, old_titulo);
//console.log(old_titulo.parentNode);

//Substitui o titulo antigo pelo novo encurtando o caminho ao pai
console.log(old_titulo.parentNode);
old_titulo.parentNode.replaceChild(new_titulo, old_titulo);

//-----------------------------------
//Remover item do HTML
let titulo2 = document.querySelector("h2");
// container.removeChild(h2);
titulo2.parentElement.removeChild(titulo2);

//Mudar valor de parametro usando getElementsByTagName
var myCollection = document.getElementsByTagName("p");
let cadastrar = function(){
    document.querySelector("h2").innerHTML = "Cadastrou com sucesso!";
}

//o botão 
let btnCadastro = document.getElementById("btnCadastro");
btnCadastro.onclick = cadastrar;

//botao muda cor do fundo para verde
let mudarCor1 = function(){
    document.querySelector("body").style.backgroundColor = "green";
}

document.getElementById("btnCor1");
btnCor1.onclick = mudarCor1;

//botao muda cor do fundo para vermelho
let mudarCor2 = function(){
    document.querySelector("body").style.backgroundColor = "red";
}

document.getElementById("btnCor2");
btnCor2.onclick = mudarCor2;

//botao muda cor do fundo para azul
let mudarCor3 = function(){
    document.querySelector("body").style.backgroundColor = "blue";
}

document.getElementById("btnCor3");
btnCor3.onclick = mudarCor3;
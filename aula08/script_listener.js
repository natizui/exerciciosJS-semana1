
let mudarCor = function(cor){
    document.querySelector("body").style.backgroundColor = cor;
}

//mudarCor("green");

document.getElementById("btnCor1").addEventListener("mouseover", function(){
    mudarCor("green");
});

document.getElementById("btnCor1").addEventListener("mouseout", function(){
    mudarCor("white");
});
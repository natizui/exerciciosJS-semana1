var allAges = [];
var inputAge
do {
    inputAge = prompt("Digite a idade do seu cãozinho e clique em 'OK' ou clique em 'Cancelar' para sair");
    inputAge = parseInt(inputAge);
    if ( inputAge >=0 || inputAge < 0 ) {
        allAges.push(inputAge);
    }
}
while( inputAge >=0 || inputAge < 0 );

console.log(allAges);

function calculateDogAge(age) {
    return age*7;
}

var allConvertedAges = allAges.map(calculateDogAge);

function print(convertedAge) {
    console.log("Seu cãozinho tem " + convertedAge + " anos de idade em anos de cão!");
}

allConvertedAges.forEach(print);


// Logic Challenge - Balik Kata
// Cara Pertama

function balikKata(kata){
    var huruf = '';
    j=0;
    while(j<kata.length){
        huruf = kata[j]+huruf;
        j++;
    }
    return huruf;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS



console.log('=================================================')


// Cara Kedua

function balikKata2(kata){
    let balik ="";
    for(let i= 0; i<kata.length; i++){
        balik = kata[i]+balik;
    }
    return balik;
}

console.log(balikKata2('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata2('John Doe')); // eoD nhoJ
console.log(balikKata2('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata2('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata2('Super')); // repuS




console.log('=================================================')






// Cara Ketiga

var balikKata3 = function(kata) {
    return kata.split('').reverse().join('');
}


console.log(balikKata3('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata3('John Doe')); // eoD nhoJ
console.log(balikKata3('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata3('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata3('Super')); // repuS

console.log('=================================================')


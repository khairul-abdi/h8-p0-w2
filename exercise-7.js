// 1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');
console.log('============================');

console.log('menggunakan for');
var rows = 5;

for(var i = 1; i <= 5; i++){
    console.log('*');
}

console.log('menggunakan while');
var i = 1;
var rowsWhile= 5;

while(i <= rowsWhile){
    console.log('*');
    i++;    
}

console.log('menggunakan do-while');

var i = 1;
var rowsFor = 5;

do{
    console.log('*');
    i++;
}while(i <= rowsFor)


// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
console.log('==================================================');

var rows2 = 5;
var bintang2 = '';
for(var i = 0; i < rows2; i++){
    for(var j = 0; j < rows2; j++){
        bintang2 += '*';
    }
    console.log(bintang2);
    bintang2 = '';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log('========================================================');


var bintang = '';
var rows3 = 5;

for(var i=0; i<rows3; i++){
  for(var j=0; j<=i; j++){
    bintang += '*';
  }
  console.log(bintang);
  bintang = '';
}





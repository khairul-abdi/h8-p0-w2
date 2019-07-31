// 1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While');
console.log('==========================================');
console.log('');
console.log('LOOPING PERTAMA');

var w=2;

while(w<=20){
    console.log(w+' - I love coding');
    w++;
}

console.log('LOOPING KEDUA');
var y=20;

while(y>=2){
    console.log(y+' - I will become fullstack developer');
    y--;
}





// 2. Melakukan Looping Menggunakan For
console.log('');
console.log('2. Melakukan Looping Menggunakan For');
console.log('==========================================');


console.log('LOOPING PERTAMA');

for(var a=1; a<=20; a++){
    console.log(a+' - I love coding');
}

console.log('LOOPING KEDUA');

for(var b=20; b>=1; b--){
    console.log(b+' - I will become fullstack developer');
}




// 3. Angka Ganjil dan Genap
console.log('');
console.log('3. Angka Ganjil dan Genap');
console.log('==========================================');


for(var x=1; x<=100; x++){
    if(x % 2 == 1){
        console.log('Counter sekarang = '+x);
        console.log('GANJIL')   
    }else{
        console.log('Counter sekarang = '+x);
        console.log('GENAP');
        
    }
}

for(var c=1; c<=100; c+=2){
    console.log('Counter sekarang = '+c);
    if(c % 3 == 0){
        console.log(c + ' KELIPATAN 3');
    }
}

for(var d=1; d<=100; d+=5){
    console.log('Counter sekarang = '+d);
    if(d % 6 == 0){
        console.log(d + ' KELIPATAN 6');
    }
}

for(var e=1; e<=100; e+=9){
    console.log('Counter sekarang = '+e);
    if(e % 10 == 0){
        console.log(e + ' KELIPATAN 10');
    }
}



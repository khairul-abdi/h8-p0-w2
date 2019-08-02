// Logic Challenge - X dan O

// Cara 1

function xo(str) {
    var strO = (str.match(/o/g) || []).length;
    var strX = (str.match(/x/g) || []).length;

        if(strO == strX){
            str = true;
        }else{
            str = false;
        }

    return str;
  }

  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true



  console.log('===============================');

//   Cara 2

  function xo2(str2) {
   
    var strO2 = str2.split('o').length -1;
    var strX2 = str2.split('x').length -1;

        if(strO2 == strX2){
            str2 = true;
        }else{
            str2 = false;
        }

    return str2;
  }
  
  // TEST CASES
  console.log(xo2('xoxoxo')); // true
  console.log(xo2('oxooxo')); // false
  console.log(xo2('oxo')); // false
  console.log(xo2('xxxooo')); // true
  console.log(xo2('xoxooxxo')); // true
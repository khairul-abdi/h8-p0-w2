// Logic Challenge - X dan O

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
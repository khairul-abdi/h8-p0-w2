// Logic Challenge - Bandingkan Angka

  function bandingkanAngka(angka1, angka2) {
  
    var angkaSatu = angka1;
    var angkaDua = angka2;

    if (angkaSatu < angkaDua){
        // console.log(true);
        return true;
    }else if(angkaSatu > angkaDua){
        // console.log(false);
        return false;
    }else if(angkaSatu == angkaDua){
        // console.log(-1);
        return -1;
    }
  
  }

  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false


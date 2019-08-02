function konversiMenit(menit) {
    var konversi=60;
    var hasilMenit;

    var konversiJam = menit / konversi;
    var sisaMenit = menit % konversi;

    // var hasilJam = Math.floor(konversiJam);
    var hasilJam = parseInt(konversiJam);

    if(sisaMenit < 10){
        hasilMenit = '0' + sisaMenit;
    }else{
        hasilMenit = sisaMenit;
    }
    return hasilJam + ':' +hasilMenit;

  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
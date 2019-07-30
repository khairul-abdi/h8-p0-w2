// [Exercises 4] Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript

var tanggal=33;  //assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=13;    //assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=1995; //assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if(tanggal<1 || tanggal > 31){
    console.log("Tanggal yang anda masukkan salah! , masukkan tanggal antara 1 - 31");
}else if(tahun<1900 || tahun >2200){
    console.log("Tahun yang anda masukkan salah! , masukkan tahun antara 1900 - 2200");
}else{

    switch (bulan){
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari";        
            break;
        case 3:
            bulan = "Maret";        
            break;
        case 4:
            bulan = "April";        
            break;
        case 5:
            bulan = "Mei";        
            break;
        case 6:
            bulan = "Juni";        
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "Nopember";
            break;
        case 12:
            bulan = "Desember";        
            break;
        default:
            console.log("Bulan yang anda masukkan salah! , masukkan bulan angka 1 - 12 ");
    }
    console.log(tanggal+" "+bulan+" "+tahun);
}







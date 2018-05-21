/* prompt the user for input
var tanggal = prompt("input date"); 
var bulan = Number(prompt("input month")); 
var tahun = prompt("input year");
*/

// manual input
var tanggal = 22; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2018 // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//bulan
switch (bulan) {
    case 1:
      console.log(tanggal + ' January ' + tahun);
      break;
    case 2:
      console.log(tanggal + ' February ' + tahun);
      break;
    case 3:
      console.log(tanggal + ' March ' + tahun);
      break;
    case 4:
      console.log(tanggal + ' April ' + tahun);
      break;
    case 5:
      console.log(tanggal + ' May ' + tahun);
      break;
    case 6:
      console.log(tanggal + ' June ' + tahun);
      break;
    case 7:
      console.log(tanggal + ' July ' + tahun);
      break;
    case 8:
      console.log(tanggal + ' August ' + tahun);
      break;
    case 9:
      console.log(tanggal + ' September ' + tahun);
      break;
    case 10:
      console.log(tanggal + ' October ' + tahun);
      break; 
    case 11:
      console.log(tanggal + ' November ' + tahun);
      break;
    case 12:
      console.log(tanggal + ' December ' + tahun);
      break;
    default:
      console.log("Bulan invalid");
      break;
  }


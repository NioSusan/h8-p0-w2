// 1. Melakukan Looping Menggunakan While
var number = 1;
console.log("LOOPING PERTAMA"); //Menampilkan judul
while(number<=20){ //Loop akan terus berjalan selama nilai number di bawah atau sama dengan 20
    console.log(number + " - I love coding"); // Menampilkan nilai number pada iterasi tertentu
    number++ //Mengubah nilai number dengan menambahkan 1
}
console.log("LOOPING KEDUA"); //Menampilkan judul
number -= 1; //Mengurangi nilai number dengan 1, agar number dimulai dari angka 20
while(number>0){ //Loop akan terus berjalan selama nilai number di atas 0
    console.log(number + " - I will become fullstack developer"); // Menampilkan nilai number pada iterasi tertentu
    number-- //Mengubah nilai number dengan mengurangkan 1
}

// 2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA"); //Menampilkan judul
for(var number = 1; number <= 20; number++){
    console.log(number + " - I love coding"); // Menampilkan nilai number pada iterasi tertentu
}
console.log("LOOPING KEDUA"); //Menampilkan judul
for(var number = 20; number > 0; number--){
    console.log(number + " - I will become fullstack developer"); // Menampilkan nilai number pada iterasi tertentu
}

// 3. Angka Ganjil dan Genap
// Perulangan 1 - 100 dengan pertambahan counter sebanyak 1 
for(var counter = 1; counter <101; counter++){
    console.log("counter sekarang = " + counter);
    if(counter%2 === 0){
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}

// Tiga perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9
for(var counter = 1; counter < 101; counter +=2){
    console.log("counter sekarang = " + counter);
    if(counter%3===0){
        console.log(counter+" KELIPATAN 3");
    } else {
        console.log("");
    }
}

for(var counter = 1; counter < 101; counter +=5){
    console.log("counter sekarang = " + counter);
    if(counter%6===0){
        console.log(counter+" KELIPATAN 6");
    } else {
        console.log("");
    }
}

for(var counter = 1; counter < 101; counter +=9){
    console.log("counter sekarang = " + counter);
    if(counter%10 === 0){
        console.log(counter+" KELIPATAN 10");
    } else {
        console.log("");
    }
}
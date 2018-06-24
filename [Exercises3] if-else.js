// Buat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.
var name="Susan";
var peran="";
if(name===""|| name===" "){
  console.log("Nama harus diisi!");
}else if(peran==="" || peran===" "){
  console.log(`Halo ${name}, Pilih peranmu untuk memulai game!`);
}else if(peran==="Ksatria"){
  console.log(`Selamat datang di Dunia Proxytia, ${name}`);
  console.log(`Halo Ksatria ${name}, kamu dapat menyerang dengan senjatamu!`);
}else if(peran==="Tabib"){
  console.log(`Selamat datang di Dunia Proxytia, ${name}`);
  console.log(`Halo Tabib ${name}, kamu akan membantu temanmu yang terluka.`);
}else if(peran==="Penyihir"){
  console.log(`Selamat datang di Dunia Proxytia, ${name}`);
  console.log(`Halo Penyihir ${name}, ciptakan keajaiban yang membantu kemenanganmu!`);
}else{
  console.log("invalid peran");
}

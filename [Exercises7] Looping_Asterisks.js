// 1. Menyusun Barisan Bintang
for(var rows1 = 1; rows1<=5; rows1++){ 
    for(var asterisk1 = 0; asterisk1<rows1; asterisk1++){ 
        console.log("*"); 
    }
    console.log("");     
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var star2 = "";
for(var rows2 = 1; rows2<=5; rows2++){ 
    star2 += "*";
    for(var asterisk2 = 1; asterisk2<=rows2; asterisk2++){
        console.log(star2); 
    }
    console.log(""); 
}  
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var star3 = "";
for(var rows3 = 1; rows3 < 6; rows3++){
    for(var asterisk3 = 0; asterisk3 < rows3; asterisk3++){
        star3 += '*';
    }
    console.log(star3);
    star3 = "";
}
//WHILE LOOPS
console.log("LOOPING PERTAMA");
var x=2;
while(x<=20){
  console.log(`${x} - I love coding`);
  x+=2;
}

console.log("LOOPING KEDUA");
var y=20;
while(y>=2){
  console.log(`${y} - I will become fullstack developer`);
  y-=2;
}

//FOR LOOPS
console.log("LOOPING PERTAMA");
for(var i=1;i<21;i++){
  console.log(`${i} - I love coding`);
}
console.log("LOOPING KEDUA");
for(var j=20;j>=1;j--){
  console.log(`${j} - I will become fullstack developer`);
}

//ODDS AND EVENS
for(var k=1;k<=100;k++){
  if(k%2==0){
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

//KELIPATAN 3
for(var l=1;l<=100;l+=2){
  if(l%3===0){
    console.log(`${l} KELIPATAN 3`);
  }
}
//KELIPATAN 6
for(var m=1;m<=100;m+=5){
  if(m%6===0){
    console.log(`${m} KELIPATAN 6`);
  }
}
//KELIPATAN 10
for(var n=1;n<=100;n+=9){
  if(n%10===0){
    console.log(`${n} KELIPATAN 10`);
  }
}


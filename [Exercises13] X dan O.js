//Solution 1 -  Using for of
function xo(str) {
  var X=0;
  var O=0;
  for(var letter of str){
    if(letter === "o"){
      O++;
    }else{
      X++;
    }
  }
  return X===O? true:false;
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

/* ================================================= */
//Solution 2 - Using regex
function xo(str) {
    var regexp1 = /x/gi;
    var regexp2 = /o/gi;

    var x = str.match(regexp1).length;
    var o = str.match(regexp2).length

    if(x === o){
      return true;
    } else {
      return false;
    }
}
  

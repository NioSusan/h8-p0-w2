//Solution 1
function konversiMenit(menit) {
  var front = Math.floor(menit/60);
  var end = menit - (front*60); //OR menit%60;
  return String(end).length===1?`${front} : 0${end}`: `${front} : ${end}` ;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//Solution 2
function konversiMenit(menit) {
  var minutes = Math.floor(menit/60);
  var seconds = menit % 60;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
  
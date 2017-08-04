
function sumAll(arr) {
  var result = 0;
  
  var minx = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
  var maxx = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
  var arrNum = [];
  for (var c = minx;c<=maxx;c++) {
    arrNum.push(c);
  }
for (var n of arrNum) {
    result+=n;
}
  return result;
}

console.log(sumAll([1, 4]));
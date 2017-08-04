// Sum primes <= num
function sumPrimes(num) {
var result = 0;
var primeList=[];
for (var i=2;i<=num;i++) {
    // prime check
    var divCount=0;
    for (var c=2;c<=i;c++) {
        if (i % c ==0) {divCount++;}
    } 
    if (divCount==1) {
        primeList.push(i);
    }
}
  result = primeList.reduce(function(prev,curr) {return prev+curr;},0);

  return result;
}

console.log(sumPrimes(10));

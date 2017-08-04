
// sum odd fibs <= num
function sumFibs(num) {
var fib1=1;
var fib2=1;
var fibTot=fib1+fib2;
var fibNext=fib1+fib2;
while (fibNext<=num) {
    fib1 = fib2;
    fib2 = fibNext;
    fibNext = fib1+fib2;
    if (fibNext<=num) {
        if (fibNext % 2 ==1) {
            fibTot+=fibNext;
        }
    }
}
  return fibTot;
}

console.log(sumFibs(4));

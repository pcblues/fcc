
function findElement(arr, func) {
  var num = 0;
  var result = arr.filter(func);
  if  (result.length>0) {
      num=result[0];
    }
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

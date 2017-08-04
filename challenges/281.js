
// drop elements from start until function true 
function dropElements(arr, func) {
    var truthFound=false;
  while (arr.length>0 && truthFound===false) {
      truthFound = func(arr[0]);
      if (truthFound===true) {
          break;
      } else {
          arr.shift();
      }
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
dropElements([1, 2, 3], function(n) {return n < 3; });
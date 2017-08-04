
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var c of arr1) {
      if (arr2.indexOf(c)==-1) {
          newArr.push(c)
      }
  }
  for (var c of arr2 ) {
      if (arr1.indexOf(c)==-1) {
          newArr.push(c)
      }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])


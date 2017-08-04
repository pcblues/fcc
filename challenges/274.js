
function uniteUnique(arr) {
    var result = [];
    for (var idx=0;idx<arguments.length;idx++ ) {
        for (var idx2=0;idx2<arguments[idx].length;idx2++) {
            nextNum = arguments[idx][idx2];
            if (result.indexOf(nextNum)==-1) {
                result.push(nextNum);
            }
        }
    }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

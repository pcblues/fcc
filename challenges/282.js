
function steamrollArray(arr) {
    var result = []
    while (arr.length>0) {
        var firstEl = arr[0];
        if (Array.isArray(firstEl)) {
            result=result.concat(steamrollArray(firstEl))
        } else {
            result.push(firstEl);
        }
        arr=arr.slice(1);
    }
    return result;
}


steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, [2], [3, [[4]]]]));

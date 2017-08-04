
function sym(args) {
    var result = []
    for (var i in arguments) {
        var newArr = arguments[i];
        result=result.concat(newArr.filter(function(v,i){return newArr.indexOf(v)==i}));
        result = result.filter(function(v){return result.reduce(function(p,c){return p+(c==v)},0)==1});
    }
    return result;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

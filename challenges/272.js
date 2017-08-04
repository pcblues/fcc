
function fearNotLetter(str) {
    var intact = true;
    var result = undefined;
    // assume at least two passed
    for (var i=0;i<str.length-1;i++) {    
        var code1 = str.charCodeAt(i+1);
        var code2 = str.charCodeAt(i);
        if (code1-code2 != 1 ) {
            result = String.fromCharCode(str.charCodeAt(i)+1);
        }
    }
  return result;
}

console.log(fearNotLetter("abce"));

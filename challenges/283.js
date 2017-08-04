
function binaryAgent(str) {
    var result = "";
    var binaryLetters = str.split(' ');
    var converter = function(letter) {
        var multiplier=128;
        var asciify = function(prev,curr,cidx) {
            if (curr=='1') {
                return prev+(Math.pow(2,(7-cidx))); 
            } else {
                return prev;
            }        
        }
        var letterBits = letter.split('');
        var asciiValue = letterBits.reduce(asciify,0);
        return String.fromCharCode(asciiValue);
    };
    var letters = binaryLetters.map(converter);
    result = letters.join('');
    return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

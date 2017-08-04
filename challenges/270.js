
function translatePigLatin(str) {
    // get consonant chunk (w if starts with vowel)
    var cons = "";
    var vowels = "aeiouAEIOU";
    for (var i in str) {
        if (vowels.indexOf(str.charAt(i))==-1) {
            cons+=str.charAt(i);
        } else break;
    }
    // put on end
    // add ay
    var result = str.slice(cons.length);
    if (cons=="") {
        cons = "w";
    }
    result += cons + 'ay';
  return result;
}

console.log(translatePigLatin("consonant"));

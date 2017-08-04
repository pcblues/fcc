
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // all lowercase, spaces become -
  var result = "";
  var lastChar = "";
  for (var i in str) {
      var curChar = str.charAt(i);
      var curCode = str.charCodeAt(i);
      
      if (curChar!=curChar.toLowerCase() && lastChar!='-' && i!=0) {
          result+='-'+curChar.toLowerCase();
          lastChar="-";
      } else if (curChar==" " || curChar=="_") {
        result += '-';
        lastChar = "-";
    } else { 
        result+=curChar.toLowerCase();
        lastChar = curChar;
    }
  }
  return result;
}

console.log(spinalCase('This Is Spinal Tap'));

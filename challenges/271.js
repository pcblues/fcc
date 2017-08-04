// AT GC
function pairElement(str) {
    result = [];
  for (var i in str) {
      if (str.charAt(i)=="A") {
        result.push( ["A","T"]);
      }
      if (str.charAt(i)=="T") {
        result.push( ["T","A"]);
      }
      if (str.charAt(i)=="G") {
        result.push( ["G","C"]);
      }
      if (str.charAt(i)=="C") {
        result.push( ["C","G"]);
      }
  }
  return result;
}

console.log(pairElement("GCG"));


function myReplace(str, before, after) {
    var result = str.split(' ');
    for (var cntr in result) {        
        if (result[cntr]==before) {
            // case!
            if (result[cntr][0]!=result[cntr][0].toLowerCase()) {
                var firstLetter = after.charAt(0).toUpperCase();
                after = firstLetter+ after.slice(1);
            }
            result[cntr]=after;
        }
    }
  return result.join(' ');
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));// should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));// should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"));// should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));// should return "Let us get back to more Algorithms".

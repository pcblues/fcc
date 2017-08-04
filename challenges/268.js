
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i in collection) {
    var item = collection[i];
    allPropsEqual=true;
    for (var j in source) {
        if (item.hasOwnProperty(j)) {
            if (item[j]!=source[j]) {
                allPropsEqual=false;
            }
        } else {
            allPropsEqual=false;
        }
      }
    if (allPropsEqual) {
        arr.push(item);
    }
    }
  
  
  // Only change code above this line
  return arr;
}

console.log(
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

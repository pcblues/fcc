
function truthCheck(collection, key) {

    var truthy = function(prev, curr) {
        // key must exist
        // natural number must be non-zero
        // string must have characters
        if (prev===true) { // good so far!
            if (curr.hasOwnProperty(key)===false ) {
                return false;
            }
            var value = curr[key];
            if (dodgy(value)===true) {
                return false;
            }
            return true;
        }  else return false;    
    };

    var dodgy = function(val) {
        if (typeof(val)!="string" && isNaN(val)) return true;
        if (val==="") return true;
        if (val===null) return true;
        if (val===undefined) return true;
      
        if (val===0) return true;
        return false;
    };

    var result = collection.reduce(truthy,true);
    return result; 


}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
);
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

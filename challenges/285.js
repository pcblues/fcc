
function addTogether() {
    switch(arguments.length) {
        case 0: 
            return undefined;
        case 1:
            if (Number.isInteger(arguments[0])===false) return undefined;
            var addendum = arguments[0];
            return function(a) {if (Number.isInteger(arguments[0])===false) return undefined;
                return addendum+a};
        case 2:
            if (Number.isInteger(arguments[0])===false) return undefined;
            if (Number.isInteger(arguments[1])===false) return undefined;
            return arguments[0]+arguments[1];

    }
  return false;
}

console.log(addTogether(2,3));
console.log(addTogether(3)(2));
console.log(addTogether());
console.log(addTogether(2)([3]));


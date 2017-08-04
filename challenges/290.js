/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (var c=0;c<arr2.length;c++)
        {
            var found2 = false;
            for (var d=0;d<arr1.length;d++) {
                if (arr1[d][1]==arr2[c][1]) {
                    arr1[d][0]+=arr2[c][0];
                    found2 = true;
                }
            }
            if (found2==false) {
                arr1.push(arr2[c])
            }
        }
    arr1.sort(function(a,b){
        if (a[1]<b[1]) return -1;
        if (b[1]<a[1]) return 1;
        return 0;
    })
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

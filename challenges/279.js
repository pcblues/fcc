// SCM of range
function smallestCommons(arr) {
    if (arr[0]>arr[1]) {
        minN=arr[1];
        maxN=arr[0];
    } else {
        minN=arr[0];
        maxN=arr[1];        
    }
    var SCMFound = false;
    var test=maxN;
    while (SCMFound===false) {
        var thisTest=true;
        for (var n=minN;n<=maxN;n++) {
            if (test % n !==0) {thisTest=false;break;}
        }   
        if (thisTest) {SCMFound=true} else {test++}
    }
    
    return test;
}


console.log(smallestCommons([23,18]));

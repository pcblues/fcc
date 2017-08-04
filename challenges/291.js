/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
function hasConsecutive(str) {
    var lastChr = "";
    for (var i=0;i<str.length;i++) {
        if (str.charAt(i)===lastChr) {
            return true;
        }else {
            lastChr=str.charAt(i);
        }
    }
    return false;
}



function swapStr(str,a,b) {
    var result = "";
    for (var i=0;i<str.length;i++) {
        if (i==a) {
            result += str.charAt(b);
        } else if (i==b) {
            result += str.charAt(a);
        } else {
            result+=str.charAt(i);}
    }
    return result;
}





function permAlone(str) {
    var perms = [];
    var c = [];
    function heapPerms(n,str) {
        for (var i=0;i<n;i++) {
            c[i]=0;
        }

        perms.push(str);
        var i=0;
        while (i<n) {
            if (c[i]<i) {
                if (i%2==0) {
                    str = swapStr(str,0,i);
                } else {
                    str = swapStr(str,c[i],i);
                }
                perms.push(str);
                c[i]+=1;
                i=0;
            } else {
                c[i]=0;
                i++;
            }

            }
        }
    

    heapPerms(str.length,str);
    return perms.reduce(function(p,c){if (hasConsecutive(c)==true) {return p} else {return p+1}},0);
}

//var testCons1=function () {switch (hasConsecutive('aab')){case true:return "Success";default:return "Fail";}};
//var testCons2=function () {switch (hasConsecutive('aba')){case true:return "Fail";default:return "Success";}};

//console.log("ConsTest1:"+testCons1())  ;
//console.log("ConsTest2:"+testCons2())  ; 

console.log(permAlone('aaabb'));
//console.log(permAlone('123'));
//console.log(permAlone('11122'));
//console.log(permAlone('12345'));
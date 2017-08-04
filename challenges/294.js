/*
Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6


Find minimum index sum score for all possible pair combinations that add to arg.

*/


function pairwise(arr, arg) {
    if (arr.length==0) return 0;
    var arrs=[];
    var arrsIdxs=[];
    var arrsIdx = [];
    for (var x=0;x<arr.length;x++) {
        arrsIdx.push(x);
    }

    function heapPerms(n,ar) {
        function swapAr(a,b) {
            var result =[];
            for (var z=0;z<ar.length;z++) {
                if(z==a) {
                    result.push(ar[b]);
                } else if (z==b) {
                    result.push(ar[a]);
                } else {result.push(ar[z])};
            }
            return result;
        }
        var c=[]
        for (var y=0;y<n;y++) {
            c[y]=0;
        }
        arrs.push(ar);
        var i=0;
        while (i<n) {
            if (c[i]<i) {
                if (i%2==0) {
                    ar = swapAr(0,i);
                } else {
                    ar = swapAr(c[i],i);
                }
                arrs.push(ar);
                c[i]+=1;
                i=0;
            } else {
                c[i]=0;
                i++;
            }

        }

    }

    function heapPermsIdx(n,ar) {
        function swapAr(a,b) {
            var result =[];
            for (var z=0;z<ar.length;z++) {
                if(z==a) {
                    result.push(ar[b]);
                } else if (z==b) {
                    result.push(ar[a]);
                } else {result.push(ar[z])};
            }
            return result;
        }
        var c=[]
        for (var i=0;i<n;i++) {
            c[i]=0;
        }
        arrsIdxs.push(ar);
        var i=0;
        while (i<n) {
            if (c[i]<i) {
                if (i%2==0) {
                    ar = swapAr(0,i);
                } else {
                    ar = swapAr(c[i],i);
                }
                arrsIdxs.push(ar);
                c[i]+=1;
                i=0;
            } else {
                c[i]=0;
                i++;
            }

        }

    }

    var used=[];
    var minSum=9898989;
    // every combination of the array, save minimum score
    heapPerms(arr.length,arr);
    heapPermsIdx(arrsIdx.length,arrsIdx);
    for (var e=0;e<arrs.length;e++) {
        for (var i=0;i<arr.length;i++) {
            used[i]=false;
        }
        var sum=0;
        var nextArr=arrs[e];
        var nextArrIdx=arrsIdxs[e];
        for (var c=0;c<nextArr.length;c++) {
            for (var d=c+1 ;d<nextArr.length;d++) {
                if (used[c]==false && used[d]==false) {
                    if (nextArr[c]+nextArr[d]==arg) {
                        sum+=nextArrIdx[c]+nextArrIdx[d];
                        used[c]=true;
                        used[d]=true;                    
                    }
                }
            }
        }
        if (sum<minSum && sum>0) {
            minSum=sum;
        }
    }
    return minSum;
}

//console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([], 100 ));

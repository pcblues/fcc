/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
function checkCashRegister(price, cash, cid) {
    var cid2=[[cid[0][0],cid[0][1]],[cid[1][0],cid[1][1]],[cid[2][0],cid[2][1]],[cid[3][0],cid[3][1]],[cid[4][0],cid[4][1]],[cid[5][0],cid[5][1]],[cid[6][0],cid[6][1]],[cid[7][0],cid[7][1]],[cid[8][0],cid[8][1]]];
    var change=[[cid[0][0],0],[cid[1][0],0],[cid[2][0],0],[cid[3][0],0],[cid[4][0],0],[cid[5][0],0],[cid[6][0],0],[cid[7][0],0],[cid[8][0],0]];
    if (cash-price>totalCID()) {
        return "Insufficient Funds";        
    } 
    if (cash-price == totalCID()) {
        return "Closed";
    }
    var changeNeeded = cash-price;
    var changeFound = false;

    
    /* Greedy, naiive, maybe do first? */

    while (changeNeeded>=100 && cid[8][1]>=100) {
        changeNeeded-=100;
        cid[8][1]-=100;
        change[8][1]+=100;
    }
    while (changeNeeded>=20 && cid[7][1]>=20) {
        changeNeeded-=20;
        cid[7][1]-=20;
        change[7][1]+=20;
    }
    while (changeNeeded>=10 && cid[6][1]>=10) {
        changeNeeded-=10;
        cid[6][1]-=10;
        change[6][1]+=10;
    }
    while (changeNeeded>=5 && cid[5][1]>=5) {
        changeNeeded-=5;
        cid[5][1]-=5;
        change[5][1]+=5;
    }
    while (changeNeeded>=1 && cid[4][1]>=1) {
        changeNeeded-=1;
        cid[4][1]-=1;
        change[4][1]+=1;
    }
    while (changeNeeded>=0.25 && cid[3][1]>=0.25) {
        changeNeeded-=0.25;
        cid[3][1]-=0.25;
        change[3][1]+=0.25;
    }
    while (changeNeeded>=0.10 && cid[2][1]>=0.10) {
        changeNeeded-=0.10;
        cid[2][1]-=0.10;
        change[2][1]+=0.10;
    }
    while (changeNeeded>=0.05 && cid[1][1]>=0.05) {
        changeNeeded-=0.05;
        cid[1][1]-=0.05;
        change[1][1]+=0.05;
    }
    while (changeNeeded>=0.01 && cid[0][1]>=0.01) {
        changeNeeded-=0.01;
        cid[0][1]-=0.01;
        change[0][1]+=0.01;
    }

    if (changeNeeded>0) {
        // Brute force
        changeNeeded = cash-price;
        cid = cid2;
        for (c0=0;c0<=cid[0][1];c0+=0.01) {
            if (changeFound) break;
            for (c1=0;c1<=cid[1][1];c1+=0.05) {
                if (changeFound) break;
                for (c2=0;c2<=cid[2][1];c2+=0.10) {
                    if (changeFound) break;
                    for (c3=0;c3<=cid[3][1];c3+=0.25) {
                        if (changeFound) break;
                        for (c4=0;c4<=cid[4][1];c4+=1) {
                            if (changeFound) break;
                            for (c5=0;c5<=cid[5][1];c5+=5) {
                                if (changeFound) break;
                                for (c6=0;c6<=cid[6][1];c6+=10) {
                                    if (changeFound) break;
                                for (c7=0;c7<=cid[7][1];c7+=20) {
                                    if (changeFound) break;
                                    for (c8=0;c8<=cid[8][1]&&c8<changeNeeded;c8+=100) {                                    
                                        if (changeFound) break;
                                            if (c0+c1+c2+c3+c4+c5+c6+c7+c8==changeNeeded) {
                                                change[0][1]=c0;
                                                change[1][1]=c1;
                                                change[2][1]=c2;
                                                change[3][1]=c3;
                                                change[4][1]=c4;
                                                change[5][1]=c5;
                                                change[6][1]=c6;
                                                change[7][1]=c7;
                                                change[8][1]=c8;
                                                changeFound=true;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (changeFound===false) {
            return "Insufficient Funds";
        }
    
    }
        

    
    

    change=change.filter(function(v){return v[1]>0});
    return change.reverse();

    function totalCID() {
        return cid.reduce(function(p,c){return p+c[1]},0)
    }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
);

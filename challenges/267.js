
function convertToRoman(num) {
// after larger number, added
// before larger number, subtracted
// 36?
// >1000? 

var result = []

while (num>=1000) {
    num-=1000;
    result.push('M');
}
while (num>=900) {
    num-=900;
    result.push('CM');
}
while (num>=800) {
    num-=800;
    result.push('DCCC');
}
while (num>=700) {
    num-=700;
    result.push('DCC');
}
while (num>=600) {
    num-=600;
    result.push('DC');
}
while (num>=500) {
    num-=500;
    result.push('D');
}
while (num>=400) {
    num-=400;
    result.push('CD');
}
while (num>=300) {
    num-=300;
    result.push('CCC');
}
while (num>=200) {
    num-=200;
    result.push('CC');
}
while (num>=100) {
    num-=100;
    result.push('C');
}

while (num>=90) {
    num-=90;
    result.push('XC');
}
while (num>=80) {
    num-=80;
    result.push('LXXX');
}
while (num>=70) {
    num-=70;
    result.push('LXX');
}
while (num>=60) {
    num-=60;
    result.push('LX');
}
while (num>=50) {
    num-=50;
    result.push('L');
}
while (num>=40) {
    num-=40;
    result.push('XL');
}
while (num>=30) {
    num-=30;
    result.push('XXX');
}
while (num>=20) {
    num-=20;
    result.push('XX');
}
while (num>=10) {
    num-=10;
    result.push('X');
}

while (num>=9) {
    num-=9;
    result.push('IX');
}
while (num>=8) {
    num-=8;
    result.push('VIII');
}
while (num>=7) {
    num-=7;
    result.push('VII');
}
while (num>=6) {
    num-=6;
    result.push('VI');
}
while (num>=5) {
    num-=5;
    result.push('V');
}
while (num>=4) {
    num-=4;
    result.push('IV');
}
while (num>=3) {
    num-=3;
    result.push('III');
}
while (num>=2) {
    num-=2;
    result.push('II');
}
while (num>=1) {
    num-=1;
    result.push('I');
}

 return result.join('');
}

console.log(convertToRoman(36));
convertToRoman(36);

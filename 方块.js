// def soilsplit(length,width):
//      while length>=width:
//           if (length/width ==2) or (length==width)     //基线条件，当长是宽的2倍，或者长与宽相等时，结束循环
//                 return length,width
//            tmp = length-(length/width)*width
//            length=width
//            width=tmp

// 一块矩形土地，长为length， 宽为width，假设length>width。进行均匀分块，使得分块之后的方块面积最大。

// 解决思路是基于分而治之（divide and conquer）的思想


// 先以宽为边长画一个方块出来，这个方块肯定是最大的方块，剩下的矩形做同样的操作。

function soilsplit(length, width) {
    while(length >= width) {
        console.log(length, width);
        if (length / width === 2 || length == width) {
            return {
                length,
                width
            }
        }
    }
}
function gcd(a,b){
    return b === 0 ? a : gcd(b, a % b);
}
function gcd2(a,b){
    let max = a > b ? a : b;
    let min = a > b ? b : a;
    console.log(max, min);
    let r = max % min;
    console.log(r);
    if (r == 0) {
        return min;
    } else {
        return gcd2(min, r)
    }
}
// console.log(soilsplit(168, 64));
console.log(gcd2(168, 64));
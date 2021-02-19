// 整数翻转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let oldNum = x;
    if (x === 0) return 0;
    let arr = x.toString().split('');
    let newArr = Number.parseInt(arr.reverse().join(''));
    if (newArr > 2147483648) return 0;
    if (newArr < -2147483648) return 0;
    if (oldNum > 0) {
        return newArr;
    } else {
        return newArr * -1;
    }
};
// 2147483648
// 1534236469

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
var reverse2 = function(x) {
    let n = 0;
    while(x != 0) {
        n = n * 10 + x % 10; // 3 32
        x = Number.parseInt(x / 10); // 12
    }
    if (n > 2147483648) return 0;
    if (n < -2147483648) return 0;
    return n % 1 === 0 ? n : 0;
}
console.log(reverse2(1534236469));


// 示例 1:
// 输入: 123
// 输出: 321

//  示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
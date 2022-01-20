// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = 0;
    let oldX = x;
    while (x != 0) {
        n = n * 10 + x % 10; // 
        x = Number.parseInt(x / 10);
    }
    let rever = n % 1 === 0 ? n : 0;
    rever = oldX < 0 ? rever * -1 + '-' : rever;
    return rever === oldX;
};

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
console.log(isPalindrome(-121));
// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

// 进阶:
// 你能不将整数转为字符串来解决这个问题吗？
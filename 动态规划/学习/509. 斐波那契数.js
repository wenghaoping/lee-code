/**
 * 509. 斐波那契数
 * @param {number} n
 * @return {number}
 */
// 暴力递归。
var fib = function(n) {
    if(n === 1 || n === 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};
// 备忘录做法
var fib2 = function(n) {
    if (n < 1) return 0;
    let memo = new Array(n + 1).fill(0);
    function helper(memo, n) {
        if(n === 1 || n === 2) {
            return 1;
        }
        if (memo[n] !== 0) {
            return memo[n];
        }
        memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
        return memo[n];
    }
    return helper(memo, n);
}
// dp思路
var fib3 = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let dp = new Array(n + 1).fill(0);
    dp[1] = dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// dp优化
var fib4 = function(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1 || n === 2) {
        return 1;
    }
    let prev = 1;
    let curr = 1;
    for (let i = 3; i <= n; i++) {
        let sum = +prev + +curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}
// console.time(1)
// console.log(fib(30))
// console.timeEnd(1)
// console.time(2)
// console.log(fib2(30))
// console.timeEnd(2)
// console.time(3)
// console.log(fib3(30))
// console.timeEnd(3)
// console.time(4)
console.log(fib4(30))
// console.timeEnd(4)
console.log(fib4(0))
// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。

// 示例 1：
// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 示例 2：
// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

// 示例 3：
// 输入：4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
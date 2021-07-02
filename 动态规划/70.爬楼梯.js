/**
 * @aaram {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 0;
    let b = 0;
    let c = 1;
    for (let i = 1; i <= n; i++) {
        a = b; 
        b = c; 
        c = a + b;
    }
    return c;
};
var climbStairs2 = function(n) {
    if (n == 0 || n == 1) return 1;
    let dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// f(x)=f(x−1)+f(x−2)
// f(0)=1，
// f(1)=1，
// f(2)=2，f(3) = 3, f(4) = 5

console.log(climbStairs(3))
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

// 示例 2：
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
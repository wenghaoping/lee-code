// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function f(n) {
    if (n < 1) {
        return n
    }
    // 先创建一个数组来保存历史数据
    let dp = new Array(n + 1).fill(0);
    // 给出初始值
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    // 通过关系式来计算出 dp[n]
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp);
    // 把最终结果返回
    return dp[n];
}
console.log(f(4))
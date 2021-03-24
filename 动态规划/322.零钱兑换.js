/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b);
    if (amount === 0) return 0;
    let dp = [];
    for (let i = 0; i < coins.length; i++) {
        dp[i] = [];
        for (let j = 0; j < amount; j++) {
            // 算出j和i的差值;
            let JReal = j + 1;
            let diff = JReal - coins[i];
            // 完整减了，说明一个硬币就可以了。
            if(diff === 0) {
                dp[i][j] = 1;
            } else if (diff > 0) {
                // 如果j大于i，看是否有其他硬币可以替换。
                dp[i][j] = dp[i][diff - 1] === -1 ? -1 : dp[i][diff - 1] + 1;
            } else if (diff < 0) {
                // 如果j小于i，使用上一层级的数据，说明当前硬币不可以兑换。
                if (i === 0) {
                    dp[i][j] = -1
                } else {
                    dp[i][j] = dp[i - 1][j] === -1 ? -1 : dp[i - 1][j];
                }
            } 
        }
    }
    return dp[coins.length - 1][amount -1];
};
var coinChange2 = function(coins, amount) {
    let dp = new Array( amount + 1 ).fill( Infinity );
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            console.log(i, coin, 'i coin');
            if (i - coin >= 0) {
                console.log(dp[i], dp[i - coin], 'dp');
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange2([1, 2, 5], 6));
// console.log(coinChange([2, 5, 7], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([2, 5, 10, 1], 27))
// console.log(coinChange2([411,412,413,414,415,416,417,418,419,420,421,422], 9864))
// console.log(coinChange([186, 419, 83, 408], 6249))
// 给定不同面额的硬币 coins 和一个总金额 amount。
// 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
// 你可以认为每种硬币的数量是无限的。

// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0

// 示例 4：
// 输入：coins = [1], amount = 1
// 输出：1

// 示例 5：
// 输入：coins = [1], amount = 2
// 输出：2
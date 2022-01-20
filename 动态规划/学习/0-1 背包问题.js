// 给你一个可装载容量为W的背包和 N个物品，每个物品有重量和价值两个属性，
// 其中第n个物品的重量为wt[n],
// 价值为val[n],现在让你用这个背包装物品，最多能装的价值是多少？

// 容量为wt[i]，价值为val[i]
function knapsack(W, N, wt, val) {
    let dp = Array.from({length: N}, () => new Array(W).fill(0));
    for (let n = 1; n <= N; n++) {
        for (let w = 1; w <= W; w++) {
            // 重量限制
            if (w - wt[n - 1] < 0) {
                dp[n][w] = dp[n - 1][w];
            } else {
                dp[n][w] = Math.max(
                    dp[i - 1][w - wt[i - 1]] + val[i - 1],
                    dp[n - 1][w]
                )
            }
        }
    }
    
}

console.log(knapsack(4, 3, [2, 1, 3], [4, 2, 3])) // 6
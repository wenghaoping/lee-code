// 给你一个可装载容量为W的背包和
// N个物品，每个物品有重量和价值两个属性，
// 其中第i个物品的重量为wt[i],
// 价值为val[i],现在让你用这个背包装物品，最多能装的价值是多少？

function knapsack(W, N, wt, val) {
    // let dp = new Array(N + 1).fill(0).map(() => new Array(W + 1).fill(0));
    let dp = Array.from({length: N +1}, () => new Array(W + 1).fill(0));
    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= W; w++) {
            // 重量超过了限制，则直接不放入背包。
            // 小于0说明还可以放的下
            if (w - wt[i - 1] < 0) {
                // 选择额不装入背包，就直接用前一个的背包数据
                dp[i][w] = dp[i - 1][w];
            } else {
                //装入或者不装入背包，择优
                dp[i][w] = Math.max(
                    // 把第i个物品装进背包,前一个空余重量的容量
                    dp[i - 1][w - wt[i - 1]] + val[i - 1],
                    // 不把第i个物品装进背包。
                    dp[i - 1][w]
                )
            }
        }
    }
    return dp[N][W];
}

console.log(knapsack(4, 3, [2, 1, 3], [4, 2, 3])) // 6
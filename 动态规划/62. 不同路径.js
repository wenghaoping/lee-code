/**62.不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 初始化，初始值
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    console.log(dp);
    // 推导出 dp[m-1][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
// 优化
var uniquePaths = function(m, n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }
    const dp = new Array(n).fill(0);
    // 初始化，初始值
    for(let i = 0; i < n; i++){
        dp[i] = 1;
    }
    // 公式：dp[i] = dp[i-1] + dp[i]
    for (let i = 1; i < m; i++) {
        // 第 i 行第 0 列的初始值
        dp[0] = 1;
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j-1] + dp[j];
        }
    }
    return dp[n-1];
};
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 3));
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

// 示例 1：
// 输入：m = 3, n = 7
// 输出：28

// 示例 2：
// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下

// 示例 3：
// 输入：m = 7, n = 3
// 输出：28

// 示例 4：
// 输入：m = 3, n = 3
// 输出：6
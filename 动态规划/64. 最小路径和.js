/** 64.最小路劲和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    if (m <= 0 || n <= 0) {
        return 0;
    }
    let dp = new Array(m).fill(0).map(i => new Array(n).fill(0))
    // 初始化
    dp[0][0] = grid[0][0];
    // 初始化最左边的列
    for(let i = 1; i < m; i++){
      dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    // 初始化最上边的行
    for(let i = 1; i < n; i++){
      dp[0][i] = dp[0][i-1] + grid[0][i];
    }
    // 推导出 dp[m-1][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

// 示例 1：
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。

// 示例 2：
// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
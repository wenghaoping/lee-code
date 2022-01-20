/**931. 下降路径最小和
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    let res = Number.MAX_VALUE;
    // 备忘录里的值初始化为 66666
    let memo = Array.from({length: n}, () => new Array(n).fill(66666));
    for (let j = 0; j < n; j++) {
        res = Math.min(res, dp(matrix, n - 1, j));
    }
    return res;
    function dp(matrix, i, j) {
        // 1、索引合法性检查
        if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
            return 99999;
        }
        // 2、base case
        if (i == 0) {
            return matrix[0][j];
        }
        // 3、查找备忘录，防止重复计算
        if (memo[i][j] != 66666) {
            return memo[i][j];
        }
        // 进行状态转移
        memo[i][j] = matrix[i][j] + min(
            dp(matrix, i - 1, j), 
            dp(matrix, i - 1, j - 1),
            dp(matrix, i - 1, j + 1)
        );
    
        return memo[i][j];
    }
    function min(a, b, c) {
        return Math.min(a, Math.min(b, c));
    }
}
var minFallingPathSum2 = function(A) {
    let N = A.length;
    for (let r = N - 2; r >= 0; --r) {
        for (let c = 0; c < N; ++c) {
            // best = min(A[r+1][c-1], A[r+1][c], A[r+1][c+1])
            let best = A[r+1][c];
            if (c > 0) {
                best = Math.min(best, A[r+1][c-1]);
            }
            if (c+1 < N) {
                best = Math.min(best, A[r+1][c+1]);
            }
            A[r][c] += best;
        }
    }

    let ans = Number.MAX_VALUE;
    for (let x of A[0]) {
        ans = Math.min(ans, x);
    }
    return ans;
}
console.log(minFallingPathSum2([[2,1,3],[6,5,4],[7,8,9]]));
console.log(minFallingPathSum2([[-19,57],[-40,-5]]));
console.log(minFallingPathSum2([[-48]]));


// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。
// 在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。
// 具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。
// 示例 1：

// 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：下面是两条和最小的下降路径，用加粗标注：
// [[2,1,3],      [[2,1,3],
//  [6,5,4],       [6,5,4],
//  [7,8,9]]       [7,8,9]]

// 示例 2：
// 输入：matrix = [[-19,57],[-40,-5]]
// 输出：-59
// 解释：下面是一条和最小的下降路径，用加粗标注：
// [[-19,57],
//  [-40,-5]]

// 示例 3：
// 输入：matrix = [[-48]]
// 输出：-48
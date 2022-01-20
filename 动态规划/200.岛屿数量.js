// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：
// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 示例 2：
// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3
// 提示：
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let width = grid[0].length;
    let height = grid.length;
    let ans = 0;
    let travers = (i, j) => {
        if (grid[i][j] != '1') {
            return;
        }
        grid[i][j] = - 1;
        if (i - 1 >= 0) {
            travers(i - 1, j)
        } else if (j - 1 >= 0) {
            travers(i, j - 1)
        } else if (i + 1 < height) {
            travers(i + 1, j)
        } else if (j + 1 < width) {
            travers(i, j + 1)
        }         
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          if (grid[i][j] === "1") {
            travers(grid, i, j, height, width);
            res++;
          }
        }
      }
        return ans
};
console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));


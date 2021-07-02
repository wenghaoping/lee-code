/** 编辑距离
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    let dp = new Array(n1 + 1).fill(0).map(i => new Array(n2 + 1).fill(0))
    // dp[0][0...n2]的初始值
    for (let j = 1; j <= n2; j++) {
        dp[0][j] = dp[0][j - 1] + 1;
    } 
    // dp[0...n1][0] 的初始值
    for (let i = 1; i <= n1; i++) {
        dp[i][0] = dp[i - 1][0] + 1;
    }
    // 通过公式推出 dp[n1][n2]
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
            if (word1.charAt(i - 1) == word2.charAt(j - 1)){
                dp[i][j] = dp[i - 1][j - 1];
            } else {
               dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
            }         
        }
    }
    return dp[n1][n2];
};
console.log(minDistance('horse', 'ros'))
console.log(minDistance('intention', 'execution'))
// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符

// 示例 1：
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')

// 示例 2：
// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
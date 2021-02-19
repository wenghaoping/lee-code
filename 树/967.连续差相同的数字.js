/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 967.连续差相同的数字
// 深度优先
var numsSameConsecDiff = function(n, k) {
    let result = [];
    function dfs(str) {
        if (str.length === n) {
            result.push(Number.parseInt(str));
            return;
        }
        // 先提取字符串最后一位，然后转化成数字
        let endNum = +str.slice(-1);
        if (endNum + k < 10) {
            // 字符串+数字
            dfs(str + (endNum + k));
        }
        // 防止K为0的时候，多次写入。所以上面写一次就可以了。
        if (endNum - k >= 0 && k !== 0) {
            dfs(str + (endNum - k));
        }
    }
    // 循环十次，从1开始到9。
    for (let i = 1; i < 10; i ++) {
        dfs(`${i}`);
    }
    return result;
}
// 广度优先
var numsSameConsecDiff2 = function(n, k) {
    let result = []; // 最终结果
    let queue = []; // 队列
    for (let i = 1; i < 10; i ++) {
        queue.push(i);
    }
    while (queue.length) {
        // 取出数组第一个值
        let str = `${queue.shift()}`;
        if (str.length === n) {
            result.push(Number.parseInt(str));
        } else {
            // 先提取字符串最后一位，然后转化成数字
            let endNum = +str.slice(-1);
            if (endNum + k < 10) {
                // 字符串+数字
                queue.push(`${str + (endNum + k)}`);
            }
            // 防止K为0的时候，多次写入。所以上面写一次就可以了。
            if (endNum - k >= 0 && k !== 0) {
                queue.push(`${str + (endNum - k)}`);
            }
        }
    }
    return result;
}
console.log(numsSameConsecDiff2(2, 0));
// 返回所有长度为 n 且满足其每两个连续位上的数字之间的差的绝对值为 k 的 非负整数 。

// 请注意，除了 数字 0 本身之外，答案中的每个数字都 不能 有前导零。例如，01 有一个前导零，所以是无效的；但 0 是有效的。

// 你可以按 任何顺序 返回答案。

//  

// 示例 1：

// 输入：n = 3, k = 7
// 输出：[181,292,707,818,929]
// 解释：注意，070 不是一个有效的数字，因为它有前导零。
// 示例 2：

// 输入：n = 2, k = 1
// 输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
// 示例 3：

// 输入：n = 2, k = 0
// 输出：[11,22,33,44,55,66,77,88,99]
// 示例 4：

// 输入：n = 2, k = 1
// 输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
// 示例 5：

// 输入：n = 2, k = 2
// 输出：[13,20,24,31,35,42,46,53,57,64,68,75,79,86,97]
//  

// 提示：

// 2 <= n <= 9
// 0 <= k <= 9
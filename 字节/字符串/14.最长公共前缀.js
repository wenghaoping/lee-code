/**
 * 14.最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 如果没有就直接返回空
    if (strs.length === 0) {
        return '';
    }
    // 拿出第一个，因为是公共前缀，所以可以直接拿第一个比对，
    // 就算第一个只有2个字符，那最多只有2个一致的前缀。
    let ans = strs[0];
    // 从第二个字符串开始循环，对比前一个
    for ( let i = 1; i < strs.length; i++) {
        // 判断第几个字符开始不一致
        let j = 0;
        // j不可以大于第一个字符的长度，而且不可以大于当前的字符长度。
        for(;j < ans.length && j < strs[i].length; j++) {
            // 从第一个字符串的第一个字符开始对比
            // 打第二个字符串的第一个字符
            // 只要相同，说明第一个字符串的第J个就是公共前缀，一旦不同，就跳出循环。
            if(ans[j] != strs[i][j]) {
                break;
            }
        }
        // 跳出循环后的j，就是第一个字符串的前J个，都是相同的公共前缀。
        ans = ans.substr(0, j);
        // 如果ans是空的，那么就是没有公共前缀。
        if (ans === "") {
            return ans;
        }
    }
    return ans;
};
console.log(longestCommonPrefix(["flower", "flow","flight"]));
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。
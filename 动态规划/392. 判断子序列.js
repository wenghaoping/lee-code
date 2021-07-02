/**392. 判断子序列
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true
    }
    let n = s.length;
    let m = t.length;
    let i = 0;
    let j = 0;
    while(i < n && j < m) {
        if(s.charAt(i) == t.charAt(j)) {
            i++
            // 如果i的长度已经大于s长度了，就说明走完了
            if (i > s.length - 1) {
                return true;
            }
        }
        j++
    }
    return false;
};
console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 进阶：
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 示例 1：
// 输入：s = "abc", t = "ahbgdc"
// 输出：true

// 示例 2：
// 输入：s = "axc", t = "ahbgdc"
// 输出：false
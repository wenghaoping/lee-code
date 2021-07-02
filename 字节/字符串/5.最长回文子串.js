/**最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length < 2){
        return s
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        // 回文子串长度是奇数
        helper(i, i)
        // 回文子串长度是偶数
        helper(i, i + 1) 
    }

    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        // 注意此处m, n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
        if (n - m - 1 > res.length) {
            // slice也要取[m+1, n-1]这个区间 
            res = s.slice(m + 1, n)
        }
    }
    return res
};
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    // 方法2：dp，用时O(n^2)击败26.85%，内存O(n^2)击败4.98%
    // dp[i][j]表示i到j是否为回文
    const len = s.length;
    // dp[i][i]为true
    const dp = new Array(len).fill(0).map(i => new Array(len).fill(true));

    // 1、计算0-1,1-2,2-3开始
    // 2、计算0-2，1-3，2-4
    // 3、计算0-3，1-4，2-5
    // ...以此类推
    for(let i = 1; i < len; i++) {
        for(let j = 0; i + j < len; j++) {
            dp[j][i+j] = (s[j] === s[i+j]) && dp[j+1][i+j-1];
        }
    }

    // 接下来再遍历一遍，依次求dp[i]的最大回文子串
    let maxstr = "";
    for(let i=0;i<len;i++) {
        var maxIndex = dp[i].lastIndexOf(true);
        // 如果以i为启点的最大回文子串长度>maxstr，则替换maxstr;
        if(maxIndex-i+1>maxstr.length) {
            maxstr = s.substring(i,maxIndex+1);
        }
    }
    return maxstr;
};
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ac'));
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"

// 示例 3：
// 输入：s = "a"
// 输出："a"

// 示例 4：
// 输入：s = "ac"
// 输出："a"
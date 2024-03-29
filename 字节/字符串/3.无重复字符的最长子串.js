/**
 * 3.无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1;
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
var lengthOfLongestSubstring2 = function (s) {
  // 滑动窗口初始化为一个空数组
  let arr = [];
  // 要返回的字符串的长度
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    // 使用 indexOf 判断是否在数组中出现过
    let index = arr.indexOf(s[i]);
    // 如果出现过
    if (index !== -1) {
      // 从数组开头到当前字符串全部截取掉
      arr.splice(0, index + 1);
    }
    // 在窗口右边放进新的字符
    arr.push(s.charAt(i));
    // 更新下最大值
    max = Math.max(arr.length, max);
  }
  // 返回
  return max;
};

var lengthOfLongestSubstring3 = function (s) {};

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring("aab"));
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 示例 4:
// 输入: s = ""
// 输出: 0

// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

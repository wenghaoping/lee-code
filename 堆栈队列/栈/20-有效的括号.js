/** 20，有效括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 当字符串本来就是空的时候，我们可以快速返回true
  if (s == null || s.length == 0) {
    return true;
  }
  // 当字符串长度为奇数的时候，不可能是一个有效的合法字符串
  if (s.length % 2 == 1) {
    return false;
  }
  var rightSymbols = [];
  const keys = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (var i = 0; i < s.length; i++) {
    if (keys[s[i]]) {
      rightSymbols.push(keys[s[i]]);
    } else if (rightSymbols.pop() != s[i]) {
      return false;
    }
  }
  // 如果最终还有，说明还剩下一个，就是不匹配的，
  // 或者可以一开始判断奇偶数。奇数就直接不通过
  return !rightSymbols.length;
};
// console.log(isValid("()"));
console.log(isValid("([]{})"));
// console.log(isValid("(]"));
// console.log(isValid("{[]}"));

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true
//

// 提示：
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

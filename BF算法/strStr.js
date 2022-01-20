// 给定一个 haystack 字符串和一个 needle 字符串，
// 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。

function strStr(haystack, needle) {
  let i, j;
  let haylen = haystack.length;
  let needlen = needle.length;
  if (haylen < needlen) {
    return -1;
  }
  if (needlen === 0) {
    return 0;
  }
  //循环条件，这里只有 i 增长
  for (i = 0, j = 0; i < haylen && j < needlen; i++) {
    //相同时，则移动 j 指针
    if (haystack.charAt(i) === needle.charAt(j)) {
      j++;
    } else {
      //不匹配时，将 j 重新指向模式串的头部，将 i 本次匹配的开始位置的下一字符
      i = i - j;
      j = 0;
    }
  }
  //查询成功时返回索引，查询失败时返回 -1；
  return j == needlen ? i - needlen : -1;
}

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
// 示例 1:
// 输入: haystack = "hello", needle = "ll" 输出: 2

// 示例 2:
// 输入: haystack = "aaaaa", needle = "bba" 输出: -1

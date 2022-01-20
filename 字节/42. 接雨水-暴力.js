// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 示例 2：
// 输入：height = [4,2,0,3,2,5]
// 输出：9
/**
 * @param {number[]} height
 * @return {number}
 */
//
var trap = function (height) {
  if (height.length === 0) {
    return 0;
  }
  const n = height.length;
  let res = 0;
  for (let i = 1; i < n - 1; i++) {
    let l_max = 0;
    let r_max = 0;
    for (let j = i; j < n; j++) {
      // 找右边最高的柱子。
      r_max = Math.max(r_max, height[j]);
    }
    for (let j = i; j >= 0; j--) {
      // 找左边最高的柱子。
      l_max = Math.max(l_max, height[j]);
    }
    res += Math.min(l_max, r_max) - height[i];
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

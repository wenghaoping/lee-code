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
  let l_max = new Array(n);
  let r_max = new Array(n);
  // 第一个值
  l_max[0] = height[0];
  // 最后一个值
  r_max[n - 1] = height[n - 1];
  //计算l_max，从左到右
  for (let i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i - 1]);
  }
  // 把暴力中的嵌套循环，移到外面了
  //计算r_max，从右到左
  for (let i = n - 2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1]);
  }

  for (let i = 1; i < n - 1; i++) {
    res += Math.min(l_max[i], r_max[i]) - height[i];
  }
  return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

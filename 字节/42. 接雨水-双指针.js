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

  let left = 0;
  let right = n - 1;
  // 定义双指针
  let l_max = height[0];
  let r_max = height[n - 1];
  while (left <= right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);
    // 如果左边的柱子比右边的矮
    if (l_max < r_max) {
      // 那可以装的水就是最矮的柱子-自己的长度。
      res += l_max - height[left];
      left++;
    } else {
      res += r_max - height[right];
      right--;
    }
  }
  return res;
};

function trap(height) {
  if(heightlength === 0) {
    return 0;
  }
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

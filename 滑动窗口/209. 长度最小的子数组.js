// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的连续子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  const length = nums.length;
  //使用left,right代表窗口左右边界；sum为窗口里的数字和；min为满足条件时的窗口长度；
  let left = 0;
  let right = 0;
  let sum = nums[0];
  let min = Number.MAX_SAFE_INTEGER;
  while (right < length) {
    //1.如果sum大于等于target；更新min
    // 特别的如果min等于1 直接返回，不会有比1更小子数组了；
    // sum减去左边界的值 left++；
    if (sum >= target) {
      min = Math.min(min, right - left + 1);
      if (min === 1) {
        return min;
      }
      sum -= nums[left];
      left++;
      //2.否则right++；sum加上右边界的值
    } else {
      right++;
      sum += nums[right];
    }
  }
  //看min是否还是最大值 是的话代表没有找到 返回0  否则返回min
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 3, 4]));

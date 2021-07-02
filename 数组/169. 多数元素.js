/**多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
};
var majorityElement = function(nums) {
    let x = 0
    let m = 0
    for(let n of nums){
      if(m === 0) {
        x = n
      }
      m += x === n ? 1 : -1
    }
    return x
  };
//   时间 O(n) 循环一次nums
//   空间 O(1) 使用几个基本变量
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([1]))
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1：
// 输入：[3,2,3]
// 输出：3

// 示例 2：
// 输入：[2,2,1,1,1,2,2]
// 输出：2
//  

// 进阶：
// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
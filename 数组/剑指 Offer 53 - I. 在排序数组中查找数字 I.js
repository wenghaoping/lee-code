/**在排序数组中查找数字
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    const helper = function(nums, tar) {
        let i = 0;
        let j = nums.length - 1;
        while(i <= j) {
            let m = Math.floor((i + j) / 2);
            if (nums[m] <= tar) {
                i = m + 1;
            } else {
                j = m - 1;
            }
        }
        return i;
    }
    return helper(nums, target) - helper(nums, target - 1);
};

console.log(search([5,7,7,8,8,10], 8));
console.log(search([5,7,7,8,8,10], 6));
// 统计一个数字在排序数组中出现的次数。

// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === middle) {
            left = middle + 1;
        } else {
            right = middle + 1;
        }
    }
    return left;
};
var missingNumber2 = function(nums) {
let l = 0;
let r = nums.length - 1;
let m;
    while (l <= r) {
        m = (l + r) >> 1
        nums[m] === m 
        ? l = m + 1
        : r = m - 1
    }
    return l 
};
console.log(missingNumber2([0,1,3]))
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，
// 并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 示例 1:
// 输入: [0,1,3]
// 输出: 2

// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

// 0 1 3 4 5 6 7 8 9 10
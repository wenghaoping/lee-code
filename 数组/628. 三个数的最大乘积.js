/**
 * @param {number[]} nums
 * @return {number}
 */
//  时间复杂度：O(N)，其中 NN 为数组长度。我们仅需遍历数组一次。
//  空间复杂度：O(1)。
var maximumProduct = function(nums) {
    const n = nums.length;
    let maxMu = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++) {
        let L = i + 1;
        let R = n - 1;
        while (L < R) {
            maxMu = Math.max(maxMu, nums[i] * nums[L] * nums[R])
            L = L + 1;
            R = R - 1;
        }
    }
    return maxMu;
}

// 时间复杂度：O(NlogN)，其中 NN 为数组长度。排序需要 O(NlogN) 的时间。
// 空间复杂度：O(logN)，主要为排序的空间开销。

// var maximumProduct = function(nums) {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     // 考虑2个负数的情况，
//     return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
// };
console.log(maximumProduct([1,2,3]))
console.log(maximumProduct([1,2,3,4]))
console.log(maximumProduct([-1,-2,-3]))
console.log(maximumProduct([-100,-98,-1,2,3,4]))
// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：6

// 示例 2：
// 输入：nums = [1,2,3,4]
// 输出：24

// 示例 3：
// 输入：nums = [-1,-2,-3]
// 输出：-6
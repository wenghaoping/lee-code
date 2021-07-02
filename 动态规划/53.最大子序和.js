/**53.最大子序和
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法。
var maxSubArray = function(nums) {
    let pre = 0;
    let maxAns = nums[0];
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(maxAns, pre);
    };
    return maxAns;
};

// 动态规划
var maxSubArray2 = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 定义为数组nums 中已num[i] 结尾的最大连续子串和， 
        // 则有dp[i] = max(dp[i-1] + nums[i], num[i]);
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);	
        if (max < dp[i]) {
            max = dp[i];
        }
    }
    return max;
}
console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([0]));
// console.log(maxSubArray([-1]));
// console.log(maxSubArray([-100000]));
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 示例 2：
// 输入：nums = [1]
// 输出：1

// 示例 3：
// 输入：nums = [0]
// 输出：0

// 示例 4：
// 输入：nums = [-1]
// 输出：-1

// 示例 5：
// 输入：nums = [-100000]
// 输出：-100000
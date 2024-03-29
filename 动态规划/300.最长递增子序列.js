/**
 * 300.最长递增子序列
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
	// 动态规划框架
	let dp = new Array(nums.length).fill(1) 
	let res = 1
	for (let i = 0; i < nums.length; i++) { // 8
		// 这层for循环得出dp[i]
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				// 当前元素大于前面的一个 dp[j]+1
				// 但是dp[i]有多个子问题(for循环) 需要从这个子问题选取最大的
				// Math.max(dp[i], dp[j]+1) 
				// 这里的dp[i]表示前面的子问题筛选出的结果和当前子问题
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
		// 取出dp中最大的值。
		res = Math.max(res, dp[i])
	}
    return res
}
console.log(lengthOfLIS2([1,3,6,7,9,4,10,5,6])); // 6
// console.log(lengthOfLIS2([10,9,2,5,3,7,101,18]));
// console.log(lengthOfLIS2([0,1,0,3,2,3]));
// console.log(lengthOfLIS2([7,7,7,7,7,7,7]));
// console.log(lengthOfLIS2([4,10,4,3,8,9])); // 3
// dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。


// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
//  
// 示例 1：
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

// 示例 2：
// 输入：nums = [0,1,0,3,2,3]
// 输出：4

// 示例 3：
// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
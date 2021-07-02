/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    // 先排序
    nums.sort((a,b) => a - b)
    // 再去重
    nums = Array.from(new Set(nums))
    // 最后判断统计
    let maxLen = 1 // 记录连续最长序列
    let nowLen = 1 // 记录当前连续序列
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            nowLen++
            if (i === nums.length - 2) { // 处理遍历到最后一位的情况（有可能最后一次是最长的序列）
                maxLen = nowLen > maxLen ? nowLen : maxLen
            }
        } else { // 每次不连续的时候判断是否是最长，并初始化 nowLen
            maxLen = nowLen > maxLen ? nowLen : maxLen
            nowLen = 1
        }
    }
    return maxLen
};

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    nums = Array.from(new Set(nums));
    let maxLen = 1; // 连续最长序列
    let nowLen = 1; // 当前连续序列
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i + 1] - nums[i] === 1) {
            nowLen++;
        } else {
            maxLen = Math.max(maxLen, nowLen);
            nowLen = 1;
        }
    }
    return maxLen;
}

console.log(longestConsecutive([5,4,200,1,3,2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 示例 2：
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
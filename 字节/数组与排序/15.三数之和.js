/**
 * 15.三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = function (nums) {
    const ans = [];
    const len = nums.length;
    if (nums == null || len < 3) {
        return ans;
    }
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) { // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
            break;
        }
        // 如果当前两个数字一致。
        if (i > 0 && nums[i] === nums[i - 1]) { // 去重
            continue;
        }
        let L = i + 1; // 左边第二个开始。
        let R = len - 1; // 最右边开始。
        while (L < R) {
            // 和
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) { // 去重
                    L++;
                }
                while (L < R && nums[R] === nums[R - 1]) { // 去重
                    R--;
                }
                L++;
                R--;
            } else if (sum < 0) { // 说明值小了，所以左边值加大
                L++;
            } else if (sum > 0) { // 说明值大了，所以右边值减小。
                R--;
            }
        }
    }
    return ans;
};
console.log(threeSum([-1,0,1,2,-1,-4]));
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 示例 2：
// 输入：nums = []
// 输出：[]

// 示例 3：
// 输入：nums = [0]
// 输出：[]
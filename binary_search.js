function searchRange (nums, target) {
    let res = [-1, -1];
    let length = nums.length;
    let left = 0;
    let right = length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 如果中位数大于给定值，说明数字在左边。
        if (nums[mid] >= target) {
            right = mid - 1;
            length = mid;
        } else {
            // 如果中位数小于给定值，说明数字在右边。
            left = mid + 1;
        }
    }
    return length;
}

// const binarySearch = (nums, target, lower) => {
//     let left = 0, right = nums.length - 1, ans = nums.length;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > target || (lower && nums[mid] >= target)) {
//             right = mid - 1;
//             ans = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// }

// var searchRange = function(nums, target) {
//     let ans = [-1, -1];
//     const leftIdx = binarySearch(nums, target, true);
//     const rightIdx = binarySearch(nums, target, false) - 1;
//     if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
//         ans = [leftIdx, rightIdx];
//     } 
//     return ans;
// };

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//  

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
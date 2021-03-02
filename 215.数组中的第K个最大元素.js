/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let smallNumber = nums[i];
        let samllIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < smallNumber) {
                samllIndex = j;
                smallNumber = nums[j]
            }
        }
        nums[samllIndex] = nums[i];
        nums[i] = smallNumber;
        if (i === k - 1) {
            return nums[i];
        }
    }
};
var findKthLargest2 = function(nums, k) {
    nums.sort((a,b) => b-a) //降序排序
    console.log(nums);
    for(var i=0;i<nums.length;i++){
        if((k-1) == i){//i从0开始
            return nums[i]
        }
    }
};

console.log(findKthLargest2([3,2,1,5,6,4], 2))
// 在未排序的数组中找到第 k 个最大的元素。请注意，
// 你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

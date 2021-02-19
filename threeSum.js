/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arrNume = [];
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;
    // [ -4, -1, -1, 0, 1, 2 ]
    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) return arrNume
        if(i > 0 && nums[i] === nums[i-1]) continue
        let L = i + 1;
        let R = n - 1;
        console.log(L, R);
        while ( L < R ) {
            if(nums[i] + nums [L] + nums[R] === 0) {
                arrNume.push([nums[i], nums[L], nums[R]]);
                while(L < R && nums[L] === nums[L + 1]) {
                    L = L + 1;
                }
                while(L < R && nums[R] == nums[R - 1]) {
                    R = R - 1
                }
                L = L + 1
                R = R - 1
            } else if(nums[i] + nums[L] + nums[R] > 0) {
                R = R - 1
            } else {
                L = L + 1
            }
        }
    }
    return arrNume;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
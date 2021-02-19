/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numbers = {};
    for( let num of nums) {
        if (numbers[num]) {
            numbers[num]++;
        } else {
            numbers[num] = 1;
        }
        if(numbers[num] > Math.floor(nums.length / 2)) {
            return num;
        }
    }
    return -1;
};
var majorityElement2 = function(nums) {
    nums.sort();
    for(let i = 0; (i + Math.floor(nums.length / 2)) < nums.length; i++){
        if(nums[i] === nums[i + Math.floor(nums.length / 2)]){
            return nums[i];
        };
    }
    return -1;
}
// console.log('===='+majorityElement2([1,2,5,9,5,9,5,5,5]));
// console.log('===='+majorityElement2([3,2]));
console.log('===='+majorityElement([2,2,2,1,1,1,1,1,1,1,2,2]));
// int majorityElement(vector<int>& nums) {
//     sort(nums.begin(), nums.end());
//     for(int i = 0; (i+nums.size()/2) < nums.size(); i++)
//     {
//         //每次步进一半的元素就可以判断num[i]是否为主要元素
//         if(nums[i] == nums[i+nums.size()/2])
//             return nums[i];
//     }

//     return -1;
// }
// 数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

// 示例 1：
// 输入：[1,2,5,9,5,9,5,5,5]
// 输出：5
//  

// 示例 2：
// 输入：[3,2]
// 输出：-1

// 示例 3：
// 输入：[2,2,1,1,1,2,2]
// 输出：2

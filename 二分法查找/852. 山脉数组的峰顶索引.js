// 符合下列属性的数组 arr 称为 山脉数组 ：
// arr.length >= 3
// 存在 i（0 < i < arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给你由整数组成的山脉数组 arr ，
// 返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

// 示例 1：
// 输入：arr = [0,1,0]
// 输出：1

// 示例 2：
// 输入：arr = [0,2,1,0]
// 输出：1

// 示例 3：
// 输入：arr = [0,10,5,2]
// 输出：1

// 示例 4：
// 输入：arr = [3,4,5,1]
// 输出：2

// 示例 5：
// 输入：arr = [24,69,100,99,79,78,67,36,26,19]
// 输出：2

/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
  if (arr.length < 3) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 2;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (arr[middle] > arr[middle + 1]) {
      result = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return result;
}
// console.log(peakIndexInMountainArray([0, 1, 0]));
// console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([1, 5, 3, 2, 1, 0]));

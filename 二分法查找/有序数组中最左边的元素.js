// 【题目】给定一个有序数组，返回指定元素在数组的最左边的位置
// 输入：A = [1, 2, 2, 2, 2, 3, 3], target = 2
// 输出：1
// 解释：第一个出现的 2 位于下标 1，是从左往右看时，第一个出现 2 的位置。

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
}
// 最左边的元素
function lowerBound2(arr, target) {
  let left = -1;
  let right = arr.length;
  while (left + 1 != right) {
    let middle = Math.floor((left + right) / 2);
    if (target <= arr[middle]) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return right;
}
// 最右边的元素
function lowerBound3(arr, target) {
  let left = -1;
  let right = arr.length;
  while (left + 1 != right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] <= target) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return right;
}

console.log(lowerBound3([1, 2, 2, 2, 2, 3, 3], 2));

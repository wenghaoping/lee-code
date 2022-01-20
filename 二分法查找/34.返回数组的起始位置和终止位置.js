// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 进阶：
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 示例 2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let find = (isLeft) => {
    // 搜索区间是前闭后闭
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      // 下面这样写是考虑大数情况下避免溢出
      let mid = start + ((end - start) >> 1);
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        // 寻找左边界
        if (isLeft) {
          // 如果mid不是第一个元素并且前面一个相邻的元素也跟mid相等，则搜索区间向左缩小
          // 原先搜索条件是mid > 0 && nums[mid] == nums[mid - 1]   现在已经简化为nums[mid] == nums[mid - 1]
          if (nums[mid] == nums[mid - 1]) {
            end = mid - 1;
          } else {
            return mid;
          }
        } else {
          // 寻找右边界
          // 如果mid不是最后一个元素并且后面一个相邻的元素也跟mid相等，则搜索区间向右缩小
          if (nums[mid] == nums[mid + 1]) {
            start = mid + 1;
          } else {
            return mid;
          }
        }
      }
    }
    // 找不到的情况
    return -1;
  };
  let left = find(true);
  let right = find(false);
  return [left, right];
};

function binarySearchLeft(nums, target) {
  let left = -1;
  let right = nums.length;
  while (left + 1 !== right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] >= target) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return right;
}
function binarySearchRight(nums, target) {
  let left = -1;
  let right = nums.length;
  while (left + 1 !== right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return left;
}
function searchRange2(nums, target) {
  let ans = [-1, -1];
  let leftIndex = binarySearchLeft(nums, target);
  let rightIndex = binarySearchRight(nums, target);
  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    ans = [leftIndex, rightIndex];
  }
  return ans;
}

console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

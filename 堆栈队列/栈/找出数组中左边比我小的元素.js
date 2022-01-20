// 【题目】一个整数数组 A，找到每个元素：左边边第一个比我小的下标位置，没有则用 -1 表示。
// 输入：[5, 2]
// 输出：[1, -1]
// 解释：因为元素 5 的右边离我最近且比我小的位置应该是 A[1]，
// 最后一个元素 2 右边没有比 2 小的元素，所以应该输出 -1。

// 复制代码
// 接口：int[] findRightSmall(int[] A);
function findRightSmall(A) {
  if (A.length <= 1) {
    return [-1];
  }
  // 结果数组
  let poor = [];
  // 栈，下标
  let stack = [];
  // 返回数组中最后一个值
  function stackPeek() {
    if (stack.length > 0) {
      return stack[stack.length - 1];
    } else {
      return "Empty";
    }
  }
  
  return poor;
}
// console.log(findRightSmall([5, 2]));
// console.log(findRightSmall([1, 2, 4, 9, 4, 0, 5]));
console.log(findRightSmall([1, 2, 4, 9, 4, 0, 5]));

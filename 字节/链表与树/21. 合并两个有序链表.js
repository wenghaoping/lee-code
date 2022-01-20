/**
 * Definition for singly-linked list.
 */
let arr1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {},
    },
  },
};
let arr2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {},
    },
  },
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
var mergeTwoLists2 = function (l1, l2) {
  var newL = new ListNode(); // 新建链表
  var res = newL; // 将一个哑节点作为头节点，最后返回哑节点的next
  while (l1 || l2) {
    if (l1.val < l2.val) {
      newL.next = l1;
      l1 = l1.next;
    } else {
      newL.next = l2;
      l2 = l2.next;
    }
    newL = newL.next; // next到下一位，重要
  }
  newL.next = l1 === null ? l2 : l1; // 当其中一个循环完毕后，将另一个直接赋值过去
  return res.next;
};
console.log(mergeTwoLists(arr1, arr2));
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]

// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]

// 提示：
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

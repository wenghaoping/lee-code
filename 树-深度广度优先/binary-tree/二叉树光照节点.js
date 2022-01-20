/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var exposedElement = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  let res = [];

  while (queue.length) {
    let lastVal = null;
    // 拿到每一个层级的最后一个
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      lastVal = node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    if (lastVal) {
      res.push(lastVal);
    }
  }
  return res;
};
let arr = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: {
        val: 16,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
console.log(exposedElement(arr));
// 二叉树光照节点
// 从右侧有一束光照过来，请输出光能找到的所有节点。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
//   /
// 16

// 输出
// [ 3, 20, 7, 16 ]

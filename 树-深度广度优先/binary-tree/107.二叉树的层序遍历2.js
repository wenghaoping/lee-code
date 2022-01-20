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
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;

  let quque = [root];
  let temp = [];
  let res = [];
  // temp用于存储下一层级的节点，
  // 而res用户存储当前层级的值
  let p;
  while (quque.length > 0 || temp.length > 0) {
    if (quque.length === 0) {
      // 当队列长度为0，说明当前层级所有节点已经访问过
      result.push(res); //保存当前层级的值
      quque = temp; //访问下一层
      temp = [];
      res = [];
    }
    p = quque.shift();
    if (p) {
      res.push(p.val);
      temp.push(p.left);
      temp.push(p.right);
    }
  }
  return result;
};
var levelOrder2 = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];

  while (queue.length) {
    const temp = [];
    // 主要是为了循环此处，i的数值不重要。
    // 每次的queue中，一定是同层级的。
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      temp.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(temp);
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
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
console.log(levelOrder2(arr));
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层序遍历为：

// [
//   [3],
//   [9,20],
//   [15,7],
// ]

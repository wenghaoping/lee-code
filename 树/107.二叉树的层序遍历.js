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
var levelOrder = function(root) {
    const result = [];
    if (!root) return result;

    let quque = [root];
    let temp = [];
    let res = [];  
    // temp用于存储下一层级的节点，
    // 而res用户存储当前层级的值
    let p;
    while(quque.length > 0 || temp.length > 0) {
        if (quque.length === 0) {  // 当队列长度为0，说明当前层级所有节点已经访问过
            result.push(res);    //保存当前层级的值
            quque = temp;    //访问下一层
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
let arr = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
console.log(levelOrder(arr));
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
//   [15,7],
//   [9,20],
//   [3]
// ]
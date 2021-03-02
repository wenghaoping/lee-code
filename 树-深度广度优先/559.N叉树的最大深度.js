/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val,children) {
    this.val = val;
    this.children = children;
};
/**
 * @param {Node} root
 * @return {number}
 */

// 给定一个 N 叉树，找到其最大深度。
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
// 示例 1：
//     1
//    / \  \
//   3  2  4
//  /  \
// 5   6
let root = {
    val: 1,
    children: [
        {
            val:3,
            children: [
                {val: 5},
                {val: 6}
            ]
        },
        {val:2},
        {val:4}
    ]
}
var maxDepth = function(root) {
    if (root === null) return 0;
    let max = 0;
    if (root.children && root.children.length > 0) {
        for(var i = 0; i < root.children.length; i++){
            max = Math.max(max , maxDepth(root.children[i]));
        }
    }
    return max + 1;
};
console.log(maxDepth(root));
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：3

// 示例 2：
//        1
//    /  /   \  \
//   2   3   4   5
//      / \  |  / \
//     6   7 8  9  10
//         | |  |
//        11 12 13
//         |
//        14
// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：5
//  

// 提示：
// 树的深度不会超过 1000 。
// 树的节点数目位于 [0, 104] 之间。
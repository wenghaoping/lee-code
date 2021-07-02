/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 206.链表翻转
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let cnext = curr.next;
        curr.next = prev === null ? null : prev
        prev = curr;
        curr = cnext;
    }
    return prev
};

// 迭代版本
// 假设链表为 1 => 2 => 3 => 1→2→3→∅，我们想要把它改成 => 1 => 2 => 3 ∅←1←2←3。

// 在遍历链表时，将当前节点的 \textit{next}next 指针改为指向前一个节点。
// 由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// 递归版本
var reverseList2 = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
// 反转链表的思路：1-2-3-4-5，先将2换到第一个，变为：2-1-3-4-5。
// 然后将3换到第一个，3-2-1-4-5。
// 以此类推。其中，p始终指向1，q指向p的下一个，即本轮需要换到第一个的数。

// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
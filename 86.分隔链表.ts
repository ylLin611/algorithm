/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy1 = new ListNode(),
    dummy2 = new ListNode()
  let p1 = dummy1, p2 = dummy2
  while (head !== null) {
    // dummyX.next = head
    // pX指向dummyX尾节点
    if (head.val < x) {
      p1.next = head
      p1 = p1.next
    } else {
      p2.next = head
      p2 = p2.next
    }
    // head重新赋值为下一个节点
    head = head.next
  }
  // 大的链表断next
  p2.next = null
  p1.next = dummy2.next
  return dummy1.next
};

// @lc code=end


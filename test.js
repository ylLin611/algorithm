class ListNode {
  val
  next
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
let head = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
            next: null
          }
        }
      }
    }
  }
}
function partition(head, x){
  const dummy1 = new ListNode(),
    dummy2 = new ListNode()
  let p1 = dummy1, p2 = dummy2, p = head
  while (head !== null) {
    console.log(head,'---head');
    
    if (head.val < 3) {
      p1.next = head
      p1 = p1.next
      console.log(p1,'---p1');
      console.log(dummy1,'---dummy1');
      
    } else {
      p2.next = head
      p2 = p2.next
      console.log(p1,'---p2');
      console.log(dummy1,'---dummy2');
    }
    let temp = new ListNode(head.val, head.next)
    head.next = null
    head = temp.next
  }
  p1.next = dummy2.next
  return dummy1.next
};
console.log(partition(head, 3));
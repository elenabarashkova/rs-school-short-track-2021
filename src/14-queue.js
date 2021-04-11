const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.linkedList = null;
  }

  get size() {
    let num = 0;
    let curr = this.linkedList;
    while (curr !== null) {
      curr = curr.next;
      num++;
    }
    return num;
  }

  enqueue(item) {
    const listItem = new ListNode(item);
    if (this.linkedList === null) {
      this.linkedList = listItem;
    } else {
      let lastItem = this.linkedList;
      while (lastItem.next !== null) {
        lastItem = lastItem.next;
      }
      lastItem.next = listItem;
    }
  }

  dequeue() {
    if (this.linkedList !== null) {
      const itemValue = this.linkedList.value;
      this.linkedList = this.linkedList.next;
      return itemValue;
    }
    return undefined;
  }
}

module.exports = Queue;

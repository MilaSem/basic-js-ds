const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // это хвост текущего узла
      this.tail = newNode; // обновляем хвост
    }
    this.length += 1;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next; // головой становится следующий элемент
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue,
};

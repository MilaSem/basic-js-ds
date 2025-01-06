const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // временный узел для хранения ссылки на первый узел списка
  // его value равно undefined
  let tempNode = new ListNode();
  tempNode.next = l;

  let currentNode = tempNode;
  while (currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next; // удаление - по сути пропуск элемента с value k
    } else {
      currentNode = currentNode.next;
    }
  }

  return tempNode.next;
}

module.exports = {
  removeKFromList,
};

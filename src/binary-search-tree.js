const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  _min(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    if (this.tree) {
      return this._min(this.tree);
    }
    return null;
  }

  _max(node) {
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  max() {
    if (this.tree) {
      return this._max(this.tree);
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree,
};

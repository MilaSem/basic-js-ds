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

  add(data) {
    this.tree = this._add(this.tree, data);
  }

  _add(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._add(node.left, data);
    } else if (data > node.data) {
      node.right = this._add(node.right, data);
    }

    return node;
  }

  _search(node, data) {
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  has(data) {
    return this._search(this.tree, data) !== null;
  }

  find(data) {
    return this._search(this.tree, data);
  }

  _remove(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._remove(node.left, data);
    }

    if (data > node.data) {
      node.right = this._remove(node.right, data);
    }

    return node;
  }

  remove(data) {
    this.tree = this._remove(this.tree, data);
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

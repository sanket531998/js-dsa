class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  contructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === this.current) {
          console.log("Duplicate value found");
          return false;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  myFind(value) {
    let current = this.root;

    if (!current) return false;

    while (true) {
      if (value === current.value) return true;
      else if (value < current.value) {
        if (current.left === null) return false;

        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) return false;

        current = current.right;
      }
    }
  }

  gptFind(value) {
    let current = this.root;

    while (current) {
      // No need for an extra check at the start
      if (value === current.value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }

    return false; // If we exit the loop, the value wasn't found
  }

  udemyFind(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        found = true;
      }
      if (!found) return undefined;
      return current;
    }
  }

  // Tree traversal
  // Breadth first search
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth first search
  // 1. Pre-order
  DFSPreOrder() {
    let data = [],
      current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // 2. Post-order
  DFSPostOrder() {
    let data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // 3. In-order
  DFSInOrder() {
    let data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(30);
tree.insert(10);
tree.insert(50);
tree.insert(20);
tree.insert(40);
tree.insert(5);

console.log(tree.DFSInOrder());

//        30
//  10         50
//5    20  40

// console.log(tree.udemyFind(30));

// NAIVE APPROACH
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(5);
// tree.root.left.right = new Node(7);

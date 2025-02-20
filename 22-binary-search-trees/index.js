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
}

let tree = new BinarySearchTree();

tree.insert(30);
tree.insert(10);
tree.insert(20);
tree.insert(40);

console.log(tree.udemyFind(30));

// NAIVE APPROACH
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(5);
// tree.root.left.right = new Node(7);

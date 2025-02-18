// We can use push and pop from singly linked list but there is one problem
// push and pop are supposed to be constant size
// So we will push and pop from the start of the list = basically unshift and shift

// Singly linked list is the primary way to build a stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let prevFirst = this.first;
      this.first = newNode;
      this.first.next = prevFirst;
    }

    this.size++;
    return this.size;
  }

  pop() {
    let temp = this.first;
    if (!this.first) return null;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }

    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

stack.push(1);

stack.push(2);
stack.push(3);

stack.pop();
console.log(stack);

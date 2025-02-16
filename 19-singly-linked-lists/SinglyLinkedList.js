class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding last item to the array
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Removing last item in the array
  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.length--;
    this.tail.next = null;

    if (this.length === 0) {
      this.head = 0;
      this.tail = 0;
    }
    return current;
  }

  // Removing the first item of array
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = 0;
    }
    return currentHead;
  }

  // Adding a new node to the beginning
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Get with index
  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      counter++;
      current = current.next;
    }

    return current;
  }

  // set at index, it will change the value at index 2 with given value
  set(index, value) {
    let foundNode = this.get(index);
    let counter = 0;
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // we will add the new value to the given index and shift the following linked list ahead
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let nextNode = this.get(index);
    let previousNode = this.get(value - 1);

    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  // Removes an item from the list for given index and patches the remaning list
  remove(index) {
    if (index < 0 || index.length > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // Reversing linked list in place, we wont make any copy
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }

    console.log(array);
  }
}

let linkedList = new SinglyLinkedList();

linkedList.push(5);
linkedList.push(10);
linkedList.push(15);
linkedList.push(20);
linkedList.push(25);

// console.log(linkedList.pop(), linkedList.length);
linkedList.remove(1);
// console.log(linkedList);
console.log(linkedList.print());

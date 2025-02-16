class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adding a node to the end of doubly linked list
  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Removing a node from the end of doubly linked lists
  pop() {
    if (!this.head) return null;

    let oldTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldNod.prev = null; // Chopping the secong connection
    }

    this.length--;
    return oldNode;
  }

  //Shift - Removes a node from the beginning of doubly linked list
  shift() {
    if (!this.head) return null;

    let oldHead = this.head;

    if (this.length === 1) {
      oldHead = null;
      this.tail = null;
    } else {
      let secondNode = oldHead.next;
      secondNode.prev = null;
      this.head.next = null;
      this.head = secondNode;
    }

    this.length--;
    return oldHead;
  }

  // UNSHIFT - ADD A NODE TO THE BEGGINGING OF THE LIST
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    if (index <= this.length / 2) {
      // Start from 0
      let counter = 0;
      let value = this.head;

      while (index !== counter) {
        value = value.next;
        counter++;
      }
      return value;
    } else {
      // Start from last
      let counter = this.length;
      let value = this.tail;

      while (index !== counter) {
        value = value.prev;
        counter--;
      }
      return value;
    }
  }
}

const linkedList = new DoublyLinkedList();

linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);

linkedList.push(50);
linkedList.push(60);
linkedList.push(70);
linkedList.push(80);

// linkedList.unshift(1);

console.log(linkedList.get(4));

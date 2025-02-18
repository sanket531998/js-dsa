// Queue with arrays

// WE have to remove 1 first then 2 and then 3
// So we cannot use pop
// We use shift

// let queue = [];
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.shift();

// console.log(queue);

// Queues with arrays

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constuctor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Accepts a value at the end
  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;

    // return ++this.size;
  }

  // Removes a value from the start
  dequeue() {
    if (!this.first) return null;

    let oldFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return oldFirst;
  }
  // dequeue is same as pop in stack
}

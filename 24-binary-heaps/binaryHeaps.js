class MaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let lastIndex = this.values.length - 1;
    let element = this.values[lastIndex];
    while (lastIndex > 0) {
      let parentIndex = Math.floor((lastIndex - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (element <= parentElement) break;
      this.values[parentIndex] = element;
      this.values[lastIndex] = parentElement;
      lastIndex = parentIndex;

      // if (element > parentElement) {
      //   this.values[parentIndex] = element;
      //   this.values[lastIndex] = parentElement;
      //   lastIndex = parentIndex;
      // } else {
      //   break;
      // }
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  sinkDown() {
    let currentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChild < length) {
        let leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChild < length) {
        let rightChild = this.values[rightChildIndex];
        if (
          (rightChild > element && swap === null) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = element;
      currentIndex = swap;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

let BinaryHeaps = new MaxBinaryHeaps();
BinaryHeaps.insert(55);

console.log(BinaryHeaps);

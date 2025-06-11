class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.getParent(index)]) {
      this.swap(index, this.getParent(index));
      index = this.getParent(index);
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    this.swap(0, this.heap.length - 1);
    let max = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index) {
    let largest = index;
    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  printArray() {
    console.log(this.heap);
  }
}

let heap = new MaxHeap();
heap.insert(7);
heap.insert(5);
heap.insert(9);
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.printArray();
heap.extract();
heap.printArray();
heap.insert(10);
heap.insert(6);
heap.extract();
heap.extract();
heap.printArray();

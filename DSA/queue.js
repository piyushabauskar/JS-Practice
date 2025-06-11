class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue empty";
    }
    let element = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return element;
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  printQueue() {
    console.log(this.items);
  }
}

let queue = new Queue();
queue.enqueue("Apple");
queue.enqueue("Banana");
queue.enqueue("Cherry");
queue.printQueue();
console.log(queue.peek());
queue.dequeue();
queue.printQueue();

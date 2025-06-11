class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items.pop();
    }
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  // printStack function
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    console.log(str);
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.printStack();
console.log(stack.peek());
console.log(stack.pop());
stack.printStack();

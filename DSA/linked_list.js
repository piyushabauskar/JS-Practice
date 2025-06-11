class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElementAtStart(element) {
    let newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addElementAtEnd(element) {
    let newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
    this.size++;
  }

  addElementAtIndex(element, index) {
    let newNode = new Node(element);
    let indexCnt = 0;
    let prev = null;
    let currentNode = this.head;
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
    } else {
      if (index === 0) {
        newNode.next = currentNode;
        this.head = newNode;
      } else {
        while (indexCnt < index - 1) {
          prev = currentNode;
          currentNode = currentNode.next;
          indexCnt++;
        }
        prev.next = newNode;
        newNode.next = currentNode;
      }
      this.size++;
    }
  }

  deleteFirstElement() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  deleteLastElement() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      let lastNode = this.head;
      let prev = null;
      while (lastNode.next !== null) {
        prev = lastNode;
        lastNode = lastNode.next;
      }
      prev.next = null;
      this.size--;
    }
  }

  deleteAtIndex(index) {
    let indexCnt = 0;
    let currentNode = this.head;
    let prev = null;
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
    } else {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        while (indexCnt < index - 1) {
          prev = currentNode;
          currentNode = currentNode.next;
          indexCnt++;
        }
        prev.next = currentNode.next;
      }
      this.size--;
    }
  }
  printLinkedList() {
    let currentNode = this.head;
    let output = "";
    while (currentNode !== null) {
      output += currentNode.element + " -> ";
      currentNode = currentNode.next;
    }
    console.log(output);
  }
}

let linkedList = new LinkedList();
linkedList.addElementAtStart("12");
linkedList.addElementAtEnd("13");
linkedList.addElementAtEnd("15");
linkedList.addElementAtStart("11");
linkedList.addElementAtIndex("14", 4);
linkedList.printLinkedList();

linkedList.deleteAtIndex(4);
linkedList.printLinkedList();

linkedList.deleteFirstElement();
linkedList.printLinkedList();

linkedList.deleteLastElement();
linkedList.printLinkedList();

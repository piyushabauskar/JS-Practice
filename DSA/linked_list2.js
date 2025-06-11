class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//consodering index from 0
class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  addElementAtStart(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addElementAtEnd(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  addAtIndex(element, index) {
    const newNode = new Node(element);
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
    } else {
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      }
      if (index === this.size - 1) {
        this.last.next = newNode;
        this.last = newNode;
      } else {
        let indexCnt = 0;
        let currentNode = this.head;
        let prev = null;
        while (indexCnt < index) {
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

  deleteFirstNode() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
    } else {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let indexCnt = 0;
        let currentNode = this.head;
        let prev = null;
        while (indexCnt < index) {
          prev = currentNode;
          currentNode = currentNode.next;
          indexCnt++;
        }
        prev.next = currentNode.next;
        if (index === this.size - 1) {
          this.last = prev;
        }
        this.size--;
      }
    }
  }

  printLinkedList() {
    let currentNode = this.head;
    let output = "";
    while (currentNode !== null) {
      output += currentNode.element + "->";
      currentNode = currentNode.next;
    }
    console.log(output);
  }
}

const linkedList = new LinkedList();
linkedList.addElementAtStart("12");
linkedList.addElementAtEnd("13");
linkedList.addElementAtEnd("14");
linkedList.addAtIndex("11", 0);
linkedList.printLinkedList();

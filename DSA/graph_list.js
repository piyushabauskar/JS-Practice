class Node {
  constructor(value, neighbours) {
    this.value = value;
    this.neighbours = neighbours === undefined ? [] : neighbours;
  }
}
class Graph {
  constructor() {
    this.adjecencyList = new Map();
  }

  addNewNode(value) {
    if (!this.adjecencyList.has(value)) {
      this.adjecencyList.set(value, []);
    } else {
      console.log("Node already exists");
    }
  }

  addEdge(src, des) {
    if (this.adjecencyList.has(src) && this.adjecencyList.has(des)) {
      this.adjecencyList.get(src).push(des);
      this.adjecencyList.get(des).push(src);
    } else {
      console.log(`One or both nodes (${src}, ${des}) do not exist.`);
    }
  }

  removeEdge() {}
}

// The Singleton pattern ensures a class has only one instance and provides a global point of access to it.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = "Singleton Data";
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

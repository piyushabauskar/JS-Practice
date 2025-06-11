//a system where multiple subscribers get notified when a stock price changes
class Subscribers {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  notify(data) {
    this.subscribers.forEach((subscriber) => subscriber.update(data));
  }
}

class Investor {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`Hi ${this.name}, Stock price changed to ${data.price}`);
  }
}

const subscriber = new Subscribers();
const investor1 = new Investor("Piyusha");
const investor2 = new Investor("Pallavi");

subscriber.subscribe(investor1);
subscriber.subscribe(investor2);
subscriber.notify({ price: 100 }); //Stock price changed to 100

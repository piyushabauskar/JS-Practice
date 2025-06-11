/** The Publisher-Subscriber (Pub-Sub) pattern is a behavioral design pattern in which an object (the publisher) maintains a list of subscribers (observers), and when an event occurs, the publisher notifies all of its subscribers. This pattern is particularly useful when different parts of your application need to be notified of certain events without tightly coupling the event source (publisher) to the event handlers (subscribers).*/
/**
 * Here's how the Publisher-Subscriber pattern works:
 * Publisher: The object that generates events and publishes them.
 * Subscriber: The object that listens for events and acts upon them.
 * Event Channel: This is an intermediary that keeps track of the events and their corresponding subscribers.
 */

class PubSub {
  constructor() {
    this.subscribers = {};
  }
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }
  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;
    this.subscribers[event] = this.subscribers[event].filter(
      (subscriber) => subscriber !== callback
    );
  }
  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach((callback) => {
      callback(data);
    });
  }
}
const logMessage = (data) => {
  console.log(`Logged Data: ${data}`);
};

const alertMessage = (data) => {
  console.log(`Alert: ${data}`);
};

const pubsub = new PubSub();

pubsub.subscribe("message", logMessage);
pubsub.subscribe("message", alertMessage);
pubsub.publish("message", "Hello, world!");
pubsub.unsubscribe("message", logMessage);
pubsub.publish("message", "Again Hello");

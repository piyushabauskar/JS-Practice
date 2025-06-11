///factory pattern to create different type of notification Email, Push, SMS

class SMSNotification {
  send() {
    console.log(`This is SMS notification`);
  }
}

class EmailNotification {
  send() {
    console.log(`This is EMail notification`);
  }
}

class PushNotification {
  send() {
    console.log(`This is Push notification`);
  }
}

class NotificationFactory {
  static create(type) {
    switch (type) {
      case "email":
        return new EmailNotification("email");
        break;
      case "push":
        return new PushNotification("push");
        break;
      case "sms":
        return new SMSNotification("sms");
        break;
    }
  }
}

const sms = NotificationFactory.create("sms");
sms.send(); // This is sms notification
const push = NotificationFactory.create("push");
push.send(); // This is push notification
const email = NotificationFactory.create("email");
email.send(); // This is email notification

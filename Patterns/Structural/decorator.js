/**
 * Decorator Pattern
 * 
 * The Decorator Pattern allows you to dynamically add behavior to objects without modifying their code.
 * It wraps the original object with a new object that adds the new behavior.
 * 
 * Example scenario:
 * Suppose you have a simple notification system, and you want to add new features (like SMS or Slack notifications)
 * without changing the original notification code.
 */

// Component: defines the interface for objects that can have responsibilities added to them
class Notifier {
    send(message) {
        throw new Error('This method should be implemented!');
    }
}

// Concrete Component: the original object to which new behavior can be added
class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Sending Email: ${message}`);
    }
}

// Decorator: maintains a reference to a Notifier and implements the Notifier interface
class NotifierDecorator extends Notifier {
    constructor(notifier) {
        super();
        this.notifier = notifier;
    }

    send(message) {
        this.notifier.send(message);
    }
}

// Concrete Decorators: add new behavior
class SMSNotifier extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Sending SMS: ${message}`);
    }
}

class SlackNotifier extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Sending Slack message: ${message}`);
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Decorator pattern executed..");

    // Basic notifier
    const emailNotifier = new EmailNotifier();

    // Decorate with SMS
    const smsNotifier = new SMSNotifier(emailNotifier);

    // Decorate with Slack (now sends Email, SMS, and Slack)
    const slackNotifier = new SlackNotifier(smsNotifier);

    // Send notification
    slackNotifier.send("Hello, this is a decorated notification!");

    console.log("****************************");
}

export {
    executePattern
}

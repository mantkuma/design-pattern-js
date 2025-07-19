/**
 * Bridge Pattern
 * 
 * The Bridge Pattern decouples an abstraction from its implementation so that the two can vary independently.
 * It is useful when both the abstractions and their implementations may change frequently.
 * 
 * Example scenario:
 * Suppose you have different types of remote controls (basic, advanced) and different devices (TV, Radio).
 * The Bridge pattern allows you to mix and match remotes and devices without creating a class for every combination.
 */

// Implementation: defines the interface for implementation classes
class Device {
    turnOn() {
        throw new Error('This method should be implemented!');
    }
    turnOff() {
        throw new Error('This method should be implemented!');
    }
    setChannel(channel) {
        throw new Error('This method should be implemented!');
    }
}

// Concrete Implementations
class TV extends Device {
    turnOn() {
        console.log('TV is ON');
    }
    turnOff() {
        console.log('TV is OFF');
    }
    setChannel(channel) {
        console.log(`TV channel set to ${channel}`);
    }
}

class Radio extends Device {
    turnOn() {
        console.log('Radio is ON');
    }
    turnOff() {
        console.log('Radio is OFF');
    }
    setChannel(channel) {
        console.log(`Radio channel set to ${channel}`);
    }
}

// Abstraction: defines the interface for the "control" part
class RemoteControl {
    constructor(device) {
        this.device = device;
    }
    turnOn() {
        this.device.turnOn();
    }
    turnOff() {
        this.device.turnOff();
    }
    setChannel(channel) {
        this.device.setChannel(channel);
    }
}

// Refined Abstraction: extends the abstraction interface
class AdvancedRemoteControl extends RemoteControl {
    mute() {
        console.log('Device muted');
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Bridge pattern executed..");

    const tv = new TV();
    const radio = new Radio();

    const basicRemote = new RemoteControl(tv);
    basicRemote.turnOn();
    basicRemote.setChannel(5);
    basicRemote.turnOff();

    const advancedRemote = new AdvancedRemoteControl(radio);
    advancedRemote.turnOn();
    advancedRemote.setChannel(101);
    advancedRemote.mute();
    advancedRemote.turnOff();

    console.log("****************************");
}

export {
    executePattern
}

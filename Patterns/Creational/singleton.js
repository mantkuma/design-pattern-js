/**
 * Singleton Pattern
 * 
 * The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.
 * This is useful when exactly one object is needed to coordinate actions across the system.
 * 
 * Example:
 * Imagine you need a single configuration manager or a single database connection throughout your application.
 */

// Singleton Class
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        // Initialize your singleton state here
        this.value = Math.random(); // Example property
        Singleton.instance = this;
        return this;
    }

    getValue() {
        return this.value;
    }
}

// Example usage:
function clientCodeSingleton() {
    const singletonA = new Singleton();
    const singletonB = new Singleton();

    console.log("Are both instances the same?", singletonA === singletonB); // true
    console.log("Singleton value (A):", singletonA.getValue());
    console.log("Singleton value (B):", singletonB.getValue());
}

const executePattern = () => {
    console.log("Creational : Singleton pattern executed..");
    clientCodeSingleton();
    console.log("****************************");
}

export {
    executePattern
}

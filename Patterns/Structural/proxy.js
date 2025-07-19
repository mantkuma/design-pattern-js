/**
 * Proxy Pattern
 * 
 * The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.
 * It is useful for implementing lazy initialization, access control, logging, or remote access.
 * 
 * Example scenario:
 * Suppose you have a resource-intensive object (like loading a large image from disk).
 * The proxy can control access to the real object and instantiate it only when needed.
 */

// Subject: defines the common interface
class Image {
    display() {
        throw new Error('This method should be implemented!');
    }
}

// RealSubject: the real object that does the actual work
class RealImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log(`Loading image from disk: ${this.filename}`);
    }

    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}

// Proxy: controls access to the RealSubject
class ProxyImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.realImage = null;
    }

    display() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Proxy pattern executed..");

    const image = new ProxyImage("test_image.jpg");

    // Image will be loaded from disk only once
    image.display(); // Loads and displays
    image.display(); // Only displays

    console.log("****************************");
}

export {
    executePattern
}

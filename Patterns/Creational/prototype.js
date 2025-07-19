/**
 * Prototype Pattern
 * 
 * The Prototype Pattern is a creational design pattern that allows you to create new objects
 * by copying (cloning) an existing object, known as the prototype. This is useful when the
 * cost of creating a new instance is expensive or complex.
 * 
 * Example:
 * Imagine you have a complex object that is costly to create. Instead of instantiating a new
 * object from scratch, you can clone an existing prototype and modify it as needed.
 */

// Prototype base class
class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    clone() {
        // Simple shallow copy for demonstration
        return new Shape(this.type, this.color);
    }

    draw() {
        console.log(`Drawing a ${this.color} ${this.type}`);
    }
}

// Concrete Prototype
class Circle extends Shape {
    constructor(color, radius) {
        super('Circle', color);
        this.radius = radius;
    }

    clone() {
        // Clone the Circle, including its radius
        return new Circle(this.color, this.radius);
    }

    draw() {
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
    }
}

// Concrete Prototype
class Rectangle extends Shape {
    constructor(color, width, height) {
        super('Rectangle', color);
        this.width = width;
        this.height = height;
    }

    clone() {
        // Clone the Rectangle, including its width and height
        return new Rectangle(this.color, this.width, this.height);
    }

    draw() {
        console.log(`Drawing a ${this.color} rectangle of size ${this.width}x${this.height}`);
    }
}

// Example usage:
function clientCodePrototype() {
    const circle1 = new Circle('red', 10);
    const circle2 = circle1.clone();
    circle2.color = 'blue';
    circle2.radius = 20;

    const rect1 = new Rectangle('green', 5, 8);
    const rect2 = rect1.clone();
    rect2.color = 'yellow';
    rect2.width = 10;

    circle1.draw(); // Drawing a red circle with radius 10
    circle2.draw(); // Drawing a blue circle with radius 20
    rect1.draw();   // Drawing a green rectangle of size 5x8
    rect2.draw();   // Drawing a yellow rectangle of size 10x8
}

const executePattern = () => {
    console.log("Creational : Prototype pattern executed..");
    clientCodePrototype();
    console.log("****************************");
}

export {
    executePattern
}

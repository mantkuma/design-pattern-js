/**
 * Composite Pattern
 * 
 * The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies.
 * It lets clients treat individual objects and compositions of objects uniformly.
 * 
 * Example scenario:
 * Suppose you have a graphics drawing application where shapes (like circles, rectangles) can be grouped into complex shapes.
 * The Composite pattern allows you to treat both simple shapes and groups of shapes in the same way.
 */

// Component: declares the interface for objects in the composition
class Graphic {
    draw() {
        throw new Error('This method should be implemented!');
    }
}

// Leaf: represents leaf objects in the composition
class Circle extends Graphic {
    constructor(name) {
        super();
        this.name = name;
    }
    draw() {
        console.log(`Drawing Circle: ${this.name}`);
    }
}

class Rectangle extends Graphic {
    constructor(name) {
        super();
        this.name = name;
    }
    draw() {
        console.log(`Drawing Rectangle: ${this.name}`);
    }
}

// Composite: represents a group of components (can contain leaves or other composites)
class CompositeGraphic extends Graphic {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(graphic) {
        this.children.push(graphic);
    }

    remove(graphic) {
        this.children = this.children.filter(child => child !== graphic);
    }

    draw() {
        console.log(`Drawing Composite: ${this.name}`);
        for (const child of this.children) {
            child.draw();
        }
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Composite pattern executed..");

    // Create leaf objects
    const circle1 = new Circle("Circle 1");
    const circle2 = new Circle("Circle 2");
    const rectangle1 = new Rectangle("Rectangle 1");

    // Create composite objects
    const group1 = new CompositeGraphic("Group 1");
    group1.add(circle1);
    group1.add(rectangle1);

    const group2 = new CompositeGraphic("Group 2");
    group2.add(circle2);
    group2.add(group1); // group2 contains group1

    // Draw all
    group2.draw();

    console.log("****************************");
}

export {
    executePattern
}

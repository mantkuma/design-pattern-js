/**
 * Flyweight Pattern
 * 
 * The Flyweight Pattern is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.
 * It is especially useful when you need to create a large number of similar objects.
 * 
 * Example scenario:
 * Suppose you are rendering a forest with thousands of trees, but most trees share the same type (shape, color, texture).
 * The Flyweight pattern allows you to share the common state (intrinsic) and store only the unique state (extrinsic) externally.
 */

// Flyweight: stores intrinsic (shared) state
class TreeType {
    constructor(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    draw(x, y) {
        console.log(`Drawing ${this.name} tree of color ${this.color} and texture ${this.texture} at (${x}, ${y})`);
    }
}

// Flyweight Factory: creates and manages flyweight objects
class TreeFactory {
    constructor() {
        this.treeTypes = {};
    }

    getTreeType(name, color, texture) {
        const key = `${name}_${color}_${texture}`;
        if (!this.treeTypes[key]) {
            this.treeTypes[key] = new TreeType(name, color, texture);
        }
        return this.treeTypes[key];
    }
}

// Context: stores extrinsic (unique) state
class Tree {
    constructor(x, y, treeType) {
        this.x = x;
        this.y = y;
        this.treeType = treeType;
    }

    draw() {
        this.treeType.draw(this.x, this.y);
    }
}

// Forest: manages many trees
class Forest {
    constructor() {
        this.trees = [];
        this.treeFactory = new TreeFactory();
    }

    plantTree(x, y, name, color, texture) {
        const treeType = this.treeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, treeType);
        this.trees.push(tree);
    }

    draw() {
        for (const tree of this.trees) {
            tree.draw();
        }
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Flyweight pattern executed..");

    const forest = new Forest();

    // Plant many trees, but only a few unique types are created
    forest.plantTree(1, 2, "Oak", "Green", "Rough");
    forest.plantTree(3, 4, "Pine", "Dark Green", "Smooth");
    forest.plantTree(5, 6, "Oak", "Green", "Rough");
    forest.plantTree(7, 8, "Pine", "Dark Green", "Smooth");
    forest.plantTree(9, 10, "Birch", "Light Green", "Striped");

    forest.draw();

    console.log("****************************");
}

export {
    executePattern
}

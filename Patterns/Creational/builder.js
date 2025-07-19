/**
 * Builder Pattern
 * 
 * The Builder Pattern is a creational design pattern that lets you construct complex objects step by step.
 * The pattern allows you to produce different types and representations of an object using the same construction code.
 * 
 * Example:
 * Imagine you want to build a complex "House" object with many optional parts (windows, doors, garage, pool, etc.).
 * The builder pattern lets you construct different types of houses using the same process.
 */

// Product
class House {
    constructor() {
        this.hasGarage = false;
        this.hasSwimmingPool = false;
        this.numWindows = 0;
        this.numDoors = 0;
        this.floors = 1;
    }

    describe() {
        console.log(`House with ${this.numWindows} windows, ${this.numDoors} doors, ${this.floors} floor(s),` +
            `${this.hasGarage ? " a garage," : ""}${this.hasSwimmingPool ? " a swimming pool," : ""}` +
            " and standard features.");
    }
}

// Builder Interface
class HouseBuilder {
    reset() {}
    setWindows(num) {}
    setDoors(num) {}
    setFloors(num) {}
    addGarage() {}
    addSwimmingPool() {}
    getResult() {}
}

// Concrete Builder
class ConcreteHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.house = new House();
        return this;
    }

    setWindows(num) {
        this.house.numWindows = num;
        return this;
    }

    setDoors(num) {
        this.house.numDoors = num;
        return this;
    }

    setFloors(num) {
        this.house.floors = num;
        return this;
    }

    addGarage() {
        this.house.hasGarage = true;
        return this;
    }

    addSwimmingPool() {
        this.house.hasSwimmingPool = true;
        return this;
    }

    getResult() {
        const result = this.house;
        this.reset(); // Optionally reset for next build
        return result;
    }
}

// Director
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }

    constructSimpleHouse() {
        this.builder.reset()
            .setWindows(4)
            .setDoors(2)
            .setFloors(1);
        return this.builder.getResult();
    }

    constructLuxuryHouse() {
        this.builder.reset()
            .setWindows(10)
            .setDoors(4)
            .setFloors(2)
            .addGarage()
            .addSwimmingPool();
        return this.builder.getResult();
    }
}

// Example usage:
function clientCodeBuilder() {
    const builder = new ConcreteHouseBuilder();
    const director = new Director();
    director.setBuilder(builder);

    const simpleHouse = director.constructSimpleHouse();
    simpleHouse.describe(); // House with 4 windows, 2 doors, 1 floor(s), and standard features.

    const luxuryHouse = director.constructLuxuryHouse();
    luxuryHouse.describe(); // House with 10 windows, 4 doors, 2 floor(s), a garage, a swimming pool, and standard features.

    // Custom house without director
    const customHouse = builder.reset()
        .setWindows(6)
        .setDoors(3)
        .setFloors(1)
        .addGarage()
        .getResult();
    customHouse.describe(); // House with 6 windows, 3 doors, 1 floor(s), a garage, and standard features.
}

const executePattern = () => {
    console.log("Creational : Builder pattern executed..");
    clientCodeBuilder();
    console.log("****************************");
}

export {
    executePattern
}

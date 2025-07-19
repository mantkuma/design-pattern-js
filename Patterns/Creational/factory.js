/**
/**
 * Factory Method Pattern
 * 
 * Factory Method is a creational design pattern that provides an interface 
 * for creating objects in a superclass, but allows subclasses to alter the 
 * type of objects that will be created.
 * Example 
 * Imagine that you’re creating a logistics management application. The first 
 * version of your app can only handle transportation by trucks, so the bulk 
 * of your code lives inside the Truck class.
 * After a while, your app becomes pretty popular. Each day you receive dozens 
 * of requests from sea transportation companies to incorporate sea logistics 
 * into the app.
 * 
 *For example, both Truck and Ship classes should implement the Transport interface, 
 which declares a method called deliver. Each class implements this method differently: 
 trucks deliver cargo by land, ships deliver cargo by sea. The factory method in the 
 RoadLogistics class returns truck objects, whereas the factory method in the SeaLogistics 
 class returns ships.
 */

// Logistic App Example - Factory Method Pattern

// Product interface
class Transport {
    deliver() {
        throw new Error('This method should be overridden!');
    }
}

// Concrete Products
class Truck extends Transport {
    deliver() {
        return 'Delivering by land in a box (Truck)';
    }
}

class Ship extends Transport {
    deliver() {
        return 'Delivering by sea in a container (Ship)';
    }
}

// Creator (Factory)
class Logistics {
    createTransport() {
        throw new Error('This method should be overridden!');
    }

    planDelivery() {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

// Concrete Creators
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}

// Example usage:
function clientCode(logistics) {
    console.log(logistics.planDelivery());
}


const executePattern = () => {
// Usage demonstration
console.log("Creational :  Factory pattern executed..")
const roadLogistics = new RoadLogistics();
clientCode(roadLogistics); // Output: Delivering by land in a box (Truck)

const seaLogistics = new SeaLogistics();
clientCode(seaLogistics); // Output: Delivering by sea in a container (Ship)

console.log("****************************");
}

export {
    executePattern
}

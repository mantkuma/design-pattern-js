# Creational Design Patterns

## Factory Method Pattern - Logistics App Example

### Overview

The **Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. This pattern is particularly useful when you need to create objects without specifying their exact classes.

### Problem

Imagine you're creating a logistics management application. Initially, your app only handles transportation by trucks, so most of your code lives inside the `Truck` class. However, as your app becomes popular, you receive requests from sea transportation companies to incorporate sea logistics into the app.

**Challenges:**
- Adding new transport types requires modifying existing code
- Client code becomes tightly coupled to concrete classes
- Violates the Open/Closed Principle (open for extension, closed for modification)

### Solution

The Factory Method pattern solves this by:
1. Creating a common interface for all transport types
2. Moving object creation logic to specialized factory classes
3. Allowing new transport types without modifying existing code

### Pattern Structure

```
Transport (Interface)
├── deliver() method
├── Truck (Concrete Product)
│   └── deliver() → "Delivering by land in a box (Truck)"
└── Ship (Concrete Product)
    └── deliver() → "Delivering by sea in a container (Ship)"

Logistics (Abstract Creator)
├── createTransport() (Factory Method)
├── planDelivery() (Template Method)
├── RoadLogistics (Concrete Creator)
│   └── createTransport() → new Truck()
└── SeaLogistics (Concrete Creator)
    └── createTransport() → new Ship()
```

### Key Components

#### 1. Product Interface (`Transport`)
```javascript
class Transport {
    deliver() {
        throw new Error('This method should be overridden!');
    }
}
```
- Declares the interface that all concrete products must implement
- Defines the `deliver()` method contract

#### 2. Concrete Products (`Truck`, `Ship`)
```javascript
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
```
- Implement the `Transport` interface
- Provide different implementations of the `deliver()` method
- Each represents a specific way of transportation

#### 3. Creator Abstract Class (`Logistics`)
```javascript
class Logistics {
    createTransport() {
        throw new Error('This method should be overridden!');
    }

    planDelivery() {
        const transport = this.createTransport();
        return transport.deliver();
    }
}
```
- Declares the factory method (`createTransport()`)
- Contains the template method (`planDelivery()`) that uses the factory method
- May contain default implementation of business logic

#### 4. Concrete Creators (`RoadLogistics`, `SeaLogistics`)
```javascript
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
```
- Override the factory method to return specific transport types
- Each creator is responsible for creating one type of product
- Don't have to be subclasses - can be separate classes implementing a common interface

### How It Works

1. **Client Code**: Works with the abstract `Logistics` class
2. **Factory Method Call**: When `planDelivery()` is called, it internally uses `createTransport()`
3. **Product Creation**: The concrete creator determines which concrete product to create
4. **Result**: Client receives a `Transport` object without knowing its concrete class

### Example Usage

```javascript
// Client code - works with abstractions
function clientCode(logistics) {
    console.log(logistics.planDelivery());
}

// Usage demonstration
const roadLogistics = new RoadLogistics();
clientCode(roadLogistics); // Output: Delivering by land in a box (Truck)

const seaLogistics = new SeaLogistics();
clientCode(seaLogistics); // Output: Delivering by sea in a container (Ship)
```

### Benefits

- **✅ Flexibility**: Easily add new transport types without modifying existing code
- **✅ Decoupling**: Client code works with abstractions, not concrete classes
- **✅ Single Responsibility**: Product creation code is centralized in creators
- **✅ Open/Closed Principle**: New products can be introduced without breaking existing code
- **✅ Polymorphism**: Client code can work with any transport type through the common interface
- **✅ Testability**: Easy to mock and test with different transport implementations

### When to Use

- **✅ Unknown Object Types**: When you don't know beforehand the exact types and dependencies of objects
- **✅ Extensibility**: When you want to provide users with the ability to extend your library
- **✅ Centralized Creation**: When you want to centralize product creation logic
- **✅ Parallel Hierarchies**: When implementing parallel class hierarchies
- **✅ Reuse**: When you want to reuse existing objects instead of building new ones

### When NOT to Use

- **❌ Simple Object Creation**: When object creation is straightforward and doesn't vary
- **❌ Performance Critical**: When the overhead of the pattern is not justified
- **❌ Over-engineering**: When the problem can be solved with simpler approaches

### Related Patterns

- **Abstract Factory**: Often implemented with factory methods; creates families of related objects
- **Template Method**: Factory method is often a specialization of template method
- **Prototype**: Doesn't require subclassing but needs initialization
- **Builder**: Focuses on constructing complex objects step by step

### Implementation Notes

- The factory method can be abstract or have a default implementation
- Concrete creators can be implemented as separate classes or subclasses
- The pattern can be combined with other patterns for more complex scenarios
- Consider using dependency injection for even more flexibility

### Real-World Applications

- **UI Frameworks**: Creating different types of UI components
- **Database Connections**: Creating different database adapters
- **File Systems**: Creating different file format handlers
- **Game Development**: Creating different types of game objects
- **Plugin Systems**: Creating different plugin implementations

### Code Example

See `factory.js` for the complete implementation with detailed comments and usage examples.
# Design Patterns in JavaScript

A comprehensive collection of design patterns implemented in JavaScript with practical examples and use cases.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Implementation Status](#implementation-status)
- [Getting Started](#getting-started)
- [Design Patterns](#design-patterns)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project demonstrates various design patterns in JavaScript, providing practical implementations and real-world examples. Design patterns are proven solutions to common software design problems that help create maintainable, scalable, and reusable code.

## Project Structure

```
design-pattern-js/
├── Patterns/           # Design pattern implementations
│   ├── Creational/     # Factory, Singleton, Builder, Prototype, etc.
│   │   ├── singleton.js
│   │   ├── factory.js
│   │   ├── builder.js
│   │   ├── prototype.js
│   │   └── index.js
│   ├── Structural/     # Adapter, Decorator, Facade, etc.
│   │   ├── adapter.js
│   │   ├── brighe.js
│   │   ├── composite.js
│   │   ├── decorator.js
│   │   ├── facade.js
│   │   ├── flyweight.js
│   │   └── proxy.js
│   └── Behavioral/     # Observer, Strategy, Command, etc.
│       ├── chain-of-responsibility.js
│       ├── command.js
│       ├── iterator.js
│       ├── mediator.js
│       ├── memento.js
│       ├── observer.js
│       ├── state.js
│       ├── strategy.js
│       ├── template.js
│       └── visitor.js
├── examples/           # Usage examples and demos
├── tests/             # Unit tests for patterns
├── index.js           # Main entry point
└── README.md          # This file
```

## Implementation Status

### ✅ File Structure Created
All design pattern files have been set up and are ready for implementation:

**Creational Patterns (4/5):**
- [x] Singleton - `Patterns/Creational/singleton.js`
- [x] Factory Method - `Patterns/Creational/factory.js`
- [x] Builder - `Patterns/Creational/builder.js`
- [x] Prototype - `Patterns/Creational/prototype.js`
- [ ] Abstract Factory - `Patterns/Creational/abstract-factory.js`

**Structural Patterns (7/7):**
- [x] Adapter - `Patterns/Structural/adapter.js`
- [x] Bridge - `Patterns/Structural/brighe.js`
- [x] Composite - `Patterns/Structural/composite.js`
- [x] Decorator - `Patterns/Structural/decorator.js`
- [x] Facade - `Patterns/Structural/facade.js`
- [x] Flyweight - `Patterns/Structural/flyweight.js`
- [x] Proxy - `Patterns/Structural/proxy.js`

**Behavioral Patterns (10/10):**
- [x] Chain of Responsibility - `Patterns/Behavioral/chain-of-responsibility.js`
- [x] Command - `Patterns/Behavioral/command.js`
- [x] Iterator - `Patterns/Behavioral/iterator.js`
- [x] Mediator - `Patterns/Behavioral/mediator.js`
- [x] Memento - `Patterns/Behavioral/memento.js`
- [x] Observer - `Patterns/Behavioral/observer.js`
- [x] State - `Patterns/Behavioral/state.js`
- [x] Strategy - `Patterns/Behavioral/strategy.js`
- [x] Template Method - `Patterns/Behavioral/template.js`
- [x] Visitor - `Patterns/Behavioral/visitor.js`

### 🚧 Next Steps
- [ ] Implement pattern logic in each file
- [ ] Add usage examples
- [ ] Create unit tests
- [ ] Add documentation for each pattern

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd design-pattern-js

# Install dependencies (if any)
npm install
```

### Running Examples

```bash
# Run a specific pattern example
node examples/singleton-example.js

# Run all examples
npm run examples
```

## Design Patterns

### Creational Patterns

Creational patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.

- **[Singleton](Patterns/Creational/singleton.js)** - Ensures a class has only one instance
- **[Factory Method](Patterns/Creational/factory.js)** - Creates objects without specifying their exact classes
- **[Abstract Factory](Patterns/Creational/abstract-factory.js)** - Creates families of related objects
- **[Builder](Patterns/Creational/builder.js)** - Constructs complex objects step by step
- **[Prototype](Patterns/Creational/prototype.js)** - Creates new objects by cloning an existing object

### Structural Patterns

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

- **[Adapter](Patterns/Structural/adapter.js)** - Allows incompatible interfaces to work together
- **[Bridge](Patterns/Structural/brighe.js)** - Splits a large class into abstraction and implementation
- **[Composite](Patterns/Structural/composite.js)** - Composes objects into tree structures
- **[Decorator](Patterns/Structural/decorator.js)** - Adds new behaviors to objects dynamically
- **[Facade](Patterns/Structural/facade.js)** - Provides a simplified interface to a complex subsystem
- **[Flyweight](Patterns/Structural/flyweight.js)** - Reduces the cost of creating and manipulating objects
- **[Proxy](Patterns/Structural/proxy.js)** - Provides a substitute for another object

### Behavioral Patterns

Behavioral patterns are concerned with communication between objects, how objects interact and distribute responsibility.

- **[Chain of Responsibility](Patterns/Behavioral/chain-of-responsibility.js)** - Passes requests along a chain of handlers
- **[Command](Patterns/Behavioral/command.js)** - Turns a request into a stand-alone object
- **[Iterator](Patterns/Behavioral/iterator.js)** - Accesses elements of a collection without exposing its structure
- **[Mediator](Patterns/Behavioral/mediator.js)** - Reduces coupling between components by making them communicate indirectly
- **[Memento](Patterns/Behavioral/memento.js)** - Saves and restores the previous state of an object
- **[Observer](Patterns/Behavioral/observer.js)** - Lets you define a subscription mechanism to notify multiple objects
- **[State](Patterns/Behavioral/state.js)** - Lets an object alter its behavior when its internal state changes
- **[Strategy](Patterns/Behavioral/strategy.js)** - Lets you define a family of algorithms and make them interchangeable
- **[Template Method](Patterns/Behavioral/template.js)** - Defines the skeleton of an algorithm in a method
- **[Visitor](Patterns/Behavioral/visitor.js)** - Separates algorithms from the objects on which they operate

## Usage Examples

Each design pattern includes:
- **Implementation** - The core pattern code
- **Example** - Practical usage demonstration
- **Use Cases** - When to apply the pattern
- **Benefits** - Advantages of using the pattern
- **Trade-offs** - Potential drawbacks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-pattern`)
3. Commit your changes (`git commit -m 'Add amazing pattern'`)
4. Push to the branch (`git push origin feature/amazing-pattern`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Author:** Mantosh

**Version:** 1.0.0

For questions or suggestions, please open an issue on GitHub.

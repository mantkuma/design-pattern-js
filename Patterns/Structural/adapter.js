/**
 * Adapter Pattern
 * 
 * The Adapter Pattern allows objects with incompatible interfaces to collaborate.
 * It acts as a wrapper that translates one interface into another expected by the client.
 * 
 * Example scenario:
 * Suppose you have a legacy system that provides temperature in Fahrenheit,
 * but your new system expects temperature in Celsius.
 * The Adapter will convert the interface of the legacy system to match the new system's expectations.
 */

// Adaptee: Legacy service with an incompatible interface
class FahrenheitThermometer {
    getTemperatureF() {
        // Returns temperature in Fahrenheit
        return 98.6;
    }
}

// Target: The interface expected by the client
class CelsiusThermometer {
    getTemperatureC() {
        throw new Error('This method should be implemented!');
    }
}

// Adapter: Makes FahrenheitThermometer compatible with CelsiusThermometer
class ThermometerAdapter extends CelsiusThermometer {
    constructor(fahrenheitThermometer) {
        // The 'super()' call invokes the constructor of the parent class (CelsiusThermometer).
        // This is required in JavaScript when extending a class and using 'this' in the constructor.
        super();
        this.fahrenheitThermometer = fahrenheitThermometer;
    }

    getTemperatureC() {
        const tempF = this.fahrenheitThermometer.getTemperatureF();
        // Convert Fahrenheit to Celsius
        return ((tempF - 32) * 5) / 9;
    }
}

// Client code expects to work with CelsiusThermometer
function clientCodeAdapter(thermometer) {
    console.log(`Temperature in Celsius: ${thermometer.getTemperatureC().toFixed(2)}°C`);
}

// Example usage:
const executePattern = () => {
    console.log("Structural : Adapter pattern executed..");

    // Legacy thermometer (Fahrenheit)
    const legacyThermometer = new FahrenheitThermometer();
    console.log(`Temperature in Fahrenheit: ${legacyThermometer.getTemperatureF()}°F`);

    // Adapter makes it compatible with Celsius interface
    const adapter = new ThermometerAdapter(legacyThermometer);

    // Client code works with the adapter as if it's a Celsius thermometer
    clientCodeAdapter(adapter);

    console.log("****************************");
}

export {
    executePattern
}

/**
 * Facade Pattern
 * 
 * The Facade Pattern provides a simplified interface to a complex subsystem.
 * It hides the complexities of the subsystem and provides an easy-to-use interface for the client.
 * 
 * Example scenario:
 * Suppose you have a home theater system with multiple components (DVD player, projector, lights, etc.).
 * The Facade will provide a simple interface to start and stop the movie, hiding the details of each component.
 */

// Subsystem classes
class DVDPlayer {
    on() {
        console.log("DVD Player is ON");
    }
    play(movie) {
        console.log(`Playing movie: ${movie}`);
    }
    off() {
        console.log("DVD Player is OFF");
    }
}

class Projector {
    on() {
        console.log("Projector is ON");
    }
    setInput(input) {
        console.log(`Projector input set to: ${input}`);
    }
    off() {
        console.log("Projector is OFF");
    }
}

class TheaterLights {
    dim(level) {
        console.log(`Lights dimmed to ${level}%`);
    }
    on() {
        console.log("Lights are ON");
    }
}

// Facade
class HomeTheaterFacade {
    constructor(dvdPlayer, projector, lights) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.lights = lights;
    }

    watchMovie(movie) {
        console.log("Get ready to watch a movie...");
        this.lights.dim(10);
        this.projector.on();
        this.projector.setInput("DVD");
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
    }

    endMovie() {
        console.log("Shutting movie theater down...");
        this.dvdPlayer.off();
        this.projector.off();
        this.lights.on();
    }
}

// Client code
const executePattern = () => {
    console.log("Structural : Facade pattern executed..");

    const dvdPlayer = new DVDPlayer();
    const projector = new Projector();
    const lights = new TheaterLights();

    const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, lights);

    homeTheater.watchMovie("Inception");
    homeTheater.endMovie();

    console.log("****************************");
}

export {
    executePattern
}

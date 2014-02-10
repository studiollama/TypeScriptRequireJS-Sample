import Greeter = require("Source/Greeter/greeter");

export class Main {
    greeter: Greeter;

    constructor() {
        this.greeter = new Greeter();
        this.greeter.start();
    }
}

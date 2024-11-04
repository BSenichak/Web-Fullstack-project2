import Transport from "./Transport.js";

export default class Bicycle extends Transport {
    move() {
        console.log("Велосипед їде по велодоріжці");
    }
    
    speed() {
        return 20;
    }
}
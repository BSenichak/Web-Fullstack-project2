import Transport from "./Transport.js";

export default class Tram extends Transport {
    move() {
        console.log("Трамвай рухається по рейках");
    }
    
    speed() {
        return 30;
    }
}
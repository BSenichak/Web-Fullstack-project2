import Transport from "./Transport.js";

export default class Bus extends Transport {
    move() {
        console.log("Автобус їде по дорозі");
    }
    
    speed() {
        return 40; 
    }
}
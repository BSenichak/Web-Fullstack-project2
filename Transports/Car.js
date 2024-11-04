import Transport from "./Transport.js";

export default class Car extends Transport {
    move() {
        console.log("Автомобіль їде по дорозі");
    }
    
    speed() {
        return 60; 
    }
}


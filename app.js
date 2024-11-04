//task 1
/*
import myMath from "./myMath/myMath.js";

console.log(myMath.add(0, 0));
console.log(myMath.subtruct(0, 0));
console.log(myMath.multiply(0, 0));
console.log(myMath.divide(0, 0));
*/

//task 2
/*
import User from "./User.js";

const user1 = new User();
console.log(user1.getId());

const user2 = new User();
console.log(user2.getId());

console.log(User.getUserCount()); 
*/

//task 3
import Bus from "./Transports/Bus.js";
import Car from "./Transports/Car.js";
import Bicycle from "./Transports/Bicycle.js";
import Tram from "./Transports/Tram.js";

function travelInfo(transportArray) {
    transportArray.forEach(transport => {
        transport.move();
        console.log(`зі швидкістю ${transport.speed()} км/год.\n`);
    });
}

const transports = [new Car(), new Bus(), new Tram(), new Bicycle()];

travelInfo(transports);
'use strict';

function Car(brand) {
    this.wheels = 4;
    this.brand = brand;
}


//This below does not bind this so it wont work
//Car.prototype.forward = () => { }
Car.prototype.forward = function() {
    console.log(`I'm riding on my ${this.wheels}`);
}


const car = new Car();

car.forward();
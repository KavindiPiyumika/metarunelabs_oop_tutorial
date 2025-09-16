var Driver = /** @class */ (function () {
    function Driver() {
    }
    //set method
    Driver.prototype.setName = function (name) {
        this.name = name;
    };
    //get method
    Driver.prototype.getName = function () {
        return this.name;
    };
    Driver.prototype.setSpeed = function (speed) {
        if (speed > 100) {
            console.log('You cant drive the car above 100 speed');
        }
        this.speed = speed;
    };
    Driver.prototype.getSpeed = function () {
        return this.speed;
    };
    return Driver;
}());
var Driver1 = new Driver();
Driver1.setName('John');
Driver1.setSpeed(120);
Driver1.setSpeed(80);
console.log("Driver1 name is ".concat(Driver1.getName(), ",He drives a car."));
console.log("Driver1 has speed ".concat(Driver1.getSpeed()));

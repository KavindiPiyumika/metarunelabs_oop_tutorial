var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electronics = /** @class */ (function () {
    function Electronics() {
    }
    Electronics.prototype.powerOn = function () {
        console.log('The device is powered on.');
    };
    return Electronics;
}());
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Computer.prototype.compute = function () {
        console.log('The computer is computing.');
    };
    return Computer;
}(Electronics));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laptop.prototype.portable = function () {
        console.log('The laptop is portable.');
    };
    return Laptop;
}(Computer));
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smartphone.prototype.call = function () {
        console.log('The smartphone can make calls.');
    };
    return Smartphone;
}(Computer));
var mylaptop = new Laptop();
mylaptop.compute(); //inherited from computer
mylaptop.portable(); //inherited from laptop
mylaptop.powerOn(); //inherited from electronics
var myphone = new Smartphone();
myphone.call();
myphone.compute();
myphone.powerOn();
var mycomputer = new Computer();
mycomputer.compute();
mycomputer.powerOn();

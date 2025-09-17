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
//Parent class
var Employer = /** @class */ (function () {
    function Employer() {
    }
    //methods
    Employer.prototype.displayInfo = function () {
        console.log("John is an employer at Sungroup.");
    };
    Employer.prototype.hireEmployee = function () {
        console.log("New employee hired,Total employees 30.");
    };
    Employer.prototype.fireEmployee = function () {
        console.log("One employees fire.");
    };
    return Employer;
}());
//sub classes
//Manager IS-A Employer
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.displayInfo = function () {
        console.log("Anil is an employer at Sungroup.");
    };
    Manager.prototype.assignTask = function () {
        console.log("".concat(this.name, " assigned task.in ").concat(this.company, "."));
    };
    return Manager;
}(Employer));
var CEO = /** @class */ (function (_super) {
    __extends(CEO, _super);
    function CEO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CEO;
}(Employer));
var manager = new Manager();
var ceo = new CEO();
manager.displayInfo();
ceo.displayInfo();

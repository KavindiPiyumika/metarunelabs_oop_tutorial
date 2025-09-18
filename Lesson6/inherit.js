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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.displayInfo = function () {
        console.log("show the student information.");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this); //call parent method
        console.log("Grade");
    };
    return Student;
}(Person));
var student = new Student();
student.displayInfo();
var Tutor = /** @class */ (function (_super) {
    __extends(Tutor, _super);
    function Tutor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tutor.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this); //call parent method
        console.log("Tutor");
    };
    return Tutor;
}(Person));
var tutor = new Tutor();
tutor.displayInfo();

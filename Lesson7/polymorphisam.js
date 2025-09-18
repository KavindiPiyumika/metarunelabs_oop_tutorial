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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        console.log('Area is not defined.');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this; // call parent constructor
        _this.radius = radius;
        return _this;
    }
    //overriding parent area method
    Circle.prototype.area = function () {
        console.log("Circle area = ".concat(Math.PI * this.radius * this.radius));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this; //call parent constructpr
        _this.width = width;
        _this.height = height;
        return _this;
    }
    //overriding parent area method
    Rectangle.prototype.area = function () {
        console.log("Rectangle area = ".concat(this.width * this.height));
    };
    return Rectangle;
}(Shape));
var shapes = [
    new Circle(5),
    new Rectangle(4, 6),
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    shape.area(); // same method call different behavior(polymorphisam)
}

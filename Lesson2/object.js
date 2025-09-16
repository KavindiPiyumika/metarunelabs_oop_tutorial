var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.read = function () {
        console.log("Hello,my name is ".concat(this.name));
    };
    return Teacher;
}());
var t1 = new Teacher();
t1.name = 'Shan';
t1.age = 20;
t1.isPresent = true;
var t2 = new Teacher();
t2.name = 'Kavi';
t2.age = 21;
t2.isPresent = true;
t1.read();
t2.read();

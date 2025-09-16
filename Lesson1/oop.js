var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.read = function () {
        console.log('Hello World');
    };
    return Student;
}());
var s1 = new Student();
s1.name = 'Shan';
s1.age = 20;
s1.read();

var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
var Spy = /** @class */ (function () {
    function Spy() {
    }
    Spy.prototype.cat = function () {
        console.log('Spy performs Cat actions');
    };
    Spy.prototype.eat = function () {
        this.hunger -= 1;
        console.log('Spy eats,hunger');
    };
    return Spy;
}());
var hero = new Spy();
var enemy = new Spy();
hero.cat();
enemy.eat();

abstract class Animal{
    abstract makeSound(): void; // abstract method no body implemented by subclasses

    move(){
        console.log('The animal moves');
    }
}

class Cat extends Animal{
    makeSound() {
        console.log('Woof! Woof!');
    }
}

class Dog extends Animal{
    makeSound() {
        console.log('Meow! Meow!');
    }
}

const dog = new Dog();
dog.makeSound();
dog.move();

const cat = new Cat();
cat.makeSound();
cat.move();
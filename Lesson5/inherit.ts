class Electronics{
    powerOn(){
        console.log('The device is powered on.');
    }
}

class Computer extends Electronics{
    compute(){
        console.log('The computer is computing.');
    }
}

class Laptop extends Computer{
    portable(){
        console.log('The laptop is portable.');
    }
}
 
class Smartphone extends Computer{
    call(){
        console.log('The smartphone can make calls.')
    }

}

const mylaptop = new Laptop();
mylaptop.compute(); //inherited from computer
mylaptop.portable();//inherited from laptop
mylaptop.powerOn(); //inherited from electronics

const myphone = new Smartphone();
myphone.call();
myphone.compute();
myphone.powerOn();

const mycomputer=new Computer();
mycomputer.compute();
mycomputer.powerOn(); 

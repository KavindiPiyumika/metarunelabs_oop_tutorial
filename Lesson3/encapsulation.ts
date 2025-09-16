class Driver{
   private name!: string;
   private speed!:number;

   //set method
   setName(name:string) {
    this.name= name;
   }
    //get method
    getName(){
        return this.name;
    }

    setSpeed(speed:number){
        if(speed>100) {
            console.log('You cant drive the car above 100 speed');
        }
        this.speed =speed;
    }

    getSpeed(){
        return this.speed;
    }
}


const Driver1 = new Driver();
Driver1.setName('John');
Driver1.setSpeed(120);
Driver1.setSpeed(80);

console.log(`Driver1 name is ${Driver1.getName()},He drives a car.`);
console.log(`Driver1 has speed ${Driver1.getSpeed()}`);
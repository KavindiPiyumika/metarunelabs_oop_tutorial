//Parent class
class Employer{
   protected name!:string;
   protected company!: string;
    employeesCount!:number;

 //methods
 displayInfo(){
    console.log(`John is an employer at Sungroup.`);
 }

 hireEmployee(){
    console.log(`New employee hired,Total employees 30.`);
 }

 fireEmployee(){
    console.log(`One employees fire.`);
 }
}

//sub classes

//Manager IS-A Employer
class Manager extends Employer{
    owner!:string;  //Manager HAS-A owner

displayInfo(){                                    //method overriding
    console.log(`Anil is an employer at Sungroup.`);
}

assignTask(){
    console.log(`${this.name} assigned task.in ${this.company}.`);
}
}

class CEO extends Employer{

}

const manager = new Manager();
const ceo = new CEO();

manager.displayInfo();
ceo.displayInfo();
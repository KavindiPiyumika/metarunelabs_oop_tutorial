class Person{
    name!:string;
    age! :number;

    displayInfo(){
        console.log(`show the student information.`);
    }
}

class Student extends Person{
  grade!:number;

  displayInfo() {
    super.displayInfo();  //call parent method
    console.log(`Grade`);
  }
}
const student = new Student();
student.displayInfo();

 class Tutor extends Person{
subject!:string;

displayInfo(){
    super.displayInfo();   //call parent method
    console.log(`Tutor`);
 }
}
const tutor = new Tutor();
tutor.displayInfo();


 
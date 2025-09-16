class Student {
    name!:string;
    age!:number;

    read(){
        console.log('Hello World')
    }
}


const s1 = new Student()
s1.name = 'Shan';
s1.age = 20;
s1.read();
class Teacher {
    name!:string;
    age!:number;
    isPresent!:boolean;

    read(){
        console.log(`Hello,my name is ${this.name}`);
    }
}

const t1 = new Teacher()
t1.name = 'Shan';
t1.age = 20;
t1.isPresent=true;

const t2 = new Teacher()
t2.name ='Kavi';
t2.age = 21;
t2.isPresent = true;

t1.read();
t2.read();
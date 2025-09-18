class Shape{
    area(){
        console.log('Area is not defined.')
    }
}
 class Circle extends Shape{
    radius:number;

    constructor(radius:number){
        super();      // call parent constructor
        this.radius=radius;
    }
    //overriding parent area method
    area(){
        console.log(`Circle area = ${Math.PI * this.radius * this.radius}`);
    }
 }

 class Rectangle extends Shape{
    width:number;
    height:number;

    constructor(width:number,height:number){
        super();    //call parent constructpr
        this.width=width;
        this.height=height;
    }
    //overriding parent area method
   area(){
    console.log(`Rectangle area = ${this.width * this.height}`);
   }
    
 }
 const shapes: Shape[]=[
    new Circle(5),
    new Rectangle(4,6),
 ];

 for(let shape of shapes){
    shape.area(); // same method call different behavior(polymorphisam)
 }
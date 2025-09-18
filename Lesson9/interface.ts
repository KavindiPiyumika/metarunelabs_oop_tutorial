abstract class Character{
    hunger!: number;
    health!:number;

    abstract cat ():void;
}
 interface Hero extends Character{
    heroId:number;
 }

 interface Enemy extends Character{
    enemyId:number;
 }

 class Spy implements Hero,Enemy{
    hunger!: number;
    health!: number;
    heroId!: number;
    enemyId!: number;

    cat(){
        console.log('Spy performs Cat actions');
    }

    eat(){
        this.hunger -=1;
        console.log('Spy eats,hunger')
    }
 }

 const hero:Hero= new Spy();
 const enemy:Enemy= new Spy();

 (hero as Spy).cat();
 (enemy as Spy).eat();
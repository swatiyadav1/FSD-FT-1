class Person{
    
    getName(){

        return "swati";
    }
}

let p = new Person(); 
// default constructor
let name1 = p.getName();
console.log(name1);


class Dhiraj{
    getName(){
        return this.phone;
    }

}
let p1=new Dhiraj("4563217896");
console.log(p1);


console.log(typeof Person);

console.log(p1 instanceof Person); //fasle
console.log(p1 instanceof Dhiraj); //true

console.log(p1 instanceof Object); //true


//class vs custom type
//class are not hoisted

class Person1{
    
    constructor(name){
        this._name = name; //_name
    }
    get name(){

        return this._name;
    }
    set name(newName){
        newName = newName.trim();
        if(newName === '')
        {
            throw 'the name cannot be empty';
        }
        this._name = newName;


    }
}

let perName = new Person1("Ayush tripathi");
console.log(perName);

// console.log(perName.getName());


// perName.setName("swati yadav");
// console.log(perName.getName());


let name = perName.name;


perName.name = "arya";

console.log(perName.name);


//Class Inheritance  - 
class Animal{
    constructor(legs){
        this.legs=legs;
    }
    walk(){
        console.log("walking on "+ this.legs);
    }
}

class Bird extends Animal{
    constructor(legs){
        super(legs); // invokes the constructor of super class
    }
    walk(){

        super.walk();  // shadowing
        console.log("birds can fly");

    }


}

let b = new Bird(2);
b.walk();


//shadowing methods

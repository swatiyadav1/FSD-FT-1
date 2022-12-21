//prototype chain
//ends when s prototype has null

let person = {"name":"swati"};

console.log(person);
console.log(person.name);

console.log(person.toString());

//built in Object()

console.log(typeof person);

//

function Person1(first,last,age){
    this.first = first;
    this.last =last;
    this.age=age;

}
Person1.prototype.nationality = "Indian";
Person1.prototype.name = function(){
    return this.first + " "+this.last;
}
const myName = new Person1("Arya","Yadav",3);


console.log("My aname is - "+myName.first + " "+ myName.last+" "+myName.nationality);
console.log(myName.name());

// Person1.nationality = "Indian";



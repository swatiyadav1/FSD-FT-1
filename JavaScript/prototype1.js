function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}


Person.prototype.nationality = "Indian"; 



Person.prototype.getFullName = function(){
    return this.firstName+" "+this.lastName;
}

//Person.prototype


let p = new Person("John","Doe");
let p1 = new Person("Arya","Doe");



console.log(p.getFullName());
console.log(p1.getFullName());

console.log(p.nationality);

console.log(Person);
console.log(p);
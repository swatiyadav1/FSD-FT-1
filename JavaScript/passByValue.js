let person = {
    name:"John",
    age:24
};


console.log(obj);
function incAge(obj){
    obj.age += 1;



    //refernce another object
    obj = {name:"swati",age:22};

}





incAge(person);

console.log(person);

//js it passes all arguments to a function by value
//function args trhey are local variables

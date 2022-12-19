/*
Arrays - 
complex varaibels
that allows us nto store more than one value
single variable name 

//array elements
//primitive type
..objects
functions
even array
//array eleent has an index
0-size-1
0-lower bound
size-1 - upper bound

*/


//declare an array
let myArray1 = [10,20,30,20,40];
let myArray2 = ["a","b","c","d","e"];
let myArray3 = [true,false,true,true,false];

var myArray4 = new Array(10,20,30,40,50);


let myArray5 = [1,false,"abc",true,1.6]; //differnt types

console.log(myArray1.length);

myArray1[5]=80;
console.log(myArray1);

console.log(myArray1[2]);
console.log(myArray3[4]);

console.log(myArray3[6]);

//at()


console.log(myArray3.at(2));

console.log(myArray5.at(2));
console.log(myArray5.at(-4));

//iterate an array-
//Array.forEach()

myArray2.forEach(f => console.log(f));

for(let i =0; i< myArray2.length; i++){
    console.log(i+" = "+myArray2[i]);
}

for(let j of myArray3){
    console.log(j);
}


console.log(myArray4.length);
for(let k in myArray4){
    
    console.log(k+" = "+myArray4[k]);
}

let city = ["lko","delhi","benaras","jaipur"];

console.log(city);
city[2]= "mumbai";

console.log(city);

/*Topic for today -

Arrays
Array Methods
Array Sort
Array Iteration
*/
city[4]="kolkata";
console.log(city);


city[8]="chennai";
console.log(city);



city.push("agra");
console.log(city);

city.unshift("merrut","allahabad");
console.log(city);


//pop shift

var l = city.pop();

console.log(l);
console.log(city);


var f = city.shift();
console.log(f);
console.log(city);

//Adding and removing of elements
/*
splice() 


arrNamme.splice(startIndex,delecount,el,el...)

*/

var c = [1,2,3,4,5];

var r =  c.splice(0,1);
console.log(c);


var c = [1,2,3,4,5];
var i = c.splice(2,0,10);
console.log(c);


var c = [1,2,3,4,5];
var d= c.splice(2,1,20);
console.log(c);

//join()

var c = [1,2,3,4,5];

console.log(c.join());
console.log(c.join(" "));
console.log(c.join("/"));



//Extract a portion of an array

//slice(sI,EI)

var c = [1,2,3,4,5];
var s = c.slice(3,-1);

console.log(s);

//merge array

var c = [1,2,3,4,5];
var d = [3,4,5,6,7,8];
var h = [3,4,5,6,7,8];
var l = [3,4,5,6,7,8];


var e = c.concat(d,l,h);
console.log(e);


//indexOf()  lastIndexOf //-1

var c = [1,2,3,4,5,3,6,24,3];
console.log(c.indexOf(3));
console.log(c.lastIndexOf(3));
console.log(c.indexOf(0));


console.log(c.indexOf(4,3));

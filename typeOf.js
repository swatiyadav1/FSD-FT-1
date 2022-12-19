//typeOf
console.log(typeof "abc");

var a= 123;
console.log(typeof a);


console.log(typeof function myFunc(){})

console.log(typeof [1,2,3,4]);
console.log(typeof null);

//typeof - returns a srong with the type of operand

console.log("abc".constructor);
console.log(new Date().constructor);

console.log(typeof undefined);

var s  = "";

console.log(typeof s);

// null === undefined
// null == undefined


//instanceof 
const books = ["abc","dcf","bgh","oiu"];

console.log(books instanceof Array);
console.log(books instanceof String);
console.log(books instanceof Object);


console.log(Number("123"));
console.log(Number(""));  //0

//parseInt and parseFloat 

console.log(Number("abc"));

//+

let y = "8";
let x = +y;

console.log(typeof x);

//Numbers to Strings

var b = String(23);
console.log(typeof b);

console.log(String(123));

//toString()

console.log((10+3*5).toString());

//Date to numbers
var d =  new Date();
console.log(Number(d));

console.log(String(d));

console.log(Number(false));
console.log(Number(true));
console.log(String(true));
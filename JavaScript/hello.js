/* this is a 
sum operation
 created by swati yadav
 dated - 12.12.22

 */




// var num1 ; //undefined

// num1 = 40;
// var num2 = 450;
// var sum= num1+num2;
// console.log(sum);

// var str = "Swati yadav";
// var isMentor = true;


// var a=1,b=3,c=6;



//let and const

// const c1 =  50;
// c1=30;
// console.log(c1);


//case senstivity

// document.getElementById("para").innerHTML="Hello World in paragraph";



// let a = 20;
// let a=40;




// function f1(){

//     var x = 10;
//     console.log("inside function f1 - " + x);


// }

// f1();

// console.log("value of - "+x);



// for(let i = 0;i<3;i++){
//     console.log("inside the for loop - "+i);
// }
// console.log("outside the for loop - "+i);


// const a = 20;
// console.log("constant value a - "+a);


// a=60;
// console.log("constant value a - "+a);



// Hoisting -
// variable can be defined before its declaration 
//var supports
//not suppport let and const


// x = 10;
// var x;


// x = 10;
// let x;

// const y=20;


// console.log("value of y after declaration - " + y);

//redeclartion of varaiables - 
// var b =20;

// var b=40;

// console.log(b);



// const c = 30;

/*Data Types - 

Javascript is dynamically typed language.
there are 6 types 

3 main categories

primitive - number, string, boolean
composite/refernce - Object, Arrays, functions
special data types - undefined/null




*/
/*String data type  -

my name is khan
my name is swati yadav
i live in hyderabad
i work at

m y n k = mynk


"swati "

*/


var firstName = "Swati";
var lastName = 'Yadav';

console.log(firstName);
console.log(lastName);

var sent = "i don't like to work late";
console.log(sent);

// var sent = 'i don't like to work late';
// console.log(sent);

//backslash is an escape sequence

var sent = 'i don\'t like to work late';
console.log(sent);

/*Number Data type 

+, - , / , e

infintiy,-infinty,NaN

20/0 - infinity
*/

var num1 = 20;  //integer
var num2 = 30.56; //floating- decimal
var num3 = 4.25e+6 //exponentail value


var inf1= 20/0; //Infinity
var inf2= -20/0; //-Infinity


//NaN - invalid

var n1 =  "abc"/20;
var n2= "bcd"-30; //string op - concatenation

console.log(num1);
console.log(num2);
console.log(num3);
console.log(inf1);
console.log(inf2);
console.log(n1);
console.log(n2);

/*Boolean Data Type
true , false

*/

var isWorking=true;
var isReading = false;

console.log(isWorking);

var s1=20;
var s2=30;

console.log(s1>s2);

/*undefined


*/
var u1;

console.log(u1);

/* 
null
""
0
*/

var nw1 = "hello";
console.log(nw1);

nw1=null;

console.log(nw1);


/*Object 
key-value pairs
*/

var car={
    "model":"Creta",
    "year":"2021",
    "color":"red",
    "doors":5
}

console.log(car);

//Arrays

//              0      1       2         3          5
var cities=["lko","delhi","gurgaon","jaipur","jaiselmer"];

// index- posiiton 
// array indexing
// 0,1,2,3,4

// size of an array -
// 5
// last index - 5-1 = 4

var numbers = [1,2,3,4,5,6,7,8];


//functions
//callable objects


function func1(){
    console.log("hello world!!");

}

func1();

var greet = function(name){
    return "hello world form a fucntion called greet "+name;
}

console.log(greet("swati"));


//typeOf

console.log(typeof true);
console.log(typeof "abc");


/*Operators

some symbols/keywords that tells the system that  it has to perform some actio 
addition

+
==


Arithmetic
Relational
Assignment
Unary 
Comparision
Logical 
Logical Assignment 
exponentiation
ternary op 

*/

//Arithmetic - + - * / %

var n1 = 20;
var n2  = 2;

console.log(n1+n2); //addition - 22
console.log(n1-n2); //substraction -18
console.log(n1*n2); //multiplication - 40
console.log(n1/n2); //division 10
console.log(n1%n2); //remainder  0





//23x^2 + 3x + 4
//x=3


var x= 3;
var b = (23*(x*x)) + (3*x) + 4;
console.log(b);


//Assignment operator 

var newVar = 34;


newVar += 20; //add and assign  newVar = newVar+20
console.log(newVar);  //54

newVar = 34;

newVar -= 20; 
console.log(newVar); //14

newVar = 34;

newVar *= 20; //add and assign
console.log(newVar); 

newVar = 34;
newVar /= 20; //add and assign
console.log(newVar);

newVar = 34;
newVar %= 20; //add and assign
console.log(newVar);

//String
//+ -concatenation
//+= - Conactenation assignment


var s1 = "hello";
var s2 = " world";

console.log(s1+s2);

console.log("output for s1 - "+s1);

s1 = s1 + s2;    //s1+=s2
// console.log("output for s3 - "+s3);

console.log("output for s1 - "+s1);

var str = "rishabh";
var str2 = "tripathi";


//incrementing and decrementing operators ++ --

/*
++x - pre
x++ post
--x pre
x-- post

*/

var x;

x=10;
console.log("initial value of x - "+x); //10

console.log("using pre increment - "+ (++x)); //11

x=10;
console.log("using post increment - "+ (x++)); //10
console.log(x) //11

x=10;

console.log("initial value of x - "+x); //10

console.log("using pre decrement - "+ (--x)); //

x=10;
console.log("using post decrement - "+ (x--)); //10
console.log(x) //9


//(x++) + (--u) - (++x)
//x=4
//u=3

// 4+2-6 = 


/*logical -
&& - AND - c1 and c2 


x=2
y=3
z=6

(x>y)
x==y
x<y

|| - OR  - c1 or c2

! - NOT  - !yes = no
*/


var year= 2007;

// divisible by 400  or
// divisible not by 100 and divisble by 4

if((year%400 == 0) || ((year%100 != 0) && (year%4 == 0))){
    console.log("it is a leap year");
}
else{
    console.log("it is not a leap year");
}


var x= 25; //number
var y=25;
var z ="25"; //string


console.log(x == z); //true
console.log(x === z); //false
console.log(x != z); //false
console.log(x !== z); //true

console.log(x>y); //treu
console.log(x<y); //false

console.log(x>=y); //treu
console.log(x<=y); //false








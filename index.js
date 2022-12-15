/*inegers, decimal point
decimal/hexadecimal/octal 

*/



var a = 12;
var b = 12.5;
var c=0xff;
var d = 2.45e+6;
var e = 1.75e-5;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


// 2^53-1

// 0x

var num1=10;
var num2=20;
var str1="30";
var str2="30f";

//+ operator

console.log(num1+num2);  //30
console.log(str1+num1); //3010
console.log(num2+str1);


console.log(str1-num1); //20
console.log(str2-num1-str1);  //NaN


//avoiding precision problem
var pp = (0.1*10+0.2*10)/10;
console.log(pp);



//parseInt()

console.log(parseInt("2.56")); 
console.log(parseFloat("2.56")); 


console.log(parseInt("60px"));
console.log(parseInt("0xff",16));
console.log(parseInt("10-12-2022"));

//toString()
var s1 = 234;
var s2 = s1.toString();
console.log(s2);
console.log(typeof s2);

console.log((234).toString());

//toPrecision()
//string 
//1-100
//it starts counting from before the decimal

var p1=6.2345;

console.log(p1.toPrecision());
console.log(p1.toPrecision(3));
console.log(p1.toPrecision(2));
console.log(p1.toPrecision(1));

var p2=56.54;

console.log(p2.toPrecision());
console.log(p2.toPrecision(3));
console.log(p2.toPrecision(1));


var p3 = 123.5467;

console.log(p3.toPrecision(1));
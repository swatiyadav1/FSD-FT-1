//Strings - primary
//object seq of characters

/*
2 ways strings in Js 
-string literal
-by string objects -  new keyword


*/

var str = "   swati yadav   "; // string literal // primitive 
console.log(str);

var str1 = new String("Siddharth yadav"); //new keyword //object 
console.log(str1);


//length of tjhe string
console.log(str.length);

// escape character
var str2  =  'i don\'t like \\to  work';

console.log(str2+"\n"+str2);
console.log(str2+"\n");

/*
\b - backspace
\f
 - form feed

 \n - new line

 \t - tab space

 \v


*/

/*string methods - 

*/


// 3 methods  - 
/*
slice(start,end)
substring(start,end)
substr(start,length)

*/


let txt1 = "Swati Yadav";
let sltxt = txt1.slice(-4);
// start, end+1
console.log(txt1.length);
console.log(sltxt);

//if you remove the end index from slice() it will slice the string till the end

//when it count form backwards (negative indexes) - (-1)

//Substring()
//negative index not work here


let txt2 = "Mohit Tripathi";
console.log(txt2.length);
let sutxt = txt2.substring(6);
console.log(sutxt);

//substr()

let txt3 = "Ayush Tripathi";
console.log(txt3.length);
let subtxt = txt3.substr(-6);
console.log(subtxt);


//replace string contents
/*wap to take  astring called as - "hello to my world of Programming "
 and perform slice operations on the string
make use of all the three slicing methods
of Programming
text 2 -  world
text 3
my world

*/

//replace only repaces the 1st occurence of the searched word
//it is case sensitive
//regex - case insensite and matching all occurences

let txt4 = "hello this is a JAVA class JAVA";
let rtxt = txt4.replace("java","JAVASCRIPT");
console.log(txt4);
console.log(rtxt);

//replaceAll()

let ratxt = txt4.replaceAll("JAVA","JAVASCRIPT");
console.log(ratxt);


//uppercase and lowercase

let txt5 = "this is my house";
console.log(txt5.toUpperCase());

let txt6 ="THIS IS MY HOUSE";
console.log(txt6.toLowerCase());

//string concatenation +
//string concat()

// text = "swati"
// s - touppercase()
// rs - wati
// s concat rs
// Swati

var t1= "Hello";
var t2="World";



let t3=t1.concat(" ",t2); //concat()
console.log(t3);
console.log(t1+" "+t2); //+

//trim()

var t="       Hello      ";

console.log(t.length);
var tt = t.trim();


console.log(tt.length);
console.log(t.trimStart());
console.log(t.trimEnd());

//trimStart()
//trimEnd()

let x="56";
console.log(x.padStart(6,"0"));
console.log(x.padEnd(6,"0"));

//extract charcters

//charAt()
//charCodeAt()


var r= "Mobile";
console.log(r.charAt(3));
console.log(r.charCodeAt(3));

//x = "     Hello     World         "
// unicode
// UTF-16
// 0- 65535

//split()
//a string it csn be covereted into an Array

//Hello     World

//Hello World
// h 
// e 
// l 
// l 
// o


var st =  "a b, c d, e f g h"
var arr = st.split(",");
//[a,b,c,d,e,f,g,h]
// 0,1,2,3,4,5,6,7
console.log(arr);
console.log(arr[4]);


//string search()
/*
indexOf()
lastIndexOf()
search()
match()
matchAll()
includes()
startsWith()
edsWith()

*/


//indexOf()

var a = "this is my programming class. i like programming very much";
console.log(a.indexOf("abc"));

//lastIndexOf

console.log(a.lastIndexOf("programming"));

//if the tect is not found these methods they returm -1

//search()
//regex

console.log(a.search("my")); 

//match()

console.log(a.match("i"));

//matchAll()

console.log(a.matchAll("programming"));
const itr = a.matchAll("programming");

document.write(Array.from(itr));

//includes()
//case sensitive

console.log(a.includes("there",8));


console.log(a.startsWith("i",6));

console.log(a.endsWith("very much"));

//String Templates
//template literals ``

var txt = `She's is unwell. She said - "i am not feeling well"`;

var t = "she is unwell. she said - \"i am not feeling well\"";

var multi = 
`
the quick
brown fox jumped over the 
fence`;


var username= "swati123";
var password ="****";

var sent = `Welcome user, ${username} and your password is ${password}`;
var sent1 = "Welcome user,"+username+"and your password is "+password;

console.log(sent);
console.log(sent1);
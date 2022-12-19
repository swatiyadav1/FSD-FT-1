 /*
  /^a...s$/  - 5 letters a and eding s
 

 abs  - not a match 
 alias - match
 */

 //literal
 const regexp =  /abc/;

//constructor function
 const regExp = new RegExp('abc');


 console.log(regExp.test("bgabcbcd"));

 // ^ $ . + ? {} () [] | \
 
//  [abc] - abcbfgrjscbda - 7 matches
//  [a-z]
//  [0-9]

//  [^abc]
// [^0123]

// . - Period 

// * - zero or more occurences
//  ab*c - abc  abcc abcccc ab

//  ab+c abc abcc abccc ab

//  ? -  0 or 1 occurence  left to it
//  ab?c ac abc abbc  hghtabc

// {n,m}

// b{3,7} - abbbc abbbbbbb abb

// a|e - dfg adfg edfg aedfg


const str = "Find me";
const pattern = /me/;

const result1 =  str.search(pattern);
console.log(result1);

const str2 = str.replace(pattern,"you");
console.log(str2);

const regex= /[\s.]+/;
console.log(str.split(regex));


console.log(str.split(""));


//g
//m
//i

console.log("hello, world, hello".replace(/hello/g,"hie"));


console.log("hello, world, hello".replace(/HELLO/gi,"hie"));


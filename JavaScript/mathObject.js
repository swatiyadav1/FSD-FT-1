//in js, Math built in 

//static
//without creating math object


//Math.propName

/*
ex - 
Math.PI
Math.LN10
Math.LN2
Math.LOG2E
Math.LOG10E
Math.SQRT1_2
Math.SQRT2

 */


/*
abs()

Math.round() - rounds to nearest integer
Math.floor() - rounds down to the nearest int
Math.ceil() - 
Math.trunc(x)
Math.acosh(x)
*/

var pi_value = Math.PI;

console.log(pi_value);

console.log(Math.sin(30));

console.log(Math.abs(-10));

console.log(Math.acos(0.45));

console.log(Math.acosh(1.5));


console.log(Math.floor(2.65));
console.log(Math.floor(8.4));
console.log(Math.floor(7.1));

//Math.pow(x,y)
console.log(Math.pow(3,3));

console.log(Math.round(8.4));
console.log(Math.round(8.5));
console.log(Math.round(8.6));

console.log(Math.sqrt(81));

console.log(Math.max(5,3));

console.log(Math.random());  // 0 -1 

console.log(Math.floor(Math.random() * 10));

console.log(Math.ceil(7.1));
console.log(Math.ceil(7.7));

//console.log(Math.trunc(3.65))
//0,1
console.log(Math.floor(Math.random() * 100)); //0-9


//for any range min- max , max is not included
function getRandom(min,max){
console.log(Math.floor(Math.random() * (max-min)+min));

}


//for any range min - max, both included
function getRandom1(min,max){
    console.log(Math.floor(Math.random() * (max-min+1)+min));
    
    }
    

getRandom(10,20);

getRandom1(10,20);

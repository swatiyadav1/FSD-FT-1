//Date object
//Date methods

//Date()

//4 different ways - 

//new Date()

var d = new Date();

console.log(d);

//with parameters - year,month.day,hours,minutes,seconds,miliseconds

var d1= new Date(2019,10,20,12,26,20,50);
console.log(d1);

//months - 0-11

//new Date(dateString)

var d2 = new Date("2 January 2022");
console.log(d2);

//new Date(miliseconds)
var d3 =  new Date(1435678900000);
console.log(d3);

//Creating Date and time strings
var d4 =  new Date();
console.log(d4.toDateString());
console.log(d4.toLocaleDateString());
console.log(d4.toString());
console.log(d4.toISOString());
console.log(d4.toUTCString());

console.log(d4.toTimeString());
console.log(d4.toLocaleTimeString()); //local environment


console.log(d4.getDate()); //day number
console.log(d4.getDay()); //day of the week  -  0 - 6
console.log(d4.getMonth()); // month - 0-11
console.log(d4.getFullYear());

console.log(d4.getHours()); // 0-23
console.log(d4.getMinutes()); //0-59
console.log(d4.getSeconds()); //0-59
console.log(d4.getMilliseconds()); //0-999

//the time it starts from is 1 jan 1970
console.log(d4.getTime());
console.log(d4.getTimezoneOffset());

//getters
//setter

 //future date +3
d4.setFullYear(d4.getFullYear()+3);
console.log(d4);


var d5 =  new Date();
d5.setMonth(12);
//setDate()  //1-31
console.log(d5);


var d6 =  new Date(2019,10,20);

d6.setHours(70); //0-23 24
d6.setMinutes(10);
d6.setSeconds(30);
d6.setMilliseconds(666);

console.log(d6);




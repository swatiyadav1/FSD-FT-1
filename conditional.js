/*wap to check whether a person can vote or not?

age 
age >= 18
if yes , the vote 
else 
not vote

- if 
-if else
- if else if
- switch

*/

/*if statement
if(condition){
    //code 
}

*/


var age = 12;
if(age >= 18){
    console.log("person can vote");
}
else{
    console.log("the person cannot vote, his age is - "+age)
}


//?:

//var result = cond ?value1:value2;
var age1 = 19;
var result=age1 >= 18?console.log("person can vote "+age1):console.log("the person cannot vote, his age is - "+age1)

//two numbers
var x=20;
var y=15;

var result = x>y?console.log("x is greater"):console.log("y is greater");







//sunday - saturday - 0-6
var now = new Date();
var day =now.getDay();

console.log(now);
console.log(day);

if(day == 4){
    console.log("have a nice weekend");
}
else{
    console.log("work harder!!, still not the weekend");
}

//if else if ladder
// multiple conditions

/*
if(condtion1){

}
else if(condtition2){

}
else if(condition 3){

}
else{

}
*/

//wap to check if two numbers are equal/less than or grater than
var one = "abc";
var two = 20;


//one == two
//one > two
//one < two
 
//13==20
if(one == two){
console.log("they are equal");
}
//13>20
else if(one > two){
console.log("one is greater than two");
}
//13<20
else if(one < two){
    console.log("one is less than two");
}
else{
console.log("invalid input");
}


/*wap to check wheter a number is positive, negative or zero

num = 6 
positive Number

num=-6
negative

num=0 
zero

*/

/* wap to find the largest among three numbers
*/

//ternary operator -


//switch statememnt
/*
switch(x){
    case value1:
        //statement
        break;
    case value2:
        //statement
        break;
    case value3:
        //statement
        break;
    case value4:
        //statement
        break;
                    .
                    .
                    .
                    .
                    .
    case valuen:
        //statement
        break;
    default:
        //code
            
}
*/

var d =  new Date();
var dy = d.getDay(); //3

switch(dy){
    case  0:
        console.log("today is sunday");
        break;
        case  1:
            console.log("today is monday");
            break;
            case  2:
        console.log("today is tuesday");
        break;
        case  3:
        console.log("today is wednesday");
        break;
        case  4:
        console.log("today is thursday");
        break;
        case  5:
        console.log("today is friday");
        break;
        case  6:
        console.log("today is saturday");
        break;

        default:
            console.log("invalids input");


}


//weekend or weekday

var d =  new Date();
var dy =d.getDay();

console.log("the day is - "+dy);
switch(dy){
    
        case  1:
        case  2:
        case  3:
        case  4:
        case  5:
        console.log("it is a weekday");
        break;
        case  0:
        case  6:
        console.log("it is a weekend");
        break;

        default:
            console.log("invalids input");


}


// simple calculator -

// 3 inputs - 
// num1
// num2
// and operator

// case 

// var a = parseFloat(prompt('enter a number - ')); //string


//Loops

//while
//do-while
// for
//for in
//for of


//while loops
/*
while(condition){
    //code
}
*/

//1,2,3.. 10

var i = 1;
while(i<=10){
   console.log(i);
   i++;
}
console.log("while loop stopped");

//i=1


//do while 
/*
do{
    //code
}
while(condition)
*/

var j = 6;

do{
    console.log(j);
    j++;
}
while(j<=5);
console.log("do while loop stopped");



//for loop
/*
for(initilixation;Condiiton ;inc/dec){
    //code 
}
*/

for(var i = 1;i<=10;i++)
{
    console.log("For loop - "+i);
}

//wap to swap two numbers use third variable
//wap to swap two numbers without a thirs variable


//wap to display the first ten numbers of the series - 
1,4,9,16,... 10th term 

//wap to find a factorial of a number

//6! = 1*2*3*4*5*6

//wap to check whether  anumber is palindrome or not

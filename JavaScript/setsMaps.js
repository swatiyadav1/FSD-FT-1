//built - in classes
/* What is Map?

key() converts fields into strings 
*/

//let map =  new Map([Iterables])

const fruits = new Map([
    ["A","Apple"],
    ["B","Banana"],
    ["C","Cantalope"],
    ["D","Dragon Fruit"]
])

console.log(fruits);
document.write(fruits);

console.log(fruits.get("D"));

const scores = new Map([
    ["sushmita",111],
    ["aryan",112],
    ["swati",100],
    ["arya",132]
])

scores.set('vishal',114);


console.log(scores.size);

const alpha = new Map();
alpha.set("A","Apple");
alpha.set("B","Ball");
alpha.set("C","Cat");
alpha.set("D","Dog");
alpha.set("A","Antelope");


console.log(alpha);
console.log(alpha.get("C"));
console.log(alpha.size);

console.log(alpha.delete("D"));

console.log(alpha);

console.log(alpha.has("A"));

let t = "";
for(const x of alpha.entries()){
t+=x+"\n";
}
console.log(t);


let s = "";
alpha.forEach(function(value,key){
    s += key + " - "+value+"\n";
})

console.log(s);


// sets

// set is unique collection of primitives and objects

const names =  new Set(['jack','jill','johhny','mary','tim']);

names.add("arya")
.add("swati")
.add("yadav");

console.log(names.has("mohit"));
console.log(names.entries());
console.log(names.keys());
console.log(names.values());



console.log("size of the set is "+names.size);


let e = "";
for(const x of names.values()){
    e += x + "\n";

}
console.log(e);

let f = "";
names.forEach(function(value){
    f += value+"\n";
})

console.log(f);

names.delete('swati');

console.log(names);


//clear()

names.clear();
console.log(names);













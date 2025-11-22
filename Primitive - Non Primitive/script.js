//Primitive - immutable, store by value, compared bty value, faster access
let courseName = "Js";
courseName[0]= "K";

console.log(courseName); // -> Js

courseName = "M";
console.log(courseName); // -> M

//non-primitive - mutable, store by reference, compared by reference, slower access 
const languages = ["Malayalam", "Tamil"];
console.log(languages[0]); // -> Malayalam
languages[0] = "English";
console.log(languages[0]); // -> English


const num1 =10;
const num2 = 10;
if (num1 == num2) {       //-> both are same(numbers are primitive, that are compared by value )
    console.log("both are same");
} else {
    console.log("both aren't same");
}

const user1 = {name:"Anu"}
const user2 = {name:"Anu"}

if (user1 == user2) {    // -> both aren't same (objects are compared by reference)
    console.log("both are same");
} else {
    console.log("both aren't same");
}

const data1 = {name:"Anu"}
const data2 = data1;
data2.name = "Subin"

console.log(data1, data2);  // -> {name: 'Subin'} {name: 'Subin'}

if (data1 == data2) {       // ->both are same
    console.log("both are same");
} else {
    console.log("both aren't same");
}

let a = 10;   // "" == 0, [] == 0, false == 0, false == "0" -> true (type conversion)
let b = "10"; // 10 === "10" -> false, no type conversion

// type coercion(type conversion)

if(a == b) {  // ->true
    console.log(true);
} else {
    console.log(false)
}

function sum() {
}

let c = []

console.log(typeof b);         // ->string
console.log(typeof null);      // ->accepted error by JS(edge case)
console.log(typeof []);        // ->object
console.log(typeof undefined); // ->undefined
console.log(typeof sum);       // ->function, type is object (edge case)
console.log(Array.isArray(c)); // ->true

let x = ["a", "b"];
let y = "c";
console.log(x + y);            // -> "a, b" + "c" -> "a, bc" -> a, bc(type coercion)

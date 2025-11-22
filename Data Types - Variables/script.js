courseName = "Python"     //No var/let/const → becomes global variable
function getData() {
    courseName = "Js"     // modifies the same global variable
}
getData();
console.log(courseName); // 👉 "Js"

var Name = "Python"       // declared globally
function Data() {
    var Name = "Js"       // declared LOCALLY (function scope)
}
Data();
console.log(Name);       // 👉 "Python"

// let, const, var
// redeclaration - var 
// reassignment - var, let 
// var x = 10; declare
// var x = 20; redeclare
// x = 30 ; reassign

// datatype - 8
// primitive(store a single value) - string, number, boolean, undefined, null, bigint, symbol
// non-primitive - object

const course = {
    name: 'Js',
    price: 1000,
    isAvailable: false,
    123: 10
};
console.log(course);

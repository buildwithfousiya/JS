//function declaration
function sum(a, b) {
    return a + b;
};
console.log(sum(1, 2));

//function expression
//function expression
const calc = function sum(a, b) {
    return a + b;
};
console.log(calc(1, 2)); 

//anonymous function
const cal = function (a, b) {
    return a + b;
};
console.log(cal(1, 2));

//first class function
const greet = function () {
    console.log("Hello!");
};                       
greet();

//arrow function
const fun = (a, b) => a * b;
console.log(fun(1, 4));    

//unary function
const sqr = a => a ** 2;
console.log(sqr(4));    

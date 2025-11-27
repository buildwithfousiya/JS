//First-Class Functions -> functions are treated like values.
//Higher-Order Functions (HOF)-> takes another function as an argument or returns a function.

//First-class → functions behave like first-class citizens (treated like normal data).
//Higher-order → functions that work on other functions.


//A callback is a function passed to another function.
function Html(fn) {
    console.log("learning HTML...");
    console.log("completed HTML...")
    fn()
}
function CSS() {
    console.log("learning CSS...");
   console.log("completed CSS...")
} 

Html(CSS)

//function learnHtml(callback) {
//    console.log("learning HTML...");
//    setTimeout(() => {
//        console.log("completed HTML...");
//        callback()
//    }, 2000);
//}
//function learnCSS() {
//    console.log("learning CSS...");
//    console.log("completed CSS...");
//}

//learnHtml(learnCSS)

//array higher order methods(forEach(),map(), filter(), reduce())
const numbers = [1, 2, 3, 4];

function func(element) {
    console.log(element);
}
numbers.forEach(func);

//standard way
numbers.forEach((number) => console.log(number));

//forEach doesn't return anything ->returns undefined
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
console.log(sum);

const data = [{name:"abc"}];
const result = data.forEach((obj) => {
    obj.name = "Anu"
});
console.log(result); //->undefined

//const data = [{name:"abc"}];
//data.forEach((obj) => {
//    obj.name = "Anu"
//});
//console.log(data);
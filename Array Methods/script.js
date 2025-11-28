const numbers = [1, 2, 3, 4, 5, 1];

//map() is an array method used to transform each element of an array and create a new array.
const res = numbers.map((element) => {
    return(element * 2);
})
console.log(res, numbers); // returns a new array
 //map returns new array & forEach doesn't return anythiing
//a -> elements, b -> index, c -> og array
const result = numbers.map((a, b, c) => {
    console.log(a, b, c);
});
console.log(result);

//filter() is an array method used to select elements from an array based on a condition
const ans = numbers.filter((number) => {
    if (number%2 ) //number%2 !== 0
    return true;
});
console.log(ans);  //->[1, 3, 5]

//Ternary Operator
const a = numbers.filter((number) => {
return number%2 ? true : false;
});
console.log(a);  //-> [1, 3, 5] 

const b = numbers.filter((number => number>3));
console.log(b);  //-> [4,5]

//console.log(numbers.indexOf(1)) // get the first index 0f "1"
const result1 = numbers.filter((value, index) => {  
    console.log(value, index, numbers.indexOf(value));
    return numbers.indexOf(value) === index;
})
console.log(result1);

//reduce() in JavaScript is a higher-order array method used to reduce an array into a single value.
result2 = numbers.reduce((accu, value) => {
    //console.log(accu, value)
    return "abc"
}, "xyz");
console.log(result2);

const result3 = numbers.reduce((accu, value) => {
    const largest = accu>value ? accu : value;
    return largest;
}, 0);
console.log(result3);
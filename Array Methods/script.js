const numbers = [1, 2, 3, 4, 5];

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
console.log(ans);

//Ternary Operator
const a = numbers.filter((number) => {
return number%2 ? true : false;
});
console.log(a);


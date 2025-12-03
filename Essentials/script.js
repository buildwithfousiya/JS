const numbers =  [1, 2, 3];

function getFirstTwoElements(arr) {
    return arr.splice(0, 2); //non-primitve, it changed the og array, only 3 left in the array.
}

const result = getFirstTwoElements(numbers);
console.log(result); //  [1, 2]

console.log(numbers.map((num) => num * 2)); //-> [6]


const numbers1 =  [4, 5, 6];

function getFirstTwoElements1(arr) {
    let copy = arr.slice(0)
    return copy.splice(0, 2); 
}

const result1 = getFirstTwoElements1(numbers1);
console.log(result1); 

console.log(numbers1.map((num1) => num1 * 2)); 

console.log([].concat(numbers1))         //independant copy
 
console.log(Array.from(numbers1))        //independant copy

console.log(Object.assign([], numbers1)) //independant copy

//spread operator
const copy = [...numbers1]
console.log(numbers1 === copy)           //independant copy

console.log([...numbers, ...numbers1])

//shallow copy
const user = {address: {pin:10}}
const copy1 = {...user}
copy1.address.pin = 20;
console.log(user)

//console.log(copy.adress?.pin) ->if copy.adress exists, then access copy.adress.pin.

//deep copy
const user1 = [[1, 2], [3, 4]]
const copy2 = {...user1}
copy2.address.pin = 20;
console.log(user1)
 
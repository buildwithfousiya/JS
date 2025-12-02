const numbers =  [1, 2, 3];

function getFirstTwoElements(arr) {
    return arr.splice(0, 2); //non-primitve, it changed the og array, only 3 left in the array.
}

const result = getFirstTwoElements(numbers);
console.log(result); //  [1, 2]

console.log(numbers.map((num) => num * 2)); //-> [6]


const numbers1 =  [1, 2, 3];

function getFirstTwoElements1(arr) {
    let copy = arr.slice(0)
    return copy.splice(0, 2); 
}

const result1 = getFirstTwoElements1(numbers1);
console.log(result1); 

console.log(numbers1.map((num1) => num1 * 2)); 
 
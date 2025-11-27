//primitive compares value -> false
const value = 0;

if (value){
    console.log(true);
} else {
    console.log(false);
}

//non-primitive compares reference -> true
const val = [];

if (val){
    console.log(true);
} else {
    console.log(false);
}

const numbers = [1, 2, 3, 4 ];
console.log(numbers.at(-1));  //console.log(numbers[numbers.length-1]);

const num = [1, 2, 3, 4, 5];
num[100] = 10;
console.log(num[6]);          //->undefined
console.log(num[100]);        //->10

const n = new Array(4)        //->single variable coverte a array in that size
console.log(n);

const m = new Array(4, 1)     //->multiple varible contain array is created
console.log(m);

const nums = [1, 2, 3, 4];
const result = nums.push(10)  //-> to add a variable at end
console.log(result, nums)

const res = nums.pop()        //-> to remove a variable at end also use "shift" instead of pop
console.log(res,nums)

const resl = nums.unshift(10) //-> to add a variable from 0th index
console.log(resl,nums)

const a = [1, 2, 3, 4];
const r = a.slice(1,3)        //->[2,3] 1st index to 2nd index
console.log(r,a)

//splice
const y = [11,34,65,8]
const x = y.splice(1,2,10)     //start from  1st index remove 0variable, add 10 in the 1st index 
console.log(x, y)              //x-> [ 34,65] , y-> [11, 10, 8]

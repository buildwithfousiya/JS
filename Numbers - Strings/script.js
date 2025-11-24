const value = 1_000_000_000;
console.log(value);                   //->1000000000

const num = 1e9;
console.log(num);                     //->1000000000

const data = Number.MAX_SAFE_INTEGER; 
console.log(data+504);

const number = 245678907754123458979n;
console.log(typeof number);           //->bigint

const a = 2.576;
const b = Math.ceil(a);               //-> 3
const c = Math.floor(a);              //-> 2
const d = Math.round(a*10)/10;        //-> 2.6
const e = a.toFixed(2);               //-> 2.58, type = string
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//[0, 10 from 0 t0 nearest of 1
const values = Math.random()*3; 
console.log(values);                  //-> from 0 to nearest of 3 [0, 3)

const nums = Math.random()*6;
console.log(Math.floor(nums)+1);      //-> from 1 to 6 [1, 6]

console.log(isNaN("hello"));          // true  -> "hello" becomes NaN
console.log(isNaN("123"));            // false -> "123" becomes 123
console.log(isNaN(true));             // false -> true becomes 1
console.log(isNaN(undefined));        // true  -> undefined becomes NaN
//isNan - "==" and Number.isNaN - "==="
console.log(Number.isNaN("hello"));   // false
console.log(Number.isNaN("123"));     // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(NaN));       // true

const single ='hello';
const double = "hy";
const backtick = `hi`;

//template literal
const result = `${backtick} and ${single}`
console.log(result);

const name = `hy        

hello` 
console.log(name);         // \n → new line, \t → tab

const firstName = 'how are you';
const res = firstName.charAt(0).toUpperCase()+ firstName.slice(1);
console.log("Hi,"+res);     
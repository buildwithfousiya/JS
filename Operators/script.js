let a = 2;
let b = 3;
                   //-> +,-,++,--... - arithmetic operators
a += 1             //-> 3  assignment operator
console.log(++a);  //-> 4 pre-increment
console.log(b++);  //-> 3 post-increment

let m = "1";
let n = 1;
                       // ->comparison operators
console.log(m == n);   // "=="equal to (type coercion), compare value only
console.log(m === n);  // "===" strict equal to, compare both type and value

console.log( m != n)   // -> false,logical operators
console.log( m !== n)  // -> true,logical operators

const indDay = new Date(1947, 7, 15) // ->index of month 0 to 11 
console.log(indDay);
console.log(indDay instanceof Date);

prompt(123,546);
const result = prompt("are you sure","yes");
alert(result);
alert(3 + 2);
confirm("hyy");



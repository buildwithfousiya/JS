//declaration

//object literal syntax
const user = { age: 20, "food": "biriyani", greet() { return 5 } };
user.name = "abc"
console.log(user.greet());
console.log(user);
//dot notation
console.log(user.age);
//sqaure bracket notation
console.log(user["age"]);
delete user["food"]
console.log(user);

const key = "age";
console.log(user[key]);



const user2 = new Object({ name: "xyz" })
console.log(user2);

user3 = {a:10, b: 40}
for(let key in user3){
    console.log(user3[key])
}

salary = {a:10, b: 40, c:20}
let sum = 0;
for(let key in salary){
    sum += salary[key];
}
console.log(sum);
console.log(salary.hasOwnProperty("a"));                          //imp method
console.log("a" in salary);

console.log(Object.values(salary).reduce((acc, cu) => acc + cu)); //values
console.log(Object.keys(salary));                                 //keys
console.log(Object.entries(salary));                              //multi-dimensional array

const ageData = { age: 18};
const nameData = { name: "abc"};
const result = Object.assign({}, ageData, nameData);
console.log(result, ageData);     //assigned to an empty object.
const result1= Object.assign(ageData, nameData);
console.log(result1, ageData);             // combined 2 objects, added to the 1st argument

// Object.seal & Object.freeze

const ageData1 = {age: 26}
Object.freeze(ageData1)    // can't add/ delet/ modify/ change properties(immutable)
ageData1.age = 30;
ageData1.name = "abc";
console.log(ageData1)

const ageData2 = {age: 20}
Object.seal(ageData2)     // can modify existing property values, can't delet or add new properties
ageData2.age = 30;
ageData2.name = "abc";
console.log(ageData2)



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


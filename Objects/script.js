//declaration

//object literal syntax
const user = {age: 20, "food": "biriyani"};
user.name = "abc"
console.log(user);
//dot notation
console.log(user.age);
//sqaure bracket notation
console.log(user["age"]);
delete user["food"]
console.log(user);

const key = "age";
console.log(user[key]);



const user2 = new Object({name: "xyz"})
console.log(user2);
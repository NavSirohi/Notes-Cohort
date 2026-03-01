// import {age as ager} from './practice.js'
// console.log(ager);
// var age=45;
// console.log(`Your age is ${age}`);
// age=22;

// function age(){
//     console.log('Omg u are so cute');
// }

// let tea="Green tea";



// var developer=["Nikhil","Akshita"]


// when we use var then only we get the value as undefined due to hoisting of variables, functions and other things , but with let we get refrence error as it is hoisted but remains in temporal dead zone . 

// why if we have a function and a variable with same name ? so how is hoisting going to work ?? 

// age=18;

// // 👉 Function declarations win over var during hoisting.   

const target=undefined+10;
console.log(target);

console.log(`your age is ${age}`)
console.log(agecaller(age));
let age=10;
console.log(agecaller(age));

console.log(`your age is ${age}`)

function agecaller(age){
    return age+14;
}





// interview Question -> for each mai await , async , break kaam nahi krta hai , bss exception se he rukega voh 

// Ways of making  a array 

let array =[1,2,3,4,5];
let a=[];
console.log(a);

let b=new Array(3); // gives 3 empty slots 
console.log(`here is the value of array b `,b);

let c=Array.of(1,2,3,4,5); // it makes a array of elements given inside it . 
console.log(c);

let d =Array.from('hello'); // converts string into array of characters . 
console.log(d);

// How to do vice versa 

let chai=['h','e','r','b','a','l'];
let stringChai=chai.join('');
console.log(stringChai);

// Methords of array 
// map -> maps over each element inside the array and returns a new array 
// filter -> takes the condition and returns a new array 
// forEach -> iterate ove each element inside the array and dosent return anything  // forEach do not wait for async functions  // it also has index as param eter
// reduce -> takes a fucntion and reduce the array into a single vaule // 
const cartItemsPrice=[100,200,300];
const finalBill=cartItemsPrice.reduce((acc,current)=>{
    acc+=current;
    return acc; // 1st iteration -> 100  , 2nd iteration -> 300 , 3rd iteration -> 600 
},0);





console.log(finalBill);
// includes -> return boolean value if the element exists inside the array 
// indexOf -> return the index of the element if it exists otherwise  returns -1 
// lastIndexOf -> returns the last index 
// slice -> slice the array and returns a new array  // its also used to copy the array into another array 

const cartPrice=[100,200,300];
const finalPrice=cartPrice.slice();
console.log(finalPrice);

// splice -> It is used to add or remove elements from the array and it modifies the original array 



// at ->
// push 
// pop 
// shift 
// unshift 
// sort 
let marks=[20,19,23,13,45,24,4];
console.log(`here are the values after sorting `,marks.sort()); // sorts lexicographically not in the increasing order of numbers 



// reverse 
// concat 
// flat 
// flatMap
// fill 



// Objects in js 

// structuredClone -> it is used to clone the nested objects that are difficult to clone using the spread operator 

const details={
    name:'Raj',
    lname:'madeshiya',
    age:22,
    address:{
        temporary:'Bhopal',
        permanent:{
            HouseNo:133,
            colony:'saket',
            city:'Gorakhupur',
        },
        postalCode:273001,
    },
    college:'Vit bhopal University',
    loveLife:undefined,
}
console.log(details.age); // dot notation do not handel special character and dynamic keys 
console.log(details['college']); // used if we have space in the key name 

details.country='India'; // adding the new property 

console.log('age' in details);
console.log('loveLife' in details); 
console.log('toString' in details) ; // true -> because it is present in the prototype chain of the object

console.log(details.hasOwnProperty('age')); // true -> because it is present in the object itself
console.log(details.hasOwnProperty('toString')); // false -> because it is not present in the object itself but it is present in the prototype chain of the object  


// Objects methords 

const values=Object.values(details); // How to access the values of the object return the array of values 
const entities=Object.entries(details); // How to access the entities of the object 
const keys=Object.keys(details); // How to access the keys of the object . 

console.log(values);
console.log(entities);  
console.log(keys);

for(let [key,value] of Object.entries(details)){
    console.log(`key is `,key , `values are `,value);
}

// creating of a object from entries 

const entry=[['name','Nikhil'],['age',22],['city','Gorakhpur']];    

const obj=Object.fromEntries(entry); 
console.log(obj);

// freeze -> it is used to make the object immutable means we can not change the existing properties of the object and we can not add new properties to the object and we can not delete existing properties from the object .
// Object.freeze(details);
// details.age=23;
// delete details.name;
// details.Dob='12-12-2000';

// console.log(details);  

Object.seal(details); // used when u want to allow to edit the existing properties but do not allow to add new properties or delete existing properties from the object .

details.age=23;
details.Dob='12-12-2000';
delete details.name;
console.log(details);





// spread operator way 
const detailsClone={
    ...details,address:{...details.address,permanent:{...details.address.permanent}}
};

// Structured clone way 

const easyClone=structuredClone(details);
// objects have entities and properties 

// for loop is the most optimised loop 
// while loop 
// do While 
// foreach 
// for. in -> on objects 
// for of ->array string objects 
// filter 
// every 
//map 
// reduce 
// 




// functions ki kahani 


// arguments and function 
// arguments fucntion ko call krte time pass krte hai 
// Parameters ko function decleration mai pass krte hai 

function chaiMaker(){//here i have not passed any parameter still how it handels it 
    console.log(`type of ${typeof arguments}`);
    console.log(Array.isArray(arguments));
    console.log(arguments);
}

chaiMaker('herbal','Black');



// Arrow function do not have arguments and this keyword 



// impure vs pure function -> jb function bahar ki value ko change kree its a impure function 
let age=19; 
// this is a impure function as it changes the outside value 
function getAge(){
    age++;
}

// what are side effect in function -> function aapne bahar kya change krta hai jaise ki it is changing age so age is side effect 



// IIFE -> immediately invoked function expression 
// declare kete he execute kr do 

// const teaLove=()(); syntax 

const teaLover=(function chaiLove(){
    console.log('hey chai lover ');
})()

const coffeeLover=function coffeelove(){
    console.log('hey its me coffee lover');
}();

// Hof -> functions that return another funcitonn or pass another funciton as a argument 

// Closure  

function game(){
    const name='Tom';
    function getName(){
        console.log(name);
    }
    return getName;
}

const first=game();

const final=first(); // this do not return anything .. 

console.log(first);



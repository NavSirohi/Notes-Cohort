console.log("Welcome to Pear learning ");

console.warn("Chai sath leke baithna hai");

// alert('i will only work in browser not in node js');

console.table("hey i am used to print the data inside the array of objects in table form ");

console.time('from me the timer starts and continues untill console.timeEnd is called');

console.timeEnd('hey i am used to')

console.group('i am not used as such but may be i am important for grouping the cosole.log statements together');

console.groupEnd('i tell u that now its the time not to group the console.log satatements together');

console.count('i am going to tell u how many times a statment is called');

//Question 1:

// What is the impact of underscore in variable in js (100_000_000)?
// let's do the practical implementation of it 

// Without underscore 
console.time();
let teaPrice=0;
for(let i=0;i<100000;i++){
    i++;
    teaPrice=i*100;
}
console.log('The value of teaPrice is ', teaPrice);

console.timeEnd();
// default: 0.595ms


// with underscore 
console.time();
let cohortPrice=0;
for(let j=0;j<100_000;j++){
    j++;
    cohortPrice=j*100;
}
console.log('the value of CohortPrice is ', cohortPrice);
console.timeEnd();
// default: 0.435ms



// Answer :No its dosen't have any impact on the performance of the code , i tried practically and the loop that is placed at the top takes more time to execute as js needs a warm up time also that the js engine identify the pattern in the next time that yes we are doing the same things as above .  


// Question 2:

// What is the  diffrence between var and let ?
// Var do not have block scope , once we have declared any variable using var inside blocked scope  we can access it outside the block scope as well 



// Initially -> Let eventually -> const + performane ke liye best hai 


const crushes=['Neha','Rashi','Sonal'];

crushes.push('Akshita');

console.log("Eventually the one u got is best ",crushes);

console.log(typeof crushes); // In js everything is an object 
console.log(typeof Array);
console.log(typeof 10);
console.log(typeof '10');
console.log(typeof hry10);
console.log(typeof true);

let tea=null;
console.log(typeof tea); 
console.log(typeof null); // here its object 

let chai;
console.log(typeof chai);
console.log(typeof 10n); // gives the bigint data type -> converts the number to big integer 



// Data types 

// 1: Primitive -> Which are by default 
// 2: Non-Primitive -> which are made by us 


// Questiom 3: 

// What is Rune in js ?
// Rune are unique and immutable data type which is used to create unique identification , they cant be changes if we try to give the same name to another rune that rune will be diffrent from first rune as both hold diffrent memory locations . 
// Eg -> const rune1=Symbol('fire_ninja');      const rune2=Symbol('fire_ninja');    // here tough both have same value but the memory assigneed to both are unique .


const new_rune_id=Symbol('🥺');

console.log(typeof new_rune_id, "and", new_rune_id); // here we can see that the type of new_rune_id is symbol and the value is unique as well


// Question 4: 

// How many primmitive data tyoes are there in js ??
// There are total 7 primitive data types in js -> String , number , boolean , null , undefined , bigInt , symbol 
  
// NonPrimitive data types -> which can be derived from primitive data types -> Arrays , objects and function 

// Objects 


const details={
    name:"Nikhil",
    age:21,
    city:"Delhi",
}

// can i change details of the const object ?


details.name="Nikhil Sirohi" //yes i can 

// can i change the entire refrence of object ? 

// details={
//     name:"ChaiCode",
//     age:1
// }
console.log(details); // TypeError: Assignment to constant variable.


function myfun(){
    return chai;
}

console.log("Type of function is ", typeof myfun); // type of function is function . 
// this data type is used in dom manipulation as sometime we can check like onclick is a function or not do it require call back function or not . 



console.log(typeof 'Chaicode');  //string 
console.log(typeof 10);
console.log(typeof true);
console.log(typeof 10n);
console.log(typeof null); // null he hota hai but we are continuing it as object 
console.log(typeof undefined);
console.log(typeof Symbol('🥺'));
console.log(typeof function(){}); // this is a function
console.log(typeof {}); // this is an empty object
console.log(typeof []); // this is an empty array 


// Extra Question : 
console.log("what is the type of date : ",typeof Date); // is this a function or class ???  
// See its a class but when we make a refrence of it inside our code the constructor function is called so its an function 


const array=[1,2,3,4,5];
console.log(typeof array);

const object={teaType:"Green tea" , price:100, recommendedBy:'Hitesh Sir'}

console.log(typeof object);


// independent copy vs refrence copy 
let chaiPrice=100;
let chaiPriceCopy=chaiPrice;
chaiPriceCopy=200;  

console.log(chaiPrice,chaiPriceCopy)



let  data={
    members:100,
    type:'cohort',
    title:"Full engineering studies"
};


const dataCopy=data;

dataCopy.members=200;

console.log(data,dataCopy);


// copy by value 

let dataCopy2={...data};

// incase of arrays use it like this let arrayCopy=[...array];
dataCopy2.members=300;

console.log(dataCopy2 , data);




// for nested objects 

const nestedObjects={
    name:"Nikhil",
    details:{
        age:21,
        city:'delhi',
    }
}
const nestedObjectsCopy=JSON.parse(JSON.stringify(nestedObjects)); 
const nestedObjectsCopy2=structuredClone(nestedObjects); // this is new way to copy the nested objects in js . 

nestedObjectsCopy.details.age=22;

console.log(nestedObjects, nestedObjectsCopy);


// Numbers 


let a=100;
let b=100.6;
let c=0.1+0.2;

console.log(c);

console.log(0.3 === c);

const big=Infinity;
const small= -Infinity;

const notANumber = NaN;
 
// missed Epsilon wala part ..... have to go through the file so that i can find the things that are left ... 

const d = Math.max(1,2,3,4,5); // min , abs , round , ceil , random etc can be used the thing is that i should know that there exist some libaray for named Math in js so that i can take the refrence of it . 

console.log(d);

//strings 

// Silent fails.. no error nothing .

//strings are immutable in js . 


let name2="Nikhil" 
name2[0]='r';

console.log(name2);


console.log(`hey my name2 is ${name2}`); // string interpolation 

// Properties of strings 

console.log(name2.lenght);

console.log(name2.charAt(0));

console.log(name2.toUpperCase());

console.log(name2.toLowerCase());

console.log(name2.includes('Nik')); // returns true / false 

console.log(name2.startsWith('jai')); // returns false 

// console.log(name2.endWith('k'));


// strongs methords 

let name="Nikhil Sirohi";


console.log(name.length);  //  gives the number of character the string has includings the spaces 
const trimed=name.trim();// remove the extra spaces from the string ;
console.log(trimed.length);
console.log(name.toLowerCase());
console.log(name.toUpperCase())
console.log(name.charAt(99));
console.log(name.slice(0,3));
console.log(name.split(' '))
console.log(name.split(0,2)); // gives the array of string 


console.log(name.substring(0,3));



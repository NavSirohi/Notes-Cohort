// Arrays -> In JS arrays are dynamix in nature (they can increase thier size as needed)

//Ways to create the arrays 

const developers=["Nikhil","Akshita","Akshneet"];
const enginers=Array(3); // an empty array has been made with space of 3 the value inside them is neither  empty nor null . 

//we can directly pass the values to the array also like this 
const scientist=Array("Dr Abdul Kalam", "Dr CV Raman" , "DR Homi J Bahbha");
console.log(scientist); 

console.log(enginers); // its a empty array
console.log(enginers.length); // 3 is the answer as it has Length of 3 

const members=Array.of(3,2); // it creates an array of size 1 and value 3 inside it 

// some expirement with the arrays. 
// members[0]={"Anirudh sir" : "Hitesh Sir"};
// members[1]="Hitesh Sir";
// members[2]="Piyush Sir";
// members[3]="Nikhil Sir";
console.log(members); 
console.log(members.length); // 1 why ? 

// Question 1: What is the diffrence between const members=Array.of(3) and const enginers=Array(3) 

// Answer: const members=Array.of(3) it makes an array of size 1 and 3 as a value inside it , where as  const enginers=Array(3)  makes an array with space 3 and all the spaces are empty . 




// Creating an array from other data types like sets , string etc ..

const code=Array.from("Dust");
console.log(code);  // [ 'D', 'u', 's', 't' ]


// identify the lenght of array 
const roommates=["Nikhil","Prateek","Adish"];

console.log(roommates.length); // 3 

roommates.length=1; // Truncate the array 

console.log(roommates.length , roommates); // 1 and ["Nikhil"]

roommates.length=3;

console.log(roommates)// ["Nikhil" , <Empty spaces>];




// push -> to inset the data into the array at the last index
roommates.push("Sai");

// pop-> to remove the last element from the array 
roommates.pop();

// shift & unshift

console.log(roommates.shift()); // removes and return the first element of the array if array is empty it returns undefined .


const a=[NaN];

console.log(Array.isArray(a));

console.log(a[0]);

console.log(isNaN(a[0]));  

const data=[1,32,4,4,];

const newData=data.slice();

console.log(newData);



// Arrays 
// 1: methords of making array 
const alphabets =['A','b','C']; // fixed size best approach 

const nums=Array.of(1,2,3,4);
console.log(nums);

const animals=new Array(3); // here memory is preallocated and has empty into it .

animals[0]="Tiger";

console.log(animals);

const flowers=Array(["Rose","Lily","gainde ka fool"]);
console.log(flowers);

// Arrauys are 0 based -> if we try to access element outside the scope we get undefined 

const valentine=["RoseDay","HugDay","PromiseDay"];
console.log(valentine[99]); // undefined

// Mutating Methords -> Which change the original  array shift , unshift , pop, push , splice , 

// Methord that give the new array -> concat , slice , flat [1,2,3,["name","details"]] , flatmap 

// Non-Mutating Methords -> Which do not change the current array  index, lastindexof , includes , at , slice , 

// Searching in array -> index , lastindex , includes , findIndex , lastIndex etc ,,, 


//Split convert string to array 
const collegeName="Vellore Institue of Technology";
const college=collegeName.split(''); // here spaces will also come into the array . 
college.index
console.log(college);


//Slice methord 

const days=["M","t","w","th","fr","sa","su"];

const daysCopy=days.slice(1,4);
console.log(days.slice(1,4)); 
console.log(daysCopy); // ["t","w","th"]; starts from 1 and move till 3 (inclusive)



// here var is excessed out of scope 

for(var i=1;i<=10;i++){
    console.log('value of i is ', i);
}

console.log(`value of i is ` , i);



let download=1024;
let inn=0;
let current=0;
while(download>current){
    inn++;
    console.log(`bhai kr rha hu download ${current}`);
    current+=Math.random()+100;
}


console.log(`bhai ho gai download after this many iterations ${inn} `);

let checker=true;
while(checker){
    const randomNumber=Math.random()*100;
    if(randomNumber<=60 && randomNumber>=20){
        console.log(randomNumber);
        checker=false;
    }
}
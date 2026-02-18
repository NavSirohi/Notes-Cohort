// Methords of strings 

// Strings are immutable like once declared we can't change them if we chnage them we get the completely new string 

let name="Nikhil"

console.log(name.length); //6

name[0]='r';

console.log(name); // Nikhil 

console.log(name[0]); // N

console.log(name.charAt(3)); // h

console.log(name.charAt(99)); // empty space 

console.log(name.at(5)); // l 

console.log(name.at(99)); // undefined 

console.log(name.split('')); // returns array of all the characters [ 'N', 'i', 'k', 'h', 'i', 'l' ]

console.log(name.split(' ')); // return the name itself as there is no space to split the string . Nikhil 

console.log(name.split('🥺')); // same as above return the above like . 

let SName="SiRoHi";

console.log(SName.toLowerCase()); // Convert to lower case sirohi

console.log(SName.toUpperCase()); // convert to upper case SIROHI

let description="     Hey , My name is Nikhil Sirohi and i am a FOSSE developer , looking forward to connect to u     ";

console.log(description.trim()); // all the spaces at the end and starting are removed 

console.log(description.trimEnd())// all the extra spaces at the end are removed 

console.log(description.trimStart())// extra spaces from the start are removed. 

console.log(description.includes("nikhil"));   // false as it is case sensitive 

console.log(description.startsWith("hey")) // false this is also case sensitive . 

console.log(description.startsWith("Hey")) // false this is because the strings began with spaces not with Hey .. 

console.log(description.startsWith(" ")); // true  

// same way we have endsWith

console.log(description.endsWith(' ')); // true

const city="I am Noida a city in India";

console.log(city.indexOf('n')); // gives the first accuring index of the given things also counts the spaces , also its case sensitive . 5 is the answer 

console.log(city.indexOf("ida")); // here it watch the first accurance of ida indside the string . 

console.log(city.lastIndexOf('n')); // it gives the last index of the given string or character or alphabet

const food = "Green Chilly";
console.log(food.slice(0,4)); // Gree 0->1->2->3 
console.log(food.slice(5)); // space-Chilly
console.log(food.slice(-3)); // start with -3 

console.log(food.slice()); // gives the entire word . 

console.log(food.substring(0,7)); // Green C

const colour="hey i am name  ";

const favColour=colour.replace("name","Nikhil");
console.log(favColour);
console.log(colour); // do now change the string as strings are immutable we have to create the new string and perform action and store the new string 
console.log(colour.replace("name"," ")); 


//same is replace all it replace all the things that match the given string 

const age=22;
const stringAge=age.toString();
console.log(stringAge);
console.log(typeof stringAge);
const roles="Backend|Frontend|Devops";
console.log(roles.split('|')); // returns an array 












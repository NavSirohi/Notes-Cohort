// chai(){
//     console.log('chai');

// }

// chai();

// introduce has shorthand methord;
const movie={
    lead:'Ranveer Singh ',
    movieName:'Dhurandar',
    introduce(){
        return `${this.lead} is the main hero of movie : ${this.movieName}`;
    }



}


console.log(movie.introduce());


// Interview Question -> Hotstar 

const details={
    director:'Sanjay Leela Bansani',
    cast:['Rnaveer','Priyanka','Deepika'],
anounce(){ // arey bhai we are calling this function iske paas hai access this ka toh iske andar bhi hoga he na 
    this.cast.forEach((actor)=>{ // Confusion sir ne bataya tha ki arrow function ke paaas this ka access hota he nahi hai 
        console.log(`${this.director} anounces that ${actor} is in the movie`);
    })
}
}

details.anounce();








// New 

// what is prototyoe ?? 

// prototype is a object -> every things has a prototype  of its own 

function chaiMaker(leavesName,MilkAmount){
    this.leavesName=leavesName;
    this.MilkAmount=MilkAmount;
    this.cupsize=100;
    return 10 ;
}


chaiMaker.prototype.status=function(){
    return `this chai is made of ${this.leavesName} and contains ${this.MilkAmount} amount of milk in it , your Cupsize is ${this.cupsize}`;
}


// since prototype is a object we can add the function into it . 


const customer1=chaiMaker('Herbal',100);
const customer2=chaiMaker('Black',0);

// we can do this 
console.log(customer1); // it says undefined  -> why it says undefined -> as my function do not return anything if i return 10 its 10 .... 

// console.log(customer1.status()); // Error , Why ? -> since customer_ is undefined how can u access the status methord .. 
// console.log(customer2.status());


// Don't the customer 1 hold the refrence of chaiMaker function -> No as we have called it and assigned the return value to customer1 .. 


// what if i do 

const customer3=chaiMaker;

console.log(`this is the value of customer 3 ` , customer3('Plain',500));

// what is the use of new keyword then 




// What this do -> 
// Step 1 : creates a new empty object {}
// step 2 : then the prototype of empty object and chaiMaker function is linked 
// step 3 : bounding the properties to new object 
// step 4 : returning the object to the variable 
// The new keyword is used to:
// ✅ create a new object instance
// ✅ bind this to that object
// ✅ connect the object to the prototype
// ✅ return the object automatically
const newcustomer=new chaiMaker('herbal', 100);
console.log(newcustomer.status());
// new ne chaiMaker ke andar ek object banaya now this={}. so this.teaLeave=tealeave (yeh sb object ke andar hua hau ) uske baad it links the prototype of chaiMaker and object so that we can get the access to the status function declared using prototye after that it returns it to the customer variable ... 
// in case if we have explicit return anyobject inside chaiMaker then new will return that object instead.
// eg:
function Test(){
  this.a = 1;
  return { b: 2 };
}
const t = new Test();
console.log(t); // { b: 2 }
// also if we return any primitive like 10 it ignored it .. 
// New creates new instance 

// gotcha  -> Factory Function 
function developer(name,position){
    this.position=position;
    this.name=name;

    return {
        name,
        position,
        intro(){
            return `Hey ! its me ${this.name} i am a ${this.position} developer at ChaiCode `
        }
    }
}
const dev1=developer('Nikhil',"Senior Principle");
console.log(dev1.intro());




// Prototype 

const dadaJi={
    name:'Shri Sardar Singh',
    profession : "Soldier",
    hobby(){
        return `living with royality`}
}


console.log(dadaJi.hobby());

const papa=Object.create(dadaJi);

console.log(papa); //why we dont get the access of the properties ... -> abhi tk aapna khud ka nahi hai prrr haan dadaji ka dia hua sb hai if we want to access that we can 
console.log(papa.hobby()); // we can access 
console.log(papa.name);



const dad=Object.create(dadaJi);

dad.name='Mr Bijendra Singh Sirohi',
dad.profession='Buisness',
dad.likes=function(){
    console.log(`I love to work hard for my family`);
}

console.log('dad traits');
console.log(dad);// yes dad has his properties so he can access it its not a empty obejct 
console.log(dad.hobby()) ; // he aslo has the acccess to the properties of dadaJi 
console.log(dad.likes()); // this is giving 2 lines one is I love to work hard .. and another undefined as dad.likes is execturted and whatever it return its printed so it return undefined so it returns undefined 

const me =Object.create(dad);

console.log(me) // At this point i dont have anything 

me.name="Nikhil" 
me.dream=function(){
    console.log(`may be one day i will also be a good developer and get a lot of community to connnect with`);

}

console.log(`My traits`)
console.log(me);
me.dream();
me.likes();
console.log(me.profession);// will it be a profession of dadaJi or Dad -> its of dad as dad has his own and its inherited from dad to me 

// every things inherit Object so everthing is object in js 

Array.prototype.last=function(){
    return this[this.length-1];
}

let chai=['herbal','black'];
console.log(chai.last())


Array.prototype.map2=function(){
    for(let i=0;i<this.length;i++){
        this[i]=2*this[i];
    }
}


let i=[1,2,3];
i.map2();
console.log(i);


Array.prototype.map2=function(fun){
    const temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(fun(this[i]));
    }
    return temp;
}
let j=[1,2,3];
const k=j.map2((e)=>e*3);
console.log(k);


Array.prototype.forEach2=function(fun){
    for(let i=0;i<this.length;i++){
        fun(this[i]);
    }
}

let hello=[1,2,3];
hello.forEach2((e)=>console.log(e+1));
console.log(hello);

console.log(`hey its me reduce final value`,hello.reduce((acc,curr)=>{
    acc+=curr;
    return acc
},10))
Array.prototype.reduce2=function(fun,initialValue){
    for(let i=0;i<this.length;i++){
        initialValue=fun(initialValue,this[i]);
    }
    return initialValue;
}

console.log(`hey its me the customized reduce `,hello.reduce2((acc,curr)=>{
    acc+=curr;
    return acc
},10))



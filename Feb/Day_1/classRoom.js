// // Playing with var and let //



// // what are the issues with var ? 

// // Block Scope

for(var i=0;i<8;i++){
    var a=10;
    console.log(a);
}
console.log(a);
// // I can access this a outiside the loop as well which is dangerous for our code and lead to bugs .. 

// // // hoisting kya hoti hai -> hositing mai variable ko memory mil jati hai before initialization 

age=10;
// I can access age before instializing a value to it ... 
// console.log(age);
var age=19 ;

// // // What if we have a variable and funcition with same name -> function age var age ? function age , let age ? var age let age ? var age var age ? let age let age ? 
// // // Which one use the same refrences -> None uses the same refrences 

// // var a = 12 ;
// // var b=a;
// // a=10;
// // console.log(`hey its me value of a`,a);
// // console.log(`Hey its me value of b `,b);



// // let c=2;
// // let d=c;
// // c=5;
// // console.log(`hey its me value of c`,c);


// // console.log(`Hey its me value of d `,d);    


// // let object={
// //     name:'Chai',
// //     type:{
// //         type1:'green',
// //         type2:'herbal',
// //         type3:'black',
// //         type4:{
// //             'hena':'red',
// //             'mehndi':"green",
// //         }
// //     }
// // }

// // // here comes the strucctured clone ... 

// // let object2=object;
// // object.type.type1='red';

// // console.log(object2);



// // // But if interviewer ask to use spread operator .. 



// // var a =12 ;
// // var a=22;

// // console.log(a); // 22 Why ? because var allows us to redeclare a variable and it will take the latest value assigned to it .

// // let b=12 ;
// // let b=22;
// // console.log(b); // SyntaxError: Identifier 'b' has already been declared  Why ? because let does not allow us to redeclare a variable in the same scope and it will throw an error if we try to do so .

// // var age=12;
// // console.log(age);
// // console.log(age);
// // function age(){
// //     console.log('hey its me first age fucntion ');
// // }
// // age();

// // here its giving the errror as 
 

// // function age(){
// //     console.log('hey its me second age function ');
// // }

// // age();

// // In case if we have 2 function with the same name then the lastest one will be executed no matter when u call it as during hoisting the latest one will overwrite the complete function and whenever its called the latest will be executed .. 



// // which age is getting hoisted first ? 


// // How is hoisting done here ? functions has h



// // STORY OF LET 


// // let mai ek baar declare kia toh uss name se koi aur declare nahi krna vrna error aayega .. 
// // let mai termporal dead zone hota hai like before declare u cant initialioze nor access and before instialization u cant access it as well ..


// // story of var. -> var mai hoisting hoti hai bhar bhar kr hoti hai aur u can re declare a variable as well  

// function chai(tea){
//     return tea;
// }

// function chai(){
//     return 100;
// }

// function tea(){
//     return 10;
// }


// // console.log(chai(tea));


// // // this is not going to give the error 

// // // chalega latest wala because of hoisting .. 





// // let nums=[1,2,3,4,5,6,7,8,9,10];    

// // let chaiPrice=[];

// // nums.forEach((num)=> chaiPrice.push(num*2));
// // // for each do the work but dont return the value 
// // console.log(chaiPrice);



// // let coffee=[1,2,3,4,5];


// // let chaiPrice2=coffee.map((coffee)=>coffee*2);
// // // map retusn the value 
// // console.log(chaiPrice2);


// // includes , indexOf , find , findIndex, filter,push , pop , shift -> remove and return the first element , unshit ->adds to the starting of element  ....   


// const nums=[1,2,3];

// const resilt=mapi(num=>num*3);

// console.log(resilt);

// function mapi(fun){
//     let a=[]; 
//     for(let i=0;i<nums.length;i++){
//         a.push(fun(nums[i]));
//     }
//     return a;
// }

// foreach(nums=>console.log(nums**3));

// function foreach(fun){
//     for(let i=0;i<nums.length;i++){
//         fun(nums[i]);
//     }
// }



// const armanMalik=nums.filter(num=>num>2);

// console.log(armanMalik);

// // my polyfill for filter 


// function filteri(fun){
//     let x=[];
//     for(let i=0;i<nums.length;i++){
//         if(fun(nums[i])){
//             x.push(nums[i]);
//         }


//     }

//     return x;
// }


// console.log(filteri(nums=>nums>1));





const chai=[1,2,3,4,5];


const res=chai.forEach(nums=>{if(nums%2==0){
    console.log(nums);
}});

console.log(typeof res);


// Pollyfill of reduce. 
let nums=[1,2,3,4,5];   

function reduce(fun,value){
    for(let i=0;i<nums.length;i++){
        value=fun(value,nums[i]);
    }
    return value;

}

const finalSum=reduce((acc,curr)=>{
    acc+=curr;
    return acc;
},0);

console.log(`hey its me finalSum value `,finalSum);
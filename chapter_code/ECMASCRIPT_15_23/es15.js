//object properities 
//if both values & keys are same
const name ="Sudip";
const age =18;
//traditional
//  const person ={ name: name,age:age};
//  console.log(person);
 //using shorthand notation(es6 feature)
 const person ={name,age};
 console.log(person);


//Destructuring--> unpack values/properities from array,objects,into distinct variables

//Extracting specific elements:
const numbers=[10,20,30];
const[first,second,third] = numbers; //[var1_name,var2_name,var3_name]
console.log(second);

//Ignoring elements
const[, ,last]=numbers;
console.log(last);


//swaping elements
let a=10;
let b=20;
[a,b]=[b,a]; //without traditionally using third variable
console.log(a,b);

//Destructuring objects
const user = {myName: "Sudip", myAge: 19};
// traditional : const myName = user.name;
// const {myName , myAge} = user;
// console.log(myAge,myName); //u need to write the properities name

//renaming
const {myName:firstName , myAge} = user;
console.log(firstName);


//Spread Operator
//copying an array
let fruits=["mango","banana","grapes","pomegranate","cherry"];
let newFruits = [... fruits];
console.log(newFruits);
//concatenate
let fruits_List=[...fruits,...newFruits];
console.log(fruits_List);
//adding new value
fruits.push(...["guava","watermelon","berry"]);
console.log(fruits);
//spreading
//traditional:console.log('India'.split(''));
console.log([...'India']);


//REST Parametres
//traditional way
const sum =(... numbers) => { //numbers is a variable to store all the value passed in the arguments as an array
  return numbers.reduce((accum,curValue)=>
    (accum = accum + curValue),0
  );
};
console.log(sum(12,25,45,78,96,35,33,21,78,54,69,37,19,28));

//A function definition can only have one rest parameter(...num1) and rest parameter will be the last parameter(a,b,...num1)

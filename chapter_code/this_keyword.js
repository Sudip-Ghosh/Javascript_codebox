//In a function,this refers to the global object
//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }

// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

//* Fat Arrow Function
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };


// obj.greet();
const product = {
  id : 1,
  pName : "laptop",
  "is'product" : true,
  greet : function (){
    console.log("WLCM TO CODEBOX");
  },
};
//Object.keys() --> getting keys from set
let keys= Object.keys(product);
console.log(keys);
//Object.values() -->getting values for a set
let val= Object.values(product);
console.log(val);
//Object.entries() --> converts key:value pairs in an array
let entry= Object.entries(product);
console.log(entry);
//hasOwnProperty
console.log(product.hasOwnProperty("pName"));//return true or false


//assign
const target ={a:1,b:2};
const source = {b:3,c:4};
const mergeObj= Object.assign(target,source);//copies both and merge them
console.log(mergeObj);


//freeze --> freezing the object,no change will affect the object
Object.freeze(product);
product.id ="5";
console.log(product);//no change will be happen as product object is freezed by freeze function

//Interview questions

//add new key:value in grades
const product1 = {
  id : 1,
  pName : "laptop",
  "is'product" : true,
  grades:{
    Math : 80,
    English:87,
    Science:94,
  },
};

product1.grades.computer= 100 ;
console.log(product1);


//#2> check and return true/false that both obj have same KEY:VALUE or not
let objA = {name:"sudip",age:18,city:"Kolkata"};
let objB = {name:"sudip",age:18,city:"Kolkata"};
let objC = {name:"Ram",age:18,city:"Mumbai"};
const areObjectEqual = (x,y) => {
  if(x.keys === y.keys && x.values === y.values){
    return true;
  }else{
    return false;
  }
}
console.log(areObjectEqual(objA,objB));
//for-of doesn't support objects in loops instead of we can use for in for indexing in object

//#3>make id of the object as key and other elements as values
//output: { '1': { id: 1, name: 'sudip' }, '2': { id: 2, name: 'kajal' } }
let inputArray = [
  {id:1,name:"sudip"},
  {id:2, name: "kajal"},
];

// console.log(inputArray[0].id);
const arrayToObj =(arr) =>{
let objInput ={};
for (let key of arr){
  console.log(key.id,key);
  objInput[key.id] = key;
}
  return objInput;
}
console.log(arrayToObj(inputArray));



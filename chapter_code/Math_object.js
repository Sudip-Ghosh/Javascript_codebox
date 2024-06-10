//Constants
//-->MATH PI
const piValue=Math.PI;
console.log(piValue);

//round(),floor(),ceil();
console.log(Math.round(3.49));//nearest integer rounds
console.log(Math.floor(6.5));//nearest integer rounds[down]
console.log(Math.ceil(6.5));//nearest integer rounds[up]

//Basic Operation
//absolute--> how far the number is from 0 . It will be always positive.
console.log(Math.abs(-5));

//truncate--> Returns the integer part of X;[introduced in 2015-ES6]
let trunc_Value = Math.trunc(-3.8);
console.log(trunc_Value);

//Exponential and LOgarithmic Functions:
//Power
console.log(Math.pow(2,3));
//square_root
console.log(Math.sqrt(25));
//Math.log(X) returns the natural algorithm of x.
let logResult = Math.log(1);
let logResult1 = Math.log(2);
console.log(`${logResult} ${logResult1}`);
//Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log2(8));

//PRACTICE--Interview questions
//Generate Random number
console.log(Math.random())//returns a random number between 0(Inclusive) and 1(Exclusive)
console.log(Math.round(Math.random() * 100));
console.log((Math.random()* 100).toFixed(3));

//first class function means that functionas can be treared as values , assigned to variables, and passed around us ardguments .
function how_R_U(answer){
  return `I'm ${answer}`;
}
var myAnswer=how_R_U;
console.log(myAnswer("fine"));
//Higher-order function: It is a function that takes one or more functions as argument to another function and is executed after the completion of a task. 
//callback function is a function passed as an argument to another function
function processUserInput(name,greetuser){
  console.log("Received Input:" + name);
  greetuser(name)
}
//function to be used as callback
function greetuser(name){
  console.log(`Hello! ${name}`);
}
processUserInput("Sudip",greetuser); 

//WAP to perform mathematical operations usig callback functions and two variables in js

const mathOperation = (a,b,operation)=>{
  return operation(a,b);
};
const add = (a,b) => {
  return a+b;
}
const subtraction =(a,b) =>{
  return (a-b);
} 
console.log(mathOperation(10,5,add));
console.log(mathOperation(10,5,subtraction));

function sum(a,b){
  return a+b;
}
console.log(sum(5,6));

//function declaration/definition --> used to define  a function
function greeting(){
  console.log("WELCOME TO SUDIP'S TERMINAL");
}
//function invocation/calling --> used to calling a function
greeting();

function greet(name){
  console.log("Hello "+ name + " Welcome to my website.");
}
greet("Sudipta");

//functions expression--> It is  a way to define/declare a function as a part of an expression
var result= function minus(a,b){
  console.log(a-b);
};
result(10,7);

//Anonymous Function --> It is a way to create a fuction without a name.It can be created using either a function expression and function declaration without specified a name.
var result1= function (a,b){
  console.log(a-b);
};
result1(50,42);


//after return keyword no code will be executed in the code block....the compiler will show unreachable code detected.
function multiply(a,b){
  return a*b;
  console.log("Welcome to Best JS course");
}
console.log(multiply(5,6));
console.log("welcome to india");

//IIFE -> Immediately invoked function expression --> It is a javascript function that is defined and executed immediately after its creation.It is a way to create self-contained block of code that doesn't interfere with the surrounding code & executes immediately
(function (a,b){
  console.log(a/b);
})(25,5);
























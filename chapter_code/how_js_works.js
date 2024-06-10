//ASYNCHRONOUS
// const fun2=() => {
//   setTimeout(() =>{
//     console.log("fun2 starts and ends");
//   },2000);//got after 2 second
// }
// const fun1=() => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends");
// }
// fun1();

//synchronous --> executes one after another
const fun3=() => {
    console.log("fun3 starts and ends");
  }
const fun4=() => {
  console.log("fun4 is start");
  fun3();
  console.log("fun4 ends");
}
fun4();

//INTERVIEW QUESTIONS
//Scoping
//Lexical scoping
//It is a way of managing variable access in js based on the physical structure of the code.
//Determines where a variable can be used in your code.


//Scope chaining --> It ensures that child can access parent and further global data/variable also but vice-versa is not possible means a child can't access parent or global level of data
//Global,Block,Function scope variable

//closures
//it's created when an inner function has access to the variables of its outer functions , even after the outer function has finished executing

function outerFunction(){
  var outerVariable ="I'm from outer";
  function innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction;
}
var closureFunction=outerFunction();//as we know after return every function has finished still it's can print the output becuz of closures which determines the accessibility of inner functions with help of heap memory as it holds the data that is referenced by this execution contexts.
closureFunction();



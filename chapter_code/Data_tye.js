var c="sudip";
console.log(c);
//IDE & Extensions->VS Code + Coderunner + node.js
//for more checkout:https://github.com/thapatechnical/WorldBestJSCourse

//Primitive-BigInt;Symbol;number;String;

//Truthy_falsy values
var myname="";
if(myname){
  console.log("truthy");
}else{
  console.log("Falsy");
}

//parseInt and parsefloat
let myString='42.577578';
let myNumber=parseFloat(myString);
console.log(myNumber);

let myString2='42';
let myNumber2=parseInt(myString2);
console.log(myNumber2);

console.log(parseInt("@123"));  //It can't write the integer value of @ so output will be NaN(Not a Number)
console.log(isNaN("5"));

//CONCATENATION IN JS
//implicit coertion--by the compiler and explicit coertion--by user manually
let meraName="sudip"+"ghosh";
console.log(meraName);

let sum=" "+ 0;
console.log(typeof sum);

let minus="9"-4;
console.log(minus);
console.log(typeof minus);

console.log(true+true);

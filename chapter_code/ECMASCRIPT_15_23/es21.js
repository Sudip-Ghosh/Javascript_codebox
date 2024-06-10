//ES12
//replaceAll()
//Logical Assignment Operators(||==,&&==,??==)
//Numeric Separators
//Promise.any()

//Replacing
const text = "This     has     extra     spaces";
const normalizedText = text.replaceAll(/\s+/g," ");//refular expression globally applied
console.log(normalizedText);

//Logical Assignment Operators(||=,&&=,??=)
let num1 =10;
num1 ||= 20;//num1= num1 || 20
console.log(num1);

//Numerical Separators (_)
//It allows use underscore to be used as separators within numeric literals to improve readability
const Big_Number = 1_00_000;
console.log(Big_Number);//it does not affect on Output

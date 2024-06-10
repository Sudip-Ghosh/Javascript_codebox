//ES8
//string.padding
//Object.values()-->checkout Objects.js file
//Object.entries()-->checkout Objects.js file

//using padStart() to pad from the beginning:
const companyName = "CodeBOX";
const paddedName=companyName.padStart(15);//u will get 15 length value
console.log(paddedName.length);

//using padEnd() to pad from the end:
const paddedNameEnd = companyName.padEnd(10,"*");
console.log(paddedNameEnd);
console.log(paddedNameEnd.length);

//trailing commas
//use commas after the last parametre_value,object,array_element
//e.g. : let sum =(a,b,)=>(a+b); console.log(sum(1,2,));


//Async Await --> 
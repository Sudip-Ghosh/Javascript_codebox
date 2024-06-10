//ES10
//Array.prototype.{flat,flatMap};
//Object.fromEntries()
//String.prototype.{trimStart,trimEnd}
//Symbol.prototype.description
//Optional catch binding
//flat() method create an 1D array into an multiDimensional Array

const nestedArray = [1,2,[3,4],5];
const flattenedArr = nestedArray.flat();//one time
console.log(flattenedArr);

const nestedArray_3 = [1,[2,[3],[4],5]];
const flattenedArr_3 = nestedArray_3.flat(2);//two time
console.log(flattenedArr_3);

//flatMap()
const arr1 = ["My name","is Vinod", "thapa"];
const newArr1 = arr1.map((curVal) => curVal.split(" "));
console.log(newArr1);

const arr = ["My name","is Vinod", "thapa"];
const newArr = arr.flatMap((curVal) => curVal.split(" "));
console.log(newArr);

//Object.fromEntries();
//where ES8 introduce Object.Entries which converts object to array and fromEntries converts array to object
const person ={name:"sudip",age:18};
console.log(Entries1 = Object.entries(person));
console.log(Object.fromEntries(Entries1));

//trimStart() & trimEnd() => whitespaces removed
//use trim() for use both of method
let strName = "  Sudip     ";
console.log(strName.trim());

//Symbol.prototype.description
const mySymbol = Symbol("Its a symbol");
console.log(typeof mySymbol);
console.log(mySymbol.description);

//Optional catch binding
try{
  a+5;
}
catch(e){ //it defines not need to write that (e) instead we can write just catch(){ };
  console.log("there is error");
}


//ES11
//BigInt
//Nullish Coalescing Operator
//Optional chaining Operator
//promise.allSettled

//BIGINT
const maxNumber = Number.MAX_SAFE_INTEGER;//Ans:9007199254740991 for use more than bigger value than max safe integer of number use BigInt
console.log(maxNumber);
//so let's use BigInt
maxNumber1 = BigInt(maxNumber);
let num = maxNumber1 + 500n;//use this n for making number as BigInt typeof
console.log(num);

//Nullish Coalescing Operator --> if left side value is undefined/null[falsy value] returns right side value otherwise return left side value 
let favNum = 0;
userFavNum = favNum || 10;
console.log(userFavNum); //Ans: 10 --> its a bug in js
userFavNum1 = favNum ?? 10;//Nullish Coalescing Operator for get the right output
console.log(userFavNum1);

//Optional Chaining Operator (?.)
const person = {
    name: "John",
    address: {
      city: 0,
      Street:{
        name:"zakaria_713/3",
      },
      zipCode: 12345,
    },
  };
//without optional chaining
// console.log(person.address ? person.address.city : "city is not present");

//with optional chaining operator (?.)
console.log(person.address ?.city ?? "city is not present");
//with optional chaining operator (?.) deeply nested properities
console.log(person.address?.Street?.name ?? "No Street is mentioned in Addess");




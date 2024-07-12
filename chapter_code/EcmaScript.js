//Template String
console.log(`Your name is Sudip`); //when we print any value with backtick it's considered as Template String

//String Interpolation --> allows us to embed expression directly within the string .
let myName="Sudip Ghosh";
let Clg="BWU";
console.log(`Your name is ${myName} & you r studying in ${Clg}`);  //Calling any value ${} like that is called String Interpolation it's only can used in template string

//Default Parameter
function yourProf(a="Developer"){ // giving a value as a parameter during function declaration . 
   return a;
}
console.log(yourProf());

//Fat Arrow Function
const storage= (RAMStorage,SSDStorage) =>{// Using arrow(=>) instead of writing function.
  let totalStorage=`ur total storage is ${RAMStorage+SSDStorage}`;
  console.log(`${totalStorage} GB`);
}
storage(16,512);

const storage1= (RAMStorage1) =>console.log( `RAM in ur PC = ${RAMStorage1} GB`);
storage1(8);

const storage2= RAMStorage2 =>console.log( `RAM in ur PC = ${RAMStorage2} GB`);
storage2(4);


//Function practice questions
//check whether the string is pallindrome or not
const pallindromeChk = (a)=>{
    let reverseStr="";
    for(let char=a.length-1;char>=0;char--){
      reverseStr=reverseStr+a[char];
    }
    console.log(reverseStr);
    
    if(reverseStr === a){
      return true;
    } else{
      return false;
    };
}
console.log(pallindromeChk("level"));

//Multiline string --> allows to write multiple line of strings without escape charaters with the help of template strings


//Functions in javascript
function sum(a,b){
  return a+b;
}
console.log(sum(10,15));

let result=function sum1(a,b){
  return a+b;
}
console.log(result(10,23));

let result2 =function (a,b){
  return (a*b);
};
console.log (result2(5,6));

//IIFE
(function(a,b){
console.log (a*b);
})(5,8);



















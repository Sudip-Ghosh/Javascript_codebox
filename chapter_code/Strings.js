//Escape Characters
console.log("My name is \"Sudip\" Ghosh");
console.log("My name is \'Sudip\' Ghosh");
console.log("My name is /\\Sudip/\\ Ghosh");

//indexOf() : Look only the 1st Letter //if not found return -1
let text="Sudip Ghosh";
console.log(text.indexOf("Ghosh")); //as G are in 6 no index

console.log(Str=Array.from(text));

let StrMap = Str.map((curElem, index)=> `${curElem} - ${index}`);
console.log(StrMap);

//indexOf and lastIndexOf
let text1="hello sudip welcome sudip bhai!";
console.log(text1.indexOf("sudip"));
console.log(text1.lastIndexOf("sudip"));

//Search
let result = text1.search(/SUDIP/i); //Here i flag used to Ignores case sensitivity of that character // it's gives regular expression features with the help of /____/which is not includes in indexOf() & lastIndexOf() method
console.log(result);

//match()
//here js converts thwe normal text into regular expression text.match(/sudip/); without g flag {g=global}
let result_Match =text1.match('sudip');
console.log(result_Match);
let result_Match1 =text1.match(/Sudip/gi); //for g flag it will all the 'Sudip' named text in that sentence.
console.log(result_Match1);
let result_Match2 =text1.match('SUDIPBHAIYA');
console.log(result_Match2);//if anything not founds it shows null but in search() it shows -1.

//matchAll() //adds g flag at the end bydefault through these method
let result_MatchAll =text1.matchAll('SUDIPBHAIYA');
console.log(result_MatchAll);

let result_MatchAll1 =text1.matchAll("sudip");
console.log(...result_MatchAll1); //needs to use spread operator for printing

//includes
let text2="I am a JS Developer";
console.log(text2.includes("am")); // It's a ES6 feature

//startsWith() & endsWith();
let result_StartWith="I am a JS Developer and trying to learn react";
console.log(result_StartWith.startsWith("I"));

console.log(result_StartWith.endsWith("react"));


//EXTRACTING STRING PARTS
//substr is deprecated
//here negative indexing supported
//Slice()---> Need to remember that it not includes
let text_slice="I am a JS Developer and trying to learn react"
let result_slice = text_slice.slice(7,15);
console.log(result_slice);
let result_slice2 = text_slice.slice(-6);
console.log(result_slice2);


//substring()
//Here only naming convension will be not in camelcase because camelCase is used to separate words,substring is not to be intended as double words(sub,string) but as single word(substring);
//same as substring but it's not negative indexing supported

let result_substring = text_slice.substring(-6);
console.log(result_substring);

//REPLACING STRING CONTENT
//replace()
let replace = text_slice.replace("am", "am not");
console.log(replace);
let replace1 = text_slice.replaceAll("am", "am not");
console.log(replace1);

//charAt();

let result_Charat="I am a JS Developer and trying to learn react";
let result_Charat1=result_Charat.charAt(-6);
console.log(result_Charat1);

//charCodeAt() //converts in ASCII code and return the value
let result_Charat2=result_Charat.charCodeAt(-7);
console.log(result_Charat2);

//ES2022 introduced string method at();
let result_Charat3=result_Charat.at(-6);
console.log(result_Charat3);

//Other Useful Methods
const str1="   Hello ";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.trim()); //whitespaces removed
//split()
const str_split="chocolate,cadberry,chewinggum";
let split_result=str_split.split(","); //string-array
console.log(split_result);
console.log(split_result.join());//array-string
console.log(split_result.reverse());

//PRACTICE --Interview Questions

//Qu-1> WAJF that prints the letters 'a' to 'z' in console

for(let char = 97;char<=122;char++){
  console.log(String.fromCharCode(char)); //String.fromCharCode converts the code into ASCII to Character and opposite of charCodeAt();
}

//Qu-2> WAJF to check if all the vowels presents in a string or not

const checkVowels = (str) => {
  vowels="aeiou";
  for(let char of vowels){
  if(!str.includes(char)){
    return false;
  }
}
  return true;
}
console.log(checkVowels("My name is Sudip Ghosh"));

//Qu-3> WAJF to count the number of vowels in a String

const countVowels = (vowel) => {
      let count = 0;
      vowels1="aeiou"
      for (let i of vowel){
       console.log(i);
      if(vowels1.includes(i)){
        count++;
      }
      }
      return count;
    }
console.log(countVowels("Hello vailog!"));

//Qu. 4> WAJF to check if the given string is pangram is not
//Need to practice more

const pangramChecker = (str1) => {
  let inputArr11 = str1.toLowerCase().split("");
  //console.log(inputArr11);
  const values = inputArr11.filter((curElem) =>
  curElem.charCodeAt() >= "a".charCodeAt() && curElem.charCodeAt() <= "z".charCodeAt()
  );
return new Set(values).size === 26;
}
console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));




















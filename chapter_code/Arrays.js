//using Array constructor
let fruits = new Array('apple','banana','pineapple');
console.log(fruits);

//using Array literals
let fruits1=['apple',"banana","pineapple"];
console.log(fruits1);
console.log(fruits1[0]); //Indexing

//Modifying elements
fruits1[2]="Mango";
console.log(fruits1);

//Array Traversal
let fruits2=['apple',"banana","pineapple","mango","orange","blackberry"];
for(let i of fruits2){//for-of loop---> will return values
  console.log(i);
}

for(let i in fruits2){//for-in loop---> will return indexes //in means index(j4f)
  console.log(i);
}

//for-Each method
fruits2.forEach((curElem,index,arr) => { //using fat-arrow 
  console.log(`${curElem} ${index} `);
  console.log(arr);
})

//map fuction
fruits2.map((curElem,index,arr) => { //using fat-arrow 
  console.log(`${curElem} ${index} `);
  console.log(arr);
  console.log(`my favourite fruit is ${curElem}`)
})


//difference between map and forEach function
const futureFruitsdata=fruits2.forEach((curElem,index,arr) => { //using fat-arrow 
  return`${curElem} ${index} `;
})
console.log(futureFruitsdata);//Performs an action on each element //when you don't want a tranformed new array



const futureFruitsdata1=fruits2.map((curElem,index,arr) => { //using fat-arrow 
  return`${curElem} ${index} `;
})
console.log(futureFruitsdata1); // Creates a new array with transformed elements

//CRUD Operation --> Insert, Add, Replace and Delete Elements

//PUSH
const friends=["raj","ram","sam","sudip","dayal"];
console.log(friends.push("raju")); // It returns the new length
console.log(friends);

//POP
console.log(friends.pop()); //It removes the last element/deleted value
console.log(friends);

//UNSHIFT
console.log(friends.unshift("pallab"));//Elements to add to the beginning of the array
console.log(friends);

//SHIFT
console.log(friends.shift("pallab"));//Elements that remove the first element of the array
console.log(friends);

// //SPLICE
// //If we wanna add or remove anywhere in an elements
// //Syntax: splice(start,deletecount,item1,item2,...,itemN);
// // console.log(friends.splice(2));  index starts from 2.
// // friends.splice(0,2);//index starts from 0 and 2 elements means 0 & 1 will be deleted
// // console.log(friends);
// // console.log(friends.splice()); //no slice input-->[]
// friends.splice(1,2,"jadu","madhu"); //indexstart=1;totalElementDelete=2; //jadu madhu will be replaced in that position of elements
// console.log(friends);


//Searching in an Array
//Indexof -->//Syntax : indexOf(searchElement) & indexOf(searchElement,fromIndex);
const number=[100,200,300,400,500,600];

console.log(number.indexOf(400));
console.log(number.indexOf(400,2));//though it will check from 2nd Index , the index will be counted from the beginning of the array
console.log(number.indexOf(400,8)); //it will return -1 if form that fromIndex, the element is not found.

//lastIndexOf  -->//Syntax: lastIndexOf(searchElement) & lastIndexOf(searchElement,fromIndex); 
//searching elements from backward
const number1=[100,200,300,400,300,500,600];
console.log(number1.indexOf(300));
console.log(number1.lastIndexOf(300));//indexing from backward but will return index no cou ting from forward.
console.log(number1.lastIndexOf(300,2));

//includes  --> return either true or false
const includesExample=number1.includes(200);
console.log(includesExample);

//Practice-Time(CRUD)
const months=['Jan','march','dec','june','Apr'];
// //delete june
// const indexToDelete=months.splice(3,1);
// console.log(months);

// //from dec to December
// const indexToUpdate=months.splice(2,1,"December");
// console.log(months);

// //delete Apr
// months.pop();
// console.log(months);


//FIND METHOD-->find the first element of the array which satisfies the first condition
const number2=[1,2,3,4,5,6,7,8,11,6,4];

const result = number2.find((curElem)=>{
  return curElem > 6; //as 7 is bigger than 6 from the begining of the array.
});
console.log(result);

//FindIndex--->find the first element index no of the array which satisfies the first condition
const result2=number2.findIndex((curElem)=>{
  return curElem > 10;
})
console.log(result2);//as 11 is bigger than 10 and it's index no is 8.

//Filter --> find all the element which is greater than the condition.
let value=12;
const numbers=[1,2,12,3,4,5,6,8,12,10];
let output=numbers.filter((curElem)=>{
      return curElem !== value;
});

console.log(output);

//Practice

//Qu : find the products those price r more than 20k
let products=[
  {name:"laptop", price:45000},
  {name:"iphone", price:75000},
  {name:"smartWatch", price:12000},
  {name:"SmartPhone", price:25000},
]
let findProduct=products.filter((curElem)=>{
  return curElem.price >= 20000;
})
console.log(findProduct);

//Filter Unique values
const newNumber=[1,2,12,3,4,5,6,8,12,10];
console.log(new Set(newNumber));
console.log([... new Set(newNumber)]); //...--> Spread Operator


//SORTING AND COMPARING
const newNumber1=[1,2,12,3,4,5,6,8,12,10];
//for ascending order
newNumber1.sort((a,b)=>{
  if (a>b) return 1;//Switch the value
  if(a<b) return -1;//Keep the change
})
console.log(newNumber1);
//for decending order
newNumber1.sort((a,b)=>{
  if (a>b) return -1;//keep the change
  if(a<b) return 1;//Switch
})
console.log(newNumber1);


//PRACTICE
//using map function printing square of each even elements
const newNumber2=[1,2,3,4,5,6,8,10];
const resultMap=newNumber2.map((curElem)=>{
  if(curElem % 2===0){
    return curElem * curElem;
  }
}).filter((curElem)=> curElem !== undefined);
console.log(resultMap);

//using the map method , write a function that takes an array of names and returns a new array where each name is prefixed with "Mr.";
const nameBox=["Sudip","Pallab","Sohal","Aman"];
const greet=nameBox.map((curElem)=>`Mr. ${curElem}`);//if you have a single expression inside the function body and you don't need to explicitly use the return keyword, you can use implicit return syntax without curly braces {}
console.log(greet);

//REDUCE METHOD
//Syntax : array.reduce(function callback(accumulator,currentValue,index,arr){
      //write ur code
// }).initialValue);
const productPrice =[100,150,250,550]; //add the price of all the element like i.e. Shopping Cart
const totalPrice = productPrice.reduce((accum,curElem)=>{
  return accum + curElem;
},0);//here this intialValue means the value of accumulator
console.log(totalPrice);























































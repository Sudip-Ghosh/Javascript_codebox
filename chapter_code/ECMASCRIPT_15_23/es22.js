//ES13
//.at() method
const array1 =[10,20,30,40];
console.log(array1.at(-2));


//Object.hasOwn
//Syntax:Object.hasOwn(Obj_name,"properties");
const Book ={
  name:"Javascript",
  price: 500,
};
console.log(Object.hasOwn(Book,"price"));

//hasOwnProperty vs Object.hasOwn
//hasOwnProperty doesn't work for objects created using Object.create(null)
const Student =Object.create(null);
Student.name="sudip";
console.log(Student);
// console.log(Student.hasOwnProperty("name"));//Ans:TypeError: Student.hasOwnProperty is not a function
console.log(Object.hasOwn(Student,"name"));

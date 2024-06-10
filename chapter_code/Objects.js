//create objects //key:value pairs //collection of different types of data types --> used also for data modeling 
const product = {
  id : 1,
  pName : "laptop",
  "is'product" : true,
  greet : function (){
    console.log("WLCM TO CODEBOX");
  },//Anonymous fuction
};

//Accesing Properities
console.log(product.id);
console.log(product.pName);
console.log(product["is'product"]); //instead of dot we can also use

//Modifying
product["pName"] = "Mobile";
console.log(product);
product.id = 2;
console.log(product);

//Method calling
console.log(product.greet());

//dynamic keys in an object
let idType = "studentId";
let student ={
  [idType]:"a12345",//dynamic-->for using one value to many keys
  StdName : "sudip",
  StdAge : 18,
  isStudent: true,
  greet1: function(){
    console.log(
      `Hey, my ${idType} is ${student[idType]} and my name is ${student.StdName}.`
    );
  }
}
console.log(student.greet1());

//PASS BY VALUES || PASS BY REFERENCE
//PASS BY VALUES --> any changes doesn't affect on original value
let a=10;
const modify_a = (x) => (x=20); 
console.log(modify_a(a));
console.log(a);

//PASS BY REFERENCE -->changes affect on original value
let b={value : 10};
const modify_b= b.value = 20;
console.log(modify_b);
console.log("original =>", b);

//Object.assign() => used to copy properities from one or more source objects to a target object.//for overcome pass_by_reference problem
 let obj1 = { id: 5 ,name: "sudip",tech_Stack : "REACT js"};
 let newObj= {};
 let obj2 = Object.assign(newObj,obj1); //(newObject,oldObject which value to be added to the new object)
 obj2.tech_Stack = "Angular";
 console.log(obj2);
 console.log(obj1);

//Comparison by reference
let objt1= {id: 1 ,name: "Ram"};
let objt2= {id: 1 ,name: "Ram"};
if(objt1 === objt2){
  console.log("yes");
}else{
  console.log("no");//its no because of their memory locations are not same.
};
//Object.entries
Object.fromEntries(product);






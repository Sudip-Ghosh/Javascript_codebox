//ES9
//REST/SPREAD --> now we can use these with objects also not only in arrays #copying #concatenation
//concate
let obj1 ={a:10,b:20,c:45};
let obj2 ={c:25,d:38,e:75}; //not like array here only 5 elements will be printed as c is overridden by new c in obj2
const newObj ={...obj1 , ...obj2};
console.log(newObj);

//promises -->


//ES14
//Array.findLastIndex() & findLast()
//Array.prototype.toReversed() 
//Array.prototype.toSorted(compareFn)
//Array.prototype.toSpliced(start,deleteCount,... items)
//Array.prototype.with(index,value)

//run in browser
//Array.prototype.toReversed() 
//Array.prototype.toSorted(compareFn)
//Array.prototype.toSpliced(start,deleteCount,... items)
//all 3 methods not affect on Original array return a new array based on applying changes
nameBox = ["sudip","pallab","subha","Arijit"];
let changeName = nameBox.toSpliced(3,1,"ram");
console.log(changeName);

//Array.prototype.with(index,value)
let changeName1 = nameBox.with(0,"rahul");
console.log(changeName1);
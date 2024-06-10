//if-else ?/check whether i'm eligible to vote or not!!!
let age=20;
let isCitizen=1;//u can also write true insted of 1.
let isRegistered=1;//if u not assign value of this type of variable/ boolean variable then defaultly it will take false or, 0.

if(age>=18){
  if(isCitizen){
    if(isRegistered){
  console.log("u r eligible to vote.");
}
else{
  console.log("not registered in voting portal");
}
}
else{
  console.log("not a citizen of India!!");
}
}
else{
  console.log("u r younger and not eligible to vote.")
}

//Switch Statement
//If we don't use break it will print all the things after getting the right value without checking the conditions.
 let skill="powerful";
 switch(skill){
case "Teamwork":
  console.log("Teamwork is the best way to reach ur goal");
  break;
case "selfStudy":
  console.log("SelfStudy is the second best way to reach ur goal");
  break;
case "leadership":
  console.log("leardership is not the best way to reach ur goal");
  break;

default:console.log("pls choose 1 options!!!");
 }

// let i=1
// for(;;){
//    console.log(i); //used for infinite loop
// }



// let btn1=document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a=25;
//   a++;
//   console.log(a);
// }
// //latest override will give more priority
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
// }

// //event object
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);//provides information about the type of an event.
//   console.log(evt.target);//refers to the HTML element that triggered the event.
//   console.log(evt.clientX , evt.clientY);//Horizontal coordinate & vertical co-ordinate
// }


//Adding Event Listener
// btn1.addEventListener("click", (evt) => {//Access event object and event handling both
//   console.log(evt.type);
//   alert('wlcm to my page!!!');
// })



//removing specific Event Listener
btn1.addEventListener("click", () => {
  console.log('wlcm to my page!!! #1');
})
// btn1.addEventListener("click", () => {
//   console.log('wlcm to my page!!! #2');
// })
btn1.addEventListener("click", () => {
  console.log('wlcm to my page!!! #3');
})
btn1.addEventListener("click", () => {
  console.log('wlcm to my page!!! #4');
})
// for removing i need to keep that addEventlistner function into a variable ..as the both functions stored in different blocks in memory..
//so for removing event no 2
// let remove2 = () => {
//   console.log('wlcm to my page!!! #2');
// };
// btn1.addEventListener = ("click", remove2 );
// btn1.removeEventListener = ("click", remove2 );



let modeBtn = document.querySelector("#b2");
let bodyColor = document.querySelector("body");

let currMode = "light";
modeBtn.addEventListener("click", ()  => {
  if(currMode === "light"){
    currMode = "dark";
    bodyColor.classList.add="dark";
    bodyColor.classList.remove="light";
  } else {
    currMode = "light";
    bodyColor.classList.add="light";
    bodyColor.classList.remove="dark";
  }
  console.log(currMode);
})
//Also known as Pyramid of DOOM 
//refers to a situation in asynchronous js programming where multiple nested callbacks are used to handle asynchronous operations.

//This example is kind of an example of callback hell as here multiple nested setTimeout() is called and looklike very complex asynchronous operations ..we can overcome these with the help of promises.
const getStudentData =() => {
  setTimeout(()=>{
    console.log("Hi, My name is Sudip.");
    setTimeout(()=>{
      console.log("Hi, My name is Rahul.");
      setTimeout(()=>{
        console.log("Hi, My name is Kajal.");
        setTimeout(()=>{
          console.log("Hi, My name is Anik.");
          setTimeout(()=>{
            console.log("Hi, My name is Avirup.");
            setTimeout(()=>{
              console.log("Hi, My name is Shubh.")
              setTimeout(()=>{
                console.log("Hi, My name is Krishna.")
              },1000);
            },1000)
          },1000);
        },1000)
      },1000)
    },1000);
  },1000);
};
getStudentData();
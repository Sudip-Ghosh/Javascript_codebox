//A promise is like a placeholder for the result of an asynchronous operation.

//1: Using the Promise Constructor (Class):

// Understand through example
//todo  1:  default state is pending

//todo 2:  Promise Made:  Your friend promises to call you after 2 days at 6 pm. This is similar to creating a promise in JavaScript.

//todo 3:  Pending Stage:  During the 2-day period, you're in a "pending" stage. You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarly, when you create a promise in JavaScript, it starts in a pending state until it either resolves (fulfills) or rejects.

//todo 4: Resolution at a Specific Time:  After 2 days and exactly at 6 pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected) if your friend doesn't call. This aligns with the idea that promises in JavaScript resolve or reject, often triggered by asynchronous operations, at a specific point in time.

//2: Using a Function (Promise Wrapper):
const pr = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Okay,call me!");
  },1000);
})
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.
pr.then((request)=>{
  console.log(request);
})
.catch((error)=> {
  console.log(error);
})
.finally(()=> {
  console.log("Don't worry,we all miss you and keep smiling");
});


//another example usage

const studentName = "Sudip";

const enrollStudent = (studentName) => {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous enrollment process
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.4;

      if (isSuccessful) {
        resolve(`Enrollment successful for ${studentName}`);
      } else {
        reject(`Enrollment failed for ${studentName}. Please try again.`);
      }
    }, 2000);
  });
};

enrollStudent(studentName)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Enrollment process completed.");
  });

  
//Promise methods
//Promice.all() --> u want to wait for all promises to complete successfully.if one will throw error state will be rejected
//kind of non-primitive process in Operating System
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 2000)
);

const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 5000)
);

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Failed"), 100)
// );

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 100)
);
//using promise constructor
// Promise.all([promise1,promise2,promise3])
//   .then((values)=>{
//     console.log(values);
//   })
//   .catch((err1)=>{
//     console.error(err1);
//   })
 

//Promise.allSettled --> u want to wait for all promises to complete ,regardless of success or failure
// Promise.allSettled([promise1,promise2,promise3])
//   .then((values)=>{
//     console.log(values);
//   })
//   .catch((err1)=>{
//     console.error(err1);
//   })

//Promise.race --> u r interested in the result of the first promise that completes,regardless of success of failure.
Promise.race([promise1,promise2,promise3])
  .then((values)=>{
    console.log(values);
  })
  .catch((err1)=>{
    console.error(err1);
  })//Ans:Third


//PROJECT: DAD JOKES WITH PROMISES

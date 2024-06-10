//Async and await are js keywords intoduced in ECMAScript 2017(ES8) that make asynchronous code look and behave more like synchronous code , making it easier to write,read and reason about asynchronous operations.
//++version of promises
const apiBody = document.querySelector(".api_body");
  const apiUrl ="./link";
  async function fetchData(){
    const res = await fetch(apiUrl,{
      headers:{
        Accept:"application/json",//accept it that it is json though it not json
      }
    });
    console.log(res);
    const data= await res.json();//wa
    console.log(data.joke);
  }
fetchData();

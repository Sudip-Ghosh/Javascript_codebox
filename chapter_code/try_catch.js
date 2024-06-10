const apiBody = document.querySelector(".api_body");
const apiUrl ="./link";
async function fetchData(){//for fatarrow => const fectData=async() => {};
  try{
  const res = await fetch(apiUrl,{
    headers:{
      Accept:"application/json",//accept it that it is json though it not json
    }
  });
  console.log(res);
  const data= await res.json();//wa
  console.log(data.joke);
  apiBody.innerHTML =data.joke;
}catch(error){
  apiBody.innerHTML=error;
  console.log(error);
}
}
fetchData();
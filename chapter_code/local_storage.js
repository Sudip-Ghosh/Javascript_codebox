//local storage object allows you tu save key/value pairs in browser
//it stores data with no expiration date.
//the data is not deleted when the browser is closed and are available for future sessions.

//add/store data from local storage
localStorage.setItem("name","sudip");// key:name,value:sudip
//get/retrieve data from local storage
localStorage.getItem("name"); //o/p --> sudip
//remove data
localStorage.getItem("name");

//local storage can only store strings, so when u want to store a complex data structure like an array or an object , you need to convert it to a string using JSON.stringify:
//JSON => Javascript Object Notation

//json.stringify : javascript object to json string 
//// JSON.stringify("object_name");
//json.parse : javascript converts json strings to js object
//// JSON.parse("object_name");

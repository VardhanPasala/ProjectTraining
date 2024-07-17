'use strict'
const array1=["Vardhan", 23, 6.45,'a'];
const addedvalue=array1.push("Vardhan");
//for addding at last
console.log(addedvalue);
console.log(array1);
// for removinfg the value at last
array1.pop();
console.log(array1);
//for adding the value at first 
//array1.shift();
// splice 

//array1.splice(1, 1, "Siva");
//console.log(array1);

//array1[1]="Siva";
//console.log(array1);

array1.splice(1, 3, ["Simhadri","Siva"]);
console.log(array1);


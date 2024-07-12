'use strict'
//Creating an array 
const array1=["vardhan","Panda","Durga","Bharath"]
console.log(array1);
// Creating an for retreaving individual/Particular index
const years=[1990, 2000,2018,2024]
console.log(" The zero index value is:"+ years[0]);
console.log(years[1]);
// for adding value to the array
array1[2]="Vamsi";
console.log(array1);

//for getting the length of the array
console.log(array1.length);

// for getting the last index value 
console.log(array1.length-1);

// We can also store hetrogenous data in array 
//let height=6.1;
let array3=[2000, "Vardhan", 6.1]
console.log(array3);

// Exercise

const calculateage=function (BirthYear){
return 2024-BirthYear;
}

const array4=[1999,2002,2000,2004,2005];
const age1=calculateage(years[0]);
const age2=calculateage(years[1]);
const age3=calculateage(years[2]);
const age4= calculateage(years[years.length-1]);

console.log(age1,age2,age3,age4);

// Methods in arrays
// For adding elements


// for adding last elements
const friends=["Vardhan","Simhadri","Panda","Durga"];
console.log(friends);
friends.push("Bharath");
console.log(friends);
// for adding to first index
friends.unshift("Praveen");
console.log(friends);

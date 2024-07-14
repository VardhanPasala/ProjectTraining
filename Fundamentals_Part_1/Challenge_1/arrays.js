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
// for removing the last elements of an array
//POP Method
const removeLast=friends.pop();
console.log("The removed values is :"+removeLast);

//for adding the value from start
//UNSHIFT method
const addedValues=friends.unshift("Siva","Nagarjuna");
console.log("The added values of an array:"+addedValues);

//for removing partiticular values in the arrray
// Splice method
const removedValuesof=friends.splice(1,2);
console.log("The removed values through splice :"+removedValuesof);

const addesdvaluesof=friends.splice(1,2,"VK","Sai");
console.log("The added values through splice:"+ addesdvaluesof);
console.log(friends);

// for printing from start to final index 
//Slice
const newslice=friends.slice(0,2);
console.log("New array of slice method:"+newslice);

// for adding two arrays together and form a single array
//CONCAT

let names=["Vardhan","flowers","cat"];
let nums=[1,2,3,4,5];
let Mergedarray=names.concat(nums);
console.log("The merged array is:"+Mergedarray);

//for getting the index number of a value in the array
// INDEX OF 

let flowers=["Rose","lilly","Jasmin"];
let indexvalue=flowers.indexOf("Rose");
console.log("Index value of Rose is"+indexvalue);

// if there ara duplicate values present int he array
let flower=["Rose","lilly","Jasmin","Rose", "Dahlia","Rose"];
let dupindex= flower.indexOf("Rose",1);
console.log("The duplicate value index number is:"+dupindex);

let seconddup=flower.indexOf("Rose",4);
console.log("index value of second duplicate value:"+seconddup);

// For cheking the boolean status of the value

let fruits=["apple","Banana","Mango","Soppota"]
let statusof=fruits.includes("apple");
console.log("The boolean status of the aplle is :"+ statusof);

// forEach 

let numberss=[1,2,3,4,5,6,7,8,9,10];
numberss.forEach((add)=>{
    console.log("The multiplication of"+add*2)
})



// Map function 

let fahren=[32,45,43,67,89];

function fahtocel(fahren){
    return (fahren-32)*5/9;
}

let celcius=fahren.map(fahtocel);
console.log(celcius);

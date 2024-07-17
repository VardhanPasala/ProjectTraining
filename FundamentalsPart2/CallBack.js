'use strict'
//Normal function

function one(){
    console.log("I am function one");
}

function two(){
    console.log("I am function two");
}

one();
two();

// Call back function

function three(four){
    
    console.log("I am function 3");
    four();

}

function four(){
    console.log("I am function 4");
}

three(four);

// Callback function by arrow function

let FirstFunction=(order)=>{

    console.log("oreder recieved. Please call the production");
    secondFunction();

}

let secondFunction=(production)=>{
    
    console.log("Production Started");
}

FirstFunction();

// Callback with arrow function

let First=(adding)=>{

    second();

    let a=5;
    let b=4;
    let c=a+b;
    console.log("I am first function Value:"+c);

};

let second=(removing)=>{

    let a=34;
    let b=50;
    let c=a-b;
    console.log("I am second function value:"+c);

    const array1=["Vardhan","Simhadri"];
    console.log(array1);
    array1.splice(1,0,"Ambika");
    console.log(array1);

}

First();



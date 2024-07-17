'use strict'

let stocks={

    fruits:["Carrot","Mango","Suppota","Pappaya"],
    liquids:["Ice","Milk","SugarLiquid"],
    holdings:["Cup","Cones","Glasses"],
    toppings:["Cherrys","pudeenLeaves"],
};

// create a variable with boolean status 
let is_shop_open=true;
// Create a function with arguments of time and work
 let order=(time, production)=>{
    return new Promise((Resolve, reject)=>{
        if(is_shop_open){
setTimeout(()=>{
    Resolve(production());
}, time);


        }
        else{
            reject(console.log("Sorry shop is closed"));
        }
    })

 }

 order(2000, ()=>console.log(`${stocks.fruits[0]} was selected `));

 console.log("HelLO World");


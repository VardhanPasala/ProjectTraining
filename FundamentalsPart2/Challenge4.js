'use strict'

/*Steven needs a very simple tip 
calculator for whenever he goes 
to eat in a restaurant. In his country,
it's usual to tip 15% if the bill 
value is between 50 and 300. 
If the value is different, the tip is 20%*/ 

const bill = 275;

const tip= bill<=300 && bill>=50 ? bill*0.15: bill*0.2;

console.log(` The bill is (${bill})  and the tip  is (${tip}) and the total value is (${bill+tip}) `);

//session

const products = [ 
    { name: 'dress', price: 600 }, 
    { name: 'cream', price: 60 }, 
    { name: 'book', price: 200 }, 
    { name: 'bottle', price: 50 }, 
    { name: 'bedsheet', price: 350 } 
]; 

let filtermetod= products.filter((fetch=>{
    products.price>100;
}));

console.log(filtermetod);




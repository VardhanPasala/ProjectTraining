'use strict'

/*setTimeout(()=>{
    console.log("Vardhan");
}, 4000);
console.log("Simhadri");
console.log("Ambika");
console.log("Anusha");*/

// Create an object that stores different objects for order like fruits, liquids, toppings.
//Create one function for  Making an order
//Create another function for Produnction
//Place Order--> 2 sec
//Cut the fruit -->2 sec
//Add the water  -->1 sec
//start the machine -->2 sec
// Select the container--> 2 sec
// select the toppings --> 2 sec
// serve the customer--> 2 secs 

let stocks={

    fruits:["Carrot","Mango","Suppota","Pappaya"],
    liquids:["Ice","Milk","SugarLiquid"],
    holdings:["Cup","Cones","Glasses"],
    toppings:["Cherrys","pudeenLeaves"],
};

let order=(fruitName, CallProduction)=>{

    setTimeout(()=>{
        console.log("Order has been Placed");
    }, 2000);
production();
}

let production=()=>{

    setTimeout(()=>{
        console.log(`${stocks.fruits[1]} has been chopped off`);
        setTimeout(()=>{
            console.log(`${stocks.liquids[0]} has been added to the chopped fruit`);
            setTimeout(()=>{
                console.log("The machine has started");
                setTimeout(()=>{
                    console.log(`Juice has been poured in the ${stocks.holdings[2]}`);
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} has added as toppings`);
                        setTimeout(()=>{
                            console.log("Served to the customer")
                        },2000);
                    },2000);
                },2000);
            },2000);
        },1000);
    },3000);
};

order();

// By chaining method

const products = [
    { name: 'dress', price: 600 },
    { name: 'cream', price: 60 },
    { name: 'book', price: 200 },
    { name: 'bottle', price: 50 },
    { name: 'bedsheet', price: 350 }
];
 
const filterProducts = products
    .filter(value => value.price > 100)
    .map(getname=> {
        return `price of item is ${getname.price} and name is ${getname.name}`;
    } );
console.log(filterProducts);
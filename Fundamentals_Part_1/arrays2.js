'use strict'
// Map function 

let fahren=[32,45,43,67,89];

function fahtocel(fahren){
    return (fahren-32)*5/9;
}

let celcius=fahren.map(fahtocel);
console.log(celcius);

// map with narrow function

let numbers=[1,2,3,4,5,6]
let addednum=numbers.map(add=> add*3);
console.log(addednum);

//Filter Method

let employee=[{name:"Vardhan",  age:25, gender:"Male"},
              {name:"Simhadri", age:24, gender:"Male"},
              {name:"Ambika",    age:24, gender:"Female"},
              {name:"Anusha",    age:24, gender:"Female"}];

       /* let maledetails=employee.filter(function(employee){
        //return employee.gender ==="Female";
        return employee.age>20;
        });

         console.log(maledetails);*/

         let newPrices = employee.filter((employe) => (employe > 24 && !Number.isNaN(price)));
console.log(newPrices);


      

    

        //for Even number

        let number=[1,2,3,4,5,6,7,8,9,10]

        let evennum=number.filter((num)=>{
            return num%2===0;
        })
        console.log(evennum);




'use strict'
let customers = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 2,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 3,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 4,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 5,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];



 // For question 1
 //what items senior citizens have purchased >60
 customers.forEach(Citizen=> {
    if(Citizen.age > 60) {
       console.log(`Customer ${Citizen.f_name} ${Citizen.l_name} purchased: ${Citizen.purchased}`);
    }
 });


 //Question 2
 //add full_name to existing list where married Female its Mrs,
 // unmarried female its Ms., for all male its Mr.
//example : 
//'full_name': Ms.Maria Gomes

customers.forEach(customer=>{
    let title;

    if (customer.gender ==='M' ){
        title= 'Mr.';
    }
     else if(customer.gender === 'F'){
        if(customer.married === true){
            title= 'Mrs.';
        } else{
            title='Ms.';
        }
     }

     console.log(`${title} ${customer.f_name} ${customer.l_name}`);
})
 

//Question 3
//check for young customer, the out put will be true of false, 
//true if any customer found with age < 10 else it should be false

let youngCustomeDetails=customers.some((youngCustomer=> youngCustomer.age<10));
console.log(youngCustomeDetails);

//Question4
//for each element in the array use call back to multiply by 2
//function forEachElement(arr, callback) 
//callback: will multiply each element with 2

// Given array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function forEachElement(arr, callback) {
    // Applies the callback function to each element in the array
    const result = [];
    for (const element of arr) {
        result.push(callback(element));
    }
    return result;
}

// Define the callback function to multiply an element by 2
function multiplyBy2(element) {
    return element * 2;
}


// Apply the callback function to each element in the array
const result = forEachElement(arr, multiplyBy2);

// Print the modified array
console.log(result);



 // Question5
 //Asych callback 
  //create a function 
 // function fetchData(url, callback) 
  //add a condition
   //const error = Math.random() > 0.5
// should be asynchronous use setTimeout check if above error value is true then call the callback with message argument as error,url else send the argument as success,url
// the callback function will have message and url as argument, 
  //if error is null then print errorccured {message} {url}
    // else print the response is successfull the url is {url} and message is {message}

    function fetchData(url, callback) {
        // Simulate asynchronous behavior using setTimeout
        setTimeout(() => {
            const error = Math.random() > 0.5;
            if (error) {
                callback(`error, ${url}`);
            } else {
                callback(`success, ${url}`);
            }
        }, 1000); // Delay of 1000 milliseconds (1 second)
    }
    
    // Example usage
    //let url="https://www.google.com";
    function callbackFunction(result) {
        if (result.startsWith("error")) {
            console.log(`Error occurred: ${result}`);
        } else {
            console.log(`Response is successful. URL: ${result}`);
        }
    }
    
    // Call fetchData with a sample URL
    fetchData("https://www.google.com", callbackFunction);
    
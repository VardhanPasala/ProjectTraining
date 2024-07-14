const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;

markBMI=massMark/(heightMark*heightMark);
johnBMI= massJohn/(heightJohn*heightJohn);
const markHigherBMI=(markBMI>johnBMI)
 
 console.log(markBMI,johnBMI,markHigherBMI);

 if(markBMI>johnBMI){
        console.log(`markBMI (${markBMI}) is greater than johnBMI (${johnBMI}) `);
 }else {
    console.log(`johnBMI(${johnBMI}) is greater than markBMI(${markBMI}) `);
 }
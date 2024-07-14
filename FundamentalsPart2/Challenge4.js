const bill = 275;

const tip= bill<=300 && bill>=50 ? bill*0.15: bill*0.2;

console.log(` The bill is (${bill})  and the tip  is (${tip}) and the total value is (${bill+tip}) `);




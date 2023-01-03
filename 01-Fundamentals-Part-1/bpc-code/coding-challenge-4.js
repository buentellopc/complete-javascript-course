// Declare variables
const bill = 275;
let tip = 0;
let totalValue = 0;
// Calculate the total value
// const totalValue = bill + bill * tip;

bill >= 50 && bill <= 300 ? (tip = 0.15) : (tip = 0.2);

totalValue = bill + bill * tip;

console.log(
  `The bill was ${bill}, the tip was ${
    bill * tip
  }, and the total value ${totalValue}`
);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
 */

// Data 1
markHeight = 1.69;
markWeight = 78;

johnHeight = 1.95;
johnWeight = 92;

// Data 1
// markHeight = 1.88;
// markWeight = 95;

// johnHeight = 1.76;
// johnWeight = 85;

// Calculate both BMI

// Mark
markBMI = markWeight / markHeight ** 2;
// BMI = markWeight / (markHeight * markHeight);

console.log(`Person: Mark\n Height: ${markHeight} Weight: ${markWeight}`);
console.log(` BMI: ${markBMI}`);

// John
johnBMI = johnWeight / johnHeight ** 2;
// BMI = johnWeight / (johnHeight * johnHeight);

console.log(`Person: John\n Height: ${johnHeight} Weight: ${johnWeight}`);
console.log(` BMI: ${johnBMI}`);

// Has mark a higher BMI than john?
const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

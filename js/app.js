// PTO V2: A simple program that calculates the PTO(paid time off) for the corresponding amount of time the employee has worked in years. Returns amount of PTO in weeks. 

// PTO V1: 

// let paychecksPerYear = 26;
// let hoursPerCheck = 3;
// let PTOperYearInHours = paychecksPerYear * hoursPerCheck;
// console.log('You earn this many hours per year to take a vacay: ',PTOperYearInHours);

// V2:

let hoursPerCheck = 6.6;
let paychecksPerYear = 26;
let PTOperYearInHours = paychecksPerYear * hoursPerCheck;
debugger;
let totalWeeksPerYear = PTOperYearInHours/40;
console.log("You earn " + totalWeeksPerYear + " weeks per year.");

let output = document.getElementById('output');

output.innerText = "You earn " + totalWeeksPerYear + " weeks per year.";
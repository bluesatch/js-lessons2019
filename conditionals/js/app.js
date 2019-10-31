// conditionals

var foo = 5;
if (foo < 6) { // true
    console.log("I'm here!");
}

let bar = 30;
if (bar > 20) { // true
    console.log('Yo');
    
} else {
    console.log('Yo yo');
    
}

let baz = 15;
if (baz < 10) {
    console.log('less than 10');
} else if (baz < 20) {
    console.log('less than 20')
} else {
    console.log('greater than 20');
}

// PTO V1
// A simple program that calculates the PTO for a fixed rate of 5hrs per paycheck paid bi-weekly.

//less 5: 3, 5: 5, 10: 6.6

/* START
SET INT paychecksPerYear = 26
SET INT hrsPerPaycheck = 5
SET INT PTOperYearInHours = hrsPerPaycheck * paychecksPerYear
DISPLAY "This is a simple program that outputs how many hours you earn for PTO"
DISPLAY "You earn PTOperYearInHours hours per year"
END
*/

let yearsOnJob = 3;
let paychecksPerYear = 26;
let hoursPerPaycheck;
// let PTOperYearInHours = paychecksPerYear * hrsPerPaycheck;
// let message = 'This is a simple program that outputs how many hours you earn for PTO. You earn ' + PTOperYearInHours + ' hours per year.';

// if (yearsOnJob < 5) {
//     hrsPerPaycheck = 3;
// } else if (yearsOnJob >= 10) {
//     hrsPerPaycheck = 6.6;
// } else if (yearsOnJob >= 5) {
//     hrsPerPaycheck = 5;
// }

// 'else' is an optional block

if (yearsOnJob >= 10) {
    hoursPerPaycheck = 6.6;
} else if (yearsOnJob >= 5) {
    hoursPerPaycheck = 5;
} else {
    hoursPerPaycheck = 3;
}

let PTOperYearInHours = paychecksPerYear * hoursPerPaycheck;
let message ='You have earned ' + PTOperYearInHours + ' hours per year.';
console.log(message);

output = document.getElementById('message');
output.innerText = message;
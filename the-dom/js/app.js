let output = document.getElementById('output');

let ptoPerPaycheck = 4;

let paychecksPerYear = 24;

let ptoPerYear = ptoPerPaycheck * paychecksPerYear;

let ptoInDays = ptoPerYear / 8;

output.innerText = "You have " + ptoInDays + " days of PTO. Enjoy";

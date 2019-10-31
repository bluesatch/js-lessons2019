var coins = {
   pennies: 234,
   nickels: 510,
   dimes: 317,
   quarters: 53 
}

let pennyTotal = coins.pennies * .01;
let nickelTotal = coins.nickels * .05;
let dimeTotal = coins.dimes * .10;
let quarterTotal = coins.quarters * .25;
let bank = pennyTotal + nickelTotal + dimeTotal + quarterTotal;
let totalCoins = coins.pennies + coins.nickels + coins.dimes + coins.quarters;


// let pennyWrappers = Math.round(coins.pennies / 50);
// console.log(pennyWrappers);
// let pennyWrapperCapacity = 0;

let wrapper = 0;
let remainder = 0;
let total = 0;

for(let coin in coins) {
    if(coin === "pennies" || coin === "dimes") {
        if(coin === "pennies") {
            total = coins[coin] * .01;
            console.log(coin + ": $" + total.toFixed(2));
        } else {
            total = coins[coin] * .1;
            console.log(coin + ": $" + total.toFixed(2));
        }
        wrapper = Math.floor(coins[coin] / 50);
        remainder = coins[coin] % 50;
        
    } else if(coin === "nickels" || coin === "quarters") {
        if(coin === "nickels") {
            total = coins[coin] * .05;
            console.log(coin + ": $" + total.toFixed(2));
        } else {
            total = coins[coin] * .25;
            console.log(coin + ": $" + total.toFixed(2));
        }
        wrapper = Math.floor(coins[coin] / 40);
        remainder = coins[coin] % 40;
    }
    console.log(coin + " wrappers used: " + wrapper + " with " + remainder + " left over.")
}
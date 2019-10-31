const coinCounter =()=> {
    event.preventDefault();
    var coins = {
        pennies: document.getElementById('pennyCount').value,
        nickels: document.getElementById('nickelCount').value,
        dimes: document.getElementById('dimeCount').value,
        quarters: document.getElementById('quarterCount').value
    }

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

}
let penniesOutput = document.getElementById('penniesOutput');
let nickelsOutput = document.getElementById('nickelsOutput');
let dimesOutput = document.getElementById('dimesOutput');
let quartersOutput = document.getElementById('quartersOutput');

penniesOutput = 
}
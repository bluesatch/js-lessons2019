function coinSort() {
    event.preventDefault();
    var coins = {
        pennies: document.getElementById('pen').value,
        nickels: document.getElementById('nic').value,
        dimes: document.getElementById('dim').value,
        quarters: document.getElementById('qua').value
        
    }
    console.log(coins);

    let wrapper = 0;
    let remainder = 0;
    let pennyTotal = 0;
    let nickelTotal = 0;
    let dimeTotal = 0;
    let quarterTotal = 0;

    for(let coin in coins) {
        if(coin === "pennies" || coin === "dimes") {
            if(coin === "pennies") {
                pennyTotal = coins[coin] * .01;
                console.log(coin + ": $" + pennyTotal.toFixed(2));
            } else {
                dimeTotal = coins[coin] * .1;
                console.log(coin + ": $" + dimeTotal.toFixed(2));
            }
            wrapper = Math.floor(coins[coin] / 50);
            remainder = coins[coin] % 50;
            
        } else if(coin === "nickels" || coin === "quarters") {
            if(coin === "nickels") {
                nickelTotal = coins[coin] * .05;
                console.log(coin + ": $" + nickelTotal.toFixed(2));
            } else {
                quarterTotal = coins[coin] * .25;
                console.log(coin + ": $" + quarterTotal.toFixed(2));
            }
            wrapper = Math.floor(coins[coin] / 40);
            remainder = coins[coin] % 40;
        }
    };
    var grandtotal = pennyTotal + nickelTotal + dimeTotal + quarterTotal;

    console.log('Your grand total is $' + grandtotal.toFixed(2));

    var penTotal = document.getElementById('penTotal');
    var nicTotal = document.getElementById('nicTotal');
    var dimTotal = document.getElementById('dimTotal');
    var quaTotal = document.getElementById('quaTotal');

    penTotal.innerText = pennyTotal.toFixed(2);
    nicTotal.innerText = nickelTotal.toFixed(2);
    dimTotal.innerText = dimeTotal.toFixed(2);
    quaTotal.innerText = quarterTotal.toFixed(2);

    var grand = document.getElementById('grand');
    grand.innerText = grandtotal.toFixed(2);

}

// coinSort(273, 10, 62, 27);
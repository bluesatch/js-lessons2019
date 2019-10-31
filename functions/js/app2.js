function coinSort(p = 0, n = 0, d = 0, q = 0) {
    var coins = {
        pennies: p,
        nickels: n,
        dimes: d,
        quarters: q 
    }

    console.log(coins);

    for(let coin in coins) {
        console.log(coins[coin]);
    }

}



coinSort(234, 300, 500, 64);
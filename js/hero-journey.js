var hero;
var heroHealth = 100;
var mana = 60;
var heroEnergy = 100;

var enemy1Health = 50;
var enemy2Health = 50;
var enemy3Health = 50;

var healer;

var healingPotion = 10;
var rest;

var spider;
var spiderHealth = 250;
var spiderDamage = 30;
var swordDamage = 30;
var swordCost = 10;
var manaCost = 20;
var dodge = 20;

var eldritch = 20;

var goldCoins;

console.log("Hero's health: " + heroHealth);
console.log("Hero's mana: " + mana);
console.log("Hero's energy: " + heroEnergy);



// fight enemies

heroHealth-= 80;
mana-= 60;
heroEnergy-= 60;
goldCoins = 30;


var newEnemy1Health = enemy1Health - 50;
var newEnemy2Health = enemy2Health - 50;
var newEnemy3Health = enemy3Health - 50;

var message1 = "After battling three enemies, the hero's health is " + heroHealth + ", mana of " + mana + ", and energy of " + heroEnergy + ". Enemies 1, 2, and 3 now have healths of " + newEnemy1Health + ", " + newEnemy2Health + ", and " + newEnemy3Health + ". The hero has earned " + goldCoins + " gold coins."

console.log(message1);
var firstMessage = document.getElementById('message1');
firstMessage.innerText = message1;

// meets healer

goldCoins-= healingPotion * 2;
heroHealth+=80; // expect 100

// after rest

mana+= 60;
heroEnergy+= 60;
var message2 = "The hero meets Janaeria, a mystical healer who sells a healing potion for " + healingPotion + " gold coins. Now the hero has " + goldCoins + " gold coins. After a 3-hour rest, the hero now has full mana of " + mana + ", and energy of " + heroEnergy + ". FULL STRENGTH!"

console.log(message2);
var secondMessage = document.getElementById('message2');
secondMessage.innerText = message2;

// battle spider
// first attack
spiderHealth-=swordDamage;
heroEnergy-=swordCost;
spiderHealth-=eldritch;
mana-=manaCost;
// console.log(spiderHealth);
// console.log(heroEnergy);
// console.log(mana);

var firstAttack = "The hero meets Ja'Rachnoid, a giant evil spider. Our hero attacks first. Using a sword, the hero gashes the spider and uses an eldritch blast. The sword takes away " + swordDamage + " points of damage. the eldritch blast took away " + eldritch + " points of damage. However, the sword used 10 points of energy so the hero's energy is now at " + heroEnergy + " points and the eldritch cost our hero 20 points of mana so now mana is at " + mana + "."; 

console.log(firstAttack);
var thirdMessage = document.getElementById('firstAttack');
thirdMessage.innerText = firstAttack;

// spiderAttack1

heroHealth-= spiderDamage;

var spiderAttack1 = "Ja'Rachnoid attacks and successfully hits the hero. The hero's health is now at " + heroHealth + ". Be careful. The hero's energy needs to be at least 10 to defeat the nefarious Ja'Rachnoid.";

console.log(spiderAttack1);
var fourthMessage = document.getElementById('spiderAttack1');
fourthMessage.innerText = spiderAttack1;

// second attack

spiderHealth-= swordDamage;
spiderHealth-=eldritch
mana-= manaCost;
heroEnergy-=swordCost;

var secondAttack = "The hero strikes again! After using the sword and eldritch, Ja'Rachnoid's health is at " + spiderHealth +". However, the hero's energy is now at " + heroEnergy + ", and mana is at " + mana + ".";

console.log(secondAttack);
var fifthMessage = document.getElementById('secondAttack');
fifthMessage.innerText = secondAttack;

// spiderAttack2

heroEnergy-= dodge;

var spiderAttack2 = "Ja'Rachnoid shoots a venomous web from it's tiny mouth. Fortunately, the hero dodges it. However, that daring move cost the hero " + dodge + " points of energy so now our hero is at " + heroEnergy + ". Will that be enough to swing the sword?";

console.log(spiderAttack2);
var sixthMessage = document.getElementById('spiderAttack2');
sixthMessage.innerText = spiderAttack2;

// finalAttack

heroEnergy-= swordCost * 3;
spiderHealth-=(swordDamage * 3) + eldritch;
mana-=manaCost;

// console.log(spiderHealth);
// console.log(heroEnergy);
// console.log(mana);

var finalAttack = "Weak and knowing that this might be the end, our hero decides to strike once and for all and leave Ja'Rachnoid to the fate of the blade and eldritch blast. After striking the spider with three blows and one final elritch blast, Ja'Rachnoid now has a health of " + spiderHealth + ". Unfortunately, the final attack cost the hero " + (swordCost * 3) + " and " + manaCost + " mana. The hero is left with " + heroEnergy + " energy and " + mana + " mana. Our hero fought a valiant fight.";
console.log(finalAttack);
var seventhMessage = document.getElementById('finalAttack');
seventhMessage.innerText = finalAttack;

heroEnergy = 100;
heroHealth = 100;
mana = 60;
spiderHealth-=(eldritch * 2);


var redeem = "But wait!! Our hero remembers the purchase from Janaeria. The hero drinks the potion and now energy is back to " + heroEnergy + ", health is at " + heroHealth + ", and mana at " + mana + ". Ja'Rachnoid attacks our hero one more time and misses. The hero fires two eldritch blasts at Ja'Rachnoid and now his health is at " + spiderHealth + ". Now defeated, Ja'Rachnoids carcass is left to the fate of the feasting Fabiants.";

console.log(redeem);
var eigthMessage = document.getElementById('redeem');
eigthMessage.innerText = redeem;





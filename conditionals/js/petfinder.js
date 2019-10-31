let pet;
let numOfLegs;
let hasScales;
let doesSwim;
let feathers;
let sleepsInCage;
let longEars;
let isMoody;

// version 1

if (numOfLegs == 4) {
    if (sleepsInCage == true) {
        if (longEars == true) {
            pet = "rabbit";
        } else {
            pet = "hamster";
        }
    } else if (isMoody == true) {
        pet = "cat";
    } else {
        pet = "dog";
    }
} else if (hasScales == true) {
    if (doesSwim == true) {
        pet = "fish";
    } else {
        pet = "snake";
    } 
} else if (feathers == true) {
    pet = "parrot";
    } else {
        pet = "spider";
    }

// version 2

numOfLegs = parseInt(prompt('How many legs do you want your animal to have?'));
if (numOfLegs == 4) { //hamster, rabbit, dog, cat
    sleepsInCage = prompt('Do you want a pet that sleeps in a cage?');
    if (sleepsInCage == "yes" || sleepsInCage == "Yes") { //hamster or rabbit
        longEars = prompt('Do you want your pet to have long ears?');
        if (longEars == "yes" || longEars == "Yes") {
            pet = "rabbit";
        }
        else {
            pet = "hamster";
        }
    } else {
        isMoody = prompt('Do you want a moody pet?');
        if (isMoody == "yes" || isMoody == "Yes") {
            pet = 'cat';
        } else {
            pet = 'dog';
        }
    }
} else {
    hasScales = prompt('Do you want a pet with scales?');
    if (hasScales == 'yes' || hasScales == 'Yes') { // fish or snake
        doesSwim = prompt('Do you want your pet to swim?');
        if (doesSwim == 'yes' || doesSwim == 'Yes'){
            pet = 'fish';
        } else {
            pet = 'snake';
        }
    } else {
        feathers = prompt('Do you want a pet with feathers?');
        if (feathers == 'yes' || feathers == 'Yes') {
            pet = 'parrot';
        } else {
            pet = 'spider';
        }
    }
}

console.log("Your pet is a " + pet + ".");
output = document.getElementById('output');
output.innerText = "Your pet is a " + pet + ".";
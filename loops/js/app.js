// Loops

// // for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// while loop
// var i = 0;
// while (i < 10) {
//     // do stuff
//     console.log(i);
//     i++;  
// }

// var notAgreed = false;
// while (!notAgreed) {
//     // do stuff
//     // show terms popup
//     //  click handler button
//     // set timer
//     // if click
//         // notAgreed = false
// }

// // do while

// let i = 0;
// do {
//     // do stuff at least once
//     console.log(i);
//     i++;
// } while (i < 15); // if true continue looping

// const volume = {
//     height: 5,
//     width: 6,
//     depth: 3,
//     getVolume: function() {
//         return this.width * this.height * this.depth;
//     }
// };

// console.log(volume.getVolume());

// var baz = {prop: 39};
// // create object
// function aFunction() {
//     return this.prop;
// }
// aFunction searches for the property "prop" in the object
// baz.boo = aFunction;
// // boo is a method that is assigned aFunction
// console.log(baz.boo());

// // let's try this with a new object

// var foo = {prop: "heloo"};

// foo.bar = aFunction;

// console.log(foo.bar());

for (let i = 0; i < 10; i++) {

    for (let j = 10; j > 0; j--) {

        console.log(j - i);
        if (j-i == 4) {
            console.log("4 yo!");
        }
    }
    
    
}

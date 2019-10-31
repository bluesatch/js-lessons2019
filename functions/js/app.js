// let output = document.getElementById('output');
// // function name(param1, param2) {
//     // do stuff
// //}

// // function name(first, last) {

// //     last = last ? last : "Page" //ternary operator; acts like an if/else
// //     console.log(first, last);
// //     let output = document.getElementById('output');
// //     output.innerText = first + " " + last;
// // }

// // name('Herbert', 'Brown');

// // function name(first = "Satchel", last = "Page") { //Setting a default

// //     console.log(first, last);
// //     let output = document.getElementById('output');
// //     output.innerText = first + " " + last;
// // }

// // function scope(param1 = 'Hello', param2 = ' World') {
// //     var newVar = 'hola';
// //     let newLet = ' mundo';
// //     const newConst = ' !';

// //     console.log(param1, param2);
    
// //     output.innerText = param1 + " " + param2;
// // }

// // scope();

// // console.log(newVar);
// // console.log(newLet);
// // console.log(newConst);

// // function sum(num1, num2) {
    
// //     return num1 + num2;
// // }

// // var add = sum(1, 2);
// // add += 3;

// // output.innerText = add;

// var number = 2;

// function multiplyByNum(num1, num) {
//     return num1 * num;
// }

// var result = multiplyByNum(5, number);
// console.log(result);

// // functional expressions

// var divide = function divideByNumber(num1, num2) {
//     return num1 / num2;
// }

// var result2 = divide(10, 5);
// console.log(result2);

// // var hotel = {
// //     rooms: 40,
// //     booked: 25,
// //     checkAvailability: function() {
// //         return this.rooms - this.booked;
// //     }
// // }

// // console.log(hotel.checkAvailability());

// // var hotel = new Object();

// // hotel.name = 'Quay';
// // hotel.rooms = 40;
// // hotel.booked = 25;
// // hotel.checkAvailability = function() {
// //     return this.rooms - this.booked;
// // };

// function Hotel(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function() {
//         return this.rooms - this.booked;
//     }
// };

// var quayHotel = new Hotel('Quay', 40, 25);
// quayHotel.booked+= 1;

// console.log(quayHotel.checkAvailability());

// function calc(num1, num2, type = 'add') {
//     let result = 0;
//     switch (type) {
//         case 'add':
//             result = num1 + num2;
//             break;
        
//         case 'subtract':
//             result = num1 - num2;
//             break

//         case 'multiply':
//             result = num1 * num2;
//             break

//         case 'divide':
//             result = num1 / num2;
//             break
    
//         default:
//             break;
//     }

//     return result;
// }

// var result = calc(1, 2);

// console.log(result);

// result = calc(1, 2, 'subtract');

// console.log(result);


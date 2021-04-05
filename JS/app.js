'use strict';
let yourName = prompt('What\'s your name ?');
let yourAge = prompt('Is your age is greater than 12!');
var feBack = prompt('Are you a student ?');
let question = prompt('Do you know me ?');
let movie1 = prompt('Is your favorite movie \, anime ?');
let kids = prompt(' Do you have kids ?');

alert ('your name is: ' + yourName + ' \,  and your age is: ' + yourAge +' \, your answer abut if you a student was: ' +feBack);

console.log(movie1);
console.log(kids);

movie1= movie1.toLowerCase();
kids= kids.toUpperCase();

console.log(movie1);
console.log(kids);

switch(movie1){
    case 'yes' :
    case 'y' :
        alert('I  will show you some anime movies or cartons');
        break;
    case 'no' :
    case 'n' :
        alert('I will show you some action films');
        break;
    default:
        alert('Welcome to my website');
}
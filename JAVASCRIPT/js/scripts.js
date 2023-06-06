//alert('Hello Javascript');

/**
this is multi line 
comment.
*/

//console.log('Hello Javascript');

//console.warn('This is a warning');

//console.error('This is an error');

document.getElementById('myjs').innerHTML = 'Hello Javascript <h1 id="test">This is heading</h1>';

document.getElementById('test').innerHTML = 'New Javascript';

/*
// var - let const
let myName = 8;

console.log(myName);

myName = "New Name";

console.log(myName);

const x = 5;
console.log(x);

x = 6;
console.log(x);
*/

//Data Types
/*
//Strings
let y = "This is a long text";
console.log(y);

console.log(typeof y);

//numbers
let z = 5;
console.log(z);
console.log(typeof z);

//boolean
let x = false;
console.log(x);
console.log(typeof x);

//null
let x = null;
console.log(x);
console.log(typeof x);

//undefined

let x = undefined;
console.log(x);
console.log(typeof x);

*/

const name = "Sadip Bhattarai";

const age = 25;

const myDetails = "My name is " + name + ". My age is "+ age;

console.log(myDetails);

const myDetailsNew = `My name is ${name}. My age is ${age}`;

console.log(myDetailsNew);

// window.print();

//arithmetic expression , addition, substraction, multiplication
/*
let x = 5;
let y = 10;
let z = x+y;
console.log(z);
document.getElementById('test').innerHTML = z;


let x = parseInt("5");
let y = 10;
let z = x+y;
console.log(z);
document.getElementById('test').innerHTML = z;

*/

const myString = 'This is a string with some words';

console.log(myString);

//length
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
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

// const name = "Sadip Bhattarai";

// const age = 25;

// const myDetails = "My name is " + name + ". My age is "+ age;

// console.log(myDetails);

// const myDetailsNew = `My name is ${name}. My age is ${age}`;

// console.log(myDetailsNew);

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

// const myString = 'This is a string with some words';

// console.log(myString);

//length
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// let subStr = myString.substring(0,4);
// console.log(subStr.toUpperCase());

// let sliceStr = myString.slice(0,4);
// console.log(subStr);

// //split
// let splitStr = myString.split(' ');
// console.log(splitStr);

// console.log(splitStr[4]);

// unary arithmetic
// let x = 5;
// let y = 10;

// console.log(x + y);

// console.log( x++ );

// console.log(x);

// x = 5;
// console.log( x-- );

// console.log(x,'substraction');

// let z = 23;
// console.log(z*5);


// console.log(z/5);
// console.log( z%5 );

//comparisons
// let a = 10;
// let b = 20;

// // < > == !=

// console.log( a > b );

// console.log( a < b );

// console.log( a == b );

// console.log( a != b );

// console.log("string comparison");
// // string comparison
// let c = 'hello';
// let d = 'world';

// console.log( c > d );
// console.log( c < d );
// console.log( c == d );
// console.log( c != d );

// console.log("different types comparison")
// let x = "2";
// let y = 2;

// console.log(x > y);
// console.log(x < y);
// console.log(x == y);
// console.log(x != y);


// console.log( x === y);

// console.log( x !== y);

// let z = 4;
// if( typeof z != 'undefined' ){
//     console.log( z );
// }else {
//     console.log("z is not defined");
// }


//arrays
// let difArr = new Array(1, 2, 'test', 3, 4);

// // console.log(difArr);

// let arr = [1,2,3,4,5];

// // arr[3] = 'test';

// arr.push('adds at last');
// console.log(arr);

// // console.log(JSON.stringify(arr));

// arr.unshift('at first');

// console.log(arr);

// // console.log(arr[0]);

// // console.log(arr.length);

// arr.pop();
// console.log(arr);

//loops

// for loop
for (let i = 0; i < 10; i++ ){
    console.log('This is at '+ i);
}

let difArr = new Array(1, 2, 'test', 3, 4);

difArr.forEach(function(value,index){
    console.log('THis is at index '+ index + ' and value '+ value);
});

// while loop
let i = 1;
let myStr = '';
while( i < 11 ){
    let strText = 'This is '+ i;
    console.log(strText);
    myStr += strText;
    myStr += '<br/>';
    i++;
}
console.log(myStr);

document.getElementById('test').innerHTML = myStr;
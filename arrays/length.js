'use strict';


const arr = [];

arr[21] = 4;

console.log(arr.length);
delete arr[21];


console.log(arr.length);
console.log(arr);

arr.length = 5;

console.log(arr.length);
console.log(arr);

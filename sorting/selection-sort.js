'use strict';

const util = require('./util');

const swap = util.swap;
const array = util.unsortedArray;
const len = array.length;

for (let i = 0; i < len; i++ ) {
    let minIndex = i;
    for(let j = i; j < len; j++ ) {
        if ( array[j] < array[minIndex]) {
            minIndex = j;
        }
    }
    swap(i, minIndex, array);
}

console.log("sorted array is ", array);
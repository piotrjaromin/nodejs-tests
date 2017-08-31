'use strict';

const util = require('./util');

const swap = util.swap;
const array = util.unsortedArray;
const len = array.length;

for (let i = 1; i < len; i ++ ) {

    for(let j = 0; j < len - i; j++ ) {

        if ( array[j] > array[j + 1]) {
            swap(j,j + 1, array);
        }
    }

}

console.log("sorted array is ", array);
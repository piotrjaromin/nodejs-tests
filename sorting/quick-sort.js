'use strict';

const util = require('./util');

const swap = util.swap;
const array = util.unsortedArray;

function quickSort(left, right) {
    
    if ( right <= left ) { return; }

    let wall = left;
    let pivot = right;

    for( let i = wall; i < pivot; i++ ) {
        if ( array[i] < array[pivot] ) {
            swap(wall, i, array);
            wall++;
        }
    }

    swap(wall, pivot, array);
    quickSort(left, wall - 1);
    quickSort(wall + 1, right);
}

quickSort(0, array.length - 1);

console.log("Sorted Array is ", array);
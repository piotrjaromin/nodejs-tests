'use strict';

const util = require('./util');

const swap = util.swap;
const array = util.unsortedArray;

function mergeSort(begin, end) {

    if ( begin < end ) {
        const middle = Math.floor( (begin + end) / 2);

        mergeSort(begin, middle);
        mergeSort(middle + 1, end);
        merge(begin, middle, end);
    }
}

function merge(begin, middle, end) {
    const tempArr =[];
    for(let i = begin; i <= end; i++) { tempArr[i] = array[i]; }
    let i = begin, j = middle + 1, index = begin;

    while ( i <= middle && j <= end ) {
        if ( tempArr[i] < tempArr[j] ) {
            array[index] = tempArr[i++];
        }
        else {
            array[index] = tempArr[j++];
        }
        index++;
    }

    //copy remaining elements
    while ( i <= middle) array[index++]=tempArr[i++];
    while ( j <= end) array[index++]=tempArr[j++];
}

mergeSort(0, array.length - 1);
console.log("Sorted array is ", array);
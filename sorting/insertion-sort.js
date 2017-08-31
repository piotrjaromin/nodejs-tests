'use strict';

const util = require('./util');

const insert = util.insert;
const remove = util.remove;
const array = util.unsortedArray;
const len = array.length;

//assume first element is already sorted
for (let i = 1; i < len; i++ ) {
    
    const currentValue = remove(i, array);;
  
    let insertIndex = 0;
    while( currentValue > array[insertIndex] && insertIndex < i ) {
        insertIndex++;
    }

    insert(insertIndex, currentValue, array);
}

console.log("sorted array is ", array);
'use strict';


const unsortedArray = [5, 1, 3, 3, 2, 10, 4, 6, 20, 8];

function swap(index1, index2, array) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function insert(index, item, array) {
    array.splice(index, 0, item)
}

function remove(index, array) {
    return array.splice(index, 1)[0];
}

module.exports.unsortedArray = unsortedArray;
module.exports.swap = swap;
module.exports.insert = insert;
module.exports.remove = remove;
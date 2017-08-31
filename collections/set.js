'use strict';

const s = new Set([1,2,55,55,20, 12,2]);
s.forEach( val => {
    console.log(val);
});

// for (let val in s) {
for (let val of s) {
    console.log(val);
}


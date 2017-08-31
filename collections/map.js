'use strict';

//maps
//sets
//weak version
//for in
//for of
//objects as keys

const m = new Map();
console.log(typeof m);

const obj1 = {};
const obj2 = {};

m.set(obj1, 3);
m.set(obj2, 13);

m.forEach( (val, key) => {
    console.log(key, " = ", val);
});
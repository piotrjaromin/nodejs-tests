'use strict';

class Foo {
    constructor() {
        this.a = 4;
        this.b = 5;
    }
}


class Bar extends Foo {
    constructor() {
        super();
        this.c = 6;
        this.d = 7;
    }
}


const b = new Bar();

for (let k in b) {
    console.log(k);
}

console.log("===");

const obj = {
    [Symbol.iterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return {
                        value: this.i++,
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
}

for (let val of obj) {
    console.log(val);
}


/// for in / of

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
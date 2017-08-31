'use strict';


const foo = {};

const bar = {
    key : "value"
};

//will stringify bar to [object Object]
foo[bar] = bar;

const baz = {
    key : "value",
    toString: function() {
        return "Some awesome value";
    }
};

//will stringify bar to "Some awesome value"
foo[baz] = baz;
console.log(foo);
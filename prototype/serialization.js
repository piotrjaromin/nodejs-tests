'use strict';

const Foo = function () { 
    this.bar = "is serialized";
};

Foo.prototype.baz = "is NOT serialized";
const f = new Foo();

console.log(f.prototypeProperties); // "is NOT serialized"
console.log(JSON.stringify(f)); 
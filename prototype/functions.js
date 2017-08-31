'use strict';

function Foo() {
    this.baz = function() {
        console.log("I'm baz");
    }
}

Foo.prototype.bar = function() {
    console.log("here I'm am - bar");
}


const f = new Foo();

f.baz();
f.bar();


for (var x in f) {
    console.log(x);
}
